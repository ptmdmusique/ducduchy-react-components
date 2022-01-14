import { ReactNode } from "react";
import { StatusType } from "../resources/common.data";
import { FormValidationWithController } from "../resources/form/types";
import "./RadioGroup.scss";
declare type ValueType = number | string;
declare type GetFunction<D> = (props: {
    data: D;
    index: number;
    checked: boolean;
    active: boolean;
    disabled: boolean;
}) => ReactNode;
export interface RadioGroupProps<Data = unknown[], Value extends ValueType = any, Form = any> {
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
    formValidation?: FormValidationWithController<Form>;
    status?: StatusType;
}
export declare function RadioGroup<Data, Value extends ValueType, Form>({ className, itemClassName, itemClassNameGetter, dataList, getValue, radioGroupLabel, defaultSelectedIndex, selectedIndex, disabled, renderOption, onChange, checkOptionDisable, getLabel, getDescription, leftLabel, formValidation, status, }: RadioGroupProps<Data, Value, Form>): JSX.Element;
export {};
