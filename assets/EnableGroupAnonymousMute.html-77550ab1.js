import{_ as l,z as r,A as p,Y as n,C as a,U as t,a0 as e,X as u,a6 as o,Q as d}from"./framework-cb9358d9.js";const i={},c=o(`<h1 id="soraapi-enablegroupanonymousmute-method-1-of-2" tabindex="-1"><a class="header-anchor" href="#soraapi-enablegroupanonymousmute-method-1-of-2" aria-hidden="true">#</a> SoraApi.EnableGroupAnonymousMute method (1 of 2)</h1><p>群组匿名用户禁言</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>ApiStatus<span class="token punctuation">&gt;</span></span> <span class="token function">EnableGroupAnonymousMute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> groupId<span class="token punctuation">,</span> <span class="token class-name">Anonymous</span> anonymous<span class="token punctuation">,</span> 
    <span class="token class-name"><span class="token keyword">long</span></span> duration<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>groupId</td><td>群号</td></tr><tr><td>anonymous</td><td>匿名用户对象</td></tr><tr><td>duration</td><td>禁言时长, 单位秒</td></tr></tbody></table><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,5),m=o(`<hr><h1 id="soraapi-enablegroupanonymousmute-method-2-of-2" tabindex="-1"><a class="header-anchor" href="#soraapi-enablegroupanonymousmute-method-2-of-2" aria-hidden="true">#</a> SoraApi.EnableGroupAnonymousMute method (2 of 2)</h1><p>群组匿名用户禁言</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>ApiStatus<span class="token punctuation">&gt;</span></span> <span class="token function">EnableGroupAnonymousMute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> groupId<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> anonymousFlag<span class="token punctuation">,</span> 
    <span class="token class-name"><span class="token keyword">long</span></span> duration<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>groupId</td><td>群号</td></tr><tr><td>anonymousFlag</td><td>匿名用户Flag</td></tr><tr><td>duration</td><td>禁言时长, 单位秒</td></tr></tbody></table><h2 id="see-also-1" tabindex="-1"><a class="header-anchor" href="#see-also-1" aria-hidden="true">#</a> See Also</h2>`,6);function h(k,b){const s=d("RouterLink");return r(),p("div",null,[c,n("ul",null,[n("li",null,[a("struct "),t(s,{to:"/API/Sora.Entities/ApiStatus.html"},{default:e(()=>[a("ApiStatus")]),_:1})]),n("li",null,[a("class "),t(s,{to:"/API/Sora.Entities/Anonymous.html"},{default:e(()=>[a("Anonymous")]),_:1})]),n("li",null,[a("class "),t(s,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:e(()=>[a("SoraApi")]),_:1})]),n("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:e(()=>[a("Sora.Entities.Base")]),_:1})])]),m,n("ul",null,[n("li",null,[a("struct "),t(s,{to:"/API/Sora.Entities/ApiStatus.html"},{default:e(()=>[a("ApiStatus")]),_:1})]),n("li",null,[a("class "),t(s,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:e(()=>[a("SoraApi")]),_:1})]),n("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:e(()=>[a("Sora.Entities.Base")]),_:1})])]),u(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const A=l(i,[["render",h],["__file","EnableGroupAnonymousMute.html.vue"]]);export{A as default};
