import{n as y,h as z,i as V,F as A,M as D,j as U}from"./index-DtwnXE6Y.js";import{g as Z,r as x,R as p}from"./index-CTjT7uj6.js";import{Z as q,H as J,u as K,c as b}from"./index-CfSnePdp.js";import{_ as Q,i as H,a as Y}from"./_getPrototype-BxrpB_Xa.js";import"./iframe-BUI18w59.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BVLFNLBt.js";import"./index-9r8iugjR.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./index-DrFu-skq.js";var ee=Q,te=function(){return ee.Date.now()},re=te,ae=/\s/;function ie(e){for(var t=e.length;t--&&ae.test(e.charAt(t)););return t}var ne=ie,se=ne,le=/^\s+/;function oe(e){return e&&e.slice(0,se(e)+1).replace(le,"")}var de=oe,ue=de,B=H,ce=Y,N=NaN,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,me=/^0o[0-7]+$/i,ge=parseInt;function pe(e){if(typeof e=="number")return e;if(ce(e))return N;if(B(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=B(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ue(e);var r=he.test(e);return r||me.test(e)?ge(e.slice(2),r?2:8):fe.test(e)?N:+e}var be=pe,xe=H,P=re,X=be,$e="Expected a function",ye=Math.max,Ee=Math.min;function ve(e,t,r){var n,i,l,o,a,u,f=0,h=!1,d=!1,s=!0;if(typeof e!="function")throw new TypeError($e);t=X(t)||0,xe(r)&&(h=!!r.leading,d="maxWait"in r,l=d?ye(X(r.maxWait)||0,t):l,s="trailing"in r?!!r.trailing:s);function m(c){var $=n,C=i;return n=i=void 0,f=c,o=e.apply(C,$),o}function L(c){return f=c,a=setTimeout(E,t),h?m(c):o}function S(c){var $=c-u,C=c-f,M=t-$;return d?Ee(M,l-C):M}function _(c){var $=c-u,C=c-f;return u===void 0||$>=t||$<0||d&&C>=l}function E(){var c=P();if(_(c))return v(c);a=setTimeout(E,S(c))}function v(c){return a=void 0,s&&n?m(c):(n=i=void 0,o)}function R(){a!==void 0&&clearTimeout(a),f=0,n=u=i=a=void 0}function g(){return a===void 0?o:v(P())}function k(){var c=P(),$=_(c);if(n=arguments,i=this,u=c,$){if(a===void 0)return L(u);if(d)return clearTimeout(a),a=setTimeout(E,t),m(u)}return a===void 0&&(a=setTimeout(E,t)),o}return k.cancel=R,k.flush=g,k}var we=ve,ke=we,Ce=H,Se="Expected a function";function _e(e,t,r){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(Se);return Ce(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),ke(e,t,{leading:n,maxWait:t,trailing:i})}var Re=_e;const Te=Z(Re);var Ie=y.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),Oe=y(z)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),Le=y.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Pe=y(V)(({theme:e})=>({fontFamily:e.typography.fonts.base})),We=y.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),He=y.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Me=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,F=({value:e,style:t,...r})=>{let n=`linear-gradient(${e}, ${e}), ${Me}, linear-gradient(#fff, #fff)`;return p.createElement(He,{...r,style:{...t,backgroundImage:n}})},Be=y(A.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Ne=y(D)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),G=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(G||{}),T=Object.values(G),Xe=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Fe=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,je=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,W=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ze=/^\s*#?([0-9a-f]{3})\s*$/i,Ge={hex:q,rgb:J,hsl:K},I={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},j=e=>{let t=e==null?void 0:e.match(Xe);if(!t)return[0,0,0,1];let[,r,n,i,l=1]=t;return[r,n,i,l].map(Number)},w=e=>{if(!e)return;let t=!0;if(Fe.test(e)){let[o,a,u,f]=j(e),[h,d,s]=b.rgb.hsl([o,a,u])||[0,0,0];return{valid:t,value:e,keyword:b.rgb.keyword([o,a,u]),colorSpace:"rgb",rgb:e,hsl:`hsla(${h}, ${d}%, ${s}%, ${f})`,hex:`#${b.rgb.hex([o,a,u]).toLowerCase()}`}}if(je.test(e)){let[o,a,u,f]=j(e),[h,d,s]=b.hsl.rgb([o,a,u])||[0,0,0];return{valid:t,value:e,keyword:b.hsl.keyword([o,a,u]),colorSpace:"hsl",rgb:`rgba(${h}, ${d}, ${s}, ${f})`,hsl:e,hex:`#${b.hsl.hex([o,a,u]).toLowerCase()}`}}let r=e.replace("#",""),n=b.keyword.rgb(r)||b.hex.rgb(r),i=b.rgb.hsl(n),l=e;if(/[^#a-f0-9]/i.test(e)?l=r:W.test(e)&&(l=`#${r}`),l.startsWith("#"))t=W.test(l);else try{b.keyword.hex(l)}catch{t=!1}return{valid:t,value:l,keyword:b.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${i[0]}, ${i[1]}%, ${i[2]}%, 1)`,hex:l}},Ve=(e,t,r)=>{if(!e||!(t!=null&&t.valid))return I[r];if(r!=="hex")return(t==null?void 0:t[r])||I[r];if(!t.hex.startsWith("#"))try{return`#${b.keyword.hex(t.hex)}`}catch{return I.hex}let n=t.hex.match(ze);if(!n)return W.test(t.hex)?t.hex:I.hex;let[i,l,o]=n[1].split("");return`#${i}${i}${l}${l}${o}${o}`},Ae=(e,t)=>{let[r,n]=x.useState(e||""),[i,l]=x.useState(()=>w(r)),[o,a]=x.useState((i==null?void 0:i.colorSpace)||"hex");x.useEffect(()=>{let d=e||"",s=w(d);n(d),l(s),a((s==null?void 0:s.colorSpace)||"hex")},[e]);let u=x.useMemo(()=>Ve(r,i,o).toLowerCase(),[r,i,o]),f=x.useCallback(d=>{let s=w(d),m=(s==null?void 0:s.value)||d||"";n(m),m===""&&(l(void 0),t(void 0)),s&&(l(s),a(s.colorSpace),t(s.value))},[t]),h=x.useCallback(()=>{let d=T.indexOf(o)+1;d>=T.length&&(d=0),a(T[d]);let s=(i==null?void 0:i[T[d]])||"";n(s),t(s)},[i,o,t]);return{value:r,realValue:u,updateValue:f,color:i,colorSpace:o,cycleColorSpace:h}},O=e=>e.replace(/\s*/,"").toLowerCase(),De=(e,t,r)=>{let[n,i]=x.useState(t!=null&&t.valid?[t]:[]);x.useEffect(()=>{t===void 0&&i([])},[t]);let l=x.useMemo(()=>(e||[]).map(a=>typeof a=="string"?w(a):a.title?{...w(a.color),keyword:a.title}:w(a.color)).concat(n).filter(Boolean).slice(-27),[e,n]),o=x.useCallback(a=>{a!=null&&a.valid&&(l.some(u=>O(u[r])===O(a[r]))||i(u=>u.concat(a)))},[r,l]);return{presets:l,addPreset:o}},Ue=({name:e,value:t,onChange:r,onFocus:n,onBlur:i,presetColors:l,startOpen:o=!1,argType:a})=>{var R;let u=x.useCallback(Te(r,200),[r]),{value:f,realValue:h,updateValue:d,color:s,colorSpace:m,cycleColorSpace:L}=Ae(t,u),{presets:S,addPreset:_}=De(l,s,m),E=Ge[m],v=!!((R=a==null?void 0:a.table)!=null&&R.readonly);return p.createElement(Ie,{"aria-readonly":v},p.createElement(Oe,{startOpen:o,trigger:v?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>_(s),tooltip:p.createElement(Le,null,p.createElement(E,{color:h==="transparent"?"#000000":h,onChange:d,onFocus:n,onBlur:i}),S.length>0&&p.createElement(We,null,S.map((g,k)=>p.createElement(z,{key:`${g.value}-${k}`,hasChrome:!1,tooltip:p.createElement(Pe,{note:g.keyword||g.value})},p.createElement(F,{value:g[m],active:s&&O(g[m])===O(s[m]),onClick:()=>d(g.value)})))))},p.createElement(F,{value:h,style:{margin:4}})),p.createElement(Be,{id:U(e),value:f,onChange:g=>d(g.target.value),onFocus:g=>g.target.select(),readOnly:v,placeholder:"Choose color..."}),f?p.createElement(Ne,{onClick:L}):null)},st=Ue;export{Ue as ColorControl,st as default};
