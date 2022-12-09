import{_ as o,z as l,A as i,Y as t,U as n,a0 as s,C as e,X as c,a6 as r,Q as p}from"./framework-cb9358d9.js";const u={},d=r(`<h1 id="soraapi-getonlineclients-method" tabindex="-1"><a class="header-anchor" href="#soraapi-getonlineclients-method" aria-hidden="true">#</a> SoraApi.GetOnlineClients method</h1><p>获取当前账号在线客户端列表</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> List<span class="token punctuation">&lt;</span>ClientInfo<span class="token punctuation">&gt;</span> clients<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">GetOnlineClients</span><span class="token punctuation">(</span>
    <span class="token class-name"><span class="token keyword">bool</span></span> useCache <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>useCache</td><td>是否使用缓存</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,5),h=t("code",null,"ApiStatusType",-1),m=t("p",null,"List 在线客户端信息列表",-1),_=t("h2",{id:"see-also",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),e(" See Also")],-1);function k(f,S){const a=p("RouterLink");return l(),i("div",null,[d,t("p",null,[n(a,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:s(()=>[h]),_:1}),e(" API执行状态")]),m,_,t("ul",null,[t("li",null,[e("struct "),n(a,{to:"/API/Sora.Entities/ApiStatus.html"},{default:s(()=>[e("ApiStatus")]),_:1})]),t("li",null,[e("struct "),n(a,{to:"/API/Sora.Entities.Info/ClientInfo.html"},{default:s(()=>[e("ClientInfo")]),_:1})]),t("li",null,[e("class "),n(a,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:s(()=>[e("SoraApi")]),_:1})]),t("li",null,[e("namespace "),n(a,{to:"/API/Sora.html"},{default:s(()=>[e("Sora.Entities.Base")]),_:1})])]),c(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const b=o(u,[["render",k],["__file","GetOnlineClients.html.vue"]]);export{b as default};