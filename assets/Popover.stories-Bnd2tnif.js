import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as j}from"./index-CTjT7uj6.js";import{a as o}from"./index-BPE7S6ci.js";import{P as p,C as b}from"./Popover-BEgU7IwE.js";import{I as k}from"./Icon-D9EK_Hve.js";import"./use-root-containers-CbuclWc0.js";import"./render-C-IlGZgy.js";import"./use-owner-DSOmOYVQ.js";import"./focus-management-CaV_VYtM.js";import"./index-9r8iugjR.js";import"./hidden-BS2yFtF9.js";import"./transition-BVEjyM41.js";import"./use-disposables-BgtiGxt7.js";import"./use-flags-B0uNXtCz.js";import"./use-is-mounted-DsBFbocb.js";import"./open-closed-CcTP-TJU.js";import"./floating-ui.dom-BHn9GYQn.js";import"./keyboard-BCuVGIMY.js";import"./use-resolve-button-type-CoZBuHh8.js";import"./bugs-DpEN4NTH.js";import"./Button-CMa_9Q4I.js";import"./index-C4AY7A6g.js";import"./index-BRV0Se7Z.js";const a=["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],V={title:"Components/Popover",component:p,argTypes:{popoverContainerAs:o,popoverOpenerProps:o,popoverProps:o,popoverPanelProps:o,popperProps:o,children:o,placement:{options:a,mapping:a.reduce((t,r)=>({...t,[r]:r}),{}),control:{type:"select",labels:a.reduce((t,r)=>({...t,[r]:r}),{})}}},parameters:{controls:{expanded:!0}}},n=({icon:t,text:r})=>e.jsxs("button",{className:"flex items-center py-2 px-4 w-64 focus:outline-none focus:bg-skin-disabled hover:bg-skin-disabled hover:cursor-pointer",children:[e.jsx(k,{icon:t,className:"fa-fw text-skin-secondary mr-2"}),e.jsx("span",{className:"ml-2 text-skin-base",children:r})]}),y=t=>e.jsxs("div",{className:"w-[40rem] h-[30rem] flex flex-col justify-center items-center",children:[e.jsx("p",{className:"text-skin-base mb-12",children:"Try placement with screen responsive to see Popover in action!"}),e.jsx(b.Group,{children:e.jsx(p,{...t,popoverOpenerProps:{children:"Click me!"},popperProps:{placement:t.placement},children:e.jsxs("div",{className:"divide-y divide-skin-disabled",children:[e.jsxs("div",{children:[e.jsx(n,{icon:["fas","dog"],text:"A doggo option"}),e.jsx(n,{icon:["fas","cat"],text:"A kat option"})]}),e.jsx("div",{children:e.jsx(n,{icon:["fas","hand-peace"],text:"A peace option"})}),e.jsx("div",{children:e.jsx(n,{icon:["fas","trash"],text:"Delete"})})]})})})]}),i=y.bind({}),N=[{buttonText:"Solution",contentList:[[{icon:["fas","dog"],text:"Doggo"},{icon:["fas","cat"],text:"Cat"},{icon:["fas","file-audio"],text:"Music"}],[{icon:["fas","trash"],text:"Delete"}]]},{buttonText:"Something else",contentList:[[{icon:["fas","hand-peace"],text:"Peace"}]]},{buttonText:"More here!",contentList:[[{icon:["fas","heart"],text:"What a heart"},{icon:["fas","spinner"],text:"Here come a spinner"}],[{icon:["fas","check"],text:"Check mate!"}],[{icon:["fas","info-circle"],text:"Hey I'm an info!"}]]}],T=t=>e.jsxs("div",{className:"w-[40rem] h-[30rem] flex flex-col justify-center items-center",children:[e.jsx("p",{className:"text-skin-base mb-12",children:"Notice how Popover doesn't close when tabbing other Opener"}),e.jsx(b.Group,{className:"flex border border-skin-base border-opacity-40 divide-x divide-skin-disabled rounded-lg",children:N.map((r,f)=>j.createElement(p,{...t,key:f,popoverOpenerProps:{children:r.buttonText,borderType:"plain",className:"!rounded-none"},popperProps:{placement:t.placement}},e.jsx("div",{className:"divide-y divide-skin-disabled",children:r.contentList.map((u,P)=>e.jsx("div",{children:u.map((c,g)=>e.jsx(n,{icon:c.icon,text:c.text},g))},P))})))})]}),s=T.bind({});var d,m,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <div className="w-[40rem] h-[30rem] flex flex-col justify-center items-center">\r
      <p className="text-skin-base mb-12">\r
        Try placement with screen responsive to see Popover in action!\r
      </p>\r
\r
      <LibPopover.Group>\r
        <Popover {...args} popoverOpenerProps={{
        children: "Click me!"
      }} popperProps={{
        placement: args.placement
      }}>\r
          <div className="divide-y divide-skin-disabled">\r
            <div>\r
              <IconWithText icon={["fas", "dog"]} text="A doggo option" />\r
              <IconWithText icon={["fas", "cat"]} text="A kat option" />\r
            </div>\r
\r
            <div>\r
              <IconWithText icon={["fas", "hand-peace"]} text="A peace option" />\r
            </div>\r
\r
            <div>\r
              <IconWithText icon={["fas", "trash"]} text="Delete" />\r
            </div>\r
          </div>\r
        </Popover>\r
      </LibPopover.Group>\r
    </div>;
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var x,v,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <div className="w-[40rem] h-[30rem] flex flex-col justify-center items-center">\r
      <p className="text-skin-base mb-12">\r
        Notice how Popover doesn't close when tabbing other Opener\r
      </p>\r
\r
      <LibPopover.Group className="flex border border-skin-base border-opacity-40 divide-x divide-skin-disabled rounded-lg">\r
        {dataList.map((data, index) => <Popover {...args} key={index} popoverOpenerProps={{
        children: data.buttonText,
        borderType: "plain",
        className: "!rounded-none"
      }} popperProps={{
        placement: args.placement
      }}>\r
            <div className="divide-y divide-skin-disabled">\r
              {data.contentList.map((content, index) => <div key={index}>\r
                  {content.map((item, index) => <IconWithText key={index}
            // @ts-ignore
            icon={item.icon} text={item.text} />)}\r
                </div>)}\r
            </div>\r
          </Popover>)}\r
      </LibPopover.Group>\r
    </div>;
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const X=["Default","Group"];export{i as Default,s as Group,X as __namedExportsOrder,V as default};
