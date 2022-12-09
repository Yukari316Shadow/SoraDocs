import{_ as l,z as r,A as c,Y as a,C as e,U as s,a0 as t,X as d,a6 as o,Q as p}from"./framework-cb9358d9.js";const i={},u=o(`<h1 id="eventadapter-eventasynccallbackhandler-teventargs-delegate" tabindex="-1"><a class="header-anchor" href="#eventadapter-eventasynccallbackhandler-teventargs-delegate" aria-hidden="true">#</a> EventAdapter.EventAsyncCallBackHandler&lt;TEventArgs&gt; delegate</h1><p>Onebot事件委托</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">delegate</span> <span class="token return-type class-name">ValueTask</span> <span class="token generic-method"><span class="token function">EventAsyncCallBackHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">in</span> TEventArgs<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> eventType<span class="token punctuation">,</span> 
    <span class="token class-name">TEventArgs</span> eventArgs<span class="token punctuation">)</span>
    <span class="token keyword">where</span> <span class="token class-name">TEventArgs</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">EventArgs</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>TEventArgs</td><td>事件参数</td></tr><tr><td>eventType</td><td>事件的主要类型</td></tr><tr><td>eventArgs</td><td>事件参数</td></tr></tbody></table><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,5);function v(k,h){const n=p("RouterLink");return r(),c("div",null,[u,a("ul",null,[a("li",null,[e("class "),s(n,{to:"/API/Sora.OnebotAdapter/EventAdapter.html"},{default:t(()=>[e("EventAdapter")]),_:1})]),a("li",null,[e("namespace "),s(n,{to:"/API/Sora.html"},{default:t(()=>[e("Sora.OnebotAdapter")]),_:1})])]),d(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const g=l(i,[["render",v],["__file","EventAdapter.EventAsyncCallBackHandler-1.html.vue"]]);export{g as default};
