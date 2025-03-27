import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BCtMShv3.js";import{s as o}from"./index-KpAVk5lk.js";import{T as n}from"./Tooltip-D-Ed1I9N.js";import{B as s}from"./Button-Dw10h_TB.js";import{M as x}from"./Modal-Df0PxoQV.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./animation-CUZBsLrg.js";import"./use-sync-refs-CZ2KMCOF.js";import"./use-is-mounted-suvdIMg-.js";import"./use-server-handoff-complete-C8_JXbTh.js";import"./Icon-DLP5P1Ct.js";import"./index-CvPWi8JN.js";import"./keyboard-tlvg-gRs.js";import"./use-tab-direction-IrkWQ0ly.js";import"./hidden-CkFg_2Sb.js";import"./portal-BDPEH6C3.js";import"./focus-management-Bh_oGY5B.js";import"./use-inert-others-Dfe5BkTU.js";import"./description-75re-mSO.js";const S={title:"Components/Tooltip",component:n,argTypes:{className:o,containerId:o,openOn:o,defaultOpen:o,offset:o,popoverOption:o,refElement:o},parameters:{controls:{expanded:!0}}},a=t=>{const l=r.useRef(null),i=r.useRef(null),p=r.useRef(null);return e.jsxs("div",{className:"text-skin-base",id:"root",children:[e.jsx(s,{ref:l,children:"Hover over me!"}),e.jsx(n,{offset:[0,10],stylePreset:"preset-1",...t,refElement:l,children:e.jsx("p",{children:"This is a tooltip with preset styling ╰(*°▽°*)╯"})}),e.jsx(s,{ref:i,className:"mt-8",children:"Barebone tooltip!"}),e.jsx(n,{...t,stylePreset:null,refElement:i,children:"This is a barebone tooltip ☆*: .｡. o(≧▽≦)o .｡.:*☆"}),e.jsx(s,{ref:p,className:"mt-8",children:"Top tooltip!"}),e.jsx(n,{offset:[0,10],...t,refElement:p,popoverOption:{placement:"top"},children:"This should show at the top (❁´◡`❁)"})]})},m=t=>{const l=r.useRef(null),i=r.useRef(null),p=r.useRef(null);return e.jsx("div",{id:"root",children:e.jsxs(x,{isOpen:!0,bodyClassName:"py-16 px-4 text-skin-base",children:[e.jsx("p",{className:"mb-2",children:"Tooltip without z-index set will be behind the modal"}),e.jsx(s,{ref:l,className:"mb-16",children:"Hover over me!"}),e.jsx(n,{offset:[0,10],stylePreset:"preset-1",...t,refElement:l,children:e.jsx("p",{children:"This is a tooltip with preset styling ╰(*°▽°*)╯"})}),e.jsx("p",{className:"mb-2",children:"You can use `inModal` prop"}),e.jsx(s,{ref:i,className:"mb-16",children:"Hover over me!"}),e.jsx(n,{offset:[0,10],stylePreset:"preset-1",...t,refElement:i,inModal:!0,children:e.jsx("p",{children:"This is a tooltip with preset styling ╰(*°▽°*)╯"})}),e.jsx("p",{className:"mb-2",children:"Or manually set the z-index to be higher than the modal (don't go too wild!)"}),e.jsx(s,{ref:p,className:"mb-16",children:"Hover over me!"}),e.jsx(n,{offset:[0,10],stylePreset:"preset-1",...t,refElement:p,zIndex:1e3,children:e.jsx("p",{children:"This is a tooltip with preset styling ╰(*°▽°*)╯"})})]})})};var u,f,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(c=(f=a.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};var d,h,b;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(b=(h=m.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Y=["Default","InAModal"];export{a as Default,m as InAModal,Y as __namedExportsOrder,S as default};
