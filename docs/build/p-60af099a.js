const e="web-components-stock-price";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:true,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:false,cmpWillUpdate:true,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:false,element:false,event:true,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:true,hostListenerTargetBody:true,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,hydratedSelectorName:"hydrated",initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:false,mode:false,modernPropertyDecls:false,observeAttribute:true,profile:false,prop:true,propBoolean:false,propMutable:false,propNumber:false,propString:true,reflect:false,scoped:false,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:false,slotChildNodesFix:false,slotRelocation:false,state:true,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:false,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:false,vdomText:true,vdomXlink:false,watchCallback:true};var n=Object.defineProperty;var s=(e,t)=>{for(var s in t)n(e,s,{get:t[s],enumerable:true})};var r=new WeakMap;var l=e=>r.get(e);var i=(e,t)=>{r.set(t.t=e,t)};var o=(e,t)=>{const n={l:0,$hostElement$:e,i:t,o:new Map};{n.u=new Promise((e=>n.v=e));e["s-p"]=[];e["s-rc"]=[]}const s=r.set(e,n);return s};var a=(e,t)=>t in e;var f=(e,t)=>(0,console.error)(e,t);var c=new Map;var u=(e,t,n)=>{const s=e.p.replace(/-/g,"_");const r=e.h;if(!r){return void 0}const l=c.get(r);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${r}.entry.js${""}`).then((e=>{{c.set(r,e)}return e[s]}),f)};var v=new Map;var d="sty-id";var p="{visibility:hidden}.hydrated{visibility:inherit}";var h="slot-fb{display:contents}slot-fb[hidden]{display:none}";var m=typeof window!=="undefined"?window:{};var y=m.document||{head:{}};var b={l:0,m:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};var w=(()=>{let e=false;try{y.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=true}}))}catch(e){}return e})();var S=e=>Promise.resolve(e);var $=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var g=false;var C=[];var k=[];var j=(e,t)=>n=>{e.push(n);if(!g){g=true;if(t&&b.l&4){D(x)}else{b.raf(x)}}};var O=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){f(e)}}e.length=0};var x=()=>{O(C);{O(k);if(g=C.length>0){b.raf(x)}}};var D=e=>S().then(e);var E=j(k,true);var L=e=>{e=typeof e;return e==="object"||e==="function"};function T(e){var t,n,s;return(s=(n=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?s:void 0}var M={};s(M,{err:()=>A,map:()=>F,ok:()=>R,unwrap:()=>P,unwrapErr:()=>U});var R=e=>({isOk:true,isErr:false,value:e});var A=e=>({isOk:false,isErr:true,value:e});function F(e,t){if(e.isOk){const n=t(e.value);if(n instanceof Promise){return n.then((e=>R(e)))}else{return R(n)}}if(e.isErr){const t=e.value;return A(t)}throw"should never get here"}var P=e=>{if(e.isOk){return e.value}else{throw e.value}};var U=e=>{if(e.isErr){return e.value}else{throw e.value}};var N=(e,t="")=>{{return()=>{}}};var W=(e,t)=>{{return()=>{}}};var H=(e,t,...n)=>{let s=null;let r=null;let l=false;let i=false;const o=[];const a=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){a(s)}else if(s!=null&&typeof s!=="boolean"){if(l=typeof e!=="function"&&!L(s)){s=String(s)}if(l&&i){o[o.length-1].S+=s}else{o.push(l?z(null,s):s)}i=l}}};a(n);if(t){if(t.key){r=t.key}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}const f=z(e,null);f.$=t;if(o.length>0){f.C=o}{f.k=r}return f};var z=(e,t)=>{const n={l:0,j:e,S:t,O:null,C:null};{n.$=null}{n.k=null}return n};var B={};var Q=e=>e&&e.j===B;var V=(e,t)=>{if(e!=null&&!L(e)){if(t&1){return String(e)}return e}return e};var q=e=>l(e).$hostElement$;var G=(e,t,n)=>{const s=q(e);return{emit:e=>I(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}};var I=(e,t,n)=>{const s=b.ce(t,n);e.dispatchEvent(s);return s};var K=new WeakMap;var X=(e,t,n)=>{let s=v.get(e);if($&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}v.set(e,s)};var _=(e,t,n)=>{var s;const r=Y(t);const l=v.get(r);e=e.nodeType===11?e:y;if(l){if(typeof l==="string"){e=e.head||e;let n=K.get(e);let i;if(!n){K.set(e,n=new Set)}if(!n.has(r)){{i=document.querySelector(`[${d}="${r}"]`)||y.createElement("style");i.innerHTML=l;const n=(s=b.D)!=null?s:T(y);if(n!=null){i.setAttribute("nonce",n)}if(!(t.l&1)){if(e.nodeName==="HEAD"){const t=e.querySelectorAll("link[rel=preconnect]");const n=t.length>0?t[t.length-1].nextSibling:e.querySelector("style");e.insertBefore(i,n)}else if("host"in e){if($){const t=new CSSStyleSheet;t.replaceSync(l);e.adoptedStyleSheets=[t,...e.adoptedStyleSheets]}else{const t=e.querySelector("style");if(t){t.innerHTML=l+t.innerHTML}else{e.prepend(i)}}}else{e.append(i)}}if(t.l&1&&e.nodeName!=="HEAD"){e.insertBefore(i,null)}}if(t.l&4){i.innerHTML+=h}if(n){n.add(r)}}}else if(!e.adoptedStyleSheets.includes(l)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]}}return r};var J=e=>{const t=e.i;const n=e.$hostElement$;const s=t.l;const r=N("attachStyles",t.p);const l=_(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(s&10&&s&2){n["s-sc"]=l;n.classList.add(l+"-h")}r()};var Y=(e,t)=>"sc-"+e.p;var Z=(e,t,n,s,r,l)=>{if(n!==s){let i=a(e,t);let o=t.toLowerCase();if(t==="class"){const t=e.classList;const r=te(n);let l=te(s);if(e["s-si"]){l.push(e["s-si"]);r.forEach((t=>{if(t.startsWith(e["s-si"]))l.push(t)}));l=[...new Set(l)];t.add(...l);delete e["s-si"]}else{t.remove(...r.filter((e=>e&&!l.includes(e))));t.add(...l.filter((e=>e&&!r.includes(e))))}}else if(t==="key");else if(t==="ref"){if(s){s(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(a(m,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(n||s){const r=t.endsWith(ne);t=t.replace(se,"");if(n){b.rel(e,t,n,r)}if(s){b.ael(e,t,s,r)}}}else{const o=L(s);if((i||o&&s!==null)&&!r){try{if(!e.tagName.includes("-")){const r=s==null?"":s;if(t==="list"){i=false}else if(n==null||e[t]!=r){if(typeof e.__lookupSetter__(t)==="function"){e[t]=r}else{e.setAttribute(t,r)}}}else if(e[t]!==s){e[t]=s}}catch(e){}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!i||l&4||r)&&!o){s=s===true?"":s;{e.setAttribute(t,s)}}}}};var ee=/\s/;var te=e=>{if(typeof e==="object"&&"baseVal"in e){e=e.baseVal}if(!e){return[]}return e.split(ee)};var ne="Capture";var se=new RegExp(ne+"$");var re=(e,t,n)=>{const s=t.O.nodeType===11&&t.O.host?t.O.host:t.O;const r=e&&e.$||{};const l=t.$||{};{for(const e of le(Object.keys(r))){if(!(e in l)){Z(s,e,r[e],void 0,n,t.l)}}}for(const e of le(Object.keys(l))){Z(s,e,r[e],l[e],n,t.l)}};function le(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var ie;var oe=false;var ae=false;var fe=(e,n,s)=>{const r=n.C[s];let l=0;let i;let o;if(r.S!==null){i=r.O=y.createTextNode(r.S)}else{i=r.O=y.createElement(!oe&&t.slotRelocation&&r.l&2?"slot-fb":r.j);{re(null,r,ae)}if(r.C){for(l=0;l<r.C.length;++l){o=fe(e,r,l);if(o){i.appendChild(o)}}}}i["s-hn"]=ie;return i};var ce=(e,t,n,s,r,l)=>{let i=e;let o;if(i.shadowRoot&&i.tagName===ie){i=i.shadowRoot}for(;r<=l;++r){if(s[r]){o=fe(null,n,r);if(o){s[r].O=o;me(i,o,t)}}}};var ue=(e,t,n)=>{for(let s=t;s<=n;++s){const t=e[s];if(t){const e=t.O;he(t);if(e){e.remove()}}}};var ve=(e,t,n,s,r=false)=>{let l=0;let i=0;let o=0;let a=0;let f=t.length-1;let c=t[0];let u=t[f];let v=s.length-1;let d=s[0];let p=s[v];let h;let m;while(l<=f&&i<=v){if(c==null){c=t[++l]}else if(u==null){u=t[--f]}else if(d==null){d=s[++i]}else if(p==null){p=s[--v]}else if(de(c,d,r)){pe(c,d,r);c=t[++l];d=s[++i]}else if(de(u,p,r)){pe(u,p,r);u=t[--f];p=s[--v]}else if(de(c,p,r)){pe(c,p,r);me(e,c.O,u.O.nextSibling);c=t[++l];p=s[--v]}else if(de(u,d,r)){pe(u,d,r);me(e,u.O,c.O);u=t[--f];d=s[++i]}else{o=-1;{for(a=l;a<=f;++a){if(t[a]&&t[a].k!==null&&t[a].k===d.k){o=a;break}}}if(o>=0){m=t[o];if(m.j!==d.j){h=fe(t&&t[i],n,o)}else{pe(m,d,r);t[o]=void 0;h=m.O}d=s[++i]}else{h=fe(t&&t[i],n,i);d=s[++i]}if(h){{me(c.O.parentNode,h,c.O)}}}}if(l>f){ce(e,s[v+1]==null?null:s[v+1].O,n,s,i,v)}else if(i>v){ue(t,l,f)}};var de=(e,t,n=false)=>{if(e.j===t.j){if(!n){return e.k===t.k}if(n&&!e.k&&t.k){e.k=t.k}return true}return false};var pe=(e,n,s=false)=>{const r=n.O=e.O;const l=e.C;const i=n.C;const o=n.S;if(o===null){{{re(e,n,ae)}}if(l!==null&&i!==null){ve(r,l,n,i,s)}else if(i!==null){if(e.S!==null){r.textContent=""}ce(r,null,n,i,0,i.length-1)}else if(!s&&t.updatable&&l!==null){ue(l,0,l.length-1)}}else if(e.S!==o){r.data=o}};var he=e=>{{e.$&&e.$.ref&&e.$.ref(null);e.C&&e.C.map(he)}};var me=(e,t,n)=>{{return e==null?void 0:e.insertBefore(t,n)}};var ye=(e,t,n=false)=>{const s=e.$hostElement$;const r=e.i;const l=e.L||z(null,null);const i=Q(t)?t:H(null,null,t);ie=s.tagName;if(n&&i.$){for(const e of Object.keys(i.$)){if(s.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){i.$[e]=s[e]}}}i.j=null;i.l|=4;e.L=i;i.O=l.O=s.shadowRoot||s;oe=(r.l&1)!==0;pe(l,i,n)};var be=(e,t)=>{if(t&&!e.T&&t["s-p"]){const n=t["s-p"].push(new Promise((s=>e.T=()=>{t["s-p"].splice(n-1,1);s()})))}};var we=(e,t)=>{{e.l|=16}if(e.l&4){e.l|=512;return}be(e,e.M);const n=()=>Se(e,t);return E(n)};var Se=(e,t)=>{const n=e.$hostElement$;const s=N("scheduleUpdate",e.i.p);const r=e.t;if(!r){throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`)}let l;if(t){{e.l|=256;if(e.R){e.R.map((([e,t])=>xe(r,e,t)));e.R=void 0}}{l=xe(r,"componentWillLoad")}}else{{l=xe(r,"componentWillUpdate")}}s();return $e(l,(()=>Ce(e,r,t)))};var $e=(e,t)=>ge(e)?e.then(t).catch((e=>{console.error(e);t()})):t();var ge=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var Ce=async(e,t,n)=>{var s;const r=e.$hostElement$;const l=N("update",e.i.p);const i=r["s-rc"];if(n){J(e)}const o=N("render",e.i.p);{ke(e,t,r,n)}if(i){i.map((e=>e()));r["s-rc"]=void 0}o();l();{const t=(s=r["s-p"])!=null?s:[];const n=()=>je(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.l|=4;t.length=0}}};var ke=(e,t,n,s)=>{try{t=t.render();{e.l&=~16}{e.l|=2}{{{ye(e,t,s)}}}}catch(t){f(t,e.$hostElement$)}return null};var je=e=>{const t=e.i.p;const n=e.$hostElement$;const s=N("postUpdate",t);const r=e.t;const l=e.M;if(!(e.l&64)){e.l|=64;{De(n)}{xe(r,"componentDidLoad")}s();{e.v(n);if(!l){Oe()}}}else{{xe(r,"componentDidUpdate")}s()}{if(e.T){e.T();e.T=void 0}if(e.l&512){D((()=>we(e,false)))}e.l&=~(4|512)}};var Oe=t=>{{De(y.documentElement)}D((()=>I(m,"appload",{detail:{namespace:e}})))};var xe=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){f(e)}}return void 0};var De=e=>{var n;return e.classList.add((n=t.hydratedSelectorName)!=null?n:"hydrated")};var Ee=(e,t)=>l(e).o.get(t);var Le=(e,t,n,s)=>{const r=l(e);if(!r){throw new Error(`Couldn't find host element for "${s.p}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`)}const i=r.$hostElement$;const o=r.o.get(t);const a=r.l;const c=r.t;n=V(n,s.A[t][0]);const u=Number.isNaN(o)&&Number.isNaN(n);const v=n!==o&&!u;if((!(a&8)||o===void 0)&&v){r.o.set(t,n);if(c){if(s.F&&a&128){const e=s.F[t];if(e){e.map((e=>{try{c[e](n,o,t)}catch(e){f(e,i)}}))}}if((a&(2|16))===2){we(r,false)}}}};var Te=(e,n,s)=>{var r,i;const o=e.prototype;if(n.A||(n.F||e.watchers)){if(e.watchers&&!n.F){n.F=e.watchers}const a=Object.entries((r=n.A)!=null?r:{});a.map((([e,[t]])=>{if(t&31||s&2&&t&32){const{get:r,set:i}=Object.getOwnPropertyDescriptor(o,e)||{};if(r)n.A[e][0]|=2048;if(i)n.A[e][0]|=4096;if(s&1||!r){Object.defineProperty(o,e,{get(){{if((n.A[e][0]&2048)===0){return Ee(this,e)}const t=l(this);const s=t?t.t:o;if(!s)return;return s[e]}},configurable:true,enumerable:true})}Object.defineProperty(o,e,{set(r){const o=l(this);if(i){const s=t&32?this[e]:o.$hostElement$[e];if(typeof s==="undefined"&&o.o.get(e)){r=o.o.get(e)}else if(!o.o.get(e)&&s){o.o.set(e,s)}i.apply(this,[V(r,t)]);r=t&32?this[e]:o.$hostElement$[e];Le(this,e,r,n);return}{if((s&1)===0||(n.A[e][0]&4096)===0){Le(this,e,r,n);if(s&1&&!o.t){o.u.then((()=>{if(n.A[e][0]&4096&&o.t[e]!==o.o.get(e)){o.t[e]=r}}))}return}const l=()=>{const s=o.t[e];if(!o.o.get(e)&&s){o.o.set(e,s)}o.t[e]=V(r,t);Le(this,e,o.t[e],n)};if(o.t){l()}else{o.u.then((()=>l()))}}}})}}));if(s&1){const s=new Map;o.attributeChangedCallback=function(e,r,i){b.jmp((()=>{var a;const f=s.get(e);if(this.hasOwnProperty(f)&&t.lazyLoad){i=this[f];delete this[f]}else if(o.hasOwnProperty(f)&&typeof this[f]==="number"&&this[f]==i){return}else if(f==null){const t=l(this);const s=t==null?void 0:t.l;if(s&&!(s&8)&&s&128&&i!==r){const s=t.t;const l=(a=n.F)==null?void 0:a[e];l==null?void 0:l.forEach((t=>{if(s[t]!=null){s[t].call(s,i,r,e)}}))}return}const c=Object.getOwnPropertyDescriptor(o,f);i=i===null&&typeof this[f]==="boolean"?false:i;if(i!==this[f]&&(!c.get||!!c.set)){this[f]=i}}))};e.observedAttributes=Array.from(new Set([...Object.keys((i=n.F)!=null?i:{}),...a.filter((([e,t])=>t[0]&15)).map((([e,t])=>{const n=t[1]||e;s.set(n,e);return n}))]))}}return e};var Me=async(e,t,n,s)=>{let r;if((t.l&32)===0){t.l|=32;const s=n.h;if(s){const e=u(n);if(e&&"then"in e){const t=W();r=await e;t()}else{r=e}if(!r){throw new Error(`Constructor for "${n.p}#${t.P}" was not found`)}if(!r.isProxied){{n.F=r.watchers}Te(r,n,2);r.isProxied=true}const s=N("createInstance",n.p);{t.l|=8}try{new r(t)}catch(e){f(e)}{t.l&=~8}{t.l|=128}s()}else{r=e.constructor;const n=e.localName;customElements.whenDefined(n).then((()=>t.l|=128))}if(r&&r.style){let e;if(typeof r.style==="string"){e=r.style}const t=Y(n);if(!v.has(t)){const s=N("registerStyles",n.p);X(t,e,!!(n.l&1));s()}}}const l=t.M;const i=()=>we(t,true);if(l&&l["s-rc"]){l["s-rc"].push(i)}else{i()}};var Re=e=>{};var Ae=e=>{if((b.l&1)===0){const t=l(e);const n=t.i;const s=N("connectedCallback",n.p);if(!(t.l&1)){t.l|=1;{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){be(t,t.M=n);break}}}if(n.A){Object.entries(n.A).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{Me(e,t,n)}}else{Ne(e,t,n.U);if(t==null?void 0:t.t);else if(t==null?void 0:t.u){t.u.then((()=>Re()))}}s()}};var Fe=e=>{};var Pe=async e=>{if((b.l&1)===0){const t=l(e);{if(t.N){t.N.map((e=>e()));t.N=void 0}}if(t==null?void 0:t.t);else if(t==null?void 0:t.u){t.u.then((()=>Fe()))}}if(K.has(e)){K.delete(e)}if(e.shadowRoot&&K.has(e.shadowRoot)){K.delete(e.shadowRoot)}};var Ue=(e,t={})=>{var n;const s=N();const r=[];const i=t.exclude||[];const a=m.customElements;const f=y.head;const c=f.querySelector("meta[charset]");const u=y.createElement("style");const v=[];let d;let w=true;Object.assign(b,t);b.m=new URL(t.resourcesUrl||"./",y.baseURI).href;let S=false;e.map((e=>{e[1].map((t=>{var n;const s={l:t[0],p:t[1],A:t[2],U:t[3]};if(s.l&4){S=true}{s.A=t[2]}{s.U=t[3]}{s.F=(n=t[4])!=null?n:{}}const f=s.p;const c=class extends HTMLElement{constructor(e){super(e);this.hasRegisteredEventListeners=false;e=this;o(e,s);if(s.l&1){{if(!e.shadowRoot){{e.attachShadow({mode:"open"})}}else{if(e.shadowRoot.mode!=="open"){throw new Error(`Unable to re-use existing shadow root for ${s.p}! Mode is set to ${e.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}}}}connectedCallback(){const e=l(this);if(!this.hasRegisteredEventListeners){this.hasRegisteredEventListeners=true;Ne(this,e,s.U)}if(d){clearTimeout(d);d=null}if(w){v.push(this)}else{b.jmp((()=>Ae(this)))}}disconnectedCallback(){b.jmp((()=>Pe(this)));b.raf((()=>{var e;const t=l(this);if(((e=t==null?void 0:t.L)==null?void 0:e.O)instanceof Node&&!t.L.O.isConnected){delete t.L.O}}))}componentOnReady(){return l(this).u}};s.h=e[0];if(!i.includes(f)&&!a.get(f)){r.push(f);a.define(f,Te(c,s,1))}}))}));if(r.length>0){if(S){u.textContent+=h}{u.textContent+=r.sort()+p}if(u.innerHTML.length){u.setAttribute("data-styles","");const e=(n=b.D)!=null?n:T(y);if(e!=null){u.setAttribute("nonce",e)}f.insertBefore(u,c?c.nextSibling:f.firstChild)}}w=false;if(v.length){v.map((e=>e.connectedCallback()))}else{{b.jmp((()=>d=setTimeout(Oe,30)))}}s()};var Ne=(e,t,n,s)=>{if(n){n.map((([n,s,r])=>{const l=He(e,n);const i=We(t,r);const o=ze(n);b.ael(l,s,i,o);(t.N=t.N||[]).push((()=>b.rel(l,s,i,o)))}))}};var We=(e,t)=>n=>{var s;try{{if(e.l&256){(s=e.t)==null?void 0:s[t](n)}else{(e.R=e.R||[]).push([t,n])}}}catch(e){f(e)}};var He=(e,t)=>{if(t&16)return y.body;return e};var ze=e=>w?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;var Be=e=>b.D=e;export{Ue as b,G as c,H as h,S as p,i as r,Be as s};
//# sourceMappingURL=p-60af099a.js.map