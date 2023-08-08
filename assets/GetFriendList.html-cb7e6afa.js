import{_ as o,r as i,o as l,c as r,a,d as n,w as s,b as e,e as c,f as d}from"./app-330b5ec4.js";const u={},p=d(`<h1 id="soraapi-getfriendlist-method" tabindex="-1"><a class="header-anchor" href="#soraapi-getfriendlist-method" aria-hidden="true">#</a> SoraApi.GetFriendList method</h1><p>获取好友列表</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> List<span class="token punctuation">&lt;</span>FriendInfo<span class="token punctuation">&gt;</span> friendList<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">GetFriendList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,4),h=a("code",null,"ApiStatusType",-1),m=a("p",null,[a("code",null,"friendList"),e(" 好友列表")],-1),_=a("h2",{id:"see-also",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),e(" See Also")],-1);function f(k,S){const t=i("RouterLink");return l(),r("div",null,[p,a("p",null,[n(t,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:s(()=>[h]),_:1}),e(" API执行状态")]),m,_,a("ul",null,[a("li",null,[e("struct "),n(t,{to:"/API/Sora.Entities/ApiStatus.html"},{default:s(()=>[e("ApiStatus")]),_:1})]),a("li",null,[e("record "),n(t,{to:"/API/Sora.Entities.Info/FriendInfo.html"},{default:s(()=>[e("FriendInfo")]),_:1})]),a("li",null,[e("class "),n(t,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:s(()=>[e("SoraApi")]),_:1})]),a("li",null,[e("namespace "),n(t,{to:"/API/Sora.html"},{default:s(()=>[e("Sora.Entities.Base")]),_:1})])]),c(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const v=o(u,[["render",f],["__file","GetFriendList.html.vue"]]);export{v as default};