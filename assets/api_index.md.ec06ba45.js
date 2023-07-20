import{_ as a,o as e,c as i,U as t}from"./chunks/framework.587922bd.js";const f=JSON.parse('{"title":"核心模块","description":"","frontmatter":{},"headers":[],"relativePath":"api/index.md","filePath":"api/index.md","lastUpdated":1689841244000}'),r={name:"api/index.md"},l=t('<h1 id="核心模块" tabindex="-1">核心模块 <a class="header-anchor" href="#核心模块" aria-label="Permalink to &quot;核心模块&quot;">​</a></h1><h2 id="知音-zhin" tabindex="-1"><a href="/api/zhin.html">知音(Zhin)</a> <a class="header-anchor" href="#知音-zhin" aria-label="Permalink to &quot;[知音(Zhin)](/api/zhin)&quot;">​</a></h2><ul><li>框架的统筹管理者，<a href="#适配器--adapter-">适配器</a>、<a href="#服务--service-">服务</a>的载体</li></ul><h2 id="适配器-adapter" tabindex="-1"><a href="/api/adapter.html">适配器(Adapter)</a> <a class="header-anchor" href="#适配器-adapter" aria-label="Permalink to &quot;[适配器(Adapter)](/api/adapter)&quot;">​</a></h2><ul><li>连接<a href="#知音--zhin-">知音</a>和机器人的桥梁（上传下达）</li><li>适配对应平台机器人连接到知音</li><li><a href="#机器人--bot-">机器人</a>的载体</li></ul><h2 id="机器人-bot" tabindex="-1"><a href="/api/bot.html">机器人(Bot)</a> <a class="header-anchor" href="#机器人-bot" aria-label="Permalink to &quot;[机器人(Bot)](/api/bot)&quot;">​</a></h2><ul><li>将对应平台推送的内容封装成<a href="#会话--session-">会话</a>，并提交给上一级(适配器)</li></ul><h2 id="会话-session" tabindex="-1"><a href="/api/session.html">会话(Session)</a> <a class="header-anchor" href="#会话-session" aria-label="Permalink to &quot;[会话(Session)](/api/session)&quot;">​</a></h2><ul><li>描述平台推送内容、发出该内容的机器人、所使用的适配器的对象</li><li>提供一系列快捷功能</li></ul><h2 id="上下文-context" tabindex="-1"><a href="/api/context.html">上下文(Context)</a> <a class="header-anchor" href="#上下文-context" aria-label="Permalink to &quot;[上下文(Context)](/api/context)&quot;">​</a></h2><ul><li><a href="#中间件--middleware-">中间件</a>、<a href="#指令--command-">指令</a>、<a href="#组件--component-">组件</a>的 载体</li></ul><h2 id="插件-plugin" tabindex="-1"><a href="/api/plugin.html">插件(Plugin)</a> <a class="header-anchor" href="#插件-plugin" aria-label="Permalink to &quot;[插件(Plugin)](/api/plugin)&quot;">​</a></h2><ul><li>使用<a href="#知音--zhin-">知音</a> 开发自定义功能的<strong>入口</strong></li><li>访问<a href="#上下文--context-">上下文</a>的<strong>入口</strong></li></ul><h1 id="普通开发者该关心的" tabindex="-1">普通开发者该关心的 <a class="header-anchor" href="#普通开发者该关心的" aria-label="Permalink to &quot;普通开发者该关心的&quot;">​</a></h1><h2 id="服务-service" tabindex="-1"><a href="/api/service.html">服务(Service)</a> <a class="header-anchor" href="#服务-service" aria-label="Permalink to &quot;[服务(Service)](/api/service)&quot;">​</a></h2><ul><li>为<a href="#知音--zhin-">知音</a>添加的<strong>任何</strong><a href="#上下文--context-">上下文</a>都可以访问的属 性</li></ul><h2 id="指令-command" tabindex="-1"><a href="/api/command.html">指令(Command)</a> <a class="header-anchor" href="#指令-command" aria-label="Permalink to &quot;[指令(Command)](/api/command)&quot;">​</a></h2><ul><li>处理消息<a href="#会话--session-">会话</a>的特殊对象</li></ul><h2 id="组件-component" tabindex="-1"><a href="/api/component.html">组件(Component)</a> <a class="header-anchor" href="#组件-component" aria-label="Permalink to &quot;[组件(Component)](/api/component)&quot;">​</a></h2><ul><li>处理消息<a href="#会话--session-">会话</a>的特殊对象</li></ul><h2 id="中间件-middleware" tabindex="-1"><a href="/api/middleware.html">中间件(Middleware)</a> <a class="header-anchor" href="#中间件-middleware" aria-label="Permalink to &quot;[中间件(Middleware)](/api/middleware)&quot;">​</a></h2><ul><li>处理消息<a href="#会话--session-">会话</a>的回调函数，处理顺序与<code>Koa</code>的洋葱模型相同</li></ul>',22),o=[l];function n(h,d,s,c,m,u){return e(),i("div",null,o)}const b=a(r,[["render",n]]);export{f as __pageData,b as default};
