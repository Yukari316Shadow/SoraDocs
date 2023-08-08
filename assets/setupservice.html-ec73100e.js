import{_ as n,o as s,c as a,f as e}from"./app-330b5ec4.js";const t={},p=e(`<h1 id="创建一个最简单的bot" tabindex="-1"><a class="header-anchor" href="#创建一个最简单的bot" aria-hidden="true">#</a> 创建一个最简单的Bot</h1><div class="custom-container danger"><p class="custom-container-title">注意</p><p>本框架只支持Universal连接方式的Array上报格式</p><p>请将onebot端的数据上报格式修改为Array格式</p></div><h2 id="在program-cs中添加必要的引用" tabindex="-1"><a class="header-anchor" href="#在program-cs中添加必要的引用" aria-hidden="true">#</a> 在Program.cs中添加必要的引用</h2><p>添加以下代码的引用</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Sora</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Sora<span class="token punctuation">.</span>Interfaces</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Sora<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Config</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Sora<span class="token punctuation">.</span>Util</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">YukariToolBox<span class="token punctuation">.</span>LightLog</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启用console的日志输出" tabindex="-1"><a class="header-anchor" href="#启用console的日志输出" aria-hidden="true">#</a> 启用Console的日志输出</h2><p>在rc28版本后，控制台的日志输出将会被禁用</p><p>如果希望使用控制台的log输出，请使用以下代码启用</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//设置log等级</span>
Log<span class="token punctuation">.</span>LogConfiguration
   <span class="token punctuation">.</span><span class="token function">EnableConsoleOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">SetLogLevel</span><span class="token punctuation">(</span>LogLevel<span class="token punctuation">.</span>Info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个服务端实例-反向ws" tabindex="-1"><a class="header-anchor" href="#创建一个服务端实例-反向ws" aria-hidden="true">#</a> 创建一个服务端实例(反向WS)</h2><blockquote><p>框架同时还支持正向WS的连接方式</p><p>将 <code>ServerConfig</code> 改为 <code>ClientConfig</code> 即可使用正向的连接方式</p></blockquote><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//默认端口为8080</span>
<span class="token comment">//实例化Sora服务器</span>
<span class="token class-name"><span class="token keyword">var</span></span> service <span class="token operator">=</span> SoraServiceFactory<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ServerConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候你还需要启动服务器才能让服务器跑起来</p><p>在Main函数中添加以下代码来启动服务器</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//启动服务并捕捉错误</span>
<span class="token keyword">await</span> service<span class="token punctuation">.</span><span class="token function">StartService</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
             <span class="token punctuation">.</span><span class="token function">RunCatch</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> Log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Sora Service&quot;</span><span class="token punctuation">,</span> Log<span class="token punctuation">.</span><span class="token function">ErrorLogBuilder</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整个代码看起来就是这样的" tabindex="-1"><a class="header-anchor" href="#整个代码看起来就是这样的" aria-hidden="true">#</a> 整个代码看起来就是这样的</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Sora</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Sora<span class="token punctuation">.</span>Interfaces</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Sora<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Config</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Sora<span class="token punctuation">.</span>Util</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">YukariToolBox<span class="token punctuation">.</span>LightLog</span><span class="token punctuation">;</span>

<span class="token comment">//设置log等级</span>
Log<span class="token punctuation">.</span>LogConfiguration
   <span class="token punctuation">.</span><span class="token function">EnableConsoleOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">SetLogLevel</span><span class="token punctuation">(</span>LogLevel<span class="token punctuation">.</span>Info<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//实例化Sora服务</span>
<span class="token class-name">ISoraService</span> service <span class="token operator">=</span> SoraServiceFactory<span class="token punctuation">.</span><span class="token function">CreateService</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ServerConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//启动服务并捕捉错误</span>
<span class="token keyword">await</span> service<span class="token punctuation">.</span><span class="token function">StartService</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
             <span class="token punctuation">.</span><span class="token function">RunCatch</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> Log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Sora Service&quot;</span><span class="token punctuation">,</span> Log<span class="token punctuation">.</span><span class="token function">ErrorLogBuilder</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跑起来试试看" tabindex="-1"><a class="header-anchor" href="#跑起来试试看" aria-hidden="true">#</a> 跑起来试试看</h2><p>按下<code>F5</code>或<code>运行按钮</code>开始运行自己刚写好最简单的bot吧！</p><p>如果出现图片中的结果，那么bot已经成功运行了</p><p><img src="https://raw.githubusercontent.com/Yukari316Shadow/SoraDocs/image/Run.png" alt="SoraRun.png"></p>`,21),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","setupservice.html.vue"]]);export{r as default};
