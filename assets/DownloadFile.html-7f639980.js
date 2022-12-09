import{_ as o,z as l,A as p,Y as s,C as a,U as t,a0 as e,X as r,a6 as c,Q as d}from"./framework-cb9358d9.js";const i={},u=c(`<h1 id="soraapi-downloadfile-method" tabindex="-1"><a class="header-anchor" href="#soraapi-downloadfile-method" aria-hidden="true">#</a> SoraApi.DownloadFile method</h1><p>下载文件到缓存目录</p><p>注意：此API的调用超时时间是独立于其他API的</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> <span class="token keyword">string</span> filePath<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">DownloadFile</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> url<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> threadCount<span class="token punctuation">,</span> 
    <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> customHeader <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> timeout <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>url</td><td>链接地址</td></tr><tr><td>threadCount</td><td>下载线程数</td></tr><tr><td>customHeader</td><td>自定义请求头</td></tr><tr><td>timeout</td><td>超时(ms)</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2><p>文件绝对路径</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,8);function k(h,m){const n=d("RouterLink");return l(),p("div",null,[u,s("ul",null,[s("li",null,[a("struct "),t(n,{to:"/API/Sora.Entities/ApiStatus.html"},{default:e(()=>[a("ApiStatus")]),_:1})]),s("li",null,[a("class "),t(n,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:e(()=>[a("SoraApi")]),_:1})]),s("li",null,[a("namespace "),t(n,{to:"/API/Sora.html"},{default:e(()=>[a("Sora.Entities.Base")]),_:1})])]),r(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const f=o(i,[["render",k],["__file","DownloadFile.html.vue"]]);export{f as default};