import{_ as e,c as t,o as a,O as l}from"./chunks/framework.621e5595.js";const b=JSON.parse('{"title":"内置插件","description":"","frontmatter":{},"headers":[],"relativePath":"config/built-plugin.md","filePath":"config/built-plugin.md","lastUpdated":1676216398000}'),i={name:"config/built-plugin.md"},o=l('<h1 id="内置插件" tabindex="-1">内置插件 <a class="header-anchor" href="#内置插件" aria-label="Permalink to &quot;内置插件&quot;">​</a></h1><p>zhin内置了<code>7</code>个插件，作为协助开发者管理zhin的基础，让我们来认识下这<code>七个葫芦娃</code></p><h2 id="帮助-help" tabindex="-1">帮助(help) <a class="header-anchor" href="#帮助-help" aria-label="Permalink to &quot;帮助(help)&quot;">​</a></h2><p>用户使用zhin的<code>command</code>定义了指令，使用<code>help</code>可以获取对应帮助文本</p><h3 id="功能描述" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述" aria-label="Permalink to &quot;功能描述&quot;">​</a></h3><ul><li>1.聊天中输入<code>help</code>会获得到<strong>当前可用</strong>指令的帮助</li><li>2.聊天中输入<code>help [pluginName:string]</code>可获取<strong>对应指令名</strong>的帮助文本</li></ul><h3 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><p>无</p><h2 id="辅助登录-login" tabindex="-1">辅助登录(login) <a class="header-anchor" href="#辅助登录-login" aria-label="Permalink to &quot;辅助登录(login)&quot;">​</a></h2><p>用户在登录icqq的过程中如果触发相关登录验证，可通过命令行完成验证</p><h3 id="功能描述-1" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述-1" aria-label="Permalink to &quot;功能描述&quot;">​</a></h3><ul><li>1.当触发<code>system.login.slider</code>事件时，可通过命令行输入对应ticket</li><li>2.当触发<code>system.login.qrcode</code>事件时，可在扫码后回车继续当前流程</li><li>3.当触发<code>system.login.device</code>事件时，可通过命令行选择验证方式和接收验证方式参数</li></ul><h3 id="配置项-1" tabindex="-1">配置项 <a class="header-anchor" href="#配置项-1" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><p>无</p><h2 id="配置文件管理-config" tabindex="-1">配置文件管理(config) <a class="header-anchor" href="#配置文件管理-config" aria-label="Permalink to &quot;配置文件管理(config)&quot;">​</a></h2><p>可通过聊天的形式更改zhin的配置文件</p><h3 id="功能描述-2" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述-2" aria-label="Permalink to &quot;功能描述&quot;">​</a></h3><ul><li>1.聊天中输入<code>config</code> 可以查看当前zhin的<strong>所有</strong>配置</li><li>2.聊天中输入<code>config &lt;keyPath:string&gt;</code>可以<strong>查看</strong>当前zhin的<strong>对应keyPath</strong>的配置</li><li>3.聊天中输入<code>config -d &lt;keyPath:stirng&gt;</code>可以<strong>删除</strong>当前zhin的<strong>对应keyPath</strong>的配置</li><li>4.聊天中输入<code>config &lt;keyPath:string&gt; &lt;value&gt;</code>可以<strong>修改</strong>(没有则添加)当前zhin的<strong>对应keyPath</strong>的配置为对应值</li></ul><h3 id="配置项-2" tabindex="-1">配置项 <a class="header-anchor" href="#配置项-2" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><p>无</p><h2 id="插件管理-plugin" tabindex="-1">插件管理(plugin) <a class="header-anchor" href="#插件管理-plugin" aria-label="Permalink to &quot;插件管理(plugin)&quot;">​</a></h2><p>可通过聊天的形式管理zhin的插件</p><h3 id="功能描述-3" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述-3" aria-label="Permalink to &quot;功能描述&quot;">​</a></h3><ul><li>1.聊天中输入<code>plugin.list</code> 可以查看当前zhin的<strong>所有</strong>插件</li><li>2.聊天中输入<code>config.detail &lt;name:stirng&gt;</code>可以<strong>查看</strong>当前zhin的**对应名称的插件</li><li>3.聊天中输入<code>config.mount &lt;name:string&gt;</code>可以<strong>挂载</strong>指定名称的插件到zhin</li><li>4.聊天中输入<code>config.unmount &lt;name:string&gt;</code>可以<strong>取消挂载</strong>zhin中指定名称的插件</li><li>5.聊天中输入<code>config.enable &lt;name:string&gt;</code>可以<strong>启用</strong>指定名称的插件</li><li>6.聊天中输入<code>config.disable &lt;name:string&gt;</code>可以<strong>禁用</strong>指定名称的插件</li></ul><h3 id="配置项-3" tabindex="-1">配置项 <a class="header-anchor" href="#配置项-3" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><p>无</p><h2 id="热更新-watcher" tabindex="-1">热更新(watcher) <a class="header-anchor" href="#热更新-watcher" aria-label="Permalink to &quot;热更新(watcher)&quot;">​</a></h2><p>提供zhin插件开发过程中热更新的功能</p><h3 id="功能描述-4" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述-4" aria-label="Permalink to &quot;功能描述&quot;">​</a></h3><ul><li>1.在插件代码变化是，自动重载对应插件</li><li>2.在配置文件中添加或删除插件时，自动加载或取消加载对应插件</li></ul><h3 id="配置项-4" tabindex="-1">配置项 <a class="header-anchor" href="#配置项-4" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><p>ke传入一个文件夹地址作为监听目录，默认为项目文件夹，建议不要更改，否则可能会造成第二个功能无法使用</p><h2 id="进程守护-daemon" tabindex="-1">进程守护(daemon) <a class="header-anchor" href="#进程守护-daemon" aria-label="Permalink to &quot;进程守护(daemon)&quot;">​</a></h2><p>提供zhin进程守护的能力和手动重启的能力</p><h3 id="功能描述-5" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述-5" aria-label="Permalink to &quot;功能描述&quot;">​</a></h3><ul><li>1.在意外意外中断时，自动重启zhin</li><li>2.在聊天中，可使用指定的命令重启zhin</li></ul><h3 id="配置项-5" tabindex="-1">配置项 <a class="header-anchor" href="#配置项-5" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">配置名</th><th style="text-align:left;">值类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">exitCommand</td><td style="text-align:left;">stirng|boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否启用退出指令，传字符串时，则自定义退出指令，默认退出指令为<code>exit</code></td></tr><tr><td style="text-align:left;">autoRestart</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否自动重启</td></tr></tbody></table><h2 id="系统信息-systeminfo" tabindex="-1">系统信息(systemInfo) <a class="header-anchor" href="#系统信息-systeminfo" aria-label="Permalink to &quot;系统信息(systemInfo)&quot;">​</a></h2><p>提供日志查看和状态查看指令</p><h3 id="功能描述-6" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述-6" aria-label="Permalink to &quot;功能描述&quot;">​</a></h3><ul><li>1.在聊天中，可使用<code>logs [lines:number]</code>查看zhin指定行数的日志，(默认为10行)</li><li>2.在聊天中，可使用<code>status</code>查看zhin当前的运行状态</li></ul><h3 id="配置项-6" tabindex="-1">配置项 <a class="header-anchor" href="#配置项-6" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><p>无</p>',44),n=[o];function r(h,d,s,c,g,u){return a(),t("div",null,n)}const p=e(i,[["render",r]]);export{b as __pageData,p as default};
