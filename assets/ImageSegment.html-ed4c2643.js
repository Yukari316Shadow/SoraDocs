import{_ as s,z as o,A as d,Y as e,U as n,a0 as l,C as t,X as r,a6 as i,Q as m}from"./framework-cb9358d9.js";const c={},u=i(`<h1 id="imagesegment-record" tabindex="-1"><a class="header-anchor" href="#imagesegment-record" aria-hidden="true">#</a> ImageSegment record</h1><p>图片</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">record</span> <span class="token class-name">ImageSegment</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEquatable<span class="token punctuation">&lt;</span>BaseSegment<span class="token punctuation">&gt;</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="public-members" tabindex="-1"><a class="header-anchor" href="#public-members" aria-hidden="true">#</a> Public Members</h2>`,4),g=e("thead",null,[e("tr",null,[e("th",null,"name"),e("th",null,"description")])],-1),h=e("td",null,"发送秀图时的特效id，默认为40000",-1),_=e("td",null,"文件名/绝对路径/URL/base64",-1),p=e("td",null,"图片类型",-1),S=e("td",null,"图片子类型",-1),I=e("td",null,"通过网络下载图片时的线程数，默认单线程。",-1),b=e("td",null,"图片链接",-1),f=e("td",null,"只在通过网络 URL 发送时有效，表示是否使用已缓存的文件",-1),k=e("h2",{id:"see-also",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),t(" See Also")],-1);function E(A,D){const a=m("RouterLink");return o(),d("div",null,[u,e("table",null,[g,e("tbody",null,[e("tr",null,[e("td",null,[n(a,{to:"/API/Sora.Entities.Segment.DataModel/ImageSegment/Id.html"},{default:l(()=>[t("Id")]),_:1}),t(" { get; }")]),h]),e("tr",null,[e("td",null,[n(a,{to:"/API/Sora.Entities.Segment.DataModel/ImageSegment/ImgFile.html"},{default:l(()=>[t("ImgFile")]),_:1}),t(" { get; }")]),_]),e("tr",null,[e("td",null,[n(a,{to:"/API/Sora.Entities.Segment.DataModel/ImageSegment/ImgType.html"},{default:l(()=>[t("ImgType")]),_:1}),t(" { get; }")]),p]),e("tr",null,[e("td",null,[n(a,{to:"/API/Sora.Entities.Segment.DataModel/ImageSegment/SubType.html"},{default:l(()=>[t("SubType")]),_:1}),t(" { get; }")]),S]),e("tr",null,[e("td",null,[n(a,{to:"/API/Sora.Entities.Segment.DataModel/ImageSegment/ThreadCount.html"},{default:l(()=>[t("ThreadCount")]),_:1}),t(" { get; }")]),I]),e("tr",null,[e("td",null,[n(a,{to:"/API/Sora.Entities.Segment.DataModel/ImageSegment/Url.html"},{default:l(()=>[t("Url")]),_:1}),t(" { get; }")]),b]),e("tr",null,[e("td",null,[n(a,{to:"/API/Sora.Entities.Segment.DataModel/ImageSegment/UseCache.html"},{default:l(()=>[t("UseCache")]),_:1}),t(" { get; }")]),f])])]),k,e("ul",null,[e("li",null,[t("record "),n(a,{to:"/API/Sora.Entities.Segment.DataModel/BaseSegment.html"},{default:l(()=>[t("BaseSegment")]),_:1})]),e("li",null,[t("namespace "),n(a,{to:"/API/Sora.html"},{default:l(()=>[t("Sora.Entities.Segment.DataModel")]),_:1})])]),r(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const M=s(c,[["render",E],["__file","ImageSegment.html.vue"]]);export{M as default};