import{r as o,R as E,a as v}from"./index-BCtMShv3.js";import{p as A,n as x,o as h,b as p}from"./use-sync-refs-CZ2KMCOF.js";function S(e=0){let[t,n]=o.useState(e),r=o.useCallback(l=>n(l),[t]),i=o.useCallback(l=>n(f=>f|l),[t]),a=o.useCallback(l=>(t&l)===l,[t]),u=o.useCallback(l=>n(f=>f&~l),[n]),s=o.useCallback(l=>n(f=>f^l),[n]);return{flags:t,setFlag:r,addFlag:i,hasFlag:a,removeFlag:u,toggleFlag:s}}var k={},C,y;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((C=process==null?void 0:k)==null?void 0:C.NODE_ENV)==="test"&&typeof((y=Element==null?void 0:Element.prototype)==null?void 0:y.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var b=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(b||{});function _(e){let t={};for(let n in e)e[n]===!0&&(t[`data-${n}`]="");return t}function L(e,t,n,r){let[i,a]=o.useState(n),{hasFlag:u,addFlag:s,removeFlag:l}=S(e&&i?3:0),f=o.useRef(!1),d=o.useRef(!1),F=A();return x(()=>{var m;if(e){if(n&&a(!0),!t){n&&s(3);return}return(m=r==null?void 0:r.start)==null||m.call(r,n),$(t,{inFlight:f,prepare(){d.current?d.current=!1:d.current=f.current,f.current=!0,!d.current&&(n?(s(3),l(4)):(s(4),l(2)))},run(){d.current?n?(l(3),s(4)):(l(4),s(3)):n?l(1):s(1)},done(){var g;d.current&&typeof t.getAnimations=="function"&&t.getAnimations().length>0||(f.current=!1,l(7),n||a(!1),(g=r==null?void 0:r.end)==null||g.call(r,n))}})}},[e,n,t,F]),e?[i,{closed:u(1),enter:u(2),leave:u(4),transition:u(2)||u(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function $(e,{prepare:t,run:n,done:r,inFlight:i}){let a=h();return R(e,{prepare:t,inFlight:i}),a.nextFrame(()=>{n(),a.requestAnimationFrame(()=>{a.add(O(e,r))})}),a.dispose}function O(e,t){var n,r;let i=h();if(!e)return i.dispose;let a=!1;i.add(()=>{a=!0});let u=(r=(n=e.getAnimations)==null?void 0:n.call(e).filter(s=>s instanceof CSSTransition))!=null?r:[];return u.length===0?(t(),i.dispose):(Promise.allSettled(u.map(s=>s.finished)).then(()=>{a||t()}),i.dispose)}function R(e,{inFlight:t,prepare:n}){if(t!=null&&t.current){n();return}let r=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=r}let c=o.createContext(null);c.displayName="OpenClosedContext";var j=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(j||{});function T(){return o.useContext(c)}function w({value:e,children:t}){return E.createElement(c.Provider,{value:e},t)}function q({children:e}){return E.createElement(c.Provider,{value:null},e)}function N(){let e=typeof document>"u";return"useSyncExternalStore"in v?(t=>t.useSyncExternalStore)(v)(()=>()=>{},()=>!1,()=>!e):!1}function D(){let e=N(),[t,n]=o.useState(p.isHandoffComplete);return t&&p.isHandoffComplete===!1&&n(!1),o.useEffect(()=>{t!==!0&&n(!0)},[t]),o.useEffect(()=>p.handoff(),[]),e?!1:t}export{_ as R,w as c,j as i,D as l,q as s,T as u,L as x};
