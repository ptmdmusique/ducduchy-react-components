import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{u as J}from"./index.esm-Eo6g99vg.js";import{s as g}from"./index-BPE7S6ci.js";import{r as U}from"./index-CTjT7uj6.js";import{I as m}from"./Input-Bdh8o-5k.js";import{B as Y}from"./Button-CMa_9Q4I.js";import"./index.browser-vcSNLBTf.js";import"./debounce-D2cU03he.js";import"./CustomTransition-QYAwEdC6.js";import"./animation-BOght_T9.js";import"./transition-BVEjyM41.js";import"./use-disposables-BgtiGxt7.js";import"./render-C-IlGZgy.js";import"./use-flags-B0uNXtCz.js";import"./use-is-mounted-DsBFbocb.js";import"./open-closed-CcTP-TJU.js";import"./Icon-D9EK_Hve.js";import"./index-C4AY7A6g.js";import"./index-BRV0Se7Z.js";const ie={title:"Components/Form/Input",component:m,argTypes:{leadingAdornment:{...g},trailingAdornment:{...g}},parameters:{controls:{expanded:!0}}},r=a=>e.jsx(m,{...a}),o=r.bind({}),t=r.bind({});t.args={label:"Hello Label!"};const s=r.bind({});s.args={placeholder:"John Doe"};const n=r.bind({});n.args={label:"What a label",placeholder:"John Doe"};const l=r.bind({});l.args={label:"What a label",placeholder:"John Doe",caption:e.jsx("div",{className:"input-stories-caption",children:"Here is a caption"})};const c=r.bind({});c.args={label:"What a label",placeholder:"John Doe",caption:e.jsx("div",{className:"input-stories-caption",children:"Here is a caption"}),trailingAdornment:["fas","dog"],trailingAdornmentOnClick(){alert("You clicked the dog!")},leadingAdornment:["fas","hand-peace"],leadingAdornmentOnClick(){alert("You clicked the hand-peace!")}};o.args={};const u=a=>{const{register:i,setValue:p,control:h}=J(),B=()=>{p("formValue",Math.random().toString())};return e.jsxs("div",{children:[e.jsxs("p",{className:"mb-4",children:[e.jsx("code",{children:"useForm's"})," ",e.jsx("code",{children:"setValue"})," demo"]}),e.jsx(m,{...a,...i("formValue"),label:"My Label",formControl:h}),e.jsx(Y,{borderType:"outline",className:"mt-4",onClick:B,children:"Generate random value"}),e.jsxs("p",{className:"mt-8",children:["You ",e.jsx("strong",{children:"MUST"})," pass the ",e.jsx("code",{children:"control"})," value from",e.jsx("code",{children:"useForm"})," to make the label float correctly",e.jsx("br",{}),"---",e.jsx("br",{}),"OR you can pass the `hasContent` prop to control the label float yourself"]})]})},d=a=>{const[i,p]=U.useState("Hello world!");return e.jsxs("div",{children:[e.jsx(m,{...a,label:"A controlled form",value:i,onChange:h=>p(h.target.value)}),e.jsxs("p",{className:"mt-4",children:[e.jsx("strong",{children:"Current value:"})," ",i]}),e.jsxs("p",{className:"mt-8",children:["Note that this will break if you pass the ",e.jsx("code",{children:"debounceParam"})," ","prop because the value of the event will be lost after debounce time."]}),e.jsxs("p",{children:["The reason is because the ",e.jsx("code",{children:"event"})," object when debounce finishes will use the current input value at that time which is the old value"]})]})};var b,f,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Input {...args} />",...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,j,V;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Input {...args} />",...(V=(j=t.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var C,S,W;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:"args => <Input {...args} />",...(W=(S=s.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var y,N,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Input {...args} />",...(w=(N=n.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var A,I,k;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:"args => <Input {...args} />",...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var F,T,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Input {...args} />",...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var D,M,O;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var P,R,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const ue=["Default","WithLabel","WithPlaceholder","WithLabelAndPlaceholder","WithCaption","WithAdornments","WithUseFormSetValue","Controlled"];export{d as Controlled,o as Default,c as WithAdornments,l as WithCaption,t as WithLabel,n as WithLabelAndPlaceholder,s as WithPlaceholder,u as WithUseFormSetValue,ue as __namedExportsOrder,ie as default};
