import{_ as o,z as r,A as l,Y as e,C as a,U as s,a0 as n,X as d,a6 as p,Q as c}from"./framework-cb9358d9.js";const u={},i=p(`<h1 id="soraapi-enablegroupmembermute-method" tabindex="-1"><a class="header-anchor" href="#soraapi-enablegroupmembermute-method" aria-hidden="true">#</a> SoraApi.EnableGroupMemberMute method</h1><p>设置群组成员禁言</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>ApiStatus<span class="token punctuation">&gt;</span></span> <span class="token function">EnableGroupMemberMute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> groupId<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">long</span></span> userId<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">long</span></span> duration<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>groupId</td><td>群号</td></tr><tr><td>userId</td><td>用户id</td></tr><tr><td>duration</td><td>禁言时长(s)</td></tr></tbody></table><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,5);function m(h,k){const t=c("RouterLink");return r(),l("div",null,[i,e("ul",null,[e("li",null,[a("struct "),s(t,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[a("ApiStatus")]),_:1})]),e("li",null,[a("class "),s(t,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:n(()=>[a("SoraApi")]),_:1})]),e("li",null,[a("namespace "),s(t,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.Entities.Base")]),_:1})])]),d(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const _=o(u,[["render",m],["__file","EnableGroupMemberMute.html.vue"]]);export{_ as default};