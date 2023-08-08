import{_ as o,r as l,o as p,c as d,a as e,d as t,w as n,b as a,e as r,f as c}from"./app-330b5ec4.js";const i={},u=c(`<h1 id="soraapi-sendgroupmessage-method" tabindex="-1"><a class="header-anchor" href="#soraapi-sendgroupmessage-method" aria-hidden="true">#</a> SoraApi.SendGroupMessage method</h1><p>发送群聊消息</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> <span class="token keyword">int</span> messageId<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">SendGroupMessage</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> groupId<span class="token punctuation">,</span> 
    <span class="token class-name">MessageBody</span> message<span class="token punctuation">,</span> <span class="token class-name">TimeSpan<span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>groupId</td><td>发送目标群id</td></tr><tr><td>message</td><td>消息内容</td></tr><tr><td>timeout</td><td>覆盖原有超时</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,5),h=e("code",null,"ApiStatusType",-1),m=e("p",null,[e("code",null,"messageId"),a(" 消息ID")],-1),k=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),a(" See Also")],-1);function _(g,S){const s=l("RouterLink");return p(),d("div",null,[u,e("p",null,[t(s,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:n(()=>[h]),_:1}),a(" API执行状态")]),m,k,e("ul",null,[e("li",null,[a("struct "),t(s,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[a("ApiStatus")]),_:1})]),e("li",null,[a("class "),t(s,{to:"/API/Sora.Entities/MessageBody.html"},{default:n(()=>[a("MessageBody")]),_:1})]),e("li",null,[a("class "),t(s,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:n(()=>[a("SoraApi")]),_:1})]),e("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.Entities.Base")]),_:1})])]),r(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const A=o(i,[["render",_],["__file","SendGroupMessage.html.vue"]]);export{A as default};
