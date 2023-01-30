import {Bot, Segment, SegmentElem, Sendable} from "./bot";
import {Zhin} from "./zhin";
import {Argv} from "./argv";
import Element from './element'
import {Middleware} from "./middleware";
import {Prompt} from "./prompt";
import {Dict} from "./types";

export type FunctionPayloadWithSessionObj<E extends (...args: any[]) => any> = E extends (...args: infer R) => any ? ParametersToObj<R> : unknown
export type ParametersToObj<A extends any[]> = A extends [infer R, ...infer L] ? R & R extends object ? R & { args: L } : { args: [R, ...L] } : Dict

export interface Session<P extends keyof Zhin.Adapters = keyof Zhin.Adapters,E extends keyof Zhin.BotEventMaps[P] = keyof Zhin.BotEventMaps[P]> {
    protocol: P,
    type?: string
    user_id?: string | number
    group_id?: string | number
    discuss_id?: string | number
    channel_id?: string | number
    guild_id?: string | number
    detail_type?: string
    app: Zhin
    prompt: Prompt
    segments: SegmentElem[]
    content:string
    adapter: Zhin.Adapters[P],
    bot: Zhin.Bots[P]
    event: E
}

export type PayloadWithSession<P extends keyof Zhin.Adapters = keyof Zhin.Adapters,E extends keyof Zhin.BotEventMaps[P] = keyof Zhin.BotEventMaps[P]> =
    Session<P, E>
    & FunctionPayloadWithSessionObj<Zhin.BotEventMaps[P][E]>

export class Session<P extends keyof Zhin.Adapters = keyof Zhin.Adapters,E extends keyof Zhin.BotEventMaps[P] = keyof Zhin.BotEventMaps[P]> {
    constructor(public adapter: Zhin.Adapters[P], self_id, public event: E, obj: FunctionPayloadWithSessionObj<Zhin.BotEventMaps[P][E]>) {
        this.protocol = adapter.protocol as any
        this.app = adapter.app
        this.event = event
        this.bot = adapter.bots.get(self_id) as any
        Object.assign(this, obj)
        this.content=Segment.stringify(this.segments)
        this.prompt = new Prompt(this.bot, this as any, this.app.options.delay.timeout || 6000)
    }

    middleware(middleware: Middleware<Session>, timeout: number = this.app.options.delay.prompt) {
        return new Promise<void | boolean | Sendable>(resolve => {
            const dispose = this.app.middleware(async (session, next) => {
                if (Bot.getFullTargetId(this as any) !== Bot.getFullTargetId(session)) await next()
                dispose()
                clearTimeout(timer)
                resolve(await middleware(session, next))
            }, true)
            const timer = setTimeout(() => {
                dispose()
                resolve()
            }, timeout)
        })
    }
    isAtMe(){
        return this.segments.length && this.segments[0].type==='mention' && String(this.segments[0].data['qq'])===String(this.bot.self_id)
    }
    async execute(argv: SegmentElem[] | Argv = this.segments) {
        if (Array.isArray(argv)) {
            let data=Argv.parse<P,E>(argv,this)
            if(!data) return
            argv=data
        }
        if(argv.atMe && !argv.name){
            await this.reply('嗯哼？')
            await this.middleware((session)=>{
                let data=Argv.parse(session.segments,this)
                if(!data) return
                argv=data
            })
        }
        const command = this.app.findCommand(argv)
        if (!command) return
        const result = await command.execute(argv)
        if (!result || typeof result === 'boolean') return
        if (Array.isArray(result) && !result.length) return
        return result
    }
    async transform(elements: Element[]): Promise<Element[]> {
        return await Element.transformAsync(elements, this.app.getSupportComponents(this as any), this as any)
    }

    toJSON() {
        return Object.fromEntries(
            Object.keys(this).filter(key => {
                return !['app', 'adapter', 'bot'].includes(key) && typeof this[key] !== 'function'
            }).map(key=>[key,this[key]])
        )
    }

    async reply(message: Sendable) {
        return this.bot.reply(this as any, message, this.bot.options.quote_self)
    }
}