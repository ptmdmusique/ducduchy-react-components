import { FocusEventHandler, ReactNode } from "react";
import { Control, FieldPath, RegisterOptions } from "react-hook-form";
export declare type OnChange = (checked: boolean) => void;
export declare type OnBlur = FocusEventHandler<HTMLButtonElement>;
export interface FormValidationWithController<T> {
    control: Control<T>;
    name: FieldPath<T>;
    rules?: RegisterOptions;
}
export declare type FormAdornment = ReactNode | [string, string];
