import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-BCtMShv3.js";import{s as t}from"./index-KpAVk5lk.js";import{P as c,l as k,B as g}from"./Popover-ChzGn0PM.js";import{I as y}from"./Icon-DLP5P1Ct.js";import"./useFocusRing-D4bu8X2q.js";import"./use-resolve-button-type-DNd3Xgnw.js";import"./keyboard-tlvg-gRs.js";import"./use-sync-refs-CZ2KMCOF.js";import"./floating-B_I44q2N.js";import"./floating-ui.dom-CmL5ukrp.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./use-tab-direction-IrkWQ0ly.js";import"./hidden-CkFg_2Sb.js";import"./portal-BDPEH6C3.js";import"./focus-management-Bh_oGY5B.js";import"./use-server-handoff-complete-C8_JXbTh.js";import"./bugs-DpEN4NTH.js";import"./Button-Dw10h_TB.js";import"./index-CvPWi8JN.js";const a=["bottom start","bottom","bottom end","top start","top"],U={title:"Components/Popover",component:c,argTypes:{popoverContainerAs:t,popoverOpenerProps:t,popoverProps:t,popoverPanelProps:t,popperProps:t,children:t,anchor:{options:a,mapping:a.reduce((o,r)=>({...o,[r]:r}),{}),control:{type:"select",labels:a.reduce((o,r)=>({...o,[r]:r}),{})}}},parameters:{controls:{expanded:!0}}},n=({icon:o,text:r})=>e.jsxs("button",{className:"flex items-center py-2 px-4 w-64 focus:outline-none focus:bg-skin-disabled hover:bg-skin-disabled hover:cursor-pointer",children:[e.jsx(y,{icon:o,className:"fa-fw text-skin-secondary mr-2"}),e.jsx("span",{className:"ml-2 text-skin-base",children:r})]}),N=o=>e.jsxs("div",{className:"w-[40rem] h-[30rem] flex flex-col justify-center items-center",children:[e.jsx("p",{className:"text-skin-base mb-12",children:"Try placement with screen responsive to see Popover in action!"}),e.jsx(k.Group,{children:e.jsx(c,{...o,popoverOpenerProps:{children:"Click me!"},popoverPanelProps:{anchor:o.anchor},children:e.jsxs("div",{className:"divide-y divide-skin-disabled",children:[e.jsxs("div",{children:[e.jsx(n,{icon:["fas","dog"],text:"A doggo option"}),e.jsx(n,{icon:["fas","cat"],text:"A kat option"})]}),e.jsx("div",{children:e.jsx(n,{icon:["fas","hand-peace"],text:"A peace option"})}),e.jsx("div",{children:e.jsx(n,{icon:["fas","trash"],text:"Delete"})})]})})})]}),s=N.bind({}),T=[{buttonText:"Solution",contentList:[[{icon:["fas","dog"],text:"Doggo"},{icon:["fas","cat"],text:"Cat"},{icon:["fas","file-audio"],text:"Music"}],[{icon:["fas","trash"],text:"Delete"}]]},{buttonText:"Something else",contentList:[[{icon:["fas","hand-peace"],text:"Peace"}]]},{buttonText:"More here!",contentList:[[{icon:["fas","heart"],text:"What a heart"},{icon:["fas","spinner"],text:"Here come a spinner"}],[{icon:["fas","check"],text:"Check mate!"}],[{icon:["fas","info-circle"],text:"Hey I'm an info!"}]]}],w=o=>e.jsxs("div",{className:"w-[40rem] h-[30rem] flex flex-col justify-center items-center",children:[e.jsx("p",{className:"text-skin-base mb-12",children:"Notice how Popover doesn't close when tabbing other Opener"}),e.jsx(g,{className:"flex border border-skin-base border-opacity-40 divide-x divide-skin-disabled rounded-lg",children:T.map((r,b)=>j.createElement(c,{...o,key:b,popoverOpenerProps:{children:r.buttonText,borderType:"plain",className:"!rounded-none"},popoverPanelProps:{anchor:o.anchor}},e.jsx("div",{className:"divide-y divide-skin-disabled",children:r.contentList.map((f,u)=>e.jsx("div",{children:f.map((p,P)=>e.jsx(n,{icon:p.icon,text:p.text},P))},u))})))})]}),i=w.bind({});var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <div className="w-[40rem] h-[30rem] flex flex-col justify-center items-center">\r
      <p className="text-skin-base mb-12">\r
        Try placement with screen responsive to see Popover in action!\r
      </p>\r
\r
      <LibPopover.Group>\r
        <Popover {...args} popoverOpenerProps={{
        children: "Click me!"
      }} popoverPanelProps={{
        anchor: args.anchor
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var x,v,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <div className="w-[40rem] h-[30rem] flex flex-col justify-center items-center">\r
      <p className="text-skin-base mb-12">\r
        Notice how Popover doesn't close when tabbing other Opener\r
      </p>\r
\r
      <PopoverGroup className="flex border border-skin-base border-opacity-40 divide-x divide-skin-disabled rounded-lg">\r
        {dataList.map((data, index) => <Popover {...args} key={index} popoverOpenerProps={{
        children: data.buttonText,
        borderType: "plain",
        className: "!rounded-none"
      }} popoverPanelProps={{
        anchor: args.anchor
      }}>\r
            <div className="divide-y divide-skin-disabled">\r
              {data.contentList.map((content, index) => <div key={index}>\r
                  {content.map((item, index) => <IconWithText key={index}
            // @ts-ignore
            icon={item.icon} text={item.text} />)}\r
                </div>)}\r
            </div>\r
          </Popover>)}\r
      </PopoverGroup>\r
    </div>;
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const V=["Default","Group"];export{s as Default,i as Group,V as __namedExportsOrder,U as default};
