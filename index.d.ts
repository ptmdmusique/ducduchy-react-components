import { AsyncCreatableProps } from 'react-select/async-creatable';
import { AsyncProps } from 'react-select/async';
import { CommonProps } from 'react-select';
import { ComponentProps } from 'react';
import { ComponentType } from 'react';
import { Control } from 'react-hook-form';
import { CreatableProps } from 'react-select/creatable';
import { default as default_2 } from 'react';
import { default as default_3 } from 'react-date-picker';
import { default as default_4 } from 'imask';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { Float } from '@headlessui-float/react';
import { FocusEventHandler } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { GroupBase } from 'react-select';
import { HTMLAttributes } from 'react';
import { HTMLProps } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { Menu as Menu_2 } from '@headlessui/react';
import { Popover as Popover_2 } from '@headlessui/react';
import { Props } from 'react-select';
import { PropsValue } from 'react-select';
import { PropsWithChildren } from 'react';
import { Range as Range_2 } from 'react-range';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ReactPaginateProps } from 'react-paginate';
import { Ref } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { Tab } from '@headlessui/react';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { Transition } from 'framer-motion';
import { usePopper } from 'react-popper';
import { Variant } from 'framer-motion';

export declare const AlertBanner: ({ className, iconClassName, contentClassName, iconContainerClassName, colorType, header, description, icon, hasShadow, roundedCorner, borderPlacement, }: AlertBannerProps) => JSX_2.Element;

export declare interface AlertBannerProps {
    className?: string;
    iconClassName?: string;
    iconContainerClassName?: string;
    contentClassName?: string;
    colorType?: ColorType;
    /** Use a plain string header if you want to use the pre-styled option */
    header?: ReactNode;
    /** Use a plain string description if you want to use the pre-styled option */
    description?: ReactNode;
    icon?: IconProps["icon"];
    hasShadow?: boolean;
    roundedCorner?: boolean;
    borderPlacement?: BorderPlacement;
}

export declare function AsyncCreatableListbox<Data, IsMulti extends boolean = false, Form extends FieldValues = any>(props: AsyncCreatableListboxProps<Data, IsMulti, Form>): JSX_2.Element;

export declare type AsyncCreatableListboxProps<Data, IsMulti extends boolean = boolean, Form extends FieldValues = any> = OmitStrict<Partial<AsyncCreatableProps<ListboxOption<Data>, IsMulti, GroupBase<ListboxOption<Data>>>>, "onChange"> & ListboxBaseProps<Data, IsMulti, Form>;

export declare function AsyncListbox<Data, IsMulti extends boolean = false, Form extends FieldValues = any>(props: AsyncListboxProps<Data, IsMulti, Form>): JSX_2.Element;

export declare type AsyncListboxProps<Data, IsMulti extends boolean = boolean, Form extends FieldValues = any> = OmitStrict<Partial<AsyncProps<ListboxOption<Data>, IsMulti, GroupBase<ListboxOption<Data>>>>, "onChange"> & ListboxBaseProps<Data, IsMulti, Form>;

export declare const Badge: ({ icon, text, colorType, type, iconClassName, className, }: BadgeProps) => JSX_2.Element;

export declare interface BadgeProps {
    colorType?: ColorType;
    className?: string;
    type?: "outline" | "filled";
    icon?: IconProps["icon"];
    iconClassName?: string;
    text?: string;
}

declare type BorderPlacement = "top" | "bottom" | "left" | "right";

declare type BorderType = "fill" | "outline" | "plain";

export declare const Button: default_2.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends default_2.HTMLProps<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    borderType?: BorderType;
    colorType?: ColorType;
    icon?: IconProps["icon"];
    iconClassName?: string;
    iconPlacement?: "left" | "right";
    isLoading?: boolean;
    isRounded?: boolean;
    withBackground?: boolean;
    loadingIcon?: IconProps["icon"];
    ref?: default_2.ForwardedRef<HTMLButtonElement>;
    useFocusStyle?: boolean;
}

declare type ColorDisplayType = "hex";

export declare const ColorPicker: ForwardRefExoticComponent<ColorPickerProps & RefAttributes<HTMLInputElement>>;

export declare interface ColorPickerProps extends OmitStrict<InputProps, "defaultValue" | "value"> {
    defaultValue?: string;
    value?: string;
    colorDisplayType?: ColorDisplayType;
    frequentlyUsedColorList?: string[];
    hidePicker?: boolean;
}

declare type ColorType = (typeof colorTypeList)[number];

declare const colorTypeList: readonly ["primary", "secondary", "success", "danger", "warning", "info", "neutral"];

export declare function CreatableListbox<Data, IsMulti extends boolean = false, Form extends FieldValues = any>(props: CreatableListboxProps<Data, IsMulti, Form>): JSX_2.Element;

export declare type CreatableListboxProps<Data, IsMulti extends boolean = boolean, Form extends FieldValues = any> = OmitStrict<Partial<CreatableProps<ListboxOption<Data>, IsMulti, GroupBase<ListboxOption<Data>>>>, "onChange"> & ListboxBaseProps<Data, IsMulti, Form>;

declare type CustomAnimationVariant = Record<"hidden" | "visible", Variant>;

export declare function DatePicker<Form extends FieldValues>({ label, formValidation, onChange, defaultValue, isOpen, disabled, caption, captionIcon, state, calendarLeadingIcon, clearDateIcon, displayDateFormat, inline, ...datePickerProps }: DatePickerProps<Form>): JSX_2.Element;

export declare type DatePickerProps<Form extends FieldValues = any> = PickerBaseProps<Form> & Omit<ReactDatePickerProps, "defaultValue"> & {
    defaultValue?: string | Date | Date[];
    label?: string;
    formValidation?: FormValidationWithController<Form>;
    onChange?: (date: Date | null, event?: default_2.ChangeEvent<HTMLInputElement>) => void;
    caption?: ReactNode;
    captionIcon?: IconProps["icon"];
    state?: "normal" | "error";
    calendarLeadingIcon?: IconProps["icon"];
    clearDateIcon?: IconProps["icon"];
    displayDateFormat?: string;
    inline?: boolean;
};

declare enum Direction {
    Right = "to right",
    Left = "to left",
    Down = "to bottom",
    Up = "to top"
}

declare type Duration = Record<PossibleDurationType, number>;

export declare const DurationPicker: ForwardRefExoticComponent<DurationPickerProps & RefAttributes<HTMLInputElement>>;

export declare interface DurationPickerProps extends Partial<OmitStrict<MaskedInputProps, "onChange" | "value" | "defaultValue">> {
    localeText?: {
        [key in PossibleDurationType]?: string;
    };
    /** Do we NOT use day/hour/minute/second? */
    doDisabled?: {
        [key in PossibleDurationType]?: boolean;
    };
    /** Use 3rd parameter to get duration in milliseconds */
    onChange?: (unmaskedValue: string, maskedValue: string, durationInMs: number) => void;
    value?: number;
    defaultValue?: number;
    /** Should we close the popover on item click */
    closeOnClick?: boolean;
    /** Should we close the popover on item focus */
    closeOnFocus?: boolean;
    separatedBySpace?: boolean;
    dropdownItemProps?: {
        minDuration?: number;
        maxDuration?: number;
        interval?: number;
        /** Whether to include last item if equal to maxDuration or not */
        inclusiveEnd?: boolean;
        formatItem?: (duration: Duration, durationInMs: number) => ReactNode;
        isItemValid?: (durationInMs: number) => boolean;
    };
}

declare type Event_2 = keyof HTMLElementEventMap;

declare type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;

export declare const FadeTransition: ({ show, children, className, as, }: TransitionProp) => JSX_2.Element;

declare type FormAdornment = ReactNode | IconProps["icon"];

declare interface FormValidationWithController<T extends FieldValues> {
    control: Control<T>;
    name: FieldPath<T>;
    rules?: RegisterOptions<T>;
}

declare type GetFunction<D> = (props: {
    data: D;
    index: number;
    checked: boolean;
    active: boolean;
    disabled: boolean;
}) => ReactElement;

export declare const Icon: ForwardRefExoticComponent<Omit<Partial<Pick<FontAwesomeIconProps, "string" | "symbol" | "fill" | "mask" | "transform" | "suppressHydrationWarning" | "className" | "color" | "height" | "id" | "lang" | "max" | "media" | "method" | "min" | "name" | "style" | "target" | "type" | "width" | "role" | "tabIndex" | "crossOrigin" | "accentHeight" | "accumulate" | "additive" | "alignmentBaseline" | "allowReorder" | "alphabetic" | "amplitude" | "arabicForm" | "ascent" | "attributeName" | "attributeType" | "autoReverse" | "azimuth" | "baseFrequency" | "baselineShift" | "baseProfile" | "bbox" | "begin" | "bias" | "by" | "calcMode" | "capHeight" | "clip" | "clipPath" | "clipPathUnits" | "clipRule" | "colorInterpolation" | "colorInterpolationFilters" | "colorProfile" | "colorRendering" | "contentScriptType" | "contentStyleType" | "cursor" | "cy" | "d" | "decelerate" | "descent" | "diffuseConstant" | "direction" | "display" | "divisor" | "dominantBaseline" | "dur" | "dx" | "dy" | "edgeMode" | "elevation" | "enableBackground" | "end" | "exponent" | "externalResourcesRequired" | "fillOpacity" | "fillRule" | "filter" | "filterRes" | "filterUnits" | "floodColor" | "floodOpacity" | "focusable" | "fontFamily" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "format" | "fr" | "from" | "fx" | "fy" | "g1" | "g2" | "glyphName" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "glyphRef" | "gradientTransform" | "gradientUnits" | "hanging" | "horizAdvX" | "horizOriginX" | "href" | "ideographic" | "imageRendering" | "in2" | "in" | "intercept" | "k1" | "k2" | "k3" | "k4" | "k" | "kernelMatrix" | "kernelUnitLength" | "kerning" | "keyPoints" | "keySplines" | "keyTimes" | "lengthAdjust" | "letterSpacing" | "lightingColor" | "limitingConeAngle" | "local" | "markerEnd" | "markerHeight" | "markerMid" | "markerStart" | "markerUnits" | "markerWidth" | "maskContentUnits" | "maskUnits" | "mathematical" | "mode" | "numOctaves" | "offset" | "opacity" | "operator" | "order" | "orient" | "orientation" | "origin" | "overflow" | "overlinePosition" | "overlineThickness" | "paintOrder" | "panose1" | "path" | "pathLength" | "patternContentUnits" | "patternTransform" | "patternUnits" | "pointerEvents" | "points" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "preserveAlpha" | "preserveAspectRatio" | "primitiveUnits" | "r" | "radius" | "refX" | "refY" | "renderingIntent" | "repeatCount" | "repeatDur" | "requiredExtensions" | "requiredFeatures" | "restart" | "result" | "rotate" | "rx" | "ry" | "scale" | "seed" | "shapeRendering" | "slope" | "spacing" | "specularConstant" | "specularExponent" | "speed" | "spreadMethod" | "startOffset" | "stdDeviation" | "stemh" | "stemv" | "stitchTiles" | "stopColor" | "stopOpacity" | "strikethroughPosition" | "strikethroughThickness" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "surfaceScale" | "systemLanguage" | "tableValues" | "targetX" | "targetY" | "textAnchor" | "textDecoration" | "textLength" | "textRendering" | "to" | "u1" | "u2" | "underlinePosition" | "underlineThickness" | "unicode" | "unicodeBidi" | "unicodeRange" | "unitsPerEm" | "vAlphabetic" | "values" | "vectorEffect" | "version" | "vertAdvY" | "vertOriginX" | "vertOriginY" | "vHanging" | "vIdeographic" | "viewBox" | "viewTarget" | "visibility" | "vMathematical" | "widths" | "wordSpacing" | "writingMode" | "x1" | "x2" | "x" | "xChannelSelector" | "xHeight" | "xlinkActuate" | "xlinkArcrole" | "xlinkHref" | "xlinkRole" | "xlinkShow" | "xlinkTitle" | "xlinkType" | "xmlBase" | "xmlLang" | "xmlns" | "xmlnsXlink" | "xmlSpace" | "y1" | "y2" | "y" | "yChannelSelector" | "z" | "zoomAndPan" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "maskId" | "spin" | "spinPulse" | "spinReverse" | "pulse" | "beat" | "fade" | "beatFade" | "bounce" | "shake" | "border" | "fixedWidth" | "inverse" | "listItem" | "flip" | "size" | "pull" | "rotation" | "title" | "titleId" | "swapOpacity" | "ref" | "key">> & IconProps, "ref"> & RefAttributes<HTMLDivElement>>;

export declare interface IconProps {
    icon: ["fas" | "far" | "fal" | "fat" | "fad" | "fab", string];
    className?: string;
    WrapperType?: "div" | "span";
}

declare interface IMarkProps {
    key: string;
    style: default_2.CSSProperties;
    ref: default_2.RefObject<any>;
}

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    borderType?: BorderType;
    caption?: ReactNode;
    captionIcon?: IconProps["icon"];
    state?: "normal" | "error";
    label?: ReactNode;
    leadingAdornment?: FormAdornment;
    leadingAdornmentOnClick?: () => void;
    trailingAdornment?: FormAdornment;
    trailingAdornmentOnClick?: () => void;
    hasContent?: boolean;
    debounceParam?: {
        /** in millisecond */
        debounceTime: number;
        flushOnUnmount?: boolean;
    };
    formControl?: Control<any>;
}

declare interface IRenderMarkParams {
    props: IMarkProps;
    index: number;
}

declare interface IRenderThumbParams {
    props: IThumbProps;
    value: number;
    index: number;
    isDragged: boolean;
}

declare interface IRenderTrackParams {
    props: ITrackProps;
    children: default_2.ReactNode;
    isDragged: boolean;
    disabled: boolean;
}

declare interface IThumbProps {
    key: number;
    style: default_2.CSSProperties;
    tabIndex?: number;
    "aria-valuemax": number;
    "aria-valuemin": number;
    "aria-valuenow": number;
    draggable: boolean;
    ref: default_2.RefObject<any>;
    role: string;
    onKeyDown: (e: default_2.KeyboardEvent) => void;
    onKeyUp: (e: default_2.KeyboardEvent) => void;
}

declare interface ITrackProps {
    style: default_2.CSSProperties;
    ref: default_2.RefObject<any>;
    onMouseDown: (e: default_2.MouseEvent) => void;
    onTouchStart: (e: default_2.TouchEvent) => void;
}

export declare const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;

export declare interface LinkProps extends OmitStrict<HTMLProps<HTMLAnchorElement>, "ref"> {
    colorType?: ColorType;
    iconStart?: IconProps["icon"] | ReactNode;
    /** Not necessary if ReactNode is provided as `iconStart` */
    iconStartClassName?: string;
    iconEnd?: IconProps["icon"] | ReactNode;
    /** Not necessary if ReactNode is provided as `iconEnd` */
    iconEndClassName?: string;
    /** Should we hide underline by default and only show underline on hover/focus, etc */
    hideUnderlineByDefault?: boolean;
}

export declare function Listbox<Data, IsMulti extends boolean = false, Form extends FieldValues = any>(props: ListboxProps<Data, IsMulti, Form>): JSX_2.Element;

declare interface ListboxBaseProps<Data, IsMulti extends boolean = boolean, Form extends FieldValues = any> {
    className?: string;
    label?: string;
    optionList: OptionType<ListboxOption<Data>>[] | readonly OptionType<ListboxOption<Data>>[];
    placeholder?: default_2.ReactNode;
    disabled?: boolean;
    onChange?: ListboxOnChange<Data, IsMulti>;
    formValidation?: FormValidationWithController<Form>;
    borderType?: ListboxBorderType;
    caption?: default_2.ReactNode;
    captionIcon?: IconProps["icon"];
    state?: "normal" | "error";
    dropdownIndicatorIcon?: IconProps["icon"];
    isMulti?: IsMulti;
    defaultValue?: PropsValue<ListboxOption<Data>>;
}

declare type ListboxBorderType = "outline" | "fill";

declare type ListboxOnChange<Data, IsMulti extends boolean> = (value: IsMulti extends true ? Data[] : Data | undefined) => void;

declare type ListboxOption<Data> = {
    label: string;
    value: Data;
};

export declare type ListboxProps<Data, IsMulti extends boolean = boolean, Form extends FieldValues = any> = OmitStrict<Partial<CommonProps<ListboxOption<Data>, IsMulti, any> & Props<ListboxOption<Data>, IsMulti, GroupBase<ListboxOption<Data>>>>, "onChange"> & ListboxBaseProps<Data, IsMulti, Form>;

export declare const MaskedInput: ForwardRefExoticComponent<Pick<InputProps, "children" | "suppressHydrationWarning" | "className" | "color" | "height" | "id" | "lang" | "max" | "min" | "name" | "style" | "type" | "width" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "size" | "title" | "form" | "list" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "accessKey" | "autoFocus" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "slot" | "spellCheck" | "translate" | "radioGroup" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "alt" | "step" | "borderType" | "accept" | "autoComplete" | "capture" | "checked" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "label" | "maxLength" | "minLength" | "multiple" | "pattern" | "placeholder" | "readOnly" | "required" | "src" | "value" | "caption" | "enterKeyHint" | "captionIcon" | "state" | "leadingAdornment" | "leadingAdornmentOnClick" | "trailingAdornment" | "trailingAdornmentOnClick" | "hasContent" | "debounceParam" | "formControl"> & {
    maskOptions: default_4.AnyMaskedOptions;
    onChange?: (unmaskedValue: string, maskedValue: string) => void;
    handlerRef?: Ref<MaskedInputHandle>;
} & RefAttributes<HTMLInputElement>>;

export declare interface MaskedInputHandle {
    setValue: (value: string) => void;
}

export declare type MaskedInputProps = OmitStrict<InputProps, "onChange" | "nonce"> & {
    maskOptions: default_4.AnyMaskedOptions;
    onChange?: (unmaskedValue: string, maskedValue: string) => void;
    handlerRef?: Ref<MaskedInputHandle>;
};

/** Note, the menu dropdown is relative to the outer container */
export declare function Menu<Item, ContainerAs extends default_2.ElementType, OpenerProps extends object = ButtonProps>({ onItemChosen, menuContainerAs, menuProps, menuItemsProps, useDivider, renderCustomMenuOpener, menuOpenerProps, itemContainerOnRightSide, menuItemList, renderWholeItem, renderItem, renderItemContent, }: MenuProps<Item, ContainerAs, OpenerProps>): JSX_2.Element;

export declare interface MenuProps<Item, T extends default_2.ElementType = "div", OpenerProps extends object = ButtonProps> {
    onItemChosen?: (item: Item, index: number) => void;
    menuContainerAs?: T;
    itemContainerOnRightSide?: boolean;
    useDivider?: boolean;
    menuProps?: default_2.ComponentProps<T>;
    menuItemsProps?: Parameters<typeof Menu_2.Items>[0];
    menuOpenerProps?: (OpenerProps extends ButtonProps ? OmitStrict<OpenerProps, "as"> : OpenerProps) & Parameters<typeof Menu_2.Button>[0];
    renderCustomMenuOpener?: (menuOpen: boolean) => default_2.ReactNode;
    menuItemList: Item[] | readonly Item[];
    /** Render whole item, including the container
     *
     * Use `renderItemContent` or `renderItem` to render just the content of the item
     *   and leave accessbility and styling of the container handled by the component
     */
    renderWholeItem?: (item: Item, index: number, menuOpen: boolean) => default_2.ReactNode;
    /** Render just the inner of the item and let the lib handle accessiblity
     *
     * Unnecessary if `renderItem` is present
     */
    renderItem?: (item: Item, index: number, props: {
        active: boolean;
        disabled: boolean;
        menuOpen: boolean;
    }) => ReactElement;
    /** Used to render each item, unnecessary if `renderItem` or `renderWholeItem` is present */
    renderItemContent?: (item: Item, index: number, props: {
        active: boolean;
        disabled: boolean;
        menuOpen: boolean;
    }) => default_2.ReactNode;
}

export declare const Modal: ({ header, footer, isOpen, children, onClose, showCloseButton, closeButtonIcon, className, headerClassName, bodyClassName, footerClassName, isFullscreen, animationType, transition, overlayAnimation, animationAnchorElement, targetSize, }: PropsWithChildren<ModalProps>) => JSX_2.Element;

export declare interface ModalProps {
    isOpen: boolean;
    header?: ReactNode;
    footer?: ReactNode;
    /** Use for more fine-grained control on when to trigger the close */
    onClose?: (triggeredOn: OnCloseTriggerdOn) => void;
    showCloseButton?: boolean;
    closeButtonIcon?: IconProps["icon"];
    className?: string;
    headerClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
    isFullscreen?: boolean;
    /**
     * The type of animation to use when opening the modal
     * - `fade-down`: The modal will fade in and slide down from the top
     * - `natural`: The modal will expand from the center of the screen - NOTE: currently this is not working as expected
     * - `CustomAnimationVariant`: Custom animation variants - when the modal is opened, the modal will animate from the `hidden` variant to the `visible` variant and vice versa when the modal is closed. Check [this doc](https://www.framer.com/motion/animation/#variants) for more information on how to create custom variants
     */
    animationType?: "fade-down" | "natural" | CustomAnimationVariant;
    /**
     * Animation transition. Check this [doc](https://www.framer.com/motion/animation/##transitions) for more information
     */
    transition?: Transition;
    /**
     * Animation for overlay
     *
     * Check [this doc](https://www.framer.com/motion/animation/#variants) for more information on how to create custom variants
     */
    overlayAnimation?: {
        variants?: CustomAnimationVariant;
        transition?: Transition;
    };
    animationAnchorElement?: HTMLElement | null;
    targetSize?: {
        width?: number;
        height?: number;
    };
}

export declare const MultiStepTabGroup: ForwardRefExoticComponent<MultiStepTabGroupProps & RefAttributes<HTMLDivElement>>;

export declare type MultiStepTabGroupProps = {
    selectedIndex: number;
    onChange?: (index: number) => void;
    colorType?: ColorType;
    className?: string;
    numberOfTabs: number;
    getTabContent: (index: number, selected: boolean) => ReactNode;
    getTabPanelProps?: (index: number) => HTMLAttributes<HTMLDivElement>;
    renderTabPanel: (index: number) => ReactNode;
    contentPreset?: "bubble-step" | null;
    getBubbleContent?: (index: number, selected: boolean) => ReactNode;
    /** Prevent onChange to bubble if the same selected index is clicked again */
    preventSelectIfSelected?: boolean;
};

declare type OmitStrict<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

declare type OnBlur = FocusEventHandler<HTMLButtonElement>;

declare type OnChange = (checked: boolean) => void;

declare type OnCloseTriggerdOn = "close-button-click" | "standard";

declare type OpenOn = Partial<Record<Event_2, boolean>>;

declare type OptionType<D> = D | GroupBase<D>;

export declare const Paginate: ({ className, nextLabelIcon, nextLabelButtonProps, previousLabelIcon, previousLabelButtonProps, nextLabel, previousLabel, pageClassName, colorType, pageLinkClassName, breakClassName, breakLinkClassName, ...reactPaginateProps }: PaginateProps) => JSX_2.Element;

export declare interface PaginateProps extends ReactPaginateProps {
    /** Use nextLabel if you want to override the component completely */
    nextLabelIcon?: IconProps["icon"];
    nextLabelButtonProps?: ButtonProps;
    /** Use previousLabel if you want to override the component completely */
    previousLabelIcon?: IconProps["icon"];
    previousLabelButtonProps?: ButtonProps;
    colorType?: ColorType;
}

declare interface PickerBaseProps<Form extends FieldValues = any> {
    label?: string;
    formValidation?: FormValidationWithController<Form>;
    caption?: ReactNode;
    captionIcon?: IconProps["icon"];
    state?: "normal" | "error";
    calendarLeadingIcon?: IconProps["icon"];
    clearDateIcon?: IconProps["icon"];
    toggleDropdown?: () => void;
    clearValue?: () => void;
    value?: string;
    disabled?: boolean;
    useInput?: boolean;
}

/**
 * TODO: improve this export
 *
 * To close popover manually, add a Popover.Button from @headlessui/react
 * https://headlessui.dev/react/popover#closing-popovers-manually
 *
 * To group with other Popover, wrap the Popover in a Popover.Group from @headlessui/react
 * https://headlessui.dev/react/popover#grouping-related-popovers
 */
export declare function Popover<ContainerAs extends default_2.ElementType = "div", OpenerProps extends object = ButtonProps>({ popoverContainerAs, popoverProps, popoverOpenerProps, popoverPanelProps, popperProps, children, }: PopoverProps<ContainerAs, OpenerProps>): JSX_2.Element;

export declare interface PopoverProps<T extends default_2.ElementType = "div", OpenerProps extends object = ButtonProps> {
    popoverContainerAs?: T;
    popoverProps?: default_2.ComponentProps<T>;
    children: ((open: boolean, close: (focusableElement?: HTMLElement | default_2.MutableRefObject<HTMLElement | null> | undefined) => void) => default_2.ReactNode) | default_2.ReactNode;
    popoverOpenerProps?: (OpenerProps extends ButtonProps ? OmitStrict<OpenerProps, "as"> : OpenerProps) & Parameters<typeof Popover_2.Button>[0];
    popoverPanelProps?: Parameters<typeof Popover_2.Panel>[0];
    popperProps?: Partial<Parameters<typeof Float>[0]>;
}

declare type PossibleDurationType = (typeof possibleDurationTypeList)[number];

declare const possibleDurationTypeList: readonly ["days", "hours", "minutes", "seconds"];

export declare function RadioGroup<Data, Value extends ValueType, FormFields extends FieldValues = any>({ className, itemClassName, itemClassNameGetter, dataList, getValue, radioGroupLabel, defaultSelectedIndex, selectedIndex, disabled, renderOption, onChange, checkOptionDisable, getLabel, getDescription, leftLabel, formValidation, colorType, }: RadioGroupProps<Data, Value, FormFields>): JSX_2.Element;

export declare interface RadioGroupProps<Data = unknown[], Value extends ValueType = any, FormFields extends FieldValues = any> {
    className?: string;
    itemClassName?: string;
    itemClassNameGetter?: (item: Data, index: number) => string;
    dataList: Data[];
    defaultSelectedIndex?: number;
    selectedIndex?: number;
    getValue: (data: Data) => Value;
    checkOptionDisable?: (data: Data, index: number) => boolean | undefined;
    onChange?: (data: Data, index: number) => void;
    disabled?: boolean;
    radioGroupLabel?: ReactNode;
    renderOption?: GetFunction<Data>;
    getLabel?: GetFunction<Data>;
    getDescription?: GetFunction<Data>;
    leftLabel?: boolean;
    formValidation?: FormValidationWithController<FormFields>;
    colorType?: ColorType;
}

declare interface RangeProps {
    values: number[];
    min: number;
    max: number;
    step: number;
    direction: Direction;
    allowOverlap: boolean;
    draggableTrack: boolean;
    disabled: boolean;
    rtl: boolean;
    onChange: (values: number[]) => void;
    onFinalChange?: (values: number[]) => void;
    renderMark?: (params: IRenderMarkParams) => default_2.ReactNode;
    renderThumb: (params: IRenderThumbParams) => default_2.ReactNode;
    renderTrack: (params: IRenderTrackParams) => default_2.ReactNode;
}

declare type ReactDatePickerProps = Parameters<typeof default_3>[0];

/**
 *
 * @param min - The minimum value of the slider.
 * @param max - The maximum value of the slider.
 * @param step - The step size of the slider.
 * @param value {number[]} An array of numbers. It controls the position of thumbs on the track. values.length equals to the number of rendered thumbs.
 * @param onChange {(values: number[]) => void} A callback function that is called when the value of the slider changes.
 * TODO: Support rtl and vertical
 */
export declare const Slider: default_2.ForwardRefExoticComponent<Pick<RangeProps, "max" | "min" | "onChange" | "step"> & {
    className?: string;
    useDefaultMark?: boolean;
    valueList: RangeProps["values"];
    allowOverlap?: boolean;
    direction?: Direction;
    onFinalChange?: RangeProps["onFinalChange"];
    disabled?: boolean;
    draggableTrack?: boolean;
    rtl?: boolean;
    renderMark?: RangeProps["renderMark"];
    renderTrack?: RangeProps["renderTrack"];
    renderThumb?: RangeProps["renderThumb"];
    renderThumbValue?: (value: number) => default_2.ReactNode;
} & default_2.RefAttributes<Range_2>>;

export declare type SliderProps = OmitStrict<RangeProps, "allowOverlap" | "direction" | "onFinalChange" | "disabled" | "draggableTrack" | "rtl" | "renderMark" | "renderTrack" | "renderThumb" | "values"> & {
    className?: string;
    useDefaultMark?: boolean;
    valueList: RangeProps["values"];
    allowOverlap?: boolean;
    direction?: Direction;
    onFinalChange?: RangeProps["onFinalChange"];
    disabled?: boolean;
    draggableTrack?: boolean;
    rtl?: boolean;
    renderMark?: RangeProps["renderMark"];
    renderTrack?: RangeProps["renderTrack"];
    renderThumb?: RangeProps["renderThumb"];
    renderThumbValue?: (value: number) => default_2.ReactNode;
};

export declare const TabGroup: ForwardRefExoticComponent<TabGroupProps & RefAttributes<HTMLDivElement>>;

export declare interface TabGroupProps {
    selectedIndex?: number;
    defaultSelectedIndex?: number;
    onChange?: (index: number) => void;
    tabActiveIndicatorProps?: ComponentProps<"div">;
    tabActiveIndicatorType?: "pill" | "underline" | "custom";
    renderIndicator?: boolean;
    numberOfTabs: number;
    /** Render the entire tab and have total control over accessibility */
    renderWholeTab?: (index: number, selected: boolean) => ReactElement;
    renderTab?: (index: number, selected: boolean) => ReactElement;
    getTabProps?: (index: number, selected: boolean) => ExtractProps<typeof Tab>;
    renderTabPanel: (index: number, selected: boolean) => ReactElement;
    getTabPanelProps?: (index: number, selected: boolean) => ExtractProps<typeof Tab.Panel>;
    tabGroupProps?: ExtractProps<typeof Tab>;
    tabListProps?: ExtractProps<typeof Tab.List>;
    tabPanelsProps?: ExtractProps<typeof Tab.Panel>;
}

export declare const TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface TextAreaProps extends TextareaAutosizeProps {
    borderType?: BorderType;
    caption?: ReactNode;
    captionIcon?: IconProps["icon"];
    state?: "normal" | "error";
    label?: ReactNode;
    hasContent?: boolean;
    debounceParam?: {
        /** in millisecond */
        debounceTime: number;
        flushOnUnmount?: boolean;
    };
    formControl?: Control<any>;
    resize?: React.CSSProperties["resize"];
}

export declare const TimePicker: ForwardRefExoticComponent<DurationPickerProps & RefAttributes<HTMLInputElement>>;

export declare type TimePickerProps = DurationPickerProps;

export declare const Toggle: ForwardRefExoticComponent<ToggleProps<any> & RefAttributes<HTMLButtonElement>>;

export declare interface ToggleProps<FormFields extends FieldValues = any> extends OmitStrict<HTMLProps<HTMLButtonElement>, "label" | "onChange" | "children" | "as" | "ref"> {
    className?: string;
    label?: ReactNode;
    labelLeft?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onBlur?: OnBlur;
    disabled?: boolean;
    onChange?: OnChange;
    formValidation?: FormValidationWithController<FormFields>;
    type?: "switch" | "checkbox";
    colorType?: ColorType;
    checkIcon?: IconProps["icon"];
    containerRef?: ForwardedRef<HTMLDivElement>;
}

export declare const Tooltip: ({ containerId, refElement, openOn, isOpen: _isOpen, defaultOpen, popoverOption, children, stylePreset, className, offset, zIndex, inModal, }: PropsWithChildren<TooltipProps>) => JSX_2.Element;

export declare interface TooltipProps {
    containerId?: string;
    refElement: RefObject<HTMLElement>;
    openOn?: OpenOn;
    isOpen?: boolean;
    defaultOpen?: boolean;
    popoverOption?: Parameters<typeof usePopper>[2];
    stylePreset?: "preset-1" | null;
    className?: string;
    /** https://popper.js.org/docs/v2/modifiers/offset/ */
    offset?: [number, number];
    /** Will be overriden if inModal is set to true */
    zIndex?: number;
    inModal?: boolean;
}

declare type TransitionProp = PropsWithChildren<{
    show: boolean;
    as?: React.ElementType<any>;
    className?: string;
}>;

declare type ValueType = number | string;

export { }
