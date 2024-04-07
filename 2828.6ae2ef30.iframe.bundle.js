"use strict";(self.webpackChunkducduchy_react_components=self.webpackChunkducduchy_react_components||[]).push([[2828],{"./src/components/TextArea/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TextArea_TextArea_TextArea});var classnames=__webpack_require__("./node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_browser=__webpack_require__("./node_modules/.pnpm/nanoid@3.3.4/node_modules/nanoid/index.browser.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/.pnpm/react-hook-form@7.23.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs"),react_textarea_autosize_browser_esm=__webpack_require__("./node_modules/.pnpm/react-textarea-autosize@8.3.4_@types+react@18.0.35_react@18.2.0/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js"),debounce=__webpack_require__("./src/utils/lodash/debounce.ts"),CustomTransition=__webpack_require__("./src/components/animation/CustomTransition.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),common_data=__webpack_require__("./src/components/resources/common.data.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.2_webpack@5.65.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.2_webpack@5.65.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.2_webpack@5.65.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.2_webpack@5.65.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.2_webpack@5.65.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.2_webpack@5.65.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextArea=__webpack_require__("./node_modules/.pnpm/css-loader@6.7.3_webpack@5.65.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.16.1_postcss@8.4.21_ts-node@10.9.1_typescript@5.0.4_webpack@5.65.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@13.2.2_sass@1.47.0_webpack@5.65.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/TextArea/TextArea.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextArea.Z,options);TextArea.Z&&TextArea.Z.locals&&TextArea.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const UseFormWatcher=({control,name,onChange})=>{const dataToWatch=(0,index_esm.qo)({name,control});return(0,react.useEffect)((()=>{onChange(dataToWatch)}),[dataToWatch,onChange]),null},TextArea_TextArea_TextArea=(0,react.forwardRef)((({borderType="outline",caption,captionIcon,state,label,hasContent:propHasContent,debounceParam,className,formControl,resize="both",...textAreaProps},ref)=>{const myId=(0,react.useRef)(textAreaProps?.id??`input---${(0,index_browser.x0)()}`),hasError="error"===state,inputRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{ref&&("function"==typeof ref?ref(inputRef.current):ref.current=inputRef.current)}),[ref]);const debounceRef=(0,react.useRef)((0,debounce.D)((event=>{textAreaProps?.onChange?.(event)}),debounceParam?.debounceTime??0)),[hasContent,setHasContent]=(0,react.useState)(propHasContent??!1),checkInputPropsHasContent=(0,react.useCallback)((()=>!!(propHasContent||textAreaProps?.value||textAreaProps?.defaultValue||textAreaProps?.placeholder)),[textAreaProps?.value,textAreaProps?.placeholder,textAreaProps?.defaultValue,propHasContent]);(0,react.useEffect)((()=>{null!=propHasContent&&setHasContent(propHasContent)}),[propHasContent]);const handleWatchValueChange=(0,react.useCallback)((value=>{setHasContent(!!value||checkInputPropsHasContent())}),[checkInputPropsHasContent]);return(0,react.useEffect)((()=>{setHasContent(checkInputPropsHasContent())}),[checkInputPropsHasContent]),(0,react.useLayoutEffect)((()=>{setTimeout((()=>{setHasContent(checkInputPropsHasContent()||!!inputRef.current?.value)}),1)}),[checkInputPropsHasContent]),(0,react.useEffect)((()=>{const debouncer=debounceRef.current;return()=>{debounceParam&&(debounceParam.flushOnUnmount?debouncer.flush():debouncer.cancel())}}),[debounceParam]),(0,jsx_runtime.jsxs)("div",{className:classnames_default()(`${common_data.tH}-text-area`,className),children:[(0,jsx_runtime.jsxs)("div",{className:classnames_default()("text-area-container",`text-area-container--${borderType}`,{"text-area-container--error":hasError},{"text-area-container--has-content":hasContent},{"text-area-container--read-only":textAreaProps?.readOnly}),children:[(0,jsx_runtime.jsx)("label",{htmlFor:myId.current,children:label}),(0,jsx_runtime.jsx)(react_textarea_autosize_browser_esm.Z,{...textAreaProps,id:myId.current,ref:inputRef,onChange:event=>{setHasContent(!!textAreaProps?.placeholder||checkInputPropsHasContent()||!!event.target.value),debounceRef.current(event)},style:{resize}}),formControl&&(0,jsx_runtime.jsx)(UseFormWatcher,{control:formControl,name:textAreaProps.name??"",onChange:handleWatchValueChange})]}),(0,jsx_runtime.jsx)(CustomTransition.n,{show:!!caption,children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("caption-container",{"caption-container--error":hasError}),children:[(hasError||captionIcon)&&(0,jsx_runtime.jsx)(Icon.Z,{icon:captionIcon||["far","info-circle"],className:"fa-fw icon"}),caption]})})]})}));try{TextArea_TextArea_TextArea.displayName="TextArea",TextArea_TextArea_TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{borderType:{defaultValue:{value:"outline"},description:"",name:"borderType",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"outline"'},{value:'"plain"'}]}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},captionIcon:{defaultValue:null,description:"",name:"captionIcon",required:!1,type:{name:'["fas" | "far" | "fal" | "fat" | "fad" | "fab", string]'}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"normal"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},hasContent:{defaultValue:null,description:"",name:"hasContent",required:!1,type:{name:"boolean"}},debounceParam:{defaultValue:null,description:"",name:"debounceParam",required:!1,type:{name:"{ debounceTime: number; flushOnUnmount?: boolean; }"}},formControl:{defaultValue:null,description:"",name:"formControl",required:!1,type:{name:"Control<any>"}},resize:{defaultValue:{value:"both"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"none"'},{value:'"inline"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"block"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea_TextArea_TextArea.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/css-loader@6.7.3_webpack@5.65.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@7.2.4_@types+node@18.16.1_postcss@8.4.21_ts-node@10.9.1_typescript@5.0.4_webpack@5.65.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@13.2.2_sass@1.47.0_webpack@5.65.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/TextArea/TextArea.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_65_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.7.3_webpack@5.65.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_65_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_65_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_65_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.7.3_webpack@5.65.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_65_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_65_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.label-float-scale-only, .dd-text-area>.text-area-container--has-content.text-area-container--fill>label, .dd-text-area>.text-area-container--has-content.text-area-container--plain>label, .dd-text-area>.text-area-container--fill:focus-within>label, .dd-text-area>.text-area-container--plain:focus-within>label, .label-float-scale-only--outline, .dd-text-area>.text-area-container--has-content.text-area-container--outline>label, .dd-text-area>.text-area-container--outline:focus-within>label{top:0px}.label-float-scale-only,.dd-text-area>.text-area-container--has-content.text-area-container--fill>label,.dd-text-area>.text-area-container--has-content.text-area-container--plain>label,.dd-text-area>.text-area-container--fill:focus-within>label,.dd-text-area>.text-area-container--plain:focus-within>label,.label-float-scale-only--outline,.dd-text-area>.text-area-container--has-content.text-area-container--outline>label,.dd-text-area>.text-area-container--outline:focus-within>label{transform:translateY(-50%) scale(0.75)}.label-float-scale-only--outline, .dd-text-area>.text-area-container--has-content.text-area-container--outline>label, .dd-text-area>.text-area-container--outline:focus-within>label{--tw-bg-opacity:1;background-color:rgba(var(--background-top), var(--tw-bg-opacity))}.label-float{transform:translateY(-130%) scale(0.75) !important}.label-float--plain{transform:translateY(-160%) scale(0.75) !important}.label-float--plain-left{transform:translateY(-160%) scale(0.75) !important}.label-float--outline{--tw-bg-opacity:1;background-color:rgba(var(--background-top), var(--tw-bg-opacity));transform:translateY(-34.75px) scale(0.75) !important}.label-float--outline-left{transform:translateY(-34.75px) translateX(-32px) scale(0.75) !important}.label, .dd-text-area>.text-area-container>label{color:rgba(var(--text-base), var(--tw-text-opacity));--tw-text-opacity:0.6;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));font-weight:600;line-height:1rem;position:absolute;left:1rem;top:50%;pointer-events:none;transform-origin:top left;transition-duration:200ms}.label,.dd-text-area>.text-area-container>label{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.label--active, .dd-text-area>.text-area-container:focus-within:not(.text-area-container--error):not(.text-area-container--read-only)>label{--tw-text-opacity:1;color:rgba(var(--text-secondary), var(--tw-text-opacity))}.label--error, .dd-text-area>.caption-container--error, .dd-text-area>.text-area-container--error>label{--tw-text-opacity:1;color:rgba(var(--danger), var(--tw-text-opacity))}.form-border, .dd-text-area>.text-area-container::before{border-color:rgba(var(--text-base), var(--tw-border-opacity));--tw-border-opacity:0.4;pointer-events:none;position:absolute;top:0px;right:0px;bottom:0px;left:0px;transition-duration:200ms;z-index:0}.form-border,.dd-text-area>.text-area-container::before{content:""}.form-border--read-only, .dd-text-area>.text-area-container:focus-within--read-only::before{--tw-border-opacity:1;border-color:rgba(var(--text-secondary), var(--tw-border-opacity));--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.form-border--active, .dd-text-area>.text-area-container:focus-within:not(.text-area-container--error):not(.text-area-container--read-only)::before{--tw-border-opacity:1;border-color:rgba(var(--text-secondary), var(--tw-border-opacity))}.form-border--error, .dd-text-area>.text-area-container--error::before{--tw-border-opacity:1;border-color:rgba(var(--danger), var(--tw-border-opacity))}.form-common-container{min-width:10rem}.form-bg--filled, .dd-text-area>.text-area-container{background-color:rgba(var(--disabled), var(--tw-bg-opacity));--tw-bg-opacity:0.3}.form-bg--outline, .dd-text-area>.text-area-container--outline{--tw-bg-opacity:1;background-color:rgba(var(--background-top), var(--tw-bg-opacity))}.dd-text-area>.text-area-container{transition-duration:200ms;border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;position:relative;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content}.dd-text-area>.text-area-container>textarea{--tw-text-opacity:1;color:rgba(var(--text-base), var(--tw-text-opacity));background-color:transparent;padding-left:1rem;padding-right:1rem;padding-bottom:0.25rem;transition:background-color .2s}.dd-text-area>.text-area-container>textarea:disabled{cursor:not-allowed}.dd-text-area>.text-area-container::before{transition-duration:100ms}.dd-text-area>.text-area-container:focus-within>textarea{outline:none}.dd-text-area>.text-area-container:hover, .dd-text-area>.text-area-container:focus-within{--tw-bg-opacity:0.5}.dd-text-area>.text-area-container--fill::before{border-bottom-width:1px}.dd-text-area>.text-area-container--fill:focus-within::before{border-bottom-width:2px}.dd-text-area>.text-area-container--fill>textarea{padding-bottom:6px;padding-top:0.75rem}.dd-text-area>.text-area-container--plain{border-bottom-width:1px;border-color:rgba(var(--text-base), var(--tw-border-opacity));--tw-border-opacity:0.1;background-color:transparent;height:auto}.dd-text-area>.text-area-container--plain>textarea{padding:0px;padding-left:0.5rem;padding-right:0.5rem}.dd-text-area>.text-area-container--plain>.adornment-icon-left, .dd-text-area>.text-area-container--plain>.label, .dd-text-area>.text-area-container.text-area-container--plain>label{left:0.5rem}.dd-text-area>.text-area-container--plain::before{transition-duration:100ms;margin-top:1.5rem}.dd-text-area>.text-area-container--plain:not(.text-area-container--has-content)::before{border-bottom-width:1px;border-color:transparent}.dd-text-area>.text-area-container--plain:hover::before, .dd-text-area>.text-area-container--plain.text-area-container--error::before{border-bottom-width:1px;border-color:rgba(var(--text-base), var(--tw-border-opacity));--tw-border-opacity:0.4}.dd-text-area>.text-area-container--plain:focus-within::before{border-bottom-width:2px}.dd-text-area>.text-area-container--plain:focus-within.text-area-container--error::before{--tw-border-opacity:1;border-color:rgba(var(--danger), var(--tw-border-opacity))}.dd-text-area>.text-area-container--plain:focus-within:not(.text-area-container--error)::before{--tw-border-opacity:1;border-color:rgba(var(--text-secondary), var(--tw-border-opacity))}.dd-text-area>.text-area-container--outline{border-bottom-right-radius:0.375rem;border-bottom-left-radius:0.375rem}.dd-text-area>.text-area-container--outline>textarea{padding-top:0.75rem;padding-bottom:0.75rem}.dd-text-area>.text-area-container--outline::before{border-radius:0.375rem;border-width:1px}.dd-text-area>.text-area-container--outline:focus-within::before{border-width:2px}.dd-text-area>.caption-container{text-align:left;font-size:0.75rem;line-height:1rem;font-weight:600;width:100%;padding-left:1rem;padding-right:1rem;display:flex;margin-top:0.25rem}.dd-text-area>.caption-container::before{display:inline-block;height:1rem;width:0px;content:""}.dd-text-area>.caption-container>.icon{margin-right:0.25rem}.dd-text-area>.text-area-container--plain+.caption-container{padding-left:0px;padding-right:0px}',"",{version:3,sources:["<no source>","webpack://./src/components/assets/styles/form-common.scss","webpack://./src/components/TextArea/TextArea.scss"],names:[],mappings:"AAAA,4eAAA,OAAA,CAAA,qeCIE,sCAAA,CDJF,qLAAA,iBAAA,CAAA,kEAAA,CAAA,aCaE,kDAAA,CAGF,oBACE,kDAAA,CAGF,yBACE,kDAAA,CDrBF,sBAAA,iBAAA,CAAA,kEAAA,CAAA,qDAAA,CAAA,2BC8BE,uEAAA,CD9BF,iDAAA,oDAAA,CAAA,qBAAA,CAAA,qBAAA,CAAA,8LAAA,CAAA,eAAA,CAAA,gBAAA,CAAA,iBAAA,CAAA,SAAA,CAAA,OAAA,CAAA,mBAAA,CAAA,yBAAA,CAAA,yBAAA,CAAA,gDCyCE,uDAAA,CDzCF,4IAAA,mBAAA,CAAA,yDAAA,CAAA,wGAAA,mBAAA,CAAA,iDAAA,CAAA,yDAAA,6DAAA,CAAA,uBAAA,CAAA,mBAAA,CAAA,iBAAA,CAAA,OAAA,CAAA,SAAA,CAAA,UAAA,CAAA,QAAA,CAAA,yBAAA,CAAA,SAAA,CAAA,wDC0DE,UAAA,CD1DF,4FAAA,qBAAA,CAAA,kEAAA,CAAA,8BAAA,CAAA,gLAAA,CAAA,oJAAA,qBAAA,CAAA,kEAAA,CAAA,uEAAA,qBAAA,CAAA,0DAAA,CAAA,uBCuEE,eAAA,CDvEF,qDAAA,4DAAA,CAAA,mBAAA,CAAA,+DAAA,iBAAA,CAAA,kEAAA,CAAA,mCAAA,yBAAA,CAAA,+BAAA,CAAA,gCAAA,CAAA,iBAAA,CAAA,uBEQI,CAAA,kBAAA,CACA,sBAAA,CAAA,iBAAA,CFTJ,4CAAA,mBAAA,CAAA,oDAAA,CAAA,4BAAA,CAAA,iBAAA,CAAA,kBAAA,CAAA,sBAAA,CAAA,+BAAA,CAAA,qDAAA,kBAAA,CAAA,2CAAA,yBAAA,CAAA,yDEkCQ,YAAA,CFlCR,0FAAA,mBAAA,CAAA,iDAAA,uBAAA,CAAA,8DAAA,uBAAA,CAAA,kDAAA,kBAAA,CAAA,mBAAA,CAAA,0CAAA,uBAAA,CAAA,6DAAA,CAAA,uBAAA,CAAA,4BAAA,CAAA,WAAA,CAAA,mDAAA,WAAA,CAAA,mBAAA,CAAA,oBAAA,CAAA,sLAAA,WAAA,CAAA,kDAAA,yBAAA,CAAA,iBAAA,CAAA,yFAAA,uBAAA,CAAA,wBAAA,CAAA,sIAAA,uBAAA,CAAA,6DAAA,CAAA,uBAAA,CAAA,+DAAA,uBAAA,CAAA,0FAAA,qBAAA,CAAA,0DAAA,CAAA,gGAAA,qBAAA,CAAA,kEAAA,CAAA,4CAAA,mCAAA,CAAA,kCAAA,CAAA,qDAAA,mBAAA,CAAA,sBAAA,CAAA,oDAAA,sBAAA,CAAA,gBAAA,CAAA,iEAAA,gBAAA,CAAA,iCAAA,eAAA,CAAA,iBAAA,CAAA,gBAAA,CAAA,eAAA,CAAA,UAAA,CAAA,iBAAA,CAAA,kBAAA,CAAA,YAAA,CAAA,kBAAA,CAAA,yCAAA,oBAAA,CAAA,WAAA,CAAA,SAAA,CAAA,UAAA,CAAA,uCAAA,oBAAA,CAAA,6DAAA,gBAAA,CAAA,iBAAA",sourcesContent:[null,'$float-scale: 0.75;\n\n.label-float-scale-only {\n  @apply top-0;\n  transform: translateY(-50%) scale($float-scale);\n}\n\n.label-float-scale-only--outline {\n  @extend .label-float-scale-only;\n  @apply bg-skin-top;\n}\n\n.label-float {\n  transform: translateY(-130%) scale($float-scale) !important;\n}\n\n.label-float--plain {\n  transform: translateY(-160%) scale($float-scale) !important;\n}\n\n.label-float--plain-left {\n  transform: translateY(-160%) scale($float-scale) !important;\n}\n\n.label-float--outline {\n  @apply bg-skin-top;\n  transform: translateY(-34.75px) scale($float-scale) !important;\n}\n\n.label-float--outline-left {\n  transform: translateY(-34.75px) translateX(-32px) scale($float-scale) !important;\n}\n\n.label {\n  @apply text-skin-base text-opacity-60;\n  @apply transform -translate-y-1/2;\n  @apply font-semibold leading-4;\n  @apply absolute left-4 top-1/2;\n  @apply pointer-events-none;\n  @apply origin-top-left;\n  @apply duration-200;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.label--active {\n  @apply text-skin-secondary;\n}\n\n.label--error {\n  @apply text-skin-danger;\n}\n\n.form-border {\n  @apply border-skin-base border-opacity-40;\n  @apply pointer-events-none;\n  @apply absolute inset-0;\n  @apply duration-200;\n  @apply z-0;\n  content: "";\n}\n.form-border--read-only {\n  @apply border-skin-secondary;\n  @apply grayscale;\n}\n.form-border--active {\n  @apply border-skin-secondary;\n}\n.form-border--error {\n  @apply border-skin-danger;\n}\n.form-common-container {\n  min-width: 10rem;\n}\n\n.form-bg--filled {\n  @apply bg-skin-disabled bg-opacity-30;\n}\n.form-bg--outline {\n  @apply bg-skin-top;\n}\n','@import "../assets/styles/form-common.scss";\n\n.dd-text-area {\n  > .text-area-container {\n    @extend .form-bg--filled;\n    @apply duration-200;\n    @apply rounded-t-md;\n    @apply relative;\n    height: fit-content;\n    width: fit-content;\n\n    > label {\n      @extend .label;\n    }\n\n    > textarea {\n      @apply text-skin-base;\n      @apply bg-transparent;\n      @apply px-4 pb-1;\n      transition: background-color 0.2s;\n\n      &:disabled {\n        @apply cursor-not-allowed;\n      }\n    }\n\n    &::before {\n      @extend .form-border;\n      @apply duration-100;\n    }\n\n    // --- Focus within\n    &:focus-within {\n      > textarea {\n        outline: none;\n      }\n\n      &:not(.text-area-container--error):not(.text-area-container--read-only) {\n        &::before {\n          @extend .form-border--active;\n        }\n        > label {\n          @extend .label--active;\n        }\n      }\n      &--read-only::before {\n        @extend .form-border--read-only;\n      }\n    }\n\n    &--fill,\n    &--plain {\n      &:focus-within > label {\n        @extend .label-float-scale-only;\n      }\n    }\n\n    &--outline:focus-within > label {\n      @extend .label-float-scale-only--outline;\n    }\n\n    &:hover,\n    &:focus-within {\n      @apply bg-opacity-50;\n    }\n\n    // --- Has content\n    &--has-content {\n      &.text-area-container--fill,\n      &.text-area-container--plain {\n        > label {\n          @extend .label-float-scale-only;\n        }\n      }\n\n      &.text-area-container--outline > label {\n        @extend .label-float-scale-only--outline;\n      }\n    }\n\n    // --- Type specific\n    &--fill {\n      &::before {\n        @apply border-b;\n      }\n      &:focus-within::before {\n        @apply border-b-2;\n      }\n\n      > textarea {\n        @apply pb-[6px] pt-3;\n      }\n    }\n\n    &--plain {\n      @apply border-b border-skin-base border-opacity-10;\n      @apply bg-transparent;\n      @apply h-auto;\n\n      > textarea {\n        @apply p-0 px-2;\n      }\n\n      > .adornment-icon-left,\n      > .label {\n        @apply left-2;\n      }\n\n      &::before {\n        @apply duration-100;\n        @apply mt-6;\n      }\n      &:not(.text-area-container--has-content)::before {\n        @apply border-b border-transparent;\n      }\n      &:hover::before,\n      &.text-area-container--error::before {\n        @apply border-b border-skin-base border-opacity-40;\n      }\n      &:focus-within {\n        &::before {\n          @apply border-b-2;\n        }\n        &.text-area-container--error::before {\n          @apply border-skin-danger;\n        }\n        &:not(.text-area-container--error)::before {\n          @apply border-skin-secondary;\n        }\n      }\n    }\n\n    &--outline {\n      @extend .form-bg--outline;\n      @apply rounded-b-md;\n      > textarea {\n        @apply py-3;\n      }\n      &::before {\n        @apply rounded-md;\n        @apply border;\n      }\n      &:focus-within::before {\n        @apply border-2;\n      }\n    }\n\n    // --- Error\n    &--error {\n      &::before {\n        @extend .form-border--error;\n      }\n      > label {\n        @extend .label--error;\n      }\n    }\n  }\n\n  > .caption-container {\n    @apply text-left text-xs;\n    @apply font-semibold;\n    @apply w-full;\n    @apply px-4;\n    @apply flex;\n    @apply mt-1;\n\n    &::before {\n      @apply inline-block;\n      @apply w-0 h-4;\n      content: "";\n    }\n    &--error {\n      @extend .label--error;\n    }\n    > .icon {\n      @apply mr-1;\n    }\n  }\n\n  > .text-area-container--plain + .caption-container {\n    @apply px-0;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);