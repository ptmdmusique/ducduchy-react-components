import { FocusEventHandler, ReactNode } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions
} from "react-hook-form";

export type OnChange = (checked: boolean) => void;
export type OnBlur = FocusEventHandler<HTMLButtonElement>;

export interface FormValidationWithController<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions;
}

export type FormAdornment = ReactNode | [string, string];
