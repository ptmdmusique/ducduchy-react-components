import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as F}from"./index-BCtMShv3.js";import{c as q,C as R,s as P}from"./index-KpAVk5lk.js";import{$ as he,a as ge}from"./useFocusRing-D4bu8X2q.js";import{r as V}from"./index-BqCLlfdy.js";import{w as xe,e as Ee}from"./use-resolve-button-type-DNd3Xgnw.js";import{n as O,a as h,K as w,y as Q,L as N,u as ie,o as Se,p as Re,_ as me,O as te}from"./use-sync-refs-CZ2KMCOF.js";import{M as _e,x as $e,R as Pe,b as Me,d as Ce,F as De,y as Fe}from"./floating-B_I44q2N.js";import{y as we}from"./use-inert-others-Dfe5BkTU.js";import{R as Ne,n as ke,m as Te,f as Ae,r as Oe}from"./portal-BDPEH6C3.js";import{c as je,i as K,u as Le,x as Ve,R as qe}from"./use-server-handoff-complete-C8_JXbTh.js";import{u as Be,o as y}from"./keyboard-tlvg-gRs.js";import{r as Ke}from"./bugs-DpEN4NTH.js";import{G as ce,j as Ue,F as ne,_ as Qe,A as He,h as Ge}from"./focus-management-Bh_oGY5B.js";import{w as We}from"./description-75re-mSO.js";import{P as Xe,K as de}from"./label-BRHKpGXr.js";import{B as Je}from"./Button-Dw10h_TB.js";import"./index-D-fs5e6L.js";import"./floating-ui.dom-CmL5ukrp.js";import"./Icon-DLP5P1Ct.js";import"./index-CvPWi8JN.js";function re(e){return[e.screenX,e.screenY]}function Ye(){let e=f.useRef([-1,-1]);return{wasMoved(t){let r=re(t);return e.current[0]===r[0]&&e.current[1]===r[1]?!1:(e.current=r,!0)},update(t){e.current=re(t)}}}function ze(e,{container:t,accept:r,walk:a}){let l=f.useRef(r),n=f.useRef(a);f.useEffect(()=>{l.current=r,n.current=a},[r,a]),O(()=>{if(!t||!e)return;let u=Be(t);if(!u)return;let m=l.current,c=n.current,p=Object.assign(v=>m(v),{acceptNode:m}),d=u.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,p,!1);for(;d.nextNode();)c(d.currentNode)},[t,e,l,n])}function Ze(e){throw new Error("Unexpected object: "+e)}var I=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(I||{});function X(e,t){let r=t.resolveItems();if(r.length<=0)return null;let a=t.resolveActiveIndex(),l=a??-1;switch(e.focus){case 0:{for(let n=0;n<r.length;++n)if(!t.resolveDisabled(r[n],n,r))return n;return a}case 1:{l===-1&&(l=r.length);for(let n=l-1;n>=0;--n)if(!t.resolveDisabled(r[n],n,r))return n;return a}case 2:{for(let n=l+1;n<r.length;++n)if(!t.resolveDisabled(r[n],n,r))return n;return a}case 3:{for(let n=r.length-1;n>=0;--n)if(!t.resolveDisabled(r[n],n,r))return n;return a}case 4:{for(let n=0;n<r.length;++n)if(t.resolveId(r[n],n,r)===e.id)return n;return a}case 5:return null;default:Ze(e)}}function et(e,t){let r=f.useRef({left:0,top:0});if(O(()=>{if(!t)return;let l=t.getBoundingClientRect();l&&(r.current=l)},[e,t]),t==null||!e||t===document.activeElement)return!1;let a=t.getBoundingClientRect();return a.top!==r.current.top||a.left!==r.current.left}let ae=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function le(e){var t,r;let a=(t=e.innerText)!=null?t:"",l=e.cloneNode(!0);if(!(l instanceof HTMLElement))return a;let n=!1;for(let m of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))m.remove(),n=!0;let u=n?(r=l.innerText)!=null?r:"":a;return ae.test(u)&&(u=u.replace(ae,"")),u}function tt(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let a=r.split(" ").map(l=>{let n=document.getElementById(l);if(n){let u=n.getAttribute("aria-label");return typeof u=="string"?u.trim():le(n).trim()}return null}).filter(Boolean);if(a.length>0)return a.join(", ")}return le(e).trim()}function nt(e){let t=f.useRef(""),r=f.useRef("");return h(()=>{let a=e.current;if(!a)return"";let l=a.innerText;if(t.current===l)return r.current;let n=tt(a).trim().toLowerCase();return t.current=l,r.current=n,n})}var rt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(rt||{}),at=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(at||{}),lt=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e))(lt||{});function J(e,t=r=>r){let r=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,a=Qe(t(e.items.slice()),n=>n.dataRef.current.domRef.current),l=r?a.indexOf(r):null;return l===-1&&(l=null),{items:a,activeItemIndex:l}}let ot={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var r,a,l,n,u;if(e.menuState===1)return e;let m={...e,searchQuery:"",activationTrigger:(r=t.trigger)!=null?r:1,__demoMode:!1};if(t.focus===I.Nothing)return{...m,activeItemIndex:null};if(t.focus===I.Specific)return{...m,activeItemIndex:e.items.findIndex(d=>d.id===t.id)};if(t.focus===I.Previous){let d=e.activeItemIndex;if(d!==null){let v=e.items[d].dataRef.current.domRef,o=X(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});if(o!==null){let s=e.items[o].dataRef.current.domRef;if(((a=v.current)==null?void 0:a.previousElementSibling)===s.current||((l=s.current)==null?void 0:l.previousElementSibling)===null)return{...m,activeItemIndex:o}}}}else if(t.focus===I.Next){let d=e.activeItemIndex;if(d!==null){let v=e.items[d].dataRef.current.domRef,o=X(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});if(o!==null){let s=e.items[o].dataRef.current.domRef;if(((n=v.current)==null?void 0:n.nextElementSibling)===s.current||((u=s.current)==null?void 0:u.nextElementSibling)===null)return{...m,activeItemIndex:o}}}}let c=J(e),p=X(t,{resolveItems:()=>c.items,resolveActiveIndex:()=>c.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});return{...m,...c,activeItemIndex:p}},3:(e,t)=>{let r=e.searchQuery!==""?0:1,a=e.searchQuery+t.value.toLowerCase(),l=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(u=>{var m;return((m=u.dataRef.current.textValue)==null?void 0:m.startsWith(a))&&!u.dataRef.current.disabled}),n=l?e.items.indexOf(l):-1;return n===-1||n===e.activeItemIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeItemIndex:n,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let r=J(e,a=>[...a,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=J(e,a=>{let l=a.findIndex(n=>n.id===t.id);return l!==-1&&a.splice(l,1),a});return{...e,...r,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element}},Y=f.createContext(null);Y.displayName="MenuContext";function H(e){let t=f.useContext(Y);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,H),r}return t}function ut(e,t){return ie(t.type,ot,e,t)}let st=f.Fragment;function it(e,t){let{__demoMode:r=!1,...a}=e,l=f.useReducer(ut,{__demoMode:r,menuState:r?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsElement:u,buttonElement:m},c]=l,p=Q(t);Ne(n===0,[m,u],(g,E)=>{c({type:1}),He(E,Ge.Loose)||(g.preventDefault(),m==null||m.focus())});let d=h(()=>{c({type:1})}),v=f.useMemo(()=>({open:n===0,close:d}),[n,d]),o={ref:p},s=N();return F.createElement(_e,null,F.createElement(Y.Provider,{value:l},F.createElement(je,{value:ie(n,{0:K.Open,1:K.Closed})},s({ourProps:o,theirProps:a,slot:v,defaultTag:st,name:"Menu"}))))}let mt="button";function ct(e,t){var r;let a=f.useId(),{id:l=`headlessui-menu-button-${a}`,disabled:n=!1,autoFocus:u=!1,...m}=e,[c,p]=H("Menu.Button"),d=De(),v=Q(t,Fe(),h(b=>p({type:7,element:b}))),o=h(b=>{switch(b.key){case y.Space:case y.Enter:case y.ArrowDown:b.preventDefault(),b.stopPropagation(),V.flushSync(()=>p({type:0})),p({type:2,focus:I.First});break;case y.ArrowUp:b.preventDefault(),b.stopPropagation(),V.flushSync(()=>p({type:0})),p({type:2,focus:I.Last});break}}),s=h(b=>{switch(b.key){case y.Space:b.preventDefault();break}}),g=h(b=>{var A;if(Ke(b.currentTarget))return b.preventDefault();n||(c.menuState===0?(V.flushSync(()=>p({type:1})),(A=c.buttonElement)==null||A.focus({preventScroll:!0})):(b.preventDefault(),p({type:0})))}),{isFocusVisible:E,focusProps:S}=he({autoFocus:u}),{isHovered:M,hoverProps:k}=ge({isDisabled:n}),{pressed:C,pressProps:$}=xe({disabled:n}),T=f.useMemo(()=>({open:c.menuState===0,active:C||c.menuState===0,disabled:n,hover:M,focus:E,autofocus:u}),[c,M,E,C,n,u]),D=me(d(),{ref:v,id:l,type:Ee(e,c.buttonElement),"aria-haspopup":"menu","aria-controls":(r=c.itemsElement)==null?void 0:r.id,"aria-expanded":c.menuState===0,disabled:n||void 0,autoFocus:u,onKeyDown:o,onKeyUp:s,onClick:g},S,k,$);return N()({ourProps:D,theirProps:m,slot:T,defaultTag:mt,name:"Menu.Button"})}let dt="div",ft=te.RenderStrategy|te.Static;function pt(e,t){var r,a;let l=f.useId(),{id:n=`headlessui-menu-items-${l}`,anchor:u,portal:m=!1,modal:c=!0,transition:p=!1,...d}=e,v=$e(u),[o,s]=H("Menu.Items"),[g,E]=Pe(v),S=Me(),[M,k]=f.useState(null),C=Q(t,v?g:null,h(i=>s({type:8,element:i})),k),$=ke(o.itemsElement);v&&(m=!0);let T=Le(),[D,b]=Ve(p,M,T!==null?(T&K.Open)===K.Open:o.menuState===0);Te(D,o.buttonElement,()=>{s({type:1})});let A=o.__demoMode?!1:c&&o.menuState===0;Ae(A,$);let G=o.__demoMode?!1:c&&o.menuState===0;we(G,{allowed:f.useCallback(()=>[o.buttonElement,o.itemsElement],[o.buttonElement,o.itemsElement])});let W=o.menuState!==0,x=et(W,o.buttonElement)?!1:D;f.useEffect(()=>{let i=o.itemsElement;i&&o.menuState===0&&i!==($==null?void 0:$.activeElement)&&i.focus({preventScroll:!0})},[o.menuState,o.itemsElement,$]),ze(o.menuState===0,{container:o.itemsElement,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let j=Re(),fe=h(i=>{var z,Z,ee;switch(j.dispose(),i.key){case y.Space:if(o.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),s({type:3,value:i.key});case y.Enter:if(i.preventDefault(),i.stopPropagation(),s({type:1}),o.activeItemIndex!==null){let{dataRef:Ie}=o.items[o.activeItemIndex];(Z=(z=Ie.current)==null?void 0:z.domRef.current)==null||Z.click()}ce(o.buttonElement);break;case y.ArrowDown:return i.preventDefault(),i.stopPropagation(),s({type:2,focus:I.Next});case y.ArrowUp:return i.preventDefault(),i.stopPropagation(),s({type:2,focus:I.Previous});case y.Home:case y.PageUp:return i.preventDefault(),i.stopPropagation(),s({type:2,focus:I.First});case y.End:case y.PageDown:return i.preventDefault(),i.stopPropagation(),s({type:2,focus:I.Last});case y.Escape:i.preventDefault(),i.stopPropagation(),V.flushSync(()=>s({type:1})),(ee=o.buttonElement)==null||ee.focus({preventScroll:!0});break;case y.Tab:i.preventDefault(),i.stopPropagation(),V.flushSync(()=>s({type:1})),Ue(o.buttonElement,i.shiftKey?ne.Previous:ne.Next);break;default:i.key.length===1&&(s({type:3,value:i.key}),j.setTimeout(()=>s({type:4}),350));break}}),pe=h(i=>{switch(i.key){case y.Space:i.preventDefault();break}}),ve=f.useMemo(()=>({open:o.menuState===0}),[o.menuState]),be=me(v?S():{},{"aria-activedescendant":o.activeItemIndex===null||(r=o.items[o.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(a=o.buttonElement)==null?void 0:a.id,id:n,onKeyDown:fe,onKeyUp:pe,role:"menu",tabIndex:o.menuState===0?0:void 0,ref:C,style:{...d.style,...E,"--button-width":Ce(o.buttonElement,!0).width},...qe(b)}),ye=N();return F.createElement(Oe,{enabled:m?e.static||D:!1},ye({ourProps:be,theirProps:d,slot:ve,defaultTag:dt,features:ft,visible:x,name:"Menu.Items"}))}let vt=f.Fragment;function bt(e,t){let r=f.useId(),{id:a=`headlessui-menu-item-${r}`,disabled:l=!1,...n}=e,[u,m]=H("Menu.Item"),c=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===a:!1,p=f.useRef(null),d=Q(t,p);O(()=>{if(!u.__demoMode&&u.menuState===0&&c&&u.activationTrigger!==0)return Se().requestAnimationFrame(()=>{var x,j;(j=(x=p.current)==null?void 0:x.scrollIntoView)==null||j.call(x,{block:"nearest"})})},[u.__demoMode,p,c,u.menuState,u.activationTrigger,u.activeItemIndex]);let v=nt(p),o=f.useRef({disabled:l,domRef:p,get textValue(){return v()}});O(()=>{o.current.disabled=l},[o,l]),O(()=>(m({type:5,id:a,dataRef:o}),()=>m({type:6,id:a})),[o,a]);let s=h(()=>{m({type:1})}),g=h(x=>{if(l)return x.preventDefault();m({type:1}),ce(u.buttonElement)}),E=h(()=>{if(l)return m({type:2,focus:I.Nothing});m({type:2,focus:I.Specific,id:a})}),S=Ye(),M=h(x=>{S.update(x),!l&&(c||m({type:2,focus:I.Specific,id:a,trigger:0}))}),k=h(x=>{S.wasMoved(x)&&(l||c||m({type:2,focus:I.Specific,id:a,trigger:0}))}),C=h(x=>{S.wasMoved(x)&&(l||c&&m({type:2,focus:I.Nothing}))}),[$,T]=de(),[D,b]=We(),A=f.useMemo(()=>({active:c,focus:c,disabled:l,close:s}),[c,l,s]),G={id:a,ref:d,role:"menuitem",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-labelledby":$,"aria-describedby":D,disabled:void 0,onClick:g,onFocus:E,onPointerEnter:M,onMouseEnter:M,onPointerMove:k,onMouseMove:k,onPointerLeave:C,onMouseLeave:C},W=N();return F.createElement(T,null,F.createElement(b,null,W({ourProps:G,theirProps:n,slot:A,defaultTag:vt,name:"Menu.Item"})))}let yt="div";function It(e,t){let[r,a]=de(),l=e,n={ref:t,"aria-labelledby":r,role:"group"},u=N();return F.createElement(a,null,u({ourProps:n,theirProps:l,slot:{},defaultTag:yt,name:"Menu.Section"}))}let ht="header";function gt(e,t){let r=f.useId(),{id:a=`headlessui-menu-heading-${r}`,...l}=e,n=Xe();O(()=>n.register(a),[a,n.register]);let u={id:a,ref:t,role:"presentation",...n.props};return N()({ourProps:u,theirProps:l,slot:{},defaultTag:ht,name:"Menu.Heading"})}let xt="div";function Et(e,t){let r=e,a={ref:t,role:"separator"};return N()({ourProps:a,theirProps:r,slot:{},defaultTag:xt,name:"Menu.Separator"})}let St=w(it),Rt=w(ct),_t=w(pt),$t=w(bt),Pt=w(It),Mt=w(gt),Ct=w(Et),B=Object.assign(St,{Button:Rt,Items:_t,Item:$t,Section:Pt,Heading:Mt,Separator:Ct});function U({onItemChosen:e,menuContainerAs:t,menuProps:r,menuItemsProps:a,useDivider:l=!0,renderCustomMenuOpener:n,menuOpenerProps:u,itemContainerOnRightSide:m,menuItemList:c,renderWholeItem:p,renderItem:d,renderItemContent:v}){return _.jsx(B,{as:t??"div",...r,className:q(`${R}-menu`,r==null?void 0:r.className),children:({open:o})=>_.jsxs(_.Fragment,{children:[(n==null?void 0:n(o))??_.jsx(B.Button,{as:Je,...u,className:q(`${R}-menu__opener`,{[`${R}-menu__opener--open`]:o},u==null?void 0:u.className)}),_.jsx(B.Items,{as:"ul",...a,className:q(`${R}-menu__item-container`,{[`${R}-menu__item-container--right`]:m,[`${R}-menu__item-container--open`]:o,[`${R}-menu__item-container--use-divider`]:l},a==null?void 0:a.className),children:c.map((s,g)=>(p==null?void 0:p(s,g,o))??_.jsx(B.Item,{as:f.Fragment,children:({active:E,disabled:S})=>(d==null?void 0:d(s,g,{active:E,disabled:S,menuOpen:o}))??_.jsx("li",{className:q(`${R}-menu__item`,{[`${R}-menu__item--menu-open`]:o,[`${R}-menu__item--active`]:E,[`${R}-menu__item--disabled`]:S}),onClick:()=>{e==null||e(s,g)},children:v==null?void 0:v(s,g,{active:E,disabled:S,menuOpen:o})})},`menu-item---${g}`))})]})})}try{U.displayName="Menu",U.__docgenInfo={description:"Note, the menu dropdown is relative to the outer container",displayName:"Menu",props:{onItemChosen:{defaultValue:null,description:"",name:"onItemChosen",required:!1,type:{name:"((item: Item, index: number) => void)"}},menuContainerAs:{defaultValue:null,description:"",name:"menuContainerAs",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},itemContainerOnRightSide:{defaultValue:null,description:"",name:"itemContainerOnRightSide",required:!1,type:{name:"boolean"}},useDivider:{defaultValue:{value:"true"},description:"",name:"useDivider",required:!1,type:{name:"boolean"}},menuProps:{defaultValue:null,description:"",name:"menuProps",required:!1,type:{name:"any"}},menuItemsProps:{defaultValue:null,description:"",name:"menuItemsProps",required:!1,type:{name:'(CleanProps<ElementType, "anchor" | ItemsPropsWeControl | "portal" | "modal" | "transition" | "static" | "unmount"> & OurProps<...> & { ...; } & { ...; } & { ...; })'}},menuOpenerProps:{defaultValue:null,description:"",name:"menuOpenerProps",required:!1,type:{name:'(Pick<object, never> & CleanProps<ElementType, "disabled" | "autoFocus" | ButtonPropsWeControl> & OurProps<ElementType, ButtonRenderPropArg> & { ...; } & { ...; } & { ...; })'}},renderCustomMenuOpener:{defaultValue:null,description:"",name:"renderCustomMenuOpener",required:!1,type:{name:"((menuOpen: boolean) => ReactNode)"}},menuItemList:{defaultValue:null,description:"",name:"menuItemList",required:!0,type:{name:"Item[] | readonly Item[]"}},renderWholeItem:{defaultValue:null,description:"Render whole item, including the container\n\nUse `renderItemContent` or `renderItem` to render just the content of the item\n and leave accessbility and styling of the container handled by the component",name:"renderWholeItem",required:!1,type:{name:"((item: Item, index: number, menuOpen: boolean) => ReactNode)"}},renderItem:{defaultValue:null,description:"Render just the inner of the item and let the lib handle accessiblity\n\nUnnecessary if `renderItem` is present",name:"renderItem",required:!1,type:{name:"((item: Item, index: number, props: { active: boolean; disabled: boolean; menuOpen: boolean; }) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},renderItemContent:{defaultValue:null,description:"Used to render each item, unnecessary if `renderItem` or `renderWholeItem` is present",name:"renderItemContent",required:!1,type:{name:"((item: Item, index: number, props: { active: boolean; disabled: boolean; menuOpen: boolean; }) => ReactNode)"}}}}}catch{}const Dt=[{label:"💪 My label",value:"my value"},{label:"✌ Hands",value:"my value 2"},{label:"🐶 Dog",value:"my value 3"},{label:"🐱 Cat",value:"my value 4"}],Zt={title:"Components/Menu",component:U,argTypes:{renderCustomMenuOpener:P,menuContainerAs:P,menuProps:P,menuItemList:P,menuOpenerProps:P,renderWholeItem:P,renderItemContent:P,onItemChosen:P,itemContainerOnRightSide:{type:"boolean"}},parameters:{controls:{expanded:!0}}},Ft=e=>{const[t,r]=f.useState(null);return _.jsxs("div",{children:[_.jsx(U,{...e,menuProps:{className:"ml-64",style:{width:"fit-content"}},onItemChosen:r,menuOpenerProps:{children:"Click Me!"},renderItemContent:a=>_.jsx("div",{className:"w-full py-2 px-4 text-skin-base",children:a.label})}),_.jsxs("div",{className:"mt-8 text-skin-base",children:["Chosen item: ",t==null?void 0:t.label]})]})},L=Ft.bind({});L.args={menuItemList:Dt};var oe,ue,se;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const [chosenItem, setChosenItem] = useState<ItemType | null>(null);
  return <div>\r
      <Menu {...args} menuProps={{
      className: "ml-64",
      style: {
        width: "fit-content"
      }
    }} onItemChosen={setChosenItem} menuOpenerProps={{
      children: "Click Me!"
    }} renderItemContent={item => <div className="w-full py-2 px-4 text-skin-base">{item.label}</div>} />\r
\r
      <div className="mt-8 text-skin-base">\r
        Chosen item: {chosenItem?.label}\r
      </div>\r
    </div>;
}`,...(se=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:se.source}}};const en=["Default"];export{L as Default,en as __namedExportsOrder,Zt as default};
