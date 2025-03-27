import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BCtMShv3.js";import{u as f,F as v}from"./index.esm--LincS5R.js";import{S}from"./StorybookCommonWithForm-AWrnt9pC.js";import{s as r}from"./index-KpAVk5lk.js";import{D as m}from"./DurationPicker-ui7fKQaA.js";import{B as N}from"./Button-Dw10h_TB.js";import"./date-ChEv5BYL.js";import"./MaskedInput-CAuCWOAw.js";import"./Input-De98kYoY.js";import"./index.browser-OxPLOBIU.js";import"./debounce-D2cU03he.js";import"./CustomTransition-CSHLgCWl.js";import"./animation-CUZBsLrg.js";import"./use-sync-refs-CZ2KMCOF.js";import"./use-is-mounted-suvdIMg-.js";import"./use-server-handoff-complete-C8_JXbTh.js";import"./Icon-DLP5P1Ct.js";import"./index-CvPWi8JN.js";import"./Popover-ChzGn0PM.js";import"./useFocusRing-D4bu8X2q.js";import"./use-resolve-button-type-DNd3Xgnw.js";import"./keyboard-tlvg-gRs.js";import"./floating-B_I44q2N.js";import"./floating-ui.dom-CmL5ukrp.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./use-tab-direction-IrkWQ0ly.js";import"./hidden-CkFg_2Sb.js";import"./portal-BDPEH6C3.js";import"./focus-management-Bh_oGY5B.js";import"./bugs-DpEN4NTH.js";const le={title:"Components/Form/DurationPicker",component:m,argTypes:{className:r,onChange:r,caption:r,localeText:r,doDisabled:r,captionIcon:r,label:r,leadingAdornment:r,leadingAdornmentOnClick:r,trailingAdornment:r,trailingAdornmentOnClick:r,debounceParam:r,formControl:r},parameters:{controls:{expanded:!0}}},W=o=>e.jsx("div",{className:"mt-[20rem]",children:e.jsx(m,{...o,label:"A simple label",defaultValue:4524e4})}),n=W.bind({}),y=o=>{const t=f(),[a,l]=u.useState(),[c,d]=u.useState(),[C,j]=u.useState();return e.jsx(v,{...t,children:e.jsxs(S,{children:[e.jsxs("div",{className:"flex flex-col mb-8",children:[e.jsxs("code",{className:"text-skin-base",children:["Unmasked value ",a]}),e.jsxs("code",{className:"text-skin-base",children:["Masked value ",c]}),e.jsxs("code",{className:"text-skin-base",children:["Duration in MS ",C]})]}),e.jsx(m,{...o,...t.register("durationPicker"),onChange:(D,I,p)=>{t.setValue("durationPicker",p),l(D),d(I),j(p)}})]})})},s=y.bind({});s.args={label:"Meeting time"};const i=o=>{const t=f({defaultValues:{durationPicker:0}}),a=t.watch("durationPicker");return e.jsx(v,{...t,children:e.jsxs(S,{children:[e.jsxs("p",{className:"text-skin-base mb-2",children:["Value in ms ",a]}),e.jsx(m,{...o,...t.register("durationPicker"),value:a,onChange:(l,c,d)=>{t.setValue("durationPicker",d)}}),e.jsx(N,{className:"mt-4",onClick:()=>{t.setValue("durationPicker",Math.round(Math.random()*864e5))},type:"button",children:"Set custom value in ms"})]})})};var k,h,b;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div className="mt-[20rem]">\r
    <DurationPicker {...args} label="A simple label" defaultValue={45240000} />\r
  </div>`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,V,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
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
}`,...(g=(V=s.parameters)==null?void 0:V.docs)==null?void 0:g.source}}};var P,M,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(F=(M=i.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const ce=["Default","WithForm","WithControlledForm"];export{n as Default,i as WithControlledForm,s as WithForm,ce as __namedExportsOrder,le as default};
