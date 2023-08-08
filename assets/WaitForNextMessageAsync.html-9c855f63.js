import{_ as r,r as l,o as p,c,a as e,b as a,d as t,w as n,e as d,f as o}from"./app-330b5ec4.js";const i={},u=o(`<h1 id="privatemessageeventargs-waitfornextmessageasync-method-1-of-6" tabindex="-1"><a class="header-anchor" href="#privatemessageeventargs-waitfornextmessageasync-method-1-of-6" aria-hidden="true">#</a> PrivateMessageEventArgs.WaitForNextMessageAsync method (1 of 6)</h1><p>等待下一条消息触发</p><p>当所在的上下文被重复触发时则会直接返回<code>null</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>PrivateMessageEventArgs<span class="token punctuation">&gt;</span></span> <span class="token function">WaitForNextMessageAsync</span><span class="token punctuation">(</span>
    <span class="token class-name">Func<span class="token punctuation">&lt;</span>BaseMessageEventArgs<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">&gt;</span></span> matchFunc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>matchFunc</td><td>指令表达式</td></tr></tbody></table><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return Value</h2><p>触发后的事件参数</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,8),h=o(`<hr><h1 id="privatemessageeventargs-waitfornextmessageasync-method-2-of-6" tabindex="-1"><a class="header-anchor" href="#privatemessageeventargs-waitfornextmessageasync-method-2-of-6" aria-hidden="true">#</a> PrivateMessageEventArgs.WaitForNextMessageAsync method (2 of 6)</h1><p>等待下一条消息触发</p><p>当所在的上下文被重复触发时则会直接返回<code>null</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>PrivateMessageEventArgs<span class="token punctuation">&gt;</span></span> <span class="token function">WaitForNextMessageAsync</span><span class="token punctuation">(</span>
    <span class="token class-name">Func<span class="token punctuation">&lt;</span>BaseMessageEventArgs<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">&gt;</span></span> matchFunc<span class="token punctuation">,</span> <span class="token class-name">TimeSpan</span> timeout<span class="token punctuation">,</span> 
    <span class="token class-name">Func<span class="token punctuation">&lt;</span>ValueTask<span class="token punctuation">&gt;</span></span> timeoutTask <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>matchFunc</td><td>指令表达式</td></tr><tr><td>timeout</td><td>超时</td></tr><tr><td>timeoutTask</td><td>超时后执行的动作</td></tr></tbody></table><h2 id="return-value-1" tabindex="-1"><a class="header-anchor" href="#return-value-1" aria-hidden="true">#</a> Return Value</h2><p>触发后的事件参数</p><h2 id="see-also-1" tabindex="-1"><a class="header-anchor" href="#see-also-1" aria-hidden="true">#</a> See Also</h2>`,9),m=o(`<hr><h1 id="privatemessageeventargs-waitfornextmessageasync-method-3-of-6" tabindex="-1"><a class="header-anchor" href="#privatemessageeventargs-waitfornextmessageasync-method-3-of-6" aria-hidden="true">#</a> PrivateMessageEventArgs.WaitForNextMessageAsync method (3 of 6)</h1><p>等待下一条消息触发</p><p>当所在的上下文被重复触发时则会直接返回<code>false</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>PrivateMessageEventArgs<span class="token punctuation">&gt;</span></span> <span class="token function">WaitForNextMessageAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> commandExp<span class="token punctuation">,</span> 
    <span class="token class-name">MatchType</span> matchType<span class="token punctuation">,</span> <span class="token class-name">RegexOptions</span> regexOptions <span class="token operator">=</span> RegexOptions<span class="token punctuation">.</span>None<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>commandExp</td><td>指令表达式</td></tr><tr><td>matchType</td><td>匹配类型</td></tr><tr><td>regexOptions</td><td>正则匹配选项</td></tr></tbody></table><h2 id="return-value-2" tabindex="-1"><a class="header-anchor" href="#return-value-2" aria-hidden="true">#</a> Return Value</h2><p>触发后的事件参数</p><h2 id="see-also-2" tabindex="-1"><a class="header-anchor" href="#see-also-2" aria-hidden="true">#</a> See Also</h2>`,9),g=o(`<hr><h1 id="privatemessageeventargs-waitfornextmessageasync-method-4-of-6" tabindex="-1"><a class="header-anchor" href="#privatemessageeventargs-waitfornextmessageasync-method-4-of-6" aria-hidden="true">#</a> PrivateMessageEventArgs.WaitForNextMessageAsync method (4 of 6)</h1><p>等待下一条消息触发</p><p>当所在的上下文被重复触发时则会直接返回<code>false</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>PrivateMessageEventArgs<span class="token punctuation">&gt;</span></span> <span class="token function">WaitForNextMessageAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> commandExps<span class="token punctuation">,</span> 
    <span class="token class-name">MatchType</span> matchType<span class="token punctuation">,</span> <span class="token class-name">RegexOptions</span> regexOptions <span class="token operator">=</span> RegexOptions<span class="token punctuation">.</span>None<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>commandExps</td><td>指令表达式</td></tr><tr><td>matchType</td><td>匹配类型</td></tr><tr><td>regexOptions</td><td>正则匹配选项</td></tr></tbody></table><h2 id="return-value-3" tabindex="-1"><a class="header-anchor" href="#return-value-3" aria-hidden="true">#</a> Return Value</h2><p>触发后的事件参数</p><h2 id="see-also-3" tabindex="-1"><a class="header-anchor" href="#see-also-3" aria-hidden="true">#</a> See Also</h2>`,9),v=o(`<hr><h1 id="privatemessageeventargs-waitfornextmessageasync-method-5-of-6" tabindex="-1"><a class="header-anchor" href="#privatemessageeventargs-waitfornextmessageasync-method-5-of-6" aria-hidden="true">#</a> PrivateMessageEventArgs.WaitForNextMessageAsync method (5 of 6)</h1><p>等待下一条消息触发</p><p>当所在的上下文被重复触发时则会直接返回<code>false</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>PrivateMessageEventArgs<span class="token punctuation">&gt;</span></span> <span class="token function">WaitForNextMessageAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> commandExp<span class="token punctuation">,</span> 
    <span class="token class-name">MatchType</span> matchType<span class="token punctuation">,</span> <span class="token class-name">TimeSpan</span> timeout<span class="token punctuation">,</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span>ValueTask<span class="token punctuation">&gt;</span></span> timeoutTask <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> 
    <span class="token class-name">RegexOptions</span> regexOptions <span class="token operator">=</span> RegexOptions<span class="token punctuation">.</span>None<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>commandExp</td><td>指令表达式</td></tr><tr><td>matchType</td><td>匹配类型</td></tr><tr><td>regexOptions</td><td>正则匹配选项</td></tr><tr><td>timeout</td><td>超时</td></tr><tr><td>timeoutTask</td><td>超时后执行的动作</td></tr></tbody></table><h2 id="return-value-4" tabindex="-1"><a class="header-anchor" href="#return-value-4" aria-hidden="true">#</a> Return Value</h2><p>触发后的事件参数，超时后为<code>null</code></p><h2 id="see-also-4" tabindex="-1"><a class="header-anchor" href="#see-also-4" aria-hidden="true">#</a> See Also</h2>`,9),k=o(`<hr><h1 id="privatemessageeventargs-waitfornextmessageasync-method-6-of-6" tabindex="-1"><a class="header-anchor" href="#privatemessageeventargs-waitfornextmessageasync-method-6-of-6" aria-hidden="true">#</a> PrivateMessageEventArgs.WaitForNextMessageAsync method (6 of 6)</h1><p>等待下一条消息触发</p><p>当所在的上下文被重复触发时则会直接返回<code>false</code></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>PrivateMessageEventArgs<span class="token punctuation">&gt;</span></span> <span class="token function">WaitForNextMessageAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> commandExps<span class="token punctuation">,</span> 
    <span class="token class-name">MatchType</span> matchType<span class="token punctuation">,</span> <span class="token class-name">TimeSpan</span> timeout<span class="token punctuation">,</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span>ValueTask<span class="token punctuation">&gt;</span></span> timeoutTask <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> 
    <span class="token class-name">RegexOptions</span> regexOptions <span class="token operator">=</span> RegexOptions<span class="token punctuation">.</span>None<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>commandExps</td><td>指令表达式</td></tr><tr><td>matchType</td><td>匹配类型</td></tr><tr><td>regexOptions</td><td>正则匹配选项</td></tr><tr><td>timeout</td><td>超时</td></tr><tr><td>timeoutTask</td><td>超时后执行的动作</td></tr></tbody></table><h2 id="return-value-5" tabindex="-1"><a class="header-anchor" href="#return-value-5" aria-hidden="true">#</a> Return Value</h2><p>触发后的事件参数，超时后为<code>null</code></p><h2 id="see-also-5" tabindex="-1"><a class="header-anchor" href="#see-also-5" aria-hidden="true">#</a> See Also</h2>`,9);function f(A,x){const s=l("RouterLink");return p(),c("div",null,[u,e("ul",null,[e("li",null,[a("class "),t(s,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs.html"},{default:n(()=>[a("BaseMessageEventArgs")]),_:1})]),e("li",null,[a("class "),t(s,{to:"/API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.html"},{default:n(()=>[a("PrivateMessageEventArgs")]),_:1})]),e("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.EventArgs.SoraEvent")]),_:1})])]),h,e("ul",null,[e("li",null,[a("class "),t(s,{to:"/API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs.html"},{default:n(()=>[a("BaseMessageEventArgs")]),_:1})]),e("li",null,[a("class "),t(s,{to:"/API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.html"},{default:n(()=>[a("PrivateMessageEventArgs")]),_:1})]),e("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.EventArgs.SoraEvent")]),_:1})])]),m,e("ul",null,[e("li",null,[a("enum "),t(s,{to:"/API/Sora.Enumeration/MatchType.html"},{default:n(()=>[a("MatchType")]),_:1})]),e("li",null,[a("class "),t(s,{to:"/API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.html"},{default:n(()=>[a("PrivateMessageEventArgs")]),_:1})]),e("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.EventArgs.SoraEvent")]),_:1})])]),g,e("ul",null,[e("li",null,[a("enum "),t(s,{to:"/API/Sora.Enumeration/MatchType.html"},{default:n(()=>[a("MatchType")]),_:1})]),e("li",null,[a("class "),t(s,{to:"/API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.html"},{default:n(()=>[a("PrivateMessageEventArgs")]),_:1})]),e("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.EventArgs.SoraEvent")]),_:1})])]),v,e("ul",null,[e("li",null,[a("enum "),t(s,{to:"/API/Sora.Enumeration/MatchType.html"},{default:n(()=>[a("MatchType")]),_:1})]),e("li",null,[a("class "),t(s,{to:"/API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.html"},{default:n(()=>[a("PrivateMessageEventArgs")]),_:1})]),e("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.EventArgs.SoraEvent")]),_:1})])]),k,e("ul",null,[e("li",null,[a("enum "),t(s,{to:"/API/Sora.Enumeration/MatchType.html"},{default:n(()=>[a("MatchType")]),_:1})]),e("li",null,[a("class "),t(s,{to:"/API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.html"},{default:n(()=>[a("PrivateMessageEventArgs")]),_:1})]),e("li",null,[a("namespace "),t(s,{to:"/API/Sora.html"},{default:n(()=>[a("Sora.EventArgs.SoraEvent")]),_:1})])]),d(" DO NOT EDIT: generated by xmldocmd for Sora.dll ")])}const b=r(i,[["render",f],["__file","WaitForNextMessageAsync.html.vue"]]);export{b as default};