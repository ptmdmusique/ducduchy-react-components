import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d,R as g}from"./index-BCtMShv3.js";import{s}from"./index-KpAVk5lk.js";import{M as a}from"./Modal-Df0PxoQV.js";import{B as n}from"./Button-Dw10h_TB.js";import"./animation-CUZBsLrg.js";import"./use-sync-refs-CZ2KMCOF.js";import"./use-is-mounted-suvdIMg-.js";import"./use-server-handoff-complete-C8_JXbTh.js";import"./keyboard-tlvg-gRs.js";import"./use-tab-direction-IrkWQ0ly.js";import"./hidden-CkFg_2Sb.js";import"./portal-BDPEH6C3.js";import"./focus-management-Bh_oGY5B.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./use-inert-others-Dfe5BkTU.js";import"./description-75re-mSO.js";import"./Icon-DLP5P1Ct.js";import"./index-CvPWi8JN.js";const se={title:"Components/Modal",component:a,argTypes:{isOpen:s,onClose:s,className:s,bodyClassName:s,footerClassName:s,animationAnchorElement:s,animationType:s,targetSize:s},parameters:{controls:{expanded:!0}}},h=({buttonText:i,...r})=>{const[t,o]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{...r,isOpen:t,onClose:()=>o(!1)}),e.jsx(n,{onClick:()=>o(!0),children:i??"Open Modal"})]})},p=h.bind({});p.args={header:"What a dope header 👌",children:e.jsx("div",{className:"px-6 pb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})};const c=h.bind({});c.args={header:"What a dope header 👌",children:e.jsx("div",{className:"px-6 pb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"}),footer:e.jsx("div",{className:"flex justify-end",children:e.jsx(n,{borderType:"plain",colorType:"info",onClick:()=>window.alert("Hey you clicked me!"),children:"Alert!"})})};const m=i=>{const[r,t]=g.useState(!0),[o,l]=g.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(a,{...i,isOpen:r,onClose:f=>{switch(f){case"close-button-click":l("clicking close button");break;case"standard":l("pressing Escape or clicking outside");break}t(!1)},children:e.jsx("div",{className:"px-6 pb-4",children:"Try to click on close button vs pressing Escape or clicking outside"})}),e.jsxs("div",{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Modal"}),e.jsxs("p",{className:"mt-8",children:["Closed by: ",o]})]})]})};m.args={header:"What a dope header 👌"};const v=i=>{const[r,t]=d.useState(!1),[o,l]=d.useState(!1),[f,O]=d.useState(!1),[x,b]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-6 pb-4 text-base",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Notice"})," how after the 2nd modal is opened, when you click anywhere (even inside the modal), the 1st modal will be closed"]}),e.jsx("p",{className:"mt-2",children:'This is by designed because those click count as "clicking outside" relative to the 1st modal, which in turns emit the onClose event'})]}),e.jsx(n,{onClick:()=>t(!0),children:"Open first modal"}),e.jsx(a,{...i,isOpen:r,onClose:()=>{t(!1)},footer:e.jsx(e.Fragment,{children:e.jsx(n,{onClick:()=>l(!0),children:"Open second modal"})}),children:e.jsx("div",{className:"px-6 py-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})}),e.jsx(a,{...i,isOpen:o,onClose:()=>{l(!1)},children:e.jsx("div",{className:"px-6 py-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})}),e.jsxs("div",{className:"px-6 pb-4 mt-6 text-base",children:[e.jsx("p",{children:"If you don't want that to happen, make sure the 2nd modal is nested (not sibling)"}),e.jsxs("p",{children:["This is how HeadlessUI designs their Dialog which follows"," ",e.jsx("a",{href:"https://www.w3.org/TR/wai-aria-1.1/#dialog",target:"_blank",rel:"noreferrer",className:"text-skin-info hover:underline",children:"W3 spec"})," ","for the focus trap"]})]}),e.jsx(n,{onClick:()=>O(!0),children:"Open first modal"}),e.jsxs(a,{...i,isOpen:f,onClose:()=>{x||O(!1)},footer:e.jsx(e.Fragment,{children:e.jsx(n,{onClick:()=>b(!0),children:"Open second modal"})}),children:[e.jsx("div",{className:"px-6 py-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"}),e.jsx(a,{...i,isOpen:x,onClose:()=>{b(!1)},children:e.jsx("div",{className:"px-6 py-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})})]})]})},u=i=>e.jsxs(e.Fragment,{children:[e.jsx(h,{...i,buttonText:"Open modal with bouncy animation ",animationType:{hidden:{opacity:0,scale:.4},visible:{opacity:1,scale:1}}}),e.jsx("div",{className:"mt-4",children:e.jsx(h,{...i,buttonText:"Open modal with simple fade in animation ",animationType:{hidden:{opacity:0},visible:{opacity:1}}})}),e.jsx("div",{className:"mt-4",children:e.jsx(h,{...i,buttonText:"Open modal with slide in from bottom animation and custom transition",animationType:{hidden:{opacity:0,y:"100%"},visible:{opacity:1,y:0}},overlayAnimation:{transition:{ease:"easeOut",duration:.5}}})})]});u.args={header:"What a dope header 👌"};var y,C,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`({
  buttonText,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />\r
      <Button onClick={() => setIsOpen(true)}>\r
        {buttonText ?? "Open Modal"}\r
      </Button>\r
    </>;
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var N,k,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`({
  buttonText,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />\r
      <Button onClick={() => setIsOpen(true)}>\r
        {buttonText ?? "Open Modal"}\r
      </Button>\r
    </>;
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var w,S,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [onCloseMessage, setOnCloseMessage] = React.useState<string | null>(null);
  return <>\r
      <Modal {...args} isOpen={isOpen} onClose={triggeredOn => {
      switch (triggeredOn) {
        case "close-button-click":
          setOnCloseMessage("clicking close button");
          break;
        case "standard":
          setOnCloseMessage("pressing Escape or clicking outside");
          break;
      }
      setIsOpen(false);
    }}>\r
        <div className="px-6 pb-4">\r
          Try to click on close button vs pressing Escape or clicking outside\r
        </div>\r
      </Modal>\r
\r
      <div>\r
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\r
\r
        <p className="mt-8">Closed by: {onCloseMessage}</p>\r
      </div>\r
    </>;
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,M,F;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isFirstOpen2, setIsFirstOpen2] = useState(false);
  const [isSecondOpen2, setIsSecondOpen2] = useState(false);
  return <>\r
      <div className="px-6 pb-4 text-base">\r
        <p>\r
          <strong>Notice</strong> how after the 2nd modal is opened, when you\r
          click anywhere (even inside the modal), the 1st modal will be closed\r
        </p>\r
\r
        <p className="mt-2">\r
          This is by designed because those click count as "clicking outside"\r
          relative to the 1st modal, which in turns emit the onClose event\r
        </p>\r
      </div>\r
\r
      <Button onClick={() => setIsFirstOpen(true)}>Open first modal</Button>\r
\r
      <Modal {...args} isOpen={isFirstOpen} onClose={() => {
      setIsFirstOpen(false);
    }} footer={<>\r
            <Button onClick={() => setIsSecondOpen(true)}>\r
              Open second modal\r
            </Button>\r
          </>}>\r
        <div className="px-6 py-4">\r
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis\r
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil\r
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse\r
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione\r
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?\r
        </div>\r
      </Modal>\r
\r
      <Modal {...args} isOpen={isSecondOpen} onClose={() => {
      setIsSecondOpen(false);
    }}>\r
        <div className="px-6 py-4">\r
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis\r
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil\r
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse\r
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione\r
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?\r
        </div>\r
      </Modal>\r
\r
      <div className="px-6 pb-4 mt-6 text-base">\r
        <p>\r
          If you don't want that to happen, make sure the 2nd modal is nested\r
          (not sibling)\r
        </p>\r
\r
        <p>\r
          This is how HeadlessUI designs their Dialog which follows{" "}\r
          <a href="https://www.w3.org/TR/wai-aria-1.1/#dialog" target="_blank" rel="noreferrer" className="text-skin-info hover:underline">\r
            W3 spec\r
          </a>{" "}\r
          for the focus trap\r
        </p>\r
      </div>\r
\r
      <Button onClick={() => setIsFirstOpen2(true)}>Open first modal</Button>\r
\r
      <Modal {...args} isOpen={isFirstOpen2} onClose={() => {
      if (!isSecondOpen2) {
        // Only close if the 2nd one is not
        setIsFirstOpen2(false);
      }
    }} footer={<>\r
            <Button onClick={() => setIsSecondOpen2(true)}>\r
              Open second modal\r
            </Button>\r
          </>}>\r
        <div className="px-6 py-4">\r
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis\r
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil\r
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse\r
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione\r
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?\r
        </div>\r
\r
        <Modal {...args} isOpen={isSecondOpen2} onClose={() => {
        setIsSecondOpen2(false);
      }}>\r
          <div className="px-6 py-4">\r
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis\r
            nisi, voluptate rem eaque odit provident repudiandae veritatis nihil\r
            facilis beatae, ea quibusdam error maxime. Et nihil nam delectus\r
            esse aliquam, impedit rerum beatae? Natus officiis dolore quia,\r
            ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa\r
            magnam ad?\r
          </div>\r
        </Modal>\r
      </Modal>\r
    </>;
}`,...(F=(M=v.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var E,A,B;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <>\r
      <Template {...args} buttonText="Open modal with bouncy animation " animationType={{
      hidden: {
        opacity: 0,
        scale: 0.4
      },
      visible: {
        opacity: 1,
        scale: 1.0
      }
    }} />\r
\r
      <div className="mt-4">\r
        <Template {...args} buttonText="Open modal with simple fade in animation " animationType={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1
        }
      }} />\r
      </div>\r
\r
      <div className="mt-4">\r
        <Template {...args} buttonText="Open modal with slide in from bottom animation and custom transition" animationType={{
        hidden: {
          opacity: 0,
          y: "100%"
        },
        visible: {
          opacity: 1,
          y: 0
        }
      }} overlayAnimation={{
        transition: {
          ease: "easeOut",
          duration: 0.5
        }
      }} />\r
      </div>\r
    </>;
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const te=["Default","WithFooter","WithDetailOnCloseControl","WithMultipleModal","CustomAnimation"];export{u as CustomAnimation,p as Default,m as WithDetailOnCloseControl,c as WithFooter,v as WithMultipleModal,te as __namedExportsOrder,se as default};
