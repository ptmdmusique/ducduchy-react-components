"use strict";(self.webpackChunkducduchy_react_components=self.webpackChunkducduchy_react_components||[]).push([[4504],{"./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/components/transitions/transition.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>We});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),render=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/utils/render.js"),open_closed=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/internal/open-closed.js"),match=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/utils/match.js"),micro_task=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/utils/micro-task.js"),use_id=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-id.js"),use_is_mounted=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_latest_value=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-latest-value.js"),use_server_handoff_complete=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js"),use_sync_refs=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");var disposables=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/utils/disposables.js");function f(t,...e){t&&e.length>0&&t.classList.add(...e)}function g(t,...e){t&&e.length>0&&t.classList.remove(...e)}var n,T=((n=T||{}).Ended="ended",n.Cancelled="cancelled",n);function C(t,e,n,d){let a=n?"enter":"leave",s=(0,disposables.k)(),u=void 0!==d?function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}(d):()=>{},m=(0,match.E)(a,{enter:()=>e.enter,leave:()=>e.leave}),i=(0,match.E)(a,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),o=(0,match.E)(a,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return g(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),f(t,...m,...o),s.nextFrame((()=>{g(t,...o),f(t,...i),function c(t,e){let n=(0,disposables.k)();if(!t)return n.dispose;let{transitionDuration:d,transitionDelay:a}=getComputedStyle(t),[s,u]=[d,a].map((i=>{let[o=0]=i.split(",").filter(Boolean).map((r=>r.includes("ms")?parseFloat(r):1e3*parseFloat(r))).sort(((r,l)=>l-r));return o}));if(s+u!==0){let i=[];i.push(n.addEventListener(t,"transitionrun",(o=>{o.target===o.currentTarget&&(i.splice(0).forEach((r=>r())),i.push(n.addEventListener(t,"transitionend",(r=>{r.target===r.currentTarget&&(e("ended"),i.splice(0).forEach((l=>l())))})),n.addEventListener(t,"transitioncancel",(r=>{r.target===r.currentTarget&&(e("cancelled"),i.splice(0).forEach((l=>l())))}))))})))}else e("ended");return n.add((()=>e("cancelled"))),n.dispose}(t,(r=>("ended"===r&&(g(t,...m),f(t,...e.entered)),u(r))))})),s.dispose}var use_disposables=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_event=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-event.js");function use_transition_H({container:u,direction:o,classes:c,events:t,onStart:d,onStop:l}){let f=(0,use_is_mounted.t)(),m=(0,use_disposables.G)(),e=(0,use_latest_value.E)(o),b=(0,use_event.z)((()=>(0,match.E)(e.current,{enter:()=>t.current.beforeEnter(),leave:()=>t.current.beforeLeave(),idle:()=>{}}))),p=(0,use_event.z)((()=>(0,match.E)(e.current,{enter:()=>t.current.afterEnter(),leave:()=>t.current.afterLeave(),idle:()=>{}})));(0,use_iso_morphic_effect.e)((()=>{let r=(0,disposables.k)();m.add(r.dispose);let i=u.current;if(i&&"idle"!==e.current&&f.current)return r.dispose(),b(),d.current(e.current),r.add(C(i,c.current,"enter"===e.current,(v=>{r.dispose(),(0,match.E)(v,{[T.Ended](){p(),l.current(e.current)},[T.Cancelled]:()=>{}})}))),r.dispose}),[o])}function h(e=""){return e.split(" ").filter((n=>n.trim().length>1))}let N=(0,react.createContext)(null);N.displayName="TransitionContext";var t,ge=((t=ge||{}).Visible="visible",t.Hidden="hidden",t);let L=(0,react.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter((({state:n})=>"visible"===n)).length>0}function Z(e){let n=(0,use_latest_value.E)(e),t=(0,react.useRef)([]),r=(0,use_is_mounted.t)(),s=(0,use_event.z)(((l,o=render.l4.Hidden)=>{let a=t.current.findIndex((({id:u})=>u===l));-1!==a&&((0,match.E)(o,{[render.l4.Unmount](){t.current.splice(a,1)},[render.l4.Hidden](){t.current[a].state="hidden"}}),(0,micro_task.Y)((()=>{var u;!w(t)&&r.current&&(null==(u=n.current)||u.call(n))})))})),g=(0,use_event.z)((l=>{let o=t.current.find((({id:a})=>a===l));return o?"visible"!==o.state&&(o.state="visible"):t.current.push({id:l,state:"visible"}),()=>s(l,render.l4.Unmount)}));return(0,react.useMemo)((()=>({children:t,register:g,unregister:s})),[g,s,t])}function be(){}L.displayName="NestingContext";let Se=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function $(e){var t;let n={};for(let r of Se)n[r]=null!=(t=e[r])?t:be;return n}let ee=render.AN.RenderStrategy,te=(0,render.yV)((function(n,t){let{beforeEnter:r,afterEnter:s,beforeLeave:g,afterLeave:l,enter:o,enterFrom:a,enterTo:u,entered:A,leave:v,leaveFrom:E,leaveTo:x,...y}=n,d=(0,react.useRef)(null),D=(0,use_sync_refs.T)(d,t),[i,C]=(0,react.useState)("visible"),p=y.unmount?render.l4.Unmount:render.l4.Hidden,{show:b,appear:re,initial:ne}=function ve(){let e=(0,react.useContext)(N);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:H,unregister:P}=function Ce(){let e=(0,react.useContext)(L);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),F=(0,react.useRef)(null),f=(0,use_id.M)();(0,react.useEffect)((()=>{if(f)return H(f)}),[H,f]),(0,react.useEffect)((()=>{if(p===render.l4.Hidden&&f){if(b&&"visible"!==i)return void C("visible");(0,match.E)(i,{hidden:()=>P(f),visible:()=>H(f)})}}),[i,f,H,P,b,p]);let ie=(0,use_latest_value.E)({enter:h(o),enterFrom:h(a),enterTo:h(u),entered:h(A),leave:h(v),leaveFrom:h(E),leaveTo:h(x)}),se=function Ee(e){let n=(0,react.useRef)($(e));return(0,react.useEffect)((()=>{n.current=$(e)}),[e]),n}({beforeEnter:r,afterEnter:s,beforeLeave:g,afterLeave:l}),O=(0,use_server_handoff_complete.H)();(0,react.useEffect)((()=>{if(O&&"visible"===i&&null===d.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[d,i,O]);let M=ne&&!re,oe=!O||M||F.current===b?"idle":b?"enter":"leave",_=(0,react.useRef)(!1),B=Z((()=>{_.current||(C("hidden"),P(f))}));use_transition_H({container:d,classes:ie,events:se,direction:oe,onStart:(0,use_latest_value.E)((()=>{_.current=!0})),onStop:(0,use_latest_value.E)((ue=>{_.current=!1,"leave"===ue&&!w(B)&&(C("hidden"),P(f))}))}),(0,react.useEffect)((()=>{!M||(p===render.l4.Hidden?F.current=null:F.current=b)}),[b,M,i]);let le=y,ae={ref:D};return react.createElement(L.Provider,{value:B},react.createElement(open_closed.up,{value:(0,match.E)(i,{visible:open_closed.ZM.Open,hidden:open_closed.ZM.Closed})},(0,render.sY)({ourProps:ae,theirProps:le,defaultTag:"div",features:ee,visible:"visible"===i,name:"Transition.Child"})))})),G=(0,render.yV)((function(n,t){let{show:r,appear:s=!1,unmount:g,...l}=n,o=(0,react.useRef)(null),a=(0,use_sync_refs.T)(o,t);(0,use_server_handoff_complete.H)();let u=(0,open_closed.oJ)();if(void 0===r&&null!==u&&(r=(0,match.E)(u,{[open_closed.ZM.Open]:!0,[open_closed.ZM.Closed]:!1})),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[A,v]=(0,react.useState)(r?"visible":"hidden"),E=Z((()=>{v("hidden")})),[x,y]=(0,react.useState)(!0),d=(0,react.useRef)([r]);(0,use_iso_morphic_effect.e)((()=>{!1!==x&&d.current[d.current.length-1]!==r&&(d.current.push(r),y(!1))}),[d,r]);let D=(0,react.useMemo)((()=>({show:r,appear:s,initial:x})),[r,s,x]);(0,react.useEffect)((()=>{if(r)v("visible");else if(w(E)){let C=o.current;if(!C)return;let p=C.getBoundingClientRect();0===p.x&&0===p.y&&0===p.width&&0===p.height&&v("hidden")}else v("hidden")}),[r,E]);let i={unmount:g};return react.createElement(L.Provider,{value:E},react.createElement(N.Provider,{value:D},(0,render.sY)({ourProps:{...i,as:react.Fragment,children:react.createElement(te,{ref:a,...i,...l})},theirProps:{},defaultTag:react.Fragment,features:ee,visible:"visible"===A,name:"Transition"})))})),ye=(0,render.yV)((function(n,t){let r=null!==(0,react.useContext)(N),s=null!==(0,open_closed.oJ)();return react.createElement(react.Fragment,null,!r&&s?react.createElement(G,{ref:t,...n}):react.createElement(te,{ref:t,...n}))})),We=Object.assign(G,{Child:ye,Root:G})},"./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>p});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/utils/disposables.js");function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>e.dispose()),[e]),e}},"./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>f});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},"./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/internal/open-closed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{up:()=>C,ZM:()=>p,oJ:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);o.displayName="OpenClosedContext";var e,p=((e=p||{})[e.Open=0]="Open",e[e.Closed=1]="Closed",e);function s(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o)}function C({value:t,children:n}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o.Provider,{value:t},n)}},"./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/utils/disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function o(){let a=[],i=[],n={enqueue(e){i.push(e)},addEventListener:(e,t,r,s)=>(e.addEventListener(t,r,s),n.add((()=>e.removeEventListener(t,r,s)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>n.requestAnimationFrame((()=>n.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},add:e=>(a.push(e),()=>{let t=a.indexOf(e);if(t>=0){let[r]=a.splice(t,1);r()}}),dispose(){for(let e of a.splice(0))e()},async workQueue(){for(let e of i.splice(0))await e()}};return n}__webpack_require__.d(__webpack_exports__,{k:()=>o})},"./node_modules/.pnpm/@headlessui+react@1.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/utils/micro-task.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((o=>setTimeout((()=>{throw o}))))}__webpack_require__.d(__webpack_exports__,{Y:()=>t})},"./src/components/MaskedInput/MaskedInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,TelephoneNumber:()=>TelephoneNumber,WithForm:()=>WithForm,__namedExportsOrder:()=>__namedExportsOrder});var react_hook_form__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react-hook-form@7.23.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/MaskedInput/index.ts"),_resources_StorybookCommonWithForm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/resources/StorybookCommonWithForm.tsx"),_resources_story_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/resources/story-common.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Form/Masked Input",component:___WEBPACK_IMPORTED_MODULE_1__.C,argTypes:{maskOptions:_resources_story_common__WEBPACK_IMPORTED_MODULE_3__.wJ,className:_resources_story_common__WEBPACK_IMPORTED_MODULE_3__.wJ,onChange:_resources_story_common__WEBPACK_IMPORTED_MODULE_3__.wJ,handlerRef:_resources_story_common__WEBPACK_IMPORTED_MODULE_3__.wJ},parameters:{controls:{expanded:!0}}},TelephoneNumber=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"text-skin-base",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"mb-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p",{children:['Default behavior with masked "+',1,' (000) 000-0000"']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.C,{maskOptions:{mask:"+{1} (000) 000-0000"}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"mb-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"Eager mode. Notice how pre-defined chars are shown when the char before that is typed while the other example require you to type the next character before the pre-defined char will show up"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.C,{maskOptions:{mask:"+{1} (000) 000-0000",eager:!0}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"With default value. Make sure to use unmaskedValue"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.C,{maskOptions:{mask:"+{1} (000) 000-0000",eager:!0},defaultValue:"9999999999"})]})]});TelephoneNumber.displayName="TelephoneNumber";const WithForm=()=>{const methods=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.cI)(),{errors}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.cl)({control:methods.control});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_0__.RV,{...methods,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_resources_StorybookCommonWithForm__WEBPACK_IMPORTED_MODULE_2__.M,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p",{className:"text-skin-base mb-4",children:["In onChange, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong",{children:"Do not"})," use unmaskedValue to set Input value, use maskedValue instead"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.C,{maskOptions:{mask:"+{1} (000) 000-0000"},label:"Telephone Number",defaultValue:"9999999999",state:errors.phoneNumber?.message?"error":"normal",caption:errors.phoneNumber?.message,type:"tel",...methods.register("phoneNumber"),onChange:(_,maskedValue)=>{methods.setValue("phoneNumber",maskedValue)}})]})})};WithForm.displayName="WithForm",TelephoneNumber.parameters={...TelephoneNumber.parameters,docs:{...TelephoneNumber.parameters?.docs,source:{originalSource:'() => {\n  return <div className="text-skin-base">\r\n      <div className="mb-4">\r\n        <p>Default behavior with masked "+{1} (000) 000-0000"</p>\r\n        <MaskedInput maskOptions={{\n        mask: "+{1} (000) 000-0000"\n      }} />\r\n      </div>\r\n\r\n      <div className="mb-4">\r\n        <p>\r\n          Eager mode. Notice how pre-defined chars are shown when the char\r\n          before that is typed while the other example require you to type the\r\n          next character before the pre-defined char will show up\r\n        </p>\r\n        <MaskedInput maskOptions={{\n        mask: "+{1} (000) 000-0000",\n        eager: true\n      }} />\r\n      </div>\r\n\r\n      <div>\r\n        <p>With default value. Make sure to use unmaskedValue</p>\r\n        <MaskedInput maskOptions={{\n        mask: "+{1} (000) 000-0000",\n        eager: true\n      }} defaultValue="9999999999" />\r\n      </div>\r\n    </div>;\n}',...TelephoneNumber.parameters?.docs?.source}}},WithForm.parameters={...WithForm.parameters,docs:{...WithForm.parameters?.docs,source:{originalSource:'() => {\n  const methods = useForm<{\n    phoneNumber: string;\n  }>();\n  const {\n    errors\n  } = useFormState({\n    control: methods.control\n  });\n  return <FormProvider {...methods}>\r\n      <StorybookCommonWithForm>\r\n        <p className="text-skin-base mb-4">\r\n          In onChange, <strong>Do not</strong> use unmaskedValue to set Input\r\n          value, use maskedValue instead\r\n        </p>\r\n\r\n        <MaskedInput maskOptions={{\n        mask: "+{1} (000) 000-0000"\n      }} label="Telephone Number" defaultValue="9999999999" state={errors["phoneNumber"]?.message ? "error" : "normal"} caption={errors["phoneNumber"]?.message} type="tel" {...methods.register("phoneNumber")} onChange={(_, maskedValue) => {\n        methods.setValue("phoneNumber", maskedValue);\n      }} />\r\n      </StorybookCommonWithForm>\r\n    </FormProvider>;\n}',...WithForm.parameters?.docs?.source}}};const __namedExportsOrder=["TelephoneNumber","WithForm"]},"./src/components/MaskedInput/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>MaskedInput});var classnames=__webpack_require__("./node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm=__webpack_require__("./node_modules/.pnpm/imask@6.4.2/node_modules/imask/esm/index.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Input=__webpack_require__("./src/components/Input/index.ts"),common_data=__webpack_require__("./src/components/resources/common.data.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const MaskedInput=(0,react.forwardRef)((({maskOptions,onChange,handlerRef,...inputProps},ref)=>{const opts=(0,react.useRef)(maskOptions),inputRef=(0,react.useRef)(null),iMaskRef=(0,react.useRef)();return(0,react.useEffect)((()=>{if(inputRef.current){const iMask=(0,esm.ZP)(inputRef.current,opts.current);return iMask.on("accept",(()=>{onChange?.(iMask.unmaskedValue,iMask.value)})),iMaskRef.current=iMask,()=>{iMask.destroy()}}}),[onChange]),(0,react.useEffect)((()=>{iMaskRef.current?.updateValue()}),[inputProps.value,inputProps.defaultValue]),(0,react.useEffect)((()=>{ref&&("function"==typeof ref?ref(inputRef.current):ref.current=inputRef.current)}),[ref]),(0,react.useImperativeHandle)(handlerRef,(()=>({setValue:newVal=>iMaskRef.current&&(iMaskRef.current.value=newVal)})),[]),(0,jsx_runtime.jsx)(Input.I,{...inputProps,className:classnames_default()(`${common_data.tH}-masked-input`,inputProps.className),ref:inputRef})}));try{MaskedInput.displayName="MaskedInput",MaskedInput.__docgenInfo={description:"",displayName:"MaskedInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},borderType:{defaultValue:null,description:"",name:"borderType",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"outline"'},{value:'"plain"'}]}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},captionIcon:{defaultValue:null,description:"",name:"captionIcon",required:!1,type:{name:'["fas" | "far" | "fal" | "fat" | "fad" | "fab", string]'}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"normal"'}]}},hasContent:{defaultValue:null,description:"",name:"hasContent",required:!1,type:{name:"boolean"}},debounceParam:{defaultValue:null,description:"",name:"debounceParam",required:!1,type:{name:"{ debounceTime: number; flushOnUnmount?: boolean; }"}},formControl:{defaultValue:null,description:"",name:"formControl",required:!1,type:{name:"Control<any>"}},leadingAdornment:{defaultValue:null,description:"",name:"leadingAdornment",required:!1,type:{name:"FormAdornment"}},leadingAdornmentOnClick:{defaultValue:null,description:"",name:"leadingAdornmentOnClick",required:!1,type:{name:"(() => void)"}},trailingAdornment:{defaultValue:null,description:"",name:"trailingAdornment",required:!1,type:{name:"FormAdornment"}},trailingAdornmentOnClick:{defaultValue:null,description:"",name:"trailingAdornmentOnClick",required:!1,type:{name:"(() => void)"}},maskOptions:{defaultValue:null,description:"",name:"maskOptions",required:!0,type:{name:"AnyMaskedOptions"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((unmaskedValue: string, maskedValue: string) => void)"}},handlerRef:{defaultValue:null,description:"",name:"handlerRef",required:!1,type:{name:"Ref<MaskedInputHandle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MaskedInput/MaskedInput.tsx#MaskedInput"]={docgenInfo:MaskedInput.__docgenInfo,name:"MaskedInput",path:"src/components/MaskedInput/MaskedInput.tsx#MaskedInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/resources/StorybookCommonWithForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>StorybookCommonWithForm});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-hook-form@7.23.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const StorybookCommonWithForm=({children})=>{const[submittedValue,setSubmittedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),{handleSubmit}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Gc)(),onSubmit=handleSubmit((data=>{setSubmittedValue(data)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form",{onSubmit,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{type:"submit",borderType:"outline",className:"mt-4",children:"Submit"}),submittedValue&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("pre",{className:"mt-8 text-skin-base",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("code",{children:["Submitted value ",JSON.stringify(submittedValue)]})})]})};StorybookCommonWithForm.displayName="StorybookCommonWithForm";try{StorybookCommonWithForm.displayName="StorybookCommonWithForm",StorybookCommonWithForm.__docgenInfo={description:"",displayName:"StorybookCommonWithForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/resources/StorybookCommonWithForm.tsx#StorybookCommonWithForm"]={docgenInfo:StorybookCommonWithForm.__docgenInfo,name:"StorybookCommonWithForm",path:"src/components/resources/StorybookCommonWithForm.tsx#StorybookCommonWithForm"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/resources/story-common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JU:()=>storyIconOption,wJ:()=>storyDisabledOption});const storyIcons={"✌":["fas","hand-peace"],"🐶":["fas","dog"],"🐱":["fas","cat"]},storyIconOption={options:Object.keys(storyIcons),mapping:storyIcons,control:{type:"select",labels:Object.entries(storyIcons).reduce(((accum,[key,icon])=>({...accum,[key]:`${key} ${icon[1]}`})),{})}},storyDisabledOption={table:{disable:!0}}}}]);