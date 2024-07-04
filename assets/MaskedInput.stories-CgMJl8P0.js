import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{u as b,a as x,F as g}from"./index.esm-Eo6g99vg.js";import{S as N}from"./StorybookCommonWithForm-D_9e0g5Y.js";import{a as o}from"./index-BPE7S6ci.js";import{M as r}from"./MaskedInput-D4Mw-f6Y.js";import"./index-CTjT7uj6.js";import"./Button-3zomcV1U.js";import"./Icon-Bd6wgpvP.js";import"./index-C4AY7A6g.js";import"./index-BRV0Se7Z.js";import"./Input-D4hNkZVv.js";import"./index.browser-vcSNLBTf.js";import"./debounce-D2cU03he.js";import"./CustomTransition-QYAwEdC6.js";import"./animation-BOght_T9.js";import"./transition-BVEjyM41.js";import"./use-disposables-BgtiGxt7.js";import"./render-C-IlGZgy.js";import"./use-flags-B0uNXtCz.js";import"./use-is-mounted-DsBFbocb.js";import"./open-closed-CcTP-TJU.js";const B={title:"Components/Form/Masked Input",component:r,argTypes:{maskOptions:o,className:o,onChange:o,handlerRef:o},parameters:{controls:{expanded:!0}}},t=()=>e.jsxs("div",{className:"text-skin-base",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("p",{children:['Default behavior with masked "+',1,' (000) 000-0000"']}),e.jsx(r,{maskOptions:{mask:"+{1} (000) 000-0000"}})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{children:"Eager mode. Notice how pre-defined chars are shown when the char before that is typed while the other example require you to type the next character before the pre-defined char will show up"}),e.jsx(r,{maskOptions:{mask:"+{1} (000) 000-0000",eager:!0}})]}),e.jsxs("div",{children:[e.jsx("p",{children:"With default value. Make sure to use unmaskedValue"}),e.jsx(r,{maskOptions:{mask:"+{1} (000) 000-0000",eager:!0},defaultValue:"9999999999"})]})]}),n=()=>{var m,i;const s=b(),{errors:a}=x({control:s.control});return e.jsx(g,{...s,children:e.jsxs(N,{children:[e.jsxs("p",{className:"text-skin-base mb-4",children:["In onChange, ",e.jsx("strong",{children:"Do not"})," use unmaskedValue to set Input value, use maskedValue instead"]}),e.jsx(r,{maskOptions:{mask:"+{1} (000) 000-0000"},label:"Telephone Number",defaultValue:"9999999999",state:(m=a.phoneNumber)!=null&&m.message?"error":"normal",caption:(i=a.phoneNumber)==null?void 0:i.message,type:"tel",...s.register("phoneNumber"),onChange:(f,k)=>{s.setValue("phoneNumber",k)}})]})})};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div className="text-skin-base">\r
      <div className="mb-4">\r
        <p>Default behavior with masked "+{1} (000) 000-0000"</p>\r
        <MaskedInput maskOptions={{
        mask: "+{1} (000) 000-0000"
      }} />\r
      </div>\r
\r
      <div className="mb-4">\r
        <p>\r
          Eager mode. Notice how pre-defined chars are shown when the char\r
          before that is typed while the other example require you to type the\r
          next character before the pre-defined char will show up\r
        </p>\r
        <MaskedInput maskOptions={{
        mask: "+{1} (000) 000-0000",
        eager: true
      }} />\r
      </div>\r
\r
      <div>\r
        <p>With default value. Make sure to use unmaskedValue</p>\r
        <MaskedInput maskOptions={{
        mask: "+{1} (000) 000-0000",
        eager: true
      }} defaultValue="9999999999" />\r
      </div>\r
    </div>;
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,l,c;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const methods = useForm<{
    phoneNumber: string;
  }>();
  const {
    errors
  } = useFormState({
    control: methods.control
  });
  return <FormProvider {...methods}>\r
      <StorybookCommonWithForm>\r
        <p className="text-skin-base mb-4">\r
          In onChange, <strong>Do not</strong> use unmaskedValue to set Input\r
          value, use maskedValue instead\r
        </p>\r
\r
        <MaskedInput maskOptions={{
        mask: "+{1} (000) 000-0000"
      }} label="Telephone Number" defaultValue="9999999999" state={errors["phoneNumber"]?.message ? "error" : "normal"} caption={errors["phoneNumber"]?.message} type="tel" {...methods.register("phoneNumber")} onChange={(_, maskedValue) => {
        methods.setValue("phoneNumber", maskedValue);
      }} />\r
      </StorybookCommonWithForm>\r
    </FormProvider>;
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const G=["TelephoneNumber","WithForm"];export{t as TelephoneNumber,n as WithForm,G as __namedExportsOrder,B as default};
