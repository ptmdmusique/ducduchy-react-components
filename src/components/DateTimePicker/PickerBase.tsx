import React, { ReactNode } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { IconProps } from "../Icon";
import { Input } from "../Input";
import { FormValidationWithController } from "../resources/form/types";
import "./DatePicker.scss";

type OnChange = (newDate: Date) => void;
export interface PickerBaseProps<Form extends FieldValues = any> {
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

export function PickerBase<Form extends FieldValues>({
  label,
  formValidation,
  caption,
  captionIcon,
  state,
  calendarLeadingIcon = ["fas", "calendar-alt"],
  clearDateIcon = ["fas", "times"],
  clearValue,
  value,
  toggleDropdown,
  children,
  disabled,
  className,
  useInput = true,
}: PickerBaseProps<Form> & {
  children: (formOnChange?: OnChange) => React.ReactNode;
  className: string;
}) {
  const renderContent = (formOnChange?: OnChange) => {
    return (
      <div className={className}>
        {children(formOnChange)}

        {useInput && (
          <Input
            label={label}
            onClick={toggleDropdown}
            value={value}
            trailingAdornment={clearDateIcon}
            trailingAdornmentOnClick={clearValue}
            leadingAdornment={calendarLeadingIcon}
            disabled={disabled}
            readOnly={disabled}
            state={state}
            caption={caption}
            captionIcon={captionIcon}
          />
        )}
      </div>
    );
  };

  if (!formValidation) {
    return renderContent();
  }

  const { control, name, rules } = formValidation;
  // TODO: Figure out this ignore
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      // @ts-ignore
      defaultValue={value}
      render={({ field: { onChange } }) => renderContent(onChange)}
    />
  );
}
