import{_ as l,r as o,o as i,c as d,a as e,b as s,d as t,w as n,e as u,f as c}from"./app-330b5ec4.js";const r={},p=c(`<h1 id="user-sendprivatemessage-method" tabindex="-1"><a class="header-anchor" href="#user-sendprivatemessage-method" aria-hidden="true">#</a> User.SendPrivateMessage method</h1><p>发送群消息</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> <span class="token keyword">int</span> messageId<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">SendPrivateMessage</span><span class="token punctuation">(</span><span class="token class-name">MessageBody</span> message<span class="token punctuation">,</span> 
    <span class="token class-name">TimeSpan<span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h=e("thead",null,[e("tr",null,[e("th",null,"parameter"),e("th",null,"description")])],-1),m=e("td",null,"message",-1),_=e("code",null,"MessageBody",-1),k=e("tr",null,[e("td",null,"timeout"),e("td",null,"覆盖原有超时")],-1),g=e("h2",{id:"return-value",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#return-value","aria-hidden":"true"},"#"),s(" Return Value")],-1),S=e("code",null,"ApiStatusType",-1),f=e("p",null,[e("code",null,"messageId"),s(" 消息ID")],-1),v=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),s(" See Also")],-1);function y(A,b){const a=o("RouterLink");return i(),d("div",null,[p,e("table",null,[h,e("tbody",null,[e("tr",null,[m,e("td",null,[s("消息"),t(a,{to:"/API/Sora.Entities/MessageBody.html"},{default:n(()=>[_]),_:1})])]),k])]),g,e("p",null,[t(a,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:n(()=>[S]),_:1}),s(" API执行状态")]),f,v,e("ul",null,[e("li",null,[s("struct "),t(a,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[s("ApiStatus")]),_:1})]),e("li",null,[s("class "),t(a,{to:"/API/Sora.Entities/MessageBody.html"},{default:n(()=>[s("MessageBody")]),_:1})]),e("li",null,[s("class "),t(a,{to:"/API/Sora.Entities/User.html"},{default:n(()=>[s("User")]),_:1})]),e("li",null,[s("namespace "),t(a,{to:"/API/Sora.html"},{default:n(()=>[s("Sora.Entities")]),_:1})])]),u(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const P=l(r,[["render",y],["__file","SendPrivateMessage.html.vue"]]);export{P as default};
