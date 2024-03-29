import{_ as o,r as l,o as r,c as d,a,b as e,d as t,w as n,e as c,f as i}from"./app-330b5ec4.js";const u={},p=i(`<h1 id="user-sendprivateforwardmsg-method" tabindex="-1"><a class="header-anchor" href="#user-sendprivateforwardmsg-method" aria-hidden="true">#</a> User.SendPrivateForwardMsg method</h1><p>发送合并转发(私聊)</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span><span class="token punctuation">(</span>ApiStatus apiStatus<span class="token punctuation">,</span> <span class="token keyword">int</span> messageId<span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> <span class="token function">SendPrivateForwardMsg</span><span class="token punctuation">(</span>
    <span class="token class-name">IEnumerable<span class="token punctuation">&lt;</span>CustomNode<span class="token punctuation">&gt;</span></span> nodeList<span class="token punctuation">,</span> <span class="token class-name">TimeSpan<span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m=a("thead",null,[a("tr",null,[a("th",null,"parameter"),a("th",null,"description")])],-1),h=a("td",null,"nodeList",-1),_=a("code",null,"CustomNode",-1),k=a("tr",null,[a("td",null,"timeout"),a("td",null,"覆盖原超时")],-1),f=a("h2",{id:"see-also",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),e(" See Also")],-1);function S(v,g){const s=l("RouterLink");return r(),d("div",null,[p,a("table",null,[m,a("tbody",null,[a("tr",null,[h,a("td",null,[e("节点("),t(s,{to:"/API/Sora.Entities.Segment.DataModel/CustomNode.html"},{default:n(()=>[_]),_:1}),e(")消息段列表")])]),k])]),f,a("ul",null,[a("li",null,[e("struct "),t(s,{to:"/API/Sora.Entities/ApiStatus.html"},{default:n(()=>[e("ApiStatus")]),_:1})]),a("li",null,[e("record "),t(s,{to:"/API/Sora.Entities.Segment.DataModel/CustomNode.html"},{default:n(()=>[e("CustomNode")]),_:1})]),a("li",null,[e("class "),t(s,{to:"/API/Sora.Entities/User.html"},{default:n(()=>[e("User")]),_:1})]),a("li",null,[e("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[e("Sora.Entities")]),_:1})])]),c(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const w=o(u,[["render",S],["__file","SendPrivateForwardMsg.html.vue"]]);export{w as default};
