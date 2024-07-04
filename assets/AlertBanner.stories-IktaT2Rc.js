import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as T}from"./index-CTjT7uj6.js";import{c as t,C as o,s as _,a as d,b as q}from"./index-BPE7S6ci.js";import{I}from"./Icon-Bd6wgpvP.js";import"./index-C4AY7A6g.js";import"./index-BRV0Se7Z.js";const a=({className:r,iconClassName:n,contentClassName:x,iconContainerClassName:b,colorType:v,header:c,description:l,icon:m,hasShadow:j=!0,roundedCorner:C=!0,borderPlacement:p="top"})=>e.jsxs("div",{className:t(`${o}-alert-banner`,`${o}-alert-banner--${v}`,`${o}-alert-banner--border-${p==null?void 0:p[0]}`,{[`${o}-alert-banner--has-shadow`]:j,[`${o}-alert-banner--rounded-corner`]:C},r),children:[m&&e.jsx("div",{className:t("icon-container",b),children:e.jsx(I,{icon:m,className:t("fa-fw",n)})}),e.jsxs("div",{className:t("content",x),children:[typeof c=="string"?e.jsx("p",{className:"header-text",children:c}):c,typeof l=="string"?e.jsx("p",{className:"description",children:l}):l]})]});try{a.displayName="AlertBanner",a.__docgenInfo={description:"",displayName:"AlertBanner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},iconContainerClassName:{defaultValue:null,description:"",name:"iconContainerClassName",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"",name:"contentClassName",required:!1,type:{name:"string"}},colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"neutral"'}]}},header:{defaultValue:null,description:"Use a plain string header if you want to use the pre-styled option",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Use a plain string description if you want to use the pre-styled option",name:"description",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:'["fas" | "far" | "fal" | "fat" | "fad" | "fab", string]'}},hasShadow:{defaultValue:{value:"true"},description:"",name:"hasShadow",required:!1,type:{name:"boolean"}},roundedCorner:{defaultValue:{value:"true"},description:"",name:"roundedCorner",required:!1,type:{name:"boolean"}},borderPlacement:{defaultValue:{value:"top"},description:"",name:"borderPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}const F={title:"Components/Alert Banner",component:a,argTypes:{icon:{..._},className:d,iconClassName:d,colorType:d,header:{type:"string"},description:{type:"string"}},parameters:{controls:{expanded:!0}}},V=r=>{switch(r){case"danger":case"warning":return"triangle-exclamation";case"success":return"circle-check";case"info":return"circle-info";default:return"dog"}},s=r=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-base mb-8",children:["Inspired by"," ",e.jsx("a",{href:"https://esri.github.io/calcite-components/?path=/story/components-alert--title-message-link",target:"_blank",rel:"noreferrer",className:"text-skin-info font-medium hover:underline",children:"Calcite Alert"})]}),q.map(n=>e.jsxs(T.Fragment,{children:[e.jsxs("p",{children:["Color type: ",n]}),e.jsx(a,{colorType:n,icon:["fas",V(n)],...r}),e.jsx("br",{className:"my-2"})]},n))]});s.args={header:"This is a header",description:"What a description"};const i=()=>e.jsxs("div",{className:"text-skin-base",children:[e.jsx(a,{colorType:"info",header:"No icon",description:"No icon description"}),e.jsx("br",{className:"my-2"}),e.jsx(a,{colorType:"info",header:"No icon",description:"No icon description No icon description No icon description No icon description No icon description No icon description No icon description No icon description No icon description"})]});var u,f,N;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => <>\r
    <p className="text-base mb-8">\r
      Inspired by{" "}\r
      <a href="https://esri.github.io/calcite-components/?path=/story/components-alert--title-message-link" target="_blank" rel="noreferrer" className="text-skin-info font-medium hover:underline">\r
        Calcite Alert\r
      </a>\r
    </p>\r
\r
    {colorTypeList.map(type => <Fragment key={type}>\r
        <p>Color type: {type}</p>\r
        <AlertBanner colorType={type} icon={["fas", colorTypeToIcon(type)]} {...args} />\r
        <br className="my-2" />\r
      </Fragment>)}\r
  </>`,...(N=(f=s.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var y,h,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <div className="text-skin-base">\r
      <AlertBanner colorType="info" header="No icon" description="No icon description" />\r
\r
      <br className="my-2" />\r
\r
      <AlertBanner colorType="info" header="No icon" description="No icon description No icon description No icon description No icon description No icon description No icon description No icon description No icon description No icon description" />\r
    </div>;
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const O=["Default","NoIcon"];export{s as Default,i as NoIcon,O as __namedExportsOrder,F as default};
