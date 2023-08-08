import{_ as o,r as l,o as u,c as r,a as e,d as n,w as s,b as t,e as p,f as i}from"./app-330b5ec4.js";const c={},d=i(`<h1 id="group-getgrouprootfiles-method" tabindex="-1"><a class="header-anchor" href="#group-getgrouprootfiles-method" aria-hidden="true">#</a> Group.GetGroupRootFiles method</h1><p>获取群根目录文件列表</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> List<span class="token punctuation">&lt;</span>GroupFileInfo<span class="token punctuation">&gt;</span> groupFiles<span class="token punctuation">,</span> List<span class="token punctuation">&lt;</span>GroupFolderInfo<span class="token punctuation">&gt;</span> groupFolders<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> 
    <span class="token function">GetGroupRootFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,4),h=e("code",null,"ApiStatusType",-1),_=e("p",null,[e("code",null,"groupFiles"),t(" 文件列表")],-1),f=e("p",null,[e("code",null,"groupFolders"),t(" 文件夹列表")],-1),m=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),t(" See Also")],-1);function k(g,G){const a=l("RouterLink");return u(),r("div",null,[d,e("p",null,[n(a,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:s(()=>[h]),_:1}),t(" API执行状态")]),_,f,m,e("ul",null,[e("li",null,[t("struct "),n(a,{to:"/API/Sora.Entities/ApiStatus.html"},{default:s(()=>[t("ApiStatus")]),_:1})]),e("li",null,[t("struct "),n(a,{to:"/API/Sora.Entities.Info/GroupFileInfo.html"},{default:s(()=>[t("GroupFileInfo")]),_:1})]),e("li",null,[t("struct "),n(a,{to:"/API/Sora.Entities.Info/GroupFolderInfo.html"},{default:s(()=>[t("GroupFolderInfo")]),_:1})]),e("li",null,[t("class "),n(a,{to:"/API/Sora.Entities/Group.html"},{default:s(()=>[t("Group")]),_:1})]),e("li",null,[t("namespace "),n(a,{to:"/API/Sora.html"},{default:s(()=>[t("Sora.Entities")]),_:1})])]),p(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const S=o(c,[["render",k],["__file","GetGroupRootFiles.html.vue"]]);export{S as default};