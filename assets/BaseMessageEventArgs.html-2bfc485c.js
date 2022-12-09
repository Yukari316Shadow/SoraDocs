import{_ as l,z as r,A as o,Y as e,U as t,a0 as n,C as s,X as d,a6 as c,Q as u}from"./framework-cb9358d9.js";const g={},i=c(`<h1 id="basemessageeventargs-class" tabindex="-1"><a class="header-anchor" href="#basemessageeventargs-class" aria-hidden="true">#</a> BaseMessageEventArgs class</h1><p>用于存储消息和发送者的基类</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseMessageEventArgs</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseSoraEventArgs</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="public-members" tabindex="-1"><a class="header-anchor" href="#public-members" aria-hidden="true">#</a> Public Members</h2>`,4),m=e("thead",null,[e("tr",null,[e("th",null,"name"),e("th",null,"description")])],-1),h=e("td",null,"在匹配到动态指令时此值为匹配到的动态指令ID",-1),v=e("td",null,"在匹配到指令时此值为匹配到的指令名",-1),_=e("td",null,"在匹配到指令时则此值为匹配到的正则表达式",-1),p=e("td",null,"是否为Bot账号所发送的消息",-1),A=e("td",null,"是否为机器人管理员",-1),E=e("td",null,"消息内容",-1),S=e("td",null,"消息发送者实例",-1),f=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),s(" See Also")],-1);function b(B,I){const a=u("RouterLink");return r(),o("div",null,[i,e("table",null,[m,e("tbody",null,[e("tr",null,[e("td",null,[t(a,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/CommandId.html"},{default:n(()=>[s("CommandId")]),_:1}),s(" { get; }")]),h]),e("tr",null,[e("td",null,[t(a,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/CommandName.html"},{default:n(()=>[s("CommandName")]),_:1}),s(" { get; }")]),v]),e("tr",null,[e("td",null,[t(a,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/CommandRegex.html"},{default:n(()=>[s("CommandRegex")]),_:1}),s(" { get; }")]),_]),e("tr",null,[e("td",null,[t(a,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/IsSelfMessage.html"},{default:n(()=>[s("IsSelfMessage")]),_:1}),s(" { get; }")]),p]),e("tr",null,[e("td",null,[t(a,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/IsSuperUser.html"},{default:n(()=>[s("IsSuperUser")]),_:1}),s(" { get; }")]),A]),e("tr",null,[e("td",null,[t(a,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/Message.html"},{default:n(()=>[s("Message")]),_:1}),s(" { get; }")]),E]),e("tr",null,[e("td",null,[t(a,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/Sender.html"},{default:n(()=>[s("Sender")]),_:1}),s(" { get; }")]),S])])]),f,e("ul",null,[e("li",null,[s("class "),t(a,{to:"/API/Sora.EventArgs.SoraEvent/BaseSoraEventArgs.html"},{default:n(()=>[s("BaseSoraEventArgs")]),_:1})]),e("li",null,[s("namespace "),t(a,{to:"/API/Sora.html"},{default:n(()=>[s("Sora.EventArgs.SoraEvent")]),_:1})])]),d(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const k=l(g,[["render",b],["__file","BaseMessageEventArgs.html.vue"]]);export{k as default};