import{_ as o,r,o as l,c as u,a,d as n,w as s,b as e,e as c,f as d}from"./app-330b5ec4.js";const p={},i=d(`<h1 id="groupmessageeventargs-getsendermemberinfo-method" tabindex="-1"><a class="header-anchor" href="#groupmessageeventargs-getsendermemberinfo-method" aria-hidden="true">#</a> GroupMessageEventArgs.GetSenderMemberInfo method</h1><p>获取发送者群成员信息</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> GroupMemberInfo memberInfo<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">GetSenderMemberInfo</span><span class="token punctuation">(</span>
    <span class="token class-name"><span class="token keyword">bool</span></span> useCache <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>useCache</td><td>是否使用缓存</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,5),m=a("code",null,"ApiStatusType",-1),h=a("code",null,"GroupMemberInfo",-1),f=a("h2",{id:"see-also",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),e(" See Also")],-1);function b(_,g){const t=r("RouterLink");return l(),u("div",null,[i,a("p",null,[n(t,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:s(()=>[m]),_:1}),e(" API执行状态")]),a("p",null,[n(t,{to:"/API/Sora.Entities.Info/GroupMemberInfo.html"},{default:s(()=>[h]),_:1}),e(" 群成员信息")]),f,a("ul",null,[a("li",null,[e("struct "),n(t,{to:"/API/Sora.Entities/ApiStatus.html"},{default:s(()=>[e("ApiStatus")]),_:1})]),a("li",null,[e("record "),n(t,{to:"/API/Sora.Entities.Info/GroupMemberInfo.html"},{default:s(()=>[e("GroupMemberInfo")]),_:1})]),a("li",null,[e("class "),n(t,{to:"/API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs.html"},{default:s(()=>[e("GroupMessageEventArgs")]),_:1})]),a("li",null,[e("namespace "),n(t,{to:"/API/Sora.html"},{default:s(()=>[e("Sora.EventArgs.SoraEvent")]),_:1})])]),c(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const S=o(p,[["render",b],["__file","GetSenderMemberInfo.html.vue"]]);export{S as default};
