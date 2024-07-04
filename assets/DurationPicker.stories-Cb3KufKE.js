import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as u}from"./index-CTjT7uj6.js";import{u as f,F as v}from"./index.esm-Eo6g99vg.js";import{S}from"./StorybookCommonWithForm-BnIHOcAJ.js";import{a as r}from"./index-BPE7S6ci.js";import{D as m}from"./DurationPicker-DRUMkiiq.js";import{B as N}from"./Button-WKpNADTN.js";import"./date-8pWheqdY.js";import"./MaskedInput-CK4xRob9.js";import"./Input-BzDktIva.js";import"./index.browser-vcSNLBTf.js";import"./debounce-D2cU03he.js";import"./CustomTransition-QYAwEdC6.js";import"./animation-BOght_T9.js";import"./transition-BVEjyM41.js";import"./use-disposables-BgtiGxt7.js";import"./render-C-IlGZgy.js";import"./use-flags-B0uNXtCz.js";import"./use-is-mounted-DsBFbocb.js";import"./open-closed-CcTP-TJU.js";import"./Icon-Bd6wgpvP.js";import"./index-C4AY7A6g.js";import"./index-BRV0Se7Z.js";import"./Popover-6Pfrjolh.js";import"./use-root-containers-CbuclWc0.js";import"./use-owner-DSOmOYVQ.js";import"./focus-management-CaV_VYtM.js";import"./index-9r8iugjR.js";import"./hidden-BS2yFtF9.js";import"./floating-ui.dom-BHn9GYQn.js";import"./keyboard-BCuVGIMY.js";import"./use-resolve-button-type-CoZBuHh8.js";import"./bugs-DpEN4NTH.js";const ce={title:"Components/Form/DurationPicker",component:m,argTypes:{className:r,onChange:r,caption:r,localeText:r,doDisabled:r,captionIcon:r,label:r,leadingAdornment:r,leadingAdornmentOnClick:r,trailingAdornment:r,trailingAdornmentOnClick:r,debounceParam:r,formControl:r},parameters:{controls:{expanded:!0}}},W=o=>e.jsx("div",{className:"mt-[20rem]",children:e.jsx(m,{...o,label:"A simple label",defaultValue:4524e4})}),n=W.bind({}),y=o=>{const t=f(),[s,l]=u.useState(),[c,d]=u.useState(),[C,j]=u.useState();return e.jsx(v,{...t,children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex flex-col mb-8",children:[e.jsxs("code",{className:"text-skin-base",children:["Unmasked value ",s]}),e.jsxs("code",{className:"text-skin-base",children:["Masked value ",c]}),e.jsxs("code",{className:"text-skin-base",children:["Duration in MS ",C]})]}),e.jsx(m,{...o,...t.register("durationPicker"),onChange:(D,I,p)=>{t.setValue("durationPicker",p),l(D),d(I),j(p)}})]})})},a=y.bind({});a.args={label:"Meeting time"};const i=o=>{const t=f({defaultValues:{durationPicker:0}}),s=t.watch("durationPicker");return e.jsx(v,{...t,children:e.jsxs(S,{children:[e.jsxs("p",{className:"text-skin-base mb-2",children:["Value in ms ",s]}),e.jsx(m,{...o,...t.register("durationPicker"),value:s,onChange:(l,c,d)=>{t.setValue("durationPicker",d)}}),e.jsx(N,{className:"mt-4",onClick:()=>{t.setValue("durationPicker",Math.round(Math.random()*864e5))},type:"button",children:"Set custom value in ms"})]})})};var k,h,b;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div className="mt-[20rem]">\r
    <DurationPicker {...args} label="A simple label" defaultValue={45240000} />\r
  </div>`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,V,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const methods = useForm<{
    durationPicker: number;
  }>();
  const [unmaskedValue, setUnmaskedValue] = useState<string>();
  const [maskedValue, setMaskedValue] = useState<string>();
  const [durationInMs, setDurationInMs] = useState<number>();
  return <FormProvider {...methods}>\r
      <StorybookCommonWithForm>\r
        <div className="flex flex-col mb-8">\r
          <code className="text-skin-base">Unmasked value {unmaskedValue}</code>\r
          <code className="text-skin-base">Masked value {maskedValue}</code>\r
          <code className="text-skin-base">Duration in MS {durationInMs}</code>\r
        </div>\r
\r
        <DurationPicker {...args} {...methods.register("durationPicker")} onChange={(unmaskedValue, maskedValue, durationInMs) => {
        methods.setValue("durationPicker", durationInMs);
        setUnmaskedValue(unmaskedValue);
        setMaskedValue(maskedValue);
        setDurationInMs(durationInMs);
      }} />\r
      </StorybookCommonWithForm>\r
    </FormProvider>;
}`,...(g=(V=a.parameters)==null?void 0:V.docs)==null?void 0:g.source}}};var P,M,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const methods = useForm<{
    durationPicker: number;
  }>({
    defaultValues: {
      durationPicker: 0
    }
  });
  const durationInMs = methods.watch("durationPicker");
  return <FormProvider {...methods}>\r
      <StorybookCommonWithForm>\r
        <p className="text-skin-base mb-2">Value in ms {durationInMs}</p>\r
\r
        <DurationPicker {...args} {...methods.register("durationPicker")} value={durationInMs} onChange={(_1, _2, durationInMs) => {
        methods.setValue("durationPicker", durationInMs);
      }} />\r
\r
        <Button className="mt-4" onClick={() => {
        methods.setValue("durationPicker", Math.round(Math.random() * 86400000));
      }} type="button">\r
          Set custom value in ms\r
        </Button>\r
      </StorybookCommonWithForm>\r
    </FormProvider>;
}`,...(F=(M=i.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const pe=["Default","WithForm","WithControlledForm"];export{n as Default,i as WithControlledForm,a as WithForm,pe as __namedExportsOrder,ce as default};
