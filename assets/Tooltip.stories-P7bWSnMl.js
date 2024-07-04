import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{a as o}from"./index-BPE7S6ci.js";import{T as n}from"./Tooltip-Bl_bbHko.js";import{B as s}from"./Button-WKpNADTN.js";import{M as x}from"./Modal-BFOAJw29.js";import"./index-9r8iugjR.js";import"./animation-BOght_T9.js";import"./transition-BVEjyM41.js";import"./use-disposables-BgtiGxt7.js";import"./render-C-IlGZgy.js";import"./use-flags-B0uNXtCz.js";import"./use-is-mounted-DsBFbocb.js";import"./open-closed-CcTP-TJU.js";import"./Icon-Bd6wgpvP.js";import"./index-C4AY7A6g.js";import"./index-BRV0Se7Z.js";import"./use-root-containers-CbuclWc0.js";import"./use-owner-DSOmOYVQ.js";import"./focus-management-CaV_VYtM.js";import"./hidden-BS2yFtF9.js";import"./keyboard-BCuVGIMY.js";import"./bugs-DpEN4NTH.js";import"./description-B9Xxk_QN.js";const _={title:"Components/Tooltip",component:n,argTypes:{className:o,containerId:o,openOn:o,defaultOpen:o,offset:o,popoverOption:o,refElement:o},parameters:{controls:{expanded:!0}}},a=t=>{const l=r.useRef(null),i=r.useRef(null),p=r.useRef(null);return e.jsxs("div",{className:"text-skin-base",id:"root",children:[e.jsx(s,{ref:l,children:"Hover over me!"}),e.jsx(n,{offset:[0,10],stylePreset:"preset-1",...t,refElement:l,children:e.jsx("p",{children:"This is a tooltip with preset styling ╰(*°▽°*)╯"})}),e.jsx(s,{ref:i,className:"mt-8",children:"Barebone tooltip!"}),e.jsx(n,{...t,stylePreset:null,refElement:i,children:"This is a barebone tooltip ☆*: .｡. o(≧▽≦)o .｡.:*☆"}),e.jsx(s,{ref:p,className:"mt-8",children:"Top tooltip!"}),e.jsx(n,{offset:[0,10],...t,refElement:p,popoverOption:{placement:"top"},children:"This should show at the top (❁´◡`❁)"})]})},u=t=>{const l=r.useRef(null),i=r.useRef(null),p=r.useRef(null);return e.jsx("div",{id:"root",children:e.jsxs(x,{isOpen:!0,bodyClassName:"py-16 px-4 text-skin-base",children:[e.jsx("p",{className:"mb-2",children:"Tooltip without z-index set will be behind the modal"}),e.jsx(s,{ref:l,className:"mb-16",children:"Hover over me!"}),e.jsx(n,{offset:[0,10],stylePreset:"preset-1",...t,refElement:l,children:e.jsx("p",{children:"This is a tooltip with preset styling ╰(*°▽°*)╯"})}),e.jsx("p",{className:"mb-2",children:"You can use `inModal` prop"}),e.jsx(s,{ref:i,className:"mb-16",children:"Hover over me!"}),e.jsx(n,{offset:[0,10],stylePreset:"preset-1",...t,refElement:i,inModal:!0,children:e.jsx("p",{children:"This is a tooltip with preset styling ╰(*°▽°*)╯"})}),e.jsx("p",{className:"mb-2",children:"Or manually set the z-index to be higher than the modal (don't go too wild!)"}),e.jsx(s,{ref:p,className:"mb-16",children:"Hover over me!"}),e.jsx(n,{offset:[0,10],stylePreset:"preset-1",...t,refElement:p,zIndex:1e3,children:e.jsx("p",{children:"This is a tooltip with preset styling ╰(*°▽°*)╯"})})]})})};var m,f,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const buttonRef3 = useRef<HTMLButtonElement>(null);
  return <div className="text-skin-base" id="root">\r
      <Button ref={buttonRef}>Hover over me!</Button>\r
\r
      <Tooltip offset={[0, 10]} stylePreset="preset-1" {...args} refElement={buttonRef}>\r
        <p>This is a tooltip with preset styling ╰(*°▽°*)╯</p>\r
      </Tooltip>\r
\r
      <Button ref={buttonRef2} className="mt-8">\r
        Barebone tooltip!\r
      </Button>\r
      <Tooltip {...args} stylePreset={null} refElement={buttonRef2}>\r
        This is a barebone tooltip ☆*: .｡. o(≧▽≦)o .｡.:*☆\r
      </Tooltip>\r
\r
      <Button ref={buttonRef3} className="mt-8">\r
        Top tooltip!\r
      </Button>\r
      <Tooltip offset={[0, 10]} {...args} refElement={buttonRef3} popoverOption={{
      placement: "top"
    }}>\r
        This should show at the top (❁´◡\`❁)\r
      </Tooltip>\r
    </div>;
}`,...(c=(f=a.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};var d,h,b;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const buttonRef3 = useRef<HTMLButtonElement>(null);
  return <div id="root">\r
      <Modal isOpen={true} bodyClassName="py-16 px-4 text-skin-base">\r
        <p className="mb-2">\r
          Tooltip without z-index set will be behind the modal\r
        </p>\r
        <Button ref={buttonRef} className="mb-16">\r
          Hover over me!\r
        </Button>\r
\r
        <Tooltip offset={[0, 10]} stylePreset="preset-1" {...args} refElement={buttonRef}>\r
          <p>This is a tooltip with preset styling ╰(*°▽°*)╯</p>\r
        </Tooltip>\r
\r
        <p className="mb-2">You can use \`inModal\` prop</p>\r
        <Button ref={buttonRef2} className="mb-16">\r
          Hover over me!\r
        </Button>\r
\r
        <Tooltip offset={[0, 10]} stylePreset="preset-1" {...args} refElement={buttonRef2} inModal>\r
          <p>This is a tooltip with preset styling ╰(*°▽°*)╯</p>\r
        </Tooltip>\r
\r
        <p className="mb-2">\r
          Or manually set the z-index to be higher than the modal (don't go too\r
          wild!)\r
        </p>\r
        <Button ref={buttonRef3} className="mb-16">\r
          Hover over me!\r
        </Button>\r
\r
        <Tooltip offset={[0, 10]} stylePreset="preset-1" {...args} refElement={buttonRef3} zIndex={1000}>\r
          <p>This is a tooltip with preset styling ╰(*°▽°*)╯</p>\r
        </Tooltip>\r
      </Modal>\r
    </div>;
}`,...(b=(h=u.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const q=["Default","InAModal"];export{a as Default,u as InAModal,q as __namedExportsOrder,_ as default};
