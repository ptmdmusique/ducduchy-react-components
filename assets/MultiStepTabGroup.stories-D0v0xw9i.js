import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BCtMShv3.js";import{c as u,C as y,s as o}from"./index-KpAVk5lk.js";import{B as h}from"./Button-Dw10h_TB.js";import{M as q}from"./Modal-Df0PxoQV.js";import"./Icon-DLP5P1Ct.js";import"./index-CvPWi8JN.js";import"./animation-CUZBsLrg.js";import"./use-sync-refs-CZ2KMCOF.js";import"./use-is-mounted-suvdIMg-.js";import"./use-server-handoff-complete-C8_JXbTh.js";import"./keyboard-tlvg-gRs.js";import"./use-tab-direction-IrkWQ0ly.js";import"./hidden-CkFg_2Sb.js";import"./portal-BDPEH6C3.js";import"./focus-management-Bh_oGY5B.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./use-inert-others-Dfe5BkTU.js";import"./description-75re-mSO.js";const v=({numberOfTabs:i,selectedIndex:l,className:c,onChange:r,getTabContent:n,getTabPanelProps:s,getBubbleContent:p,renderTabPanel:j,colorType:m="secondary",contentPreset:N="bubble-step",preventSelectIfSelected:I=!0,ref:M})=>{const x=d.useMemo(()=>Array.from(Array(i)),[i]),S=d.useMemo(()=>x.map((T,t)=>{const a=t===l;return e.jsxs(d.Fragment,{children:[e.jsx("div",{className:u("step-content",`step-content--${N}`),children:N==null?n==null?void 0:n(t,a):e.jsxs(e.Fragment,{children:[e.jsx(h,{className:u("bubble",`bubble--${m}`,{"bubble--selected":t<=l}),borderType:"plain",onClick:()=>(!I||t!==l)&&(r==null?void 0:r(t)),children:(p==null?void 0:p(t,a))??t+1}),e.jsx("div",{className:u("content",`content--${m}`,{"content--selected":t<=l}),children:n==null?void 0:n(t,a)})]})}),t!==i-1&&e.jsx("div",{className:"step-indicator",children:e.jsx("div",{className:u("step-indicator__line",`step-indicator__line--${m}`,{"step-indicator__line--active":t<l})})})]},t)}),[l,x,i,n,p,r,m,N,I]),L=d.useMemo(()=>x.map((T,t)=>{const a=s==null?void 0:s(t);return d.createElement("div",{...a,key:t,className:u("tab-group__tab-panel",a==null?void 0:a.className)},j(t))}),[x,s,j]);return e.jsxs("div",{className:u(`${y}-multi-step-tab-group`,c),ref:M,children:[e.jsx("div",{className:`${y}-multi-step-tab-group__tab-list`,children:S}),e.jsx("div",{className:`${y}-multi-step-tab-group__panel-list`,children:L[l]})]})};try{v.displayName="MultiStepTabGroup",v.__docgenInfo={description:"",displayName:"MultiStepTabGroup",props:{selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}},colorType:{defaultValue:{value:"secondary"},description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"neutral"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},numberOfTabs:{defaultValue:null,description:"",name:"numberOfTabs",required:!0,type:{name:"number"}},getTabContent:{defaultValue:null,description:"",name:"getTabContent",required:!0,type:{name:"(index: number, selected: boolean) => ReactNode"}},getTabPanelProps:{defaultValue:null,description:"",name:"getTabPanelProps",required:!1,type:{name:"((index: number) => HTMLAttributes<HTMLDivElement>)"}},renderTabPanel:{defaultValue:null,description:"",name:"renderTabPanel",required:!0,type:{name:"(index: number) => ReactNode"}},contentPreset:{defaultValue:{value:"bubble-step"},description:"",name:"contentPreset",required:!1,type:{name:'"bubble-step" | null'}},getBubbleContent:{defaultValue:null,description:"",name:"getBubbleContent",required:!1,type:{name:"((index: number, selected: boolean) => ReactNode)"}},preventSelectIfSelected:{defaultValue:{value:"true"},description:"Prevent onChange to bubble if the same selected index is clicked again",name:"preventSelectIfSelected",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const Q={title:"Components/Multi Step Tab Group",component:v,argTypes:{getTabPanelProps:o,className:o,getBubbleContent:o,renderTabPanel:o,numberOfTabs:o,getTabContent:o,onChange:o},parameters:{controls:{expanded:!0}}},b=[{icon:["fas","dog"],title:"Dog list"},{icon:["fas","cat"],title:"Cat list"},{icon:["fas","heart"],title:"Favorite list"}],_=[{text:"Dog content"},{text:"Cat content"},{text:"Favorite content"}],f=i=>{const[l,c]=d.useState(0),[r,n]=d.useState(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-skin-base mb-4",children:[e.jsx("p",{children:"Useful for multi step form"}),e.jsx("p",{children:"You have fully controlled of whether to move to any other steps"}),e.jsx("br",{}),e.jsx("p",{children:"For instance:"}),e.jsx("p",{children:"Click on Next Index will move the user to next step"}),e.jsx("p",{children:"While clicking on step bubble will show a confirmation modal"})]}),e.jsx(h,{className:"mb-8",onClick:()=>c((l+1)%b.length),children:"Next index"}),e.jsxs("p",{className:"mb-12 text-skin-base",children:["Cur index: ",l]}),e.jsx(v,{...i,selectedIndex:l,onChange:n,numberOfTabs:Math.min(b.length,_.length),getTabContent:s=>b[s].title,renderTabPanel:s=>e.jsx("div",{children:_[s].text})}),e.jsx(q,{isOpen:r!=null,onClose:()=>{n(null)},header:"Confirm",footer:e.jsxs("div",{className:"flex justify-end",children:[e.jsx(h,{borderType:"plain",onClick:()=>n(null),children:"Cancel"}),e.jsx(h,{borderType:"plain",onClick:()=>{r!=null&&c(r),n(null)},children:"Confirm"})]}),children:e.jsx("p",{className:"text-skin-base px-6",children:r!=null&&`Are you sure you want to move on to "${b[r].title}" step?`})})]})};var g,C,k;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(k=(C=f.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const Z=["ControlledIndex"];export{f as ControlledIndex,Z as __namedExportsOrder,Q as default};
