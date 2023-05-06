import{_ as e,c as t,o as i,O as a}from"./chunks/framework.621e5595.js";const p=JSON.parse('{"title":"上下文(Context)","description":"","frontmatter":{},"headers":[],"relativePath":"api/context.md","filePath":"api/context.md","lastUpdated":1677942007000}'),n={name:"api/context.md"},s=a('<h1 id="上下文-context" tabindex="-1">上下文(Context) <a class="header-anchor" href="#上下文-context" aria-label="Permalink to &quot;上下文(Context)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>继承自 EventEmitter</p></div><h2 id="属性-attrs" tabindex="-1">属性(Attrs) <a class="header-anchor" href="#属性-attrs" aria-label="Permalink to &quot;属性(Attrs)&quot;">​</a></h2><h3 id="plugins-map-string-plugin" tabindex="-1">plugins:Map&lt;string,Plugin&gt; <a class="header-anchor" href="#plugins-map-string-plugin" aria-label="Permalink to &quot;plugins:Map&lt;string,Plugin&gt;&quot;">​</a></h3><ul><li><strong>当前</strong>上下文安装的插件Map</li></ul><h3 id="middlewares-middleware" tabindex="-1">middlewares:Middleware[] <a class="header-anchor" href="#middlewares-middleware" aria-label="Permalink to &quot;middlewares:Middleware[]&quot;">​</a></h3><ul><li><strong>当前</strong>上下文产生的所有中间件</li></ul><h3 id="components-record-string-component" tabindex="-1">components:Record&lt;string,Component&gt; <a class="header-anchor" href="#components-record-string-component" aria-label="Permalink to &quot;components:Record&lt;string,Component&gt;&quot;">​</a></h3><ul><li><strong>当前</strong>上下文产生的组件键值对</li></ul><h3 id="commands-map-string-command" tabindex="-1">commands:Map&lt;string,Command&gt; <a class="header-anchor" href="#commands-map-string-command" aria-label="Permalink to &quot;commands:Map&lt;string,Command&gt;&quot;">​</a></h3><ul><li><strong>当前</strong>上下文产生的指令Map</li></ul><h3 id="disposes-dispose" tabindex="-1">disposes:Dispose[] <a class="header-anchor" href="#disposes-dispose" aria-label="Permalink to &quot;disposes:Dispose[]&quot;">​</a></h3><ul><li>卸载<strong>当前</strong>上下文时，需要执行的函数列表</li></ul><h3 id="get-pluginlist-plugin" tabindex="-1">get pluginList:Plugin[] <a class="header-anchor" href="#get-pluginlist-plugin" aria-label="Permalink to &quot;get pluginList:Plugin[]&quot;">​</a></h3><ul><li>获取<strong>当前</strong>上下文及<strong>其下级</strong>上下文安装的插件列表</li></ul><h3 id="get-middlewarelist-middleware" tabindex="-1">get middlewareList:Middleware[] <a class="header-anchor" href="#get-middlewarelist-middleware" aria-label="Permalink to &quot;get middlewareList:Middleware[]&quot;">​</a></h3><ul><li>获取<strong>当前</strong>上下文及<strong>其下级</strong>上下文产生的的中间件列表</li></ul><h3 id="get-commandlist-command" tabindex="-1">get commandList:Command[] <a class="header-anchor" href="#get-commandlist-command" aria-label="Permalink to &quot;get commandList:Command[]&quot;">​</a></h3><ul><li>获取<strong>当前</strong>上下文及<strong>其下级</strong>上下文产生的的指令列表</li></ul><h3 id="context-childkey-context" tabindex="-1">[Context.childKey]:Context[] <a class="header-anchor" href="#context-childkey-context" aria-label="Permalink to &quot;[Context.childKey]:Context[]&quot;">​</a></h3><ul><li><strong>当前</strong>上下文产生的<strong>子</strong>上下文列表</li></ul><h3 id="context-plugin-plugin" tabindex="-1">[Context.plugin]:Plugin <a class="header-anchor" href="#context-plugin-plugin" aria-label="Permalink to &quot;[Context.plugin]:Plugin&quot;">​</a></h3><ul><li>产生<strong>当前</strong>上下文的插件</li></ul><h3 id="keyof-zhin-services-service" tabindex="-1">[keyof Zhin.Services]:Service <a class="header-anchor" href="#keyof-zhin-services-service" aria-label="Permalink to &quot;[keyof Zhin.Services]:Service&quot;">​</a></h3><ul><li>知音安装的服务</li></ul><h2 id="构造函数-constructor-public-parent-context-filter-filter" tabindex="-1">构造函数 constructor(public parent:Context,filter?:Filter) <a class="header-anchor" href="#构造函数-constructor-public-parent-context-filter-filter" aria-label="Permalink to &quot;构造函数 constructor(public parent:Context,filter?:Filter)&quot;">​</a></h2><h2 id="方法-methods" tabindex="-1">方法(Methods) <a class="header-anchor" href="#方法-methods" aria-label="Permalink to &quot;方法(Methods)&quot;">​</a></h2><h3 id="extend-ctx-context-context" tabindex="-1">extend(ctx:Context):Context <a class="header-anchor" href="#extend-ctx-context-context" aria-label="Permalink to &quot;extend(ctx:Context):Context&quot;">​</a></h3><ul><li>将<strong>其他</strong>上下文继承到<strong>当前</strong>上下文</li></ul><h3 id="pick-key-k-values-session-k-context" tabindex="-1">pick(key: K, ...values: Session[K][]):Context <a class="header-anchor" href="#pick-key-k-values-session-k-context" aria-label="Permalink to &quot;pick(key: K, ...values: Session[K][]):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文仅在传入会话<code>session[key]</code>的值存在于<code>values</code>中并且满足构造函数的filter时有效</li></ul><h3 id="union-filter-filter-context" tabindex="-1">union(filter:Filter):Context <a class="header-anchor" href="#union-filter-filter-context" aria-label="Permalink to &quot;union(filter:Filter):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文仅在满足传入filter并且满足构造函数的filter时有效</li></ul><h3 id="except-filter-filter-context" tabindex="-1">except(filter:Filter):Context <a class="header-anchor" href="#except-filter-filter-context" aria-label="Permalink to &quot;except(filter:Filter):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文仅在不满足传入filter并且满足构造函数的filter时有效</li></ul><h3 id="user-user-ids-string-number-context" tabindex="-1">user(...user_ids:(string|number)[]):Context <a class="header-anchor" href="#user-user-ids-string-number-context" aria-label="Permalink to &quot;user(...user_ids:(string|number)[]):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文传入会话<code>session.user_id</code>的值存在于<code>user_ids</code>中并且满足构造函数的filter时有效</li></ul><h3 id="group-group-ids-string-number-context" tabindex="-1">group(...group_ids:(string|number)[]):Context <a class="header-anchor" href="#group-group-ids-string-number-context" aria-label="Permalink to &quot;group(...group_ids:(string|number)[]):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文传入会话<code>session.group_id</code>的值存在于<code>group_ids</code>中并且满足构造函数的filter时有效</li></ul><h3 id="discuss-discuss-ids-string-number-context" tabindex="-1">discuss(...discuss_ids:(string|number)[]):Context <a class="header-anchor" href="#discuss-discuss-ids-string-number-context" aria-label="Permalink to &quot;discuss(...discuss_ids:(string|number)[]):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文传入会话<code>session.discuss_id</code>的值存在于<code>discuss_ids</code>中并且满足构造函数的filter时有效</li></ul><h3 id="guild-guild-ids-string-context" tabindex="-1">guild(...guild_ids:string[]):Context <a class="header-anchor" href="#guild-guild-ids-string-context" aria-label="Permalink to &quot;guild(...guild_ids:string[]):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文传入会话<code>session.guild_id</code>的值存在于<code>guild_ids</code>中并且满足构造函数的filter时有效</li></ul><h3 id="channel-channel-ids-string-context" tabindex="-1">channel(...channel_ids:string[]):Context <a class="header-anchor" href="#channel-channel-ids-string-context" aria-label="Permalink to &quot;channel(...channel_ids:string[]):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文传入会话<code>session.channel_id</code>的值存在于<code>channel_ids</code>中并且满足构造函数的filter时有效</li></ul><h3 id="platform-platforms-keyof-zhin-adapters-context" tabindex="-1">platform(...platforms:(keyof Zhin.Adapters)[]):Context <a class="header-anchor" href="#platform-platforms-keyof-zhin-adapters-context" aria-label="Permalink to &quot;platform(...platforms:(keyof Zhin.Adapters)[]):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文传入会话<code>session.platform</code>的值存在于<code>platforms</code>中并且满足构造函数的filter时有效</li></ul><h3 id="private-user-ids-string-number-context" tabindex="-1">private(...user_ids:(string|number)[]):Context <a class="header-anchor" href="#private-user-ids-string-number-context" aria-label="Permalink to &quot;private(...user_ids:(string|number)[]):Context&quot;">​</a></h3><ul><li>产生一个新的上下文，该上下文传入会话<code>session.user_id</code>的值存在于<code>user_ids</code>中并且会话事件为私聊并且满足构造函数的filter时有效</li></ul><h3 id="getmatchedcontextlist-session-session-context" tabindex="-1">getMatchedContextList(session:Session):Context[] <a class="header-anchor" href="#getmatchedcontextlist-session-session-context" aria-label="Permalink to &quot;getMatchedContextList(session:Session):Context[]&quot;">​</a></h3><ul><li>根据传入会话获取匹配到的上下文列表</li></ul><h3 id="plugin-entry-string-plugin-install-setup-boolean-this-plugin" tabindex="-1">plugin(entry:string:Plugin.Install,setup?:boolean):this|Plugin <a class="header-anchor" href="#plugin-entry-string-plugin-install-setup-boolean-this-plugin" aria-label="Permalink to &quot;plugin(entry:string:Plugin.Install,setup?:boolean):this|Plugin&quot;">​</a></h3><ul><li>传入string时，若当前上下文已安装name为entry的插件，则返回插件，否则，将尝试从已加载的模块中加载插件</li><li>传入Plugin.Install时，将在当前上下文安装对应插件</li></ul><h3 id="use-plugin-plugin-this" tabindex="-1">use(plugin:Plugin):this <a class="header-anchor" href="#use-plugin-plugin-this" aria-label="Permalink to &quot;use(plugin:Plugin):this&quot;">​</a></h3><ul><li>根据Plugin.Install在当前上下文安装对应插件</li></ul><h3 id="middleware-middleware-middleware-this" tabindex="-1">middleware（middleware:Middleware):this <a class="header-anchor" href="#middleware-middleware-middleware-this" aria-label="Permalink to &quot;middleware（middleware:Middleware):this&quot;">​</a></h3><ul><li>为当前上下文添加一个中间件</li></ul><h3 id="command-def-string-trigger-string-command" tabindex="-1">command（def:string,trigger?:string):Command <a class="header-anchor" href="#command-def-string-trigger-string-command" aria-label="Permalink to &quot;command（def:string,trigger?:string):Command&quot;">​</a></h3><ul><li>为当前上下文添加一个指令，并返回指令本身</li></ul><h3 id="dispatch-session-session-void" tabindex="-1">dispatch（session:Session):void <a class="header-anchor" href="#dispatch-session-session-void" aria-label="Permalink to &quot;dispatch（session:Session):void&quot;">​</a></h3><ul><li>如果会话满足当前上下文的filter，则将session</li></ul>',61),l=[s];function o(r,d,u,c,h,g){return i(),t("div",null,l)}const x=e(n,[["render",o]]);export{p as __pageData,x as default};
