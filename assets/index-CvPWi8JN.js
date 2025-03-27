/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Kn(t,n,e){return(n=Qn(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Yt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Yt(Object(e),!0).forEach(function(a){Kn(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Yt(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function qn(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Qn(t){var n=qn(t,"string");return typeof n=="symbol"?n:n+""}const Ut=()=>{};let It={},gn={},hn=null,pn={mark:Ut,measure:Ut};try{typeof window<"u"&&(It=window),typeof document<"u"&&(gn=document),typeof MutationObserver<"u"&&(hn=MutationObserver),typeof performance<"u"&&(pn=performance)}catch{}const{userAgent:Wt=""}=It.navigator||{},N=It,h=gn,Ht=hn,q=pn;N.document;const O=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",bn=~Wt.indexOf("MSIE")||~Wt.indexOf("Trident/");var Jn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Zn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,yn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},te={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},vn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],p="classic",et="duotone",ne="sharp",ee="sharp-duotone",xn=[p,et,ne,ee],ae={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},re={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ie=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),oe={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},se=["fak","fa-kit","fakd","fa-kit-duotone"],Gt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},le=["kit"],fe={kit:{"fa-kit":"fak"}},ce=["fak","fakd"],ue={kit:{fak:"fa-kit"}},Xt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},de=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],me=["fak","fa-kit","fakd","fa-kit-duotone"],ge={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},he={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},pe={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},mt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},be=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],gt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...de,...be],ye=["solid","regular","light","thin","duotone","brands"],An=[1,2,3,4,5,6,7,8,9,10],ve=An.concat([11,12,13,14,15,16,17,18,19,20]),xe=[...Object.keys(pe),...ye,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY].concat(An.map(t=>"".concat(t,"x"))).concat(ve.map(t=>"w-".concat(t))),Ae={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const P="___FONT_AWESOME___",ht=16,kn="fa",wn="svg-inline--fa",L="data-fa-i2svg",pt="data-fa-pseudo-element",ke="data-fa-pseudo-element-pending",Nt="data-prefix",Tt="data-icon",Vt="fontawesome-i2svg",we="async",Se=["HTML","HEAD","STYLE","SCRIPT"],Sn=(()=>{try{return!0}catch{return!1}})();function $(t){return new Proxy(t,{get(n,e){return e in n?n[e]:n[p]}})}const Pn=s({},yn);Pn[p]=s(s(s(s({},{"fa-duotone":"duotone"}),yn[p]),Gt.kit),Gt["kit-duotone"]);const Pe=$(Pn),bt=s({},oe);bt[p]=s(s(s(s({},{duotone:"fad"}),bt[p]),Xt.kit),Xt["kit-duotone"]);const Bt=$(bt),yt=s({},mt);yt[p]=s(s({},yt[p]),ue.kit);const Ft=$(yt),vt=s({},he);vt[p]=s(s({},vt[p]),fe.kit);$(vt);const Ee=Jn,En="fa-layers-text",Oe=Zn,Ce=s({},ae);$(Ce);const Ie=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt=te,Ne=[...le,...xe],G=N.FontAwesomeConfig||{};function Te(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Fe(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[e,a]=n;const r=Fe(Te(e));r!=null&&(G[a]=r)});const On={styleDefault:"solid",familyDefault:p,cssPrefix:kn,replacementClass:wn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};G.familyPrefix&&(G.cssPrefix=G.familyPrefix);const U=s(s({},On),G);U.autoReplaceSvg||(U.observeMutations=!1);const f={};Object.keys(On).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(n){U[t]=n,X.forEach(e=>e(f))},get:function(){return U[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){U.cssPrefix=t,X.forEach(n=>n(f))},get:function(){return U.cssPrefix}});N.FontAwesomeConfig=f;const X=[];function _e(t){return X.push(t),()=>{X.splice(X.indexOf(t),1)}}const I=ht,k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Me(t){if(!t||!O)return;const n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;const e=h.head.childNodes;let a=null;for(let r=e.length-1;r>-1;r--){const i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(n,a),t}const Le="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function V(){let t=12,n="";for(;t-- >0;)n+=Le[Math.random()*62|0];return n}function W(t){const n=[];for(let e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function _t(t){return t.classList?W(t.classList):(t.getAttribute("class")||"").split(" ").filter(n=>n)}function Cn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function De(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,'="').concat(Cn(t[e]),'" '),"").trim()}function at(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,": ").concat(t[e].trim(),";"),"")}function Mt(t){return t.size!==k.size||t.x!==k.x||t.y!==k.y||t.rotate!==k.rotate||t.flipX||t.flipY}function Re(t){let{transform:n,containerWidth:e,iconWidth:a}=t;const r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:c}}function ze(t){let{transform:n,width:e=ht,height:a=ht,startCentered:r=!1}=t,i="";return r&&bn?i+="translate(".concat(n.x/I-e/2,"em, ").concat(n.y/I-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(n.x/I,"em), calc(-50% + ").concat(n.y/I,"em)) "):i+="translate(".concat(n.x/I,"em, ").concat(n.y/I,"em) "),i+="scale(".concat(n.size/I*(n.flipX?-1:1),", ").concat(n.size/I*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var je=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function In(){const t=kn,n=wn,e=f.cssPrefix,a=f.replacementClass;let r=je;if(e!==t||a!==n){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(l,".".concat(a))}return r}let $t=!1;function ft(){f.autoAddCss&&!$t&&(Me(In()),$t=!0)}var Ye={mixout(){return{dom:{css:In,insertCss:ft}}},hooks(){return{beforeDOMElementCreation(){ft()},beforeI2svg(){ft()}}}};const E=N||{};E[P]||(E[P]={});E[P].styles||(E[P].styles={});E[P].hooks||(E[P].hooks={});E[P].shims||(E[P].shims=[]);var w=E[P];const Nn=[],Tn=function(){h.removeEventListener("DOMContentLoaded",Tn),tt=1,Nn.map(t=>t())};let tt=!1;O&&(tt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),tt||h.addEventListener("DOMContentLoaded",Tn));function Ue(t){O&&(tt?setTimeout(t,0):Nn.push(t))}function K(t){const{tag:n,attributes:e={},children:a=[]}=t;return typeof t=="string"?Cn(t):"<".concat(n," ").concat(De(e),">").concat(a.map(K).join(""),"</").concat(n,">")}function Kt(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ct=function(n,e,a,r){var i=Object.keys(n),o=i.length,l=e,u,c,d;for(a===void 0?(u=1,d=n[i[0]]):(u=0,d=a);u<o;u++)c=i[u],d=l(d,n[c],c,n);return d};function We(t){const n=[];let e=0;const a=t.length;for(;e<a;){const r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){const i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function xt(t){const n=We(t);return n.length===1?n[0].toString(16):null}function He(t,n){const e=t.length;let a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function qt(t){return Object.keys(t).reduce((n,e)=>{const a=t[e];return!!a.icon?n[a.iconName]=a.icon:n[e]=a,n},{})}function At(t,n){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=e,r=qt(n);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(t,qt(n)):w.styles[t]=s(s({},w.styles[t]||{}),r),t==="fas"&&At("fa",n)}const{styles:B,shims:Ge}=w,Fn=Object.keys(Ft),Xe=Fn.reduce((t,n)=>(t[n]=Object.keys(Ft[n]),t),{});let Lt=null,_n={},Mn={},Ln={},Dn={},Rn={};function Ve(t){return~Ne.indexOf(t)}function Be(t,n){const e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Ve(r)?r:null}const zn=()=>{const t=a=>ct(B,(r,i,o)=>(r[o]=ct(i,a,{}),r),{});_n=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),Mn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),Rn=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(l=>{a[l]=i}),a});const n="far"in B||f.autoFetchSvg,e=ct(Ge,(a,r)=>{const i=r[0];let o=r[1];const l=r[2];return o==="far"&&!n&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Ln=e.names,Dn=e.unicodes,Lt=rt(f.styleDefault,{family:f.familyDefault})};_e(t=>{Lt=rt(t.styleDefault,{family:f.familyDefault})});zn();function Dt(t,n){return(_n[t]||{})[n]}function $e(t,n){return(Mn[t]||{})[n]}function M(t,n){return(Rn[t]||{})[n]}function jn(t){return Ln[t]||{prefix:null,iconName:null}}function Ke(t){const n=Dn[t],e=Dt("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function T(){return Lt}const Yn=()=>({prefix:null,iconName:null,rest:[]});function qe(t){let n=p;const e=Fn.reduce((a,r)=>(a[r]="".concat(f.cssPrefix,"-").concat(r),a),{});return xn.forEach(a=>{(t.includes(e[a])||t.some(r=>Xe[a].includes(r)))&&(n=a)}),n}function rt(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:e=p}=n,a=Pe[e][t];if(e===et&&!t)return"fad";const r=Bt[e][t]||Bt[e][a],i=t in w.styles?t:null;return r||i||null}function Qe(t){let n=[],e=null;return t.forEach(a=>{const r=Be(f.cssPrefix,a);r?e=r:a&&n.push(a)}),{iconName:e,rest:n}}function Qt(t){return t.sort().filter((n,e,a)=>a.indexOf(n)===e)}function it(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:e=!1}=n;let a=null;const r=gt.concat(me),i=Qt(t.filter(g=>r.includes(g))),o=Qt(t.filter(g=>!gt.includes(g))),l=i.filter(g=>(a=g,!vn.includes(g))),[u=null]=l,c=qe(i),d=s(s({},Qe(o)),{},{prefix:rt(u,{family:c})});return s(s(s({},d),na({values:t,family:c,styles:B,config:f,canonical:d,givenPrefix:a})),Je(e,a,d))}function Je(t,n,e){let{prefix:a,iconName:r}=e;if(t||!a||!r)return{prefix:a,iconName:r};const i=n==="fa"?jn(r):{},o=M(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!B.far&&B.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ze=xn.filter(t=>t!==p||t!==et),ta=Object.keys(mt).filter(t=>t!==p).map(t=>Object.keys(mt[t])).flat();function na(t){const{values:n,family:e,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,l=e===et,u=n.includes("fa-duotone")||n.includes("fad"),c=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||c||d)&&(a.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ze.includes(e)&&(Object.keys(i).find(m=>ta.includes(m))||o.autoFetchSvg)){const m=ie.get(e).defaultShortPrefixId;a.prefix=m,a.iconName=M(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=T()||"fas"),a}class ea{constructor(){this.definitions={}}add(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];const r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=s(s({},this.definitions[i]||{}),r[i]),At(i,r[i]);const o=Ft[p][i];o&&At(o,r[i]),zn()})}reset(){this.definitions={}}_pullDefinitions(n,e){const a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:l}=a[r],u=l[2];n[i]||(n[i]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(n[i][c]=l)}),n[i][o]=l}),n}}let Jt=[],j={};const Y={},aa=Object.keys(Y);function ra(t,n){let{mixoutsTo:e}=n;return Jt=t,j={},Object.keys(Y).forEach(a=>{aa.indexOf(a)===-1&&delete Y[a]}),Jt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(e[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{e[i]||(e[i]={}),e[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{j[o]||(j[o]=[]),j[o].push(i[o])})}a.provides&&a.provides(Y)}),e}function kt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];return(j[t]||[]).forEach(o=>{n=o.apply(null,[n,...a])}),n}function D(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];(j[t]||[]).forEach(i=>{i.apply(null,e)})}function F(){const t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Y[t]?Y[t].apply(null,n):void 0}function wt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:n}=t;const e=t.prefix||T();if(n)return n=M(e,n)||n,Kt(Un.definitions,e,n)||Kt(w.styles,e,n)}const Un=new ea,ia=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,D("noAuto")},oa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(D("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Ue(()=>{la({autoReplaceSvgRoot:n}),D("watch",t)})}},sa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:M(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=rt(t[0]);return{prefix:e,iconName:M(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(Ee))){const n=it(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||T(),iconName:M(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){const n=T();return{prefix:n,iconName:M(n,t)||t}}}},v={noAuto:ia,config:f,dom:oa,parse:sa,library:Un,findIconDefinition:wt,toHtml:K},la=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n=h}=t;(Object.keys(w.styles).length>0||f.autoFetchSvg)&&O&&f.autoReplaceSvg&&v.dom.i2svg({node:n})};function ot(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(e=>K(e))}}),Object.defineProperty(t,"node",{get:function(){if(!O)return;const e=h.createElement("div");return e.innerHTML=t.html,e.children}}),t}function fa(t){let{children:n,main:e,mask:a,attributes:r,styles:i,transform:o}=t;if(Mt(o)&&e.found&&!a.found){const{width:l,height:u}=e,c={x:l/u/2,y:.5};r.style=at(s(s({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ca(t){let{prefix:n,iconName:e,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(n,"-").concat(f.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},r),{},{id:o}),children:a}]}]}function Rt(t){const{icons:{main:n,mask:e},prefix:a,iconName:r,transform:i,symbol:o,title:l,maskId:u,titleId:c,extra:d,watchable:g=!1}=t,{width:m,height:b}=e.found?e:n,C=ce.includes(a),_=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(z=>d.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(d.classes).join(" ");let x={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)})};const S=C&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};g&&(x.attributes[L]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||V())},children:[l]}),delete x.attributes.title);const y=s(s({},x),{},{prefix:a,iconName:r,main:n,mask:e,maskId:u,transform:i,symbol:o,styles:s(s({},S),d.styles)}),{children:A,attributes:R}=e.found&&n.found?F("generateAbstractMask",y)||{children:[],attributes:{}}:F("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=A,y.attributes=R,o?ca(y):fa(y)}function Zt(t){const{content:n,width:e,height:a,transform:r,title:i,extra:o,watchable:l=!1}=t,u=s(s(s({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[L]="");const c=s({},o.styles);Mt(r)&&(c.transform=ze({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);const d=at(c);d.length>0&&(u.style=d);const g=[];return g.push({tag:"span",attributes:u,children:[n]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function ua(t){const{content:n,title:e,extra:a}=t,r=s(s(s({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=at(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}const{styles:ut}=w;function St(t){const n=t[0],e=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:e,icon:r}}const da={found:!1,width:512,height:512};function ma(t,n){!Sn&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Pt(t,n){let e=n;return n==="fa"&&f.styleDefault!==null&&(n=T()),new Promise((a,r)=>{if(e==="fa"){const i=jn(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&ut[n]&&ut[n][t]){const i=ut[n][t];return a(St(i))}ma(t,n),a(s(s({},da),{},{icon:f.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}const tn=()=>{},Et=f.measurePerformance&&q&&q.mark&&q.measure?q:{mark:tn,measure:tn},H='FA "6.7.2"',ga=t=>(Et.mark("".concat(H," ").concat(t," begins")),()=>Wn(t)),Wn=t=>{Et.mark("".concat(H," ").concat(t," ends")),Et.measure("".concat(H," ").concat(t),"".concat(H," ").concat(t," begins"),"".concat(H," ").concat(t," ends"))};var zt={begin:ga,end:Wn};const J=()=>{};function nn(t){return typeof(t.getAttribute?t.getAttribute(L):null)=="string"}function ha(t){const n=t.getAttribute?t.getAttribute(Nt):null,e=t.getAttribute?t.getAttribute(Tt):null;return n&&e}function pa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function ba(){return f.autoReplaceSvg===!0?Z.replace:Z[f.autoReplaceSvg]||Z.replace}function ya(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function va(t){return h.createElement(t)}function Hn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:e=t.tag==="svg"?ya:va}=n;if(typeof t=="string")return h.createTextNode(t);const a=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Hn(i,{ceFn:e}))}),a}function xa(t){let n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}const Z={replace:function(t){const n=t[0];if(n.parentNode)if(t[1].forEach(e=>{n.parentNode.insertBefore(Hn(e),n)}),n.getAttribute(L)===null&&f.keepOriginalSource){let e=h.createComment(xa(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){const n=t[0],e=t[1];if(~_t(n).indexOf(f.replacementClass))return Z.replace(t);const a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){const i=e[0].attributes.class.split(" ").reduce((o,l)=>(l===f.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}const r=e.map(i=>K(i)).join(`
`);n.setAttribute(L,""),n.innerHTML=r}};function en(t){t()}function Gn(t,n){const e=typeof n=="function"?n:J;if(t.length===0)e();else{let a=en;f.mutateApproach===we&&(a=N.requestAnimationFrame||en),a(()=>{const r=ba(),i=zt.begin("mutate");t.map(r),i(),e()})}}let jt=!1;function Xn(){jt=!0}function Ot(){jt=!1}let nt=null;function an(t){if(!Ht||!f.observeMutations)return;const{treeCallback:n=J,nodeCallback:e=J,pseudoElementsCallback:a=J,observeMutationsRoot:r=h}=t;nt=new Ht(i=>{if(jt)return;const o=T();W(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!nn(l.addedNodes[0])&&(f.searchPseudoElements&&a(l.target),n(l.target)),l.type==="attributes"&&l.target.parentNode&&f.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&nn(l.target)&&~Ie.indexOf(l.attributeName))if(l.attributeName==="class"&&ha(l.target)){const{prefix:u,iconName:c}=it(_t(l.target));l.target.setAttribute(Nt,u||o),c&&l.target.setAttribute(Tt,c)}else pa(l.target)&&e(l.target)})}),O&&nt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Aa(){nt&&nt.disconnect()}function ka(t){const n=t.getAttribute("style");let e=[];return n&&(e=n.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),e}function wa(t){const n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=it(_t(t));return r.prefix||(r.prefix=T()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=$e(r.prefix,t.innerText)||Dt(r.prefix,xt(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Sa(t){const n=W(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(e?n["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||V()):(n["aria-hidden"]="true",n.focusable="false")),n}function Pa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:k,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:e,prefix:a,rest:r}=wa(t),i=Sa(t),o=kt("parseNodeAttributes",{},t);let l=n.styleParser?ka(t):[];return s({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:k,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i}},o)}const{styles:Ea}=w;function Vn(t){const n=f.autoReplaceSvg==="nest"?rn(t,{styleParser:!1}):rn(t);return~n.extra.classes.indexOf(En)?F("generateLayersText",t,n):F("generateSvgReplacementMutation",t,n)}function Oa(){return[...se,...gt]}function on(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();const e=h.documentElement.classList,a=d=>e.add("".concat(Vt,"-").concat(d)),r=d=>e.remove("".concat(Vt,"-").concat(d)),i=f.autoFetchSvg?Oa():vn.concat(Object.keys(Ea));i.includes("fa")||i.push("fa");const o=[".".concat(En,":not([").concat(L,"])")].concat(i.map(d=>".".concat(d,":not([").concat(L,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=W(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const u=zt.begin("onTree"),c=l.reduce((d,g)=>{try{const m=Vn(g);m&&d.push(m)}catch(m){Sn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,g)=>{Promise.all(c).then(m=>{Gn(m,()=>{a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),u(),d()})}).catch(m=>{u(),g(m)})})}function Ca(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vn(t).then(e=>{e&&Gn([e],n)})}function Ia(t){return function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(n||{}).icon?n:wt(n||{});let{mask:r}=e;return r&&(r=(r||{}).icon?r:wt(r||{})),t(a,s(s({},e),{},{mask:r}))}}const Na=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=k,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:d={}}=n;if(!t)return;const{prefix:g,iconName:m,icon:b}=t;return ot(s({type:"icon"},t),()=>(D("beforeDOMElementCreation",{iconDefinition:t,params:n}),f.autoA11y&&(o?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(l||V()):(c["aria-hidden"]="true",c.focusable="false")),Rt({icons:{main:St(b),mask:r?St(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:m,transform:s(s({},k),e),symbol:a,title:o,maskId:i,titleId:l,extra:{attributes:c,styles:d,classes:u}})))};var Ta={mixout(){return{icon:Ia(Na)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=on,t.nodeCallback=Ca,t}}},provides(t){t.i2svg=function(n){const{node:e=h,callback:a=()=>{}}=n;return on(e,a)},t.generateSvgReplacementMutation=function(n,e){const{iconName:a,title:r,titleId:i,prefix:o,transform:l,symbol:u,mask:c,maskId:d,extra:g}=e;return new Promise((m,b)=>{Promise.all([Pt(a,o),c.iconName?Pt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[_,x]=C;m([n,Rt({icons:{main:_,mask:x},prefix:o,iconName:a,transform:l,symbol:u,maskId:d,title:r,titleId:i,extra:g,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){let{children:e,attributes:a,main:r,transform:i,styles:o}=n;const l=at(o);l.length>0&&(a.style=l);let u;return Mt(i)&&(u=F("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),e.push(u||r.icon),{children:e,attributes:a}}}},Fa={mixout(){return{layer(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:e=[]}=n;return ot({type:"layer"},()=>{D("beforeDOMElementCreation",{assembler:t,params:n});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...e].join(" ")},children:a}]})}}}},_a={mixout(){return{counter(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:e=null,classes:a=[],attributes:r={},styles:i={}}=n;return ot({type:"counter",content:t},()=>(D("beforeDOMElementCreation",{content:t,params:n}),ua({content:t.toString(),title:e,extra:{attributes:r,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},Ma={mixout(){return{text(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=k,title:a=null,classes:r=[],attributes:i={},styles:o={}}=n;return ot({type:"text",content:t},()=>(D("beforeDOMElementCreation",{content:t,params:n}),Zt({content:t,transform:s(s({},k),e),title:a,extra:{attributes:i,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(n,e){const{title:a,transform:r,extra:i}=e;let o=null,l=null;if(bn){const u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/u,l=c.height/u}return f.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Zt({content:n.innerHTML,width:o,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const La=new RegExp('"',"ug"),sn=[1105920,1112319],ln=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),re),Ae),ge),Ct=Object.keys(ln).reduce((t,n)=>(t[n.toLowerCase()]=ln[n],t),{}),Da=Object.keys(Ct).reduce((t,n)=>{const e=Ct[n];return t[n]=e[900]||[...Object.entries(e)][0][1],t},{});function Ra(t){const n=t.replace(La,""),e=He(n,0),a=e>=sn[0]&&e<=sn[1],r=n.length===2?n[0]===n[1]:!1;return{value:xt(r?n[0]:n),isSecondary:a||r}}function za(t,n){const e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),r=isNaN(a)?"normal":a;return(Ct[e]||{})[r]||Da[e]}function fn(t,n){const e="".concat(ke).concat(n.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(e)!==null)return a();const o=W(t.children).filter(m=>m.getAttribute(pt)===n)[0],l=N.getComputedStyle(t,n),u=l.getPropertyValue("font-family"),c=u.match(Oe),d=l.getPropertyValue("font-weight"),g=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&g!=="none"&&g!==""){const m=l.getPropertyValue("content");let b=za(u,d);const{value:C,isSecondary:_}=Ra(m),x=c[0].startsWith("FontAwesome");let S=Dt(b,C),y=S;if(x){const A=Ke(C);A.iconName&&A.prefix&&(S=A.iconName,b=A.prefix)}if(S&&!_&&(!o||o.getAttribute(Nt)!==b||o.getAttribute(Tt)!==y)){t.setAttribute(e,y),o&&t.removeChild(o);const A=Pa(),{extra:R}=A;R.attributes[pt]=n,Pt(S,b).then(z=>{const Bn=Rt(s(s({},A),{},{icons:{main:z,mask:Yn()},prefix:b,iconName:y,extra:R,watchable:!0})),st=h.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(st,t.firstChild):t.appendChild(st),st.outerHTML=Bn.map($n=>K($n)).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ja(t){return Promise.all([fn(t,"::before"),fn(t,"::after")])}function Ya(t){return t.parentNode!==document.head&&!~Se.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(pt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function cn(t){if(O)return new Promise((n,e)=>{const a=W(t.querySelectorAll("*")).filter(Ya).map(ja),r=zt.begin("searchPseudoElements");Xn(),Promise.all(a).then(()=>{r(),Ot(),n()}).catch(()=>{r(),Ot(),e()})})}var Ua={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=cn,t}}},provides(t){t.pseudoElements2svg=function(n){const{node:e=h}=n;f.searchPseudoElements&&cn(e)}}};let un=!1;var Wa={mixout(){return{dom:{unwatch(){Xn(),un=!0}}}},hooks(){return{bootstrap(){an(kt("mutationObserverCallbacks",{}))},noAuto(){Aa()},watch(t){const{observeMutationsRoot:n}=t;un?Ot():an(kt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}};const dn=t=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((e,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return e.flipX=!0,e;if(i&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(i){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},n)};var Ha={mixout(){return{parse:{transform:t=>dn(t)}}},hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-transform");return e&&(t.transform=dn(e)),t}}},provides(t){t.generateAbstractTransformGrouping=function(n){let{main:e,transform:a,containerWidth:r,iconWidth:i}=n;const o={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},g={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:d,path:g};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:s(s({},e.icon.attributes),m.path)}]}]}}}};const dt={x:0,y:0,width:"100%",height:"100%"};function mn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ga(t){return t.tag==="g"?t.children:[t]}var Xa={hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-mask"),a=e?it(e.split(" ").map(r=>r.trim())):Yn();return a.prefix||(a.prefix=T()),t.mask=a,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(n){let{children:e,attributes:a,main:r,mask:i,maskId:o,transform:l}=n;const{width:u,icon:c}=r,{width:d,icon:g}=i,m=Re({transform:l,containerWidth:d,iconWidth:u}),b={tag:"rect",attributes:s(s({},dt),{},{fill:"white"})},C=c.children?{children:c.children.map(mn)}:{},_={tag:"g",attributes:s({},m.inner),children:[mn(s({tag:c.tag,attributes:s(s({},c.attributes),m.path)},C))]},x={tag:"g",attributes:s({},m.outer),children:[_]},S="mask-".concat(o||V()),y="clip-".concat(o||V()),A={tag:"mask",attributes:s(s({},dt),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Ga(g)},A]};return e.push(R,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(S,")")},dt)}),{children:e,attributes:a}}}},Va={provides(t){let n=!1;N.matchMedia&&(n=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const e=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=s(s({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:s(s({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:s(s({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ba={hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-symbol"),a=e===null?!1:e===""?!0:e;return t.symbol=a,t}}}},$a=[Ye,Ta,Fa,_a,Ma,Ua,Wa,Ha,Xa,Va,Ba];ra($a,{mixoutsTo:v});v.noAuto;v.config;const Ka=v.library;v.dom;const qa=v.parse;v.findIconDefinition;v.toHtml;const Qa=v.icon;v.layer;v.text;v.counter;export{Qa as i,Ka as l,qa as p};
