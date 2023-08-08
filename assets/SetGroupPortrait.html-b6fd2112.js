import{_ as o,r,o as l,c as p,a as t,b as a,d as s,w as n,e as c,f as i}from"./app-330b5ec4.js";const d={},u=i(`<h1 id="soraapi-setgroupportrait-method" tabindex="-1"><a class="header-anchor" href="#soraapi-setgroupportrait-method" aria-hidden="true">#</a> SoraApi.SetGroupPortrait method</h1><p>设置群头像</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>ApiStatus<span class="token punctuation">&gt;</span></span> <span class="token function">SetGroupPortrait</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> groupId<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> imageFile<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">bool</span></span> useCache <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>groupId</td><td>群号</td></tr><tr><td>imageFile</td><td>图片名/绝对路径/URL/base64</td></tr><tr><td>useCache</td><td>是否使用缓存</td></tr></tbody></table><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,5);function h(m,k){const e=r("RouterLink");return l(),p("div",null,[u,t("ul",null,[t("li",null,[a("struct "),s(e,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[a("ApiStatus")]),_:1})]),t("li",null,[a("class "),s(e,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:n(()=>[a("SoraApi")]),_:1})]),t("li",null,[a("namespace "),s(e,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.Entities.Base")]),_:1})])]),c(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const S=o(d,[["render",h],["__file","SetGroupPortrait.html.vue"]]);export{S as default};
