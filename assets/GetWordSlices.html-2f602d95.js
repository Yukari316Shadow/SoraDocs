import{_ as o,z as l,A as r,Y as a,U as s,a0 as n,C as t,X as i,a6 as c,Q as d}from"./framework-cb9358d9.js";const p={},u=c(`<h1 id="soraapi-getwordslices-method" tabindex="-1"><a class="header-anchor" href="#soraapi-getwordslices-method" aria-hidden="true">#</a> SoraApi.GetWordSlices method</h1><p>获取中文分词</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span> wordList<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">GetWordSlices</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>text</td><td>内容</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2>`,5),h=a("code",null,"ApiStatusType",-1),m=a("p",null,[a("code",null,"wordList"),t(" 分词列表")],-1),_=a("h2",{id:"see-also",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),t(" See Also")],-1);function k(S,f){const e=d("RouterLink");return l(),r("div",null,[u,a("p",null,[s(e,{to:"/API/Sora.Enumeration.ApiType/ApiStatusType.html"},{default:n(()=>[h]),_:1}),t(" API执行状态")]),m,_,a("ul",null,[a("li",null,[t("struct "),s(e,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[t("ApiStatus")]),_:1})]),a("li",null,[t("class "),s(e,{to:"/API/Sora.Entities.Base/SoraApi.html"},{default:n(()=>[t("SoraApi")]),_:1})]),a("li",null,[t("namespace "),s(e,{to:"/API/Sora.html"},{default:n(()=>[t("Sora.Entities.Base")]),_:1})])]),i(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const b=o(p,[["render",k],["__file","GetWordSlices.html.vue"]]);export{b as default};