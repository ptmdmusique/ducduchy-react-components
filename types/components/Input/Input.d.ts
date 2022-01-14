import React, { InputHTMLAttributes, ReactNode } from "react";
import { FormAdornment } from "../resources/form/types";
import "./Input.scss";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    borderType?: "fill" | "outline" | "plain";
    caption?: ReactNode;
    captionIcon?: [string, string];
    state?: "normal" | "error";
    label?: string;
    leadingAdornment?: FormAdornment;
    leadingAdornmentOnClick?: () => void;
    trailingAdornment?: FormAdornment;
    traillingAdornmentOnClick?: () => void;
    debounceParam?: {
        /** in millisecond */
        debounceTime: number;
        flushOnUnmount?: boolean;
    };
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
