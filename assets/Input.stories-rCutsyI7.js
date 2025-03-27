import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as E,F as _}from"./index.esm--LincS5R.js";import{a as b}from"./index-KpAVk5lk.js";import{r as q}from"./index-BCtMShv3.js";import{S as z}from"./StorybookCommonWithForm-AWrnt9pC.js";import{I as m}from"./Input-De98kYoY.js";import{B as K}from"./Button-Dw10h_TB.js";import"./index.browser-OxPLOBIU.js";import"./debounce-D2cU03he.js";import"./CustomTransition-CSHLgCWl.js";import"./animation-CUZBsLrg.js";import"./use-sync-refs-CZ2KMCOF.js";import"./use-is-mounted-suvdIMg-.js";import"./use-server-handoff-complete-C8_JXbTh.js";import"./Icon-DLP5P1Ct.js";import"./index-CvPWi8JN.js";const ue={title:"Components/Form/Input",component:m,argTypes:{leadingAdornment:{...b},trailingAdornment:{...b}},parameters:{controls:{expanded:!0}}},a=r=>e.jsx(m,{...r}),t=a.bind({}),s=a.bind({});s.args={label:"Hello Label!"};const n=a.bind({});n.args={placeholder:"John Doe"};const l=a.bind({});l.args={label:"What a label",placeholder:"John Doe"};const c=a.bind({});c.args={label:"What a label",placeholder:"John Doe",caption:e.jsx("div",{className:"input-stories-caption",children:"Here is a caption"})};const i=a.bind({});i.args={label:"What a label",placeholder:"John Doe",caption:e.jsx("div",{className:"input-stories-caption",children:"Here is a caption"}),trailingAdornment:["fas","dog"],trailingAdornmentOnClick(){alert("You clicked the dog!")},leadingAdornment:["fas","hand-peace"],leadingAdornmentOnClick(){alert("You clicked the hand-peace!")}};t.args={};const d=r=>{const{register:o,setValue:h,control:g}=E(),G=()=>{h("formValue",Math.random().toString())};return e.jsxs("div",{children:[e.jsxs("p",{className:"mb-4",children:[e.jsx("code",{children:"useForm's"})," ",e.jsx("code",{children:"setValue"})," demo"]}),e.jsx(m,{...r,...o("formValue"),label:"My Label",formControl:g}),e.jsx(K,{borderType:"outline",className:"mt-4",onClick:G,children:"Generate random value"}),e.jsxs("p",{className:"mt-8",children:["You ",e.jsx("strong",{children:"MUST"})," pass the ",e.jsx("code",{children:"control"})," value from",e.jsx("code",{children:"useForm"})," to make the label float correctly",e.jsx("br",{}),"---",e.jsx("br",{}),"OR you can pass the `hasContent` prop to control the label float yourself"]})]})},u=r=>{const[o,h]=q.useState("Hello world!");return e.jsxs("div",{children:[e.jsx(m,{...r,label:"A controlled form",value:o,onChange:g=>h(g.target.value)}),e.jsxs("p",{className:"mt-4",children:[e.jsx("strong",{children:"Current value:"})," ",o]}),e.jsxs("p",{className:"mt-8",children:["Note that this will break if you pass the ",e.jsx("code",{children:"debounceParam"})," ","prop because the value of the event will be lost after debounce time."]}),e.jsxs("p",{children:["The reason is because the ",e.jsx("code",{children:"event"})," object when debounce finishes will use the current input value at that time which is the old value"]})]})},p=r=>{const o=E();return e.jsx(_,{...o,children:e.jsx(z,{children:e.jsx(m,{...r,...o.register("formValue")})})})};var f,v,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Input {...args} />",...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,V,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Input {...args} />",...(C=(V=s.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var S,W,F;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Input {...args} />",...(F=(W=n.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var y,N,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Input {...args} />",...(k=(N=l.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var I,w,A;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Input {...args} />",...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var P,T,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Input {...args} />",...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var D,M,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const {
    register,
    setValue,
    control
  } = useForm<{
    formValue: string;
  }>();
  const generateRandomValue = () => {
    setValue("formValue", Math.random().toString());
  };
  return <div>\r
      <p className="mb-4">\r
        <code>useForm's</code> <code>setValue</code> demo\r
      </p>\r
\r
      <Input {...args} {...register("formValue")} label="My Label" formControl={control} />\r
\r
      <Button borderType="outline" className="mt-4" onClick={generateRandomValue}>\r
        Generate random value\r
      </Button>\r
\r
      <p className="mt-8">\r
        You <strong>MUST</strong> pass the <code>control</code> value from\r
        <code>useForm</code> to make the label float correctly\r
        <br />\r
        ---\r
        <br />\r
        OR you can pass the \`hasContent\` prop to control the label float\r
        yourself\r
      </p>\r
    </div>;
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,H,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [curValue, setCurValue] = useState("Hello world!");
  return <div>\r
      <Input {...args} label="A controlled form" value={curValue} onChange={event => setCurValue(event.target.value)} />\r
\r
      <p className="mt-4">\r
        <strong>Current value:</strong> {curValue}\r
      </p>\r
\r
      <p className="mt-8">\r
        Note that this will break if you pass the <code>debounceParam</code>{" "}\r
        prop because the value of the event will be lost after debounce time.\r
      </p>\r
      <p>\r
        The reason is because the <code>event</code> object when debounce\r
        finishes will use the current input value at that time which is the old\r
        value\r
      </p>\r
    </div>;
}`,...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var J,U,Y;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const methods = useForm<{
    formValue: string;
  }>();
  return <FormProvider {...methods}>\r
      <StorybookCommonWithForm>\r
        <Input {...args} {...methods.register("formValue")} />\r
      </StorybookCommonWithForm>\r
    </FormProvider>;
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const pe=["Default","WithLabel","WithPlaceholder","WithLabelAndPlaceholder","WithCaption","WithAdornments","WithUseFormSetValue","Controlled","WithForm"];export{u as Controlled,t as Default,i as WithAdornments,c as WithCaption,p as WithForm,s as WithLabel,l as WithLabelAndPlaceholder,n as WithPlaceholder,d as WithUseFormSetValue,pe as __namedExportsOrder,ue as default};
