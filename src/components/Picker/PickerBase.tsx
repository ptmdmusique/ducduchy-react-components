import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import { Input } from "../Input";
import { FormValidationWithController } from "../resources/form/types";
import "./DatePicker.scss";

type OnChange = (newDate: Date) => void;
export interface PickerBaseProps<Form = any> {
  label?: string;
  formValidation?: FormValidationWithController<Form>;
  caption?: ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";
  calendarLeadingIcon?: [string, string];
  clearDateIcon?: [string, string];

  toggleDropdown?: () => void;
  clearValue?: () => void;
  value?: string;

  disabled?: boolean;
}

export function PickerBase<Form>({
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
}: PickerBaseProps<Form> & {
  children: (formOnChange?: OnChange) => React.ReactNode;
  className: string;
}) {
  const renderContent = (formOnChange?: OnChange) => {
    return (
      <div className={className}>
        {children(formOnChange)}

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
