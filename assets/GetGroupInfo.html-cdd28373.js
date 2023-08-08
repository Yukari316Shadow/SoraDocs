import{_ as o,r,o as l,c as u,a as e,d as n,w as s,b as t,e as p,f as c}from"./app-330b5ec4.js";const i={},d=c(`<h1 id="group-getgroupinfo-method" tabindex="-1"><a class="header-anchor" href="#group-getgroupinfo-method" aria-hidden="true">#</a> Group.GetGroupInfo method</h1><p>获取群信息</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> GroupInfo groupInfo<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">GetGroupInfo</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> useCache <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>useCache</td><td>是否使用缓存</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,5),h=e("code",null,"ApiStatusType",-1),f=e("code",null,"GroupInfo",-1),m=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),t(" See Also")],-1);function _(k,I){const a=r("RouterLink");return l(),u("div",null,[d,e("p",null,[n(a,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:s(()=>[h]),_:1}),t(" API执行状态")]),e("p",null,[n(a,{to:"/API/Sora.Entities.Info/GroupInfo.html"},{default:s(()=>[f]),_:1}),t(" 群信息")]),m,e("ul",null,[e("li",null,[t("struct "),n(a,{to:"/API/Sora.Entities/ApiStatus.html"},{default:s(()=>[t("ApiStatus")]),_:1})]),e("li",null,[t("struct "),n(a,{to:"/API/Sora.Entities.Info/GroupInfo.html"},{default:s(()=>[t("GroupInfo")]),_:1})]),e("li",null,[t("class "),n(a,{to:"/API/Sora.Entities/Group.html"},{default:s(()=>[t("Group")]),_:1})]),e("li",null,[t("namespace "),n(a,{to:"/API/Sora.html"},{default:s(()=>[t("Sora.Entities")]),_:1})])]),p(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const S=o(i,[["render",_],["__file","GetGroupInfo.html.vue"]]);export{S as default};