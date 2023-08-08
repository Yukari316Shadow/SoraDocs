import{_ as l,r,o,c as d,a as e,d as n,w as a,b as s,e as u,f as c}from"./app-330b5ec4.js";const g={},i=c(`<h1 id="groupmessageeventargs-class" tabindex="-1"><a class="header-anchor" href="#groupmessageeventargs-class" aria-hidden="true">#</a> GroupMessageEventArgs class</h1><p>群消息事件参数</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">GroupMessageEventArgs</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseMessageEventArgs</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="public-members" tabindex="-1"><a class="header-anchor" href="#public-members" aria-hidden="true">#</a> Public Members</h2>`,4),p=e("thead",null,[e("tr",null,[e("th",null,"name"),e("th",null,"description")])],-1),h=e("td",null,"匿名用户实例",-1),v=e("td",null,"是否来源于匿名群成员",-1),_=e("td",null,"发送者信息",-1),m=e("td",null,"消息来源群组实例",-1),A=e("td",null,"获取发送者群成员信息",-1),E=e("td",null,"撤回发送者消息 只有在管理员以上权限才有效",-1),S=e("td",null,"没什么用的复读功能",-1),f=e("td",null,"快速回复",-1),M=e("td",null,"等待下一条消息触发 (6 methods)",-1),b=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),s(" See Also")],-1);function I(G,k){const t=r("RouterLink");return o(),d("div",null,[i,e("table",null,[p,e("tbody",null,[e("tr",null,[e("td",null,[n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/Anonymous.html"},{default:a(()=>[s("Anonymous")]),_:1}),s(" { get; }")]),h]),e("tr",null,[e("td",null,[n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/IsAnonymousMessage.html"},{default:a(()=>[s("IsAnonymousMessage")]),_:1}),s(" { get; }")]),v]),e("tr",null,[e("td",null,[n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/SenderInfo.html"},{default:a(()=>[s("SenderInfo")]),_:1}),s(" { get; }")]),_]),e("tr",null,[e("td",null,[n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/SourceGroup.html"},{default:a(()=>[s("SourceGroup")]),_:1}),s(" { get; }")]),m]),e("tr",null,[e("td",null,[n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/GetSenderMemberInfo.html"},{default:a(()=>[s("GetSenderMemberInfo")]),_:1}),s("(…)")]),A]),e("tr",null,[e("td",null,[n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/RecallSourceMessage.html"},{default:a(()=>[s("RecallSourceMessage")]),_:1}),s("()")]),E]),e("tr",null,[e("td",null,[n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/Repeat.html"},{default:a(()=>[s("Repeat")]),_:1}),s("()")]),S]),e("tr",null,[e("td",null,[s("override "),n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/Reply.html"},{default:a(()=>[s("Reply")]),_:1}),s("(…)")]),f]),e("tr",null,[e("td",null,[n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs/WaitForNextMessageAsync.html"},{default:a(()=>[s("WaitForNextMessageAsync")]),_:1}),s("(…)")]),M])])]),b,e("ul",null,[e("li",null,[s("class "),n(t,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs.html"},{default:a(()=>[s("BaseMessageEventArgs")]),_:1})]),e("li",null,[s("namespace "),n(t,{to:"/API/Sora.html"},{default:a(()=>[s("Sora.EventArgs.SoraEvent")]),_:1})])]),u(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const x=l(g,[["render",I],["__file","GroupMessageEventArgs.html.vue"]]);export{x as default};
