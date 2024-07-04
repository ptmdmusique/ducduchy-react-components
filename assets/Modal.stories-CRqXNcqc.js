import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{R as f,r as c}from"./index-CTjT7uj6.js";import{a}from"./index-BPE7S6ci.js";import{M as t}from"./Modal-CPaqSAXT.js";import{B as n}from"./Button-CMa_9Q4I.js";import"./animation-BOght_T9.js";import"./use-disposables-BgtiGxt7.js";import"./render-C-IlGZgy.js";import"./use-root-containers-CbuclWc0.js";import"./use-owner-DSOmOYVQ.js";import"./focus-management-CaV_VYtM.js";import"./index-9r8iugjR.js";import"./hidden-BS2yFtF9.js";import"./use-is-mounted-DsBFbocb.js";import"./keyboard-BCuVGIMY.js";import"./open-closed-CcTP-TJU.js";import"./bugs-DpEN4NTH.js";import"./description-B9Xxk_QN.js";import"./Icon-D9EK_Hve.js";import"./index-C4AY7A6g.js";import"./index-BRV0Se7Z.js";const te={title:"Components/Modal",component:t,argTypes:{isOpen:a,onClose:a,className:a,bodyClassName:a,footerClassName:a,animationAnchorElement:a,animationType:a,targetSize:a},parameters:{controls:{expanded:!0}}},W=i=>e.jsx(t,{...i}),l=W.bind({});l.args={isOpen:!0,header:"What a dope header 👌",showCloseButton:!1,children:e.jsx("div",{className:"px-6 pb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})};const d=W.bind({});d.args={header:"What a dope header 👌",isOpen:!0,showCloseButton:!1,children:e.jsx("div",{className:"px-6 pb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"}),footer:e.jsx("div",{className:"flex justify-end",children:e.jsx(n,{borderType:"plain",colorType:"info",onClick:()=>window.alert("Hey you clicked me!"),children:"Alert!"})})};const T=i=>{const[r,s]=f.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(t,{...i,isOpen:r,onClose:()=>s(!1),children:e.jsx("div",{className:"px-6 pb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})}),e.jsx(n,{onClick:()=>s(!0),children:"Open Modal"})]})},p=T.bind({});p.args={header:"What a dope header 👌"};const m=i=>{const[r,s]=f.useState(!0),[h,o]=f.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{...i,isOpen:r,onClose:v=>{switch(v){case"close-button-click":o("clicking close button");break;case"standard":o("pressing Escape or clicking outside");break}s(!1)},children:e.jsx("div",{className:"px-6 pb-4",children:"Try to click on close button vs pressing Escape or clicking outside"})}),e.jsxs("div",{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs("p",{className:"mt-8",children:["Closed by: ",h]})]})]})};m.args={header:"What a dope header 👌"};const u=i=>{const[r,s]=c.useState(!1),[h,o]=c.useState(!1),[v,g]=c.useState(!1),[x,O]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-6 pb-4 text-base",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Notice"})," how after the 2nd modal is opened, when you click anywhere (even inside the modal), the 1st modal will be closed"]}),e.jsx("p",{className:"mt-2",children:'This is by designed because those click count as "clicking outside" relative to the 1st modal, which in turns emit the onClose event'})]}),e.jsx(n,{onClick:()=>s(!0),children:"Open first modal"}),e.jsx(t,{...i,isOpen:r,onClose:()=>{s(!1)},footer:e.jsx(e.Fragment,{children:e.jsx(n,{onClick:()=>o(!0),children:"Open second modal"})}),children:e.jsx("div",{className:"px-6 py-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})}),e.jsx(t,{...i,isOpen:h,onClose:()=>{o(!1)},children:e.jsx("div",{className:"px-6 py-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})}),e.jsxs("div",{className:"px-6 pb-4 mt-6 text-base",children:[e.jsx("p",{children:"If you don't want that to happen, make sure the 2nd modal is nested (not sibling)"}),e.jsxs("p",{children:["This is how HeadlessUI designs their Dialog which follows"," ",e.jsx("a",{href:"https://www.w3.org/TR/wai-aria-1.1/#dialog",target:"_blank",rel:"noreferrer",className:"text-skin-info hover:underline",children:"W3 spec"})," ","for the focus trap"]})]}),e.jsx(n,{onClick:()=>g(!0),children:"Open first modal"}),e.jsxs(t,{...i,isOpen:v,onClose:()=>{x||g(!1)},footer:e.jsx(e.Fragment,{children:e.jsx(n,{onClick:()=>O(!0),children:"Open second modal"})}),children:[e.jsx("div",{className:"px-6 py-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"}),e.jsx(t,{...i,isOpen:x,onClose:()=>{O(!1)},children:e.jsx("div",{className:"px-6 py-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi, voluptate rem eaque odit provident repudiandae veritatis nihil facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?"})})]})]})};var b,C,q;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Modal {...args} />",...(q=(C=l.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var N,j,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:"args => <Modal {...args} />",...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var S,w,M;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(true);
  return <>\r
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>\r
        <div className="px-6 pb-4">\r
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis\r
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil\r
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse\r
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione\r
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?\r
        </div>\r
      </Modal>\r
\r
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\r
    </>;
}`,...(M=(w=p.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var y,I,E;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var F,B,A;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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
}`,...(A=(B=u.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const ne=["Default","WithFooter","WithCloseButtonAndEvent","WithDetailOnCloseControl","WithMultipleModal"];export{l as Default,p as WithCloseButtonAndEvent,m as WithDetailOnCloseControl,d as WithFooter,u as WithMultipleModal,ne as __namedExportsOrder,te as default};
