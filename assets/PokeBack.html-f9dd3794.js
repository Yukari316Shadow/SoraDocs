import{_ as o,z as r,A as l,Y as e,U as s,a0 as n,C as a,X as c,a6 as p,Q as u}from"./framework-cb9358d9.js";const d={},i=p(`<h1 id="grouppokeeventargs-pokeback-method" tabindex="-1"><a class="header-anchor" href="#grouppokeeventargs-pokeback-method" aria-hidden="true">#</a> GroupPokeEventArgs.PokeBack method</h1><p>戳回去</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> <span class="token keyword">int</span> messageId<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">PokeBack</span><span class="token punctuation">(</span><span class="token class-name">TimeSpan<span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>timeout</td><td>覆盖原有超时</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,5),h=e("code",null,"ApiStatusType",-1),k=e("p",null,[e("code",null,"messageId"),a(" 发送消息的id")],-1),m=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),a(" See Also")],-1);function _(v,A){const t=u("RouterLink");return r(),l("div",null,[i,e("p",null,[s(t,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:n(()=>[h]),_:1}),a(" API执行状态")]),k,m,e("ul",null,[e("li",null,[a("struct "),s(t,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[a("ApiStatus")]),_:1})]),e("li",null,[a("class "),s(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupPokeEventArgs.html"},{default:n(()=>[a("GroupPokeEventArgs")]),_:1})]),e("li",null,[a("namespace "),s(t,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.EventArgs.SoraEvent")]),_:1})])]),c(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const g=o(d,[["render",_],["__file","PokeBack.html.vue"]]);export{g as default};
