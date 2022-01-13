import { FocusEventHandler, ReactNode } from "react";

export type OnChange = (checked: boolean) => void;
export type OnBlur = FocusEventHandler<HTMLButtonElement>;

export type FormAdornment = ReactNode | [string, string];
