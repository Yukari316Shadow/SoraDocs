import{_ as o,r as l,o as r,c as d,a,d as t,w as n,b as e,e as p,f as u}from"./app-330b5ec4.js";const c={},i=u(`<h1 id="group-sendgroupmessage-method" tabindex="-1"><a class="header-anchor" href="#group-sendgroupmessage-method" aria-hidden="true">#</a> Group.SendGroupMessage method</h1><p>发送群消息</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> <span class="token keyword">int</span> messageId<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">SendGroupMessage</span><span class="token punctuation">(</span><span class="token class-name">MessageBody</span> message<span class="token punctuation">,</span> 
    <span class="token class-name">TimeSpan<span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>message</td><td>消息</td></tr><tr><td>timeout</td><td>覆盖原有超时</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,5),h=a("code",null,"ApiStatusType",-1),m=a("p",null,[a("code",null,"messageId"),e(" 消息ID")],-1),_=a("h2",{id:"see-also",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),e(" See Also")],-1);function k(g,S){const s=l("RouterLink");return r(),d("div",null,[i,a("p",null,[t(s,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:n(()=>[h]),_:1}),e(" API执行状态")]),m,_,a("ul",null,[a("li",null,[e("struct "),t(s,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[e("ApiStatus")]),_:1})]),a("li",null,[e("class "),t(s,{to:"/API/Sora.Entities/MessageBody.html"},{default:n(()=>[e("MessageBody")]),_:1})]),a("li",null,[e("class "),t(s,{to:"/API/Sora.Entities/Group.html"},{default:n(()=>[e("Group")]),_:1})]),a("li",null,[e("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[e("Sora.Entities")]),_:1})])]),p(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const b=o(c,[["render",k],["__file","SendGroupMessage.html.vue"]]);export{b as default};
