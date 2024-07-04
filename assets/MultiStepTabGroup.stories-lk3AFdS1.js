import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as i}from"./index-CTjT7uj6.js";import{c as u,C as y,a as d}from"./index-BPE7S6ci.js";import{B as h}from"./Button-WKpNADTN.js";import{M as T}from"./Modal-BFOAJw29.js";import"./Icon-Bd6wgpvP.js";import"./index-C4AY7A6g.js";import"./index-BRV0Se7Z.js";import"./animation-BOght_T9.js";import"./use-disposables-BgtiGxt7.js";import"./render-C-IlGZgy.js";import"./use-root-containers-CbuclWc0.js";import"./use-owner-DSOmOYVQ.js";import"./focus-management-CaV_VYtM.js";import"./index-9r8iugjR.js";import"./hidden-BS2yFtF9.js";import"./use-is-mounted-DsBFbocb.js";import"./keyboard-BCuVGIMY.js";import"./open-closed-CcTP-TJU.js";import"./bugs-DpEN4NTH.js";import"./description-B9Xxk_QN.js";const v=i.forwardRef(({numberOfTabs:o,selectedIndex:r,className:c,onChange:l,getTabContent:n,getTabPanelProps:s,getBubbleContent:p,renderTabPanel:j,colorType:m="secondary",contentPreset:N="bubble-step",preventSelectIfSelected:I=!0},M)=>{const x=i.useMemo(()=>Array.from(Array(o)),[o]),S=i.useMemo(()=>x.map((L,t)=>{const a=t===r;return e.jsxs(i.Fragment,{children:[e.jsx("div",{className:u("step-content",`step-content--${N}`),children:N==null?n==null?void 0:n(t,a):e.jsxs(e.Fragment,{children:[e.jsx(h,{className:u("bubble",`bubble--${m}`,{"bubble--selected":t<=r}),borderType:"plain",onClick:()=>(!I||t!==r)&&(l==null?void 0:l(t)),children:(p==null?void 0:p(t,a))??t+1}),e.jsx("div",{className:u("content",`content--${m}`,{"content--selected":t<=r}),children:n==null?void 0:n(t,a)})]})}),t!==o-1&&e.jsx("div",{className:"step-indicator",children:e.jsx("div",{className:u("step-indicator__line",`step-indicator__line--${m}`,{"step-indicator__line--active":t<r})})})]},t)}),[r,x,o,n,p,l,m,N,I]),w=i.useMemo(()=>x.map((L,t)=>{const a=s==null?void 0:s(t);return i.createElement("div",{...a,key:t,className:u("tab-group__tab-panel",a==null?void 0:a.className)},j(t))}),[x,s,j]);return e.jsxs("div",{className:u(`${y}-multi-step-tab-group`,c),ref:M,children:[e.jsx("div",{className:`${y}-multi-step-tab-group__tab-list`,children:S}),e.jsx("div",{className:`${y}-multi-step-tab-group__panel-list`,children:w[r]})]})});try{v.displayName="MultiStepTabGroup",v.__docgenInfo={description:"",displayName:"MultiStepTabGroup",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}},colorType:{defaultValue:{value:"secondary"},description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"neutral"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},numberOfTabs:{defaultValue:null,description:"",name:"numberOfTabs",required:!0,type:{name:"number"}},getTabContent:{defaultValue:null,description:"",name:"getTabContent",required:!0,type:{name:"(index: number, selected: boolean) => ReactNode"}},getTabPanelProps:{defaultValue:null,description:"",name:"getTabPanelProps",required:!1,type:{name:"((index: number) => HTMLAttributes<HTMLDivElement>)"}},renderTabPanel:{defaultValue:null,description:"",name:"renderTabPanel",required:!0,type:{name:"(index: number) => ReactNode"}},contentPreset:{defaultValue:{value:"bubble-step"},description:"",name:"contentPreset",required:!1,type:{name:'"bubble-step" | null'}},getBubbleContent:{defaultValue:null,description:"",name:"getBubbleContent",required:!1,type:{name:"((index: number, selected: boolean) => ReactNode)"}},preventSelectIfSelected:{defaultValue:{value:"true"},description:"Prevent onChange to bubble if the same selected index is clicked again",name:"preventSelectIfSelected",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Multi Step Tab Group",component:v,argTypes:{getTabPanelProps:d,className:d,getBubbleContent:d,renderTabPanel:d,numberOfTabs:d,getTabContent:d,onChange:d},parameters:{controls:{expanded:!0}}},b=[{icon:["fas","dog"],title:"Dog list"},{icon:["fas","cat"],title:"Cat list"},{icon:["fas","heart"],title:"Favorite list"}],_=[{text:"Dog content"},{text:"Cat content"},{text:"Favorite content"}],f=o=>{const[r,c]=i.useState(0),[l,n]=i.useState(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-skin-base mb-4",children:[e.jsx("p",{children:"Useful for multi step form"}),e.jsx("p",{children:"You have fully controlled of whether to move to any other steps"}),e.jsx("br",{}),e.jsx("p",{children:"For instance:"}),e.jsx("p",{children:"Click on Next Index will move the user to next step"}),e.jsx("p",{children:"While clicking on step bubble will show a confirmation modal"})]}),e.jsx(h,{className:"mb-8",onClick:()=>c((r+1)%b.length),children:"Next index"}),e.jsxs("p",{className:"mb-12 text-skin-base",children:["Cur index: ",r]}),e.jsx(v,{...o,selectedIndex:r,onChange:n,numberOfTabs:Math.min(b.length,_.length),getTabContent:s=>b[s].title,renderTabPanel:s=>e.jsx("div",{children:_[s].text})}),e.jsx(T,{isOpen:l!=null,onClose:()=>{n(null)},header:"Confirm",footer:e.jsxs("div",{className:"flex justify-end",children:[e.jsx(h,{borderType:"plain",onClick:()=>n(null),children:"Cancel"}),e.jsx(h,{borderType:"plain",onClick:()=>{l!=null&&c(l),n(null)},children:"Confirm"})]}),children:e.jsx("p",{className:"text-skin-base px-6",children:l!=null&&`Are you sure you want to move on to "${b[l].title}" step?`})})]})};var g,C,k;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<null | number>(null);
  return <>\r
      <div className="text-skin-base mb-4">\r
        <p>Useful for multi step form</p>\r
        <p>You have fully controlled of whether to move to any other steps</p>\r
        <br />\r
        <p>For instance:</p>\r
        <p>Click on Next Index will move the user to next step</p>\r
        <p>While clicking on step bubble will show a confirmation modal</p>\r
      </div>\r
\r
      <Button className="mb-8" onClick={() => setSelectedIndex((selectedIndex + 1) % panelList.length)}>\r
        Next index\r
      </Button>\r
\r
      <p className="mb-12 text-skin-base">Cur index: {selectedIndex}</p>\r
\r
      <MultiStepTabGroup {...args} selectedIndex={selectedIndex} onChange={setNextIndex} numberOfTabs={Math.min(panelList.length, contentList.length)} getTabContent={index => panelList[index].title} renderTabPanel={index => <div>{contentList[index].text}</div>} />\r
\r
      <Modal isOpen={nextIndex != null} onClose={() => {
      setNextIndex(null);
    }} header="Confirm" footer={<div className="flex justify-end">\r
            <Button borderType="plain" onClick={() => setNextIndex(null)}>\r
              Cancel\r
            </Button>\r
            <Button borderType="plain" onClick={() => {
        nextIndex != null && setSelectedIndex(nextIndex);
        setNextIndex(null);
      }}>\r
              Confirm\r
            </Button>\r
          </div>}>\r
        <p className="text-skin-base px-6">\r
          {nextIndex != null && \`Are you sure you want to move on to "\${panelList[nextIndex].title}" step?\`}\r
        </p>\r
      </Modal>\r
    </>;
}`,...(k=(C=f.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const ee=["ControlledIndex"];export{f as ControlledIndex,ee as __namedExportsOrder,Z as default};
