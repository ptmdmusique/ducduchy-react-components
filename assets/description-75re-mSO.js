import{r as n,R as f}from"./index-BCtMShv3.js";import{K as v,a as x,y as C,n as g,L as h}from"./use-sync-refs-CZ2KMCOF.js";let E=n.createContext(void 0);function D(){return n.useContext(E)}let p=n.createContext(null);p.displayName="DescriptionContext";function c(){let r=n.useContext(p);if(r===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,c),e}return r}function T(){var r,e;return(e=(r=n.useContext(p))==null?void 0:r.value)!=null?e:void 0}function $(){let[r,e]=n.useState([]);return[r.length>0?r.join(" "):void 0,n.useMemo(()=>function(t){let l=x(u=>(e(o=>[...o,u]),()=>e(o=>{let a=o.slice(),i=a.indexOf(u);return i!==-1&&a.splice(i,1),a}))),s=n.useMemo(()=>({register:l,slot:t.slot,name:t.name,props:t.props,value:t.value}),[l,t.slot,t.name,t.props,t.value]);return f.createElement(p.Provider,{value:s},t.children)},[e])]}let S="p";function b(r,e){let t=n.useId(),l=D(),{id:s=`headlessui-description-${t}`,...u}=r,o=c(),a=C(e);g(()=>o.register(s),[s,o.register]);let i=l||!1,d=n.useMemo(()=>({...o.slot,disabled:i}),[o.slot,i]),m={ref:a,...o.props,id:s};return h()({ourProps:m,theirProps:u,slot:d,defaultTag:S,name:o.name||"Description"})}let w=v(b),j=Object.assign(w,{});export{j as H,T as U,D as a,$ as w};
