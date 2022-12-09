import{_ as o,z as l,A as r,Y as s,U as t,a0 as n,C as a,X as p,a6 as d,Q as c}from"./framework-cb9358d9.js";const i={},u=d(`<h1 id="soraapi-sendtemporarymessage-method" tabindex="-1"><a class="header-anchor" href="#soraapi-sendtemporarymessage-method" aria-hidden="true">#</a> SoraApi.SendTemporaryMessage method</h1><p>发起群临时会话（私聊）</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> <span class="token keyword">int</span> messageId<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">SendTemporaryMessage</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> userId<span class="token punctuation">,</span> 
    <span class="token class-name"><span class="token keyword">long</span></span> groupId<span class="token punctuation">,</span> <span class="token class-name">MessageBody</span> message<span class="token punctuation">,</span> <span class="token class-name">TimeSpan<span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>userId</td><td>发送目标群id</td></tr><tr><td>groupId</td><td>群号</td></tr><tr><td>message</td><td>消息内容</td></tr><tr><td>timeout</td><td>覆盖原有超时</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,5),m=s("code",null,"ApiStatusType",-1),h=s("p",null,[s("code",null,"messageId"),a(" 消息ID")],-1),k=s("h2",{id:"see-also",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),a(" See Also")],-1);function _(g,S){const e=c("RouterLink");return l(),r("div",null,[u,s("p",null,[t(e,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:n(()=>[m]),_:1}),a(" API执行状态")]),h,k,s("ul",null,[s("li",null,[a("struct "),t(e,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[a("ApiStatus")]),_:1})]),s("li",null,[a("class "),t(e,{to:"/API/Sora.Entities/MessageBody.html"},{default:n(()=>[a("MessageBody")]),_:1})]),s("li",null,[a("class "),t(e,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:n(()=>[a("SoraApi")]),_:1})]),s("li",null,[a("namespace "),t(e,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.Entities.Base")]),_:1})])]),p(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const f=o(i,[["render",_],["__file","SendTemporaryMessage.html.vue"]]);export{f as default};
