import{r as l,R as a}from"./index-BCtMShv3.js";import{a as y,p as b,m as E}from"./use-sync-refs-CZ2KMCOF.js";import{r as v}from"./index-BqCLlfdy.js";import{f as d,s as m}from"./hidden-CkFg_2Sb.js";function A(t,e,r){let[n,o]=l.useState(r),u=t!==void 0,f=l.useRef(u),s=l.useRef(!1),c=l.useRef(!1);return u&&!f.current&&!s.current?(s.current=!0,f.current=u,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!u&&f.current&&!c.current&&(c.current=!0,f.current=u,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[u?t:n,y(i=>(u||o(i),e==null?void 0:e(i)))]}function F(t){let[e]=l.useState(t);return e}function p(t={},e=null,r=[]){for(let[n,o]of Object.entries(t))g(r,h(e,n),o);return r}function h(t,e){return t?t+"["+e+"]":e}function g(t,e,r){if(Array.isArray(r))for(let[n,o]of r.entries())g(t,h(e,n.toString()),o);else r instanceof Date?t.push([e,r.toISOString()]):typeof r=="boolean"?t.push([e,r?"1":"0"]):typeof r=="string"?t.push([e,r]):typeof r=="number"?t.push([e,`${r}`]):r==null?t.push([e,""]):p(r,e,t)}function C(t){var e,r;let n=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(n){for(let o of n.elements)if(o!==t&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(r=n.requestSubmit)==null||r.call(n)}}let S=l.createContext(null);function T({children:t}){let e=l.useContext(S);if(!e)return a.createElement(a.Fragment,null,t);let{target:r}=e;return r?v.createPortal(a.createElement(a.Fragment,null,t),r):null}function P({data:t,form:e,disabled:r,onReset:n,overrides:o}){let[u,f]=l.useState(null),s=b();return l.useEffect(()=>{if(n&&u)return s.addEventListener(u,"reset",n)},[u,e,n]),a.createElement(T,null,a.createElement(I,{setForm:f,formId:e}),p(t).map(([c,i])=>a.createElement(d,{features:m.Hidden,...E({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:e,disabled:r,name:c,value:i,...o})})))}function I({setForm:t,formId:e}){return l.useEffect(()=>{if(e){let r=document.getElementById(e);r&&t(r)}},[t,e]),e?null:a.createElement(d,{features:m.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:r=>{if(!r)return;let n=r.closest("form");n&&t(n)}})}export{A as T,P as j,F as l,C as p};
