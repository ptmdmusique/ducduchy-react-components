import React, { ReactNode, useEffect, useState } from "react";
import { OnChangeDateCallback } from "react-calendar";
import ReactDatePicker, {
  DatePickerProps as ReactDatePickerProps,
} from "react-date-picker";
import { Controller } from "react-hook-form";
import {
  formatDate,
  formatDateRange,
  getDatePlaceholder,
} from "../../utils/date";
import { Input } from "../Input";
import { FormValidationWithController } from "../resources/form/types";
import "./DatePicker.scss";

type OnChange = (newDate: Date) => void;
export interface DatePickerProps<Form = any> extends ReactDatePickerProps {
  label?: string;
  formValidation?: FormValidationWithController<Form>;
  onChange?: (date: Date, event: React.ChangeEvent<HTMLInputElement>) => void;
  caption?: ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";
  calendarLeadingIcon?: [string, string];
  clearDateIcon?: [string, string];
}

export function DatePicker<Form>({
  label,
  formValidation,
  onChange,
  defaultValue,
  isOpen,
  disabled,
  caption,
  captionIcon,
  state,
  calendarLeadingIcon = ["fas", "calendar-alt"],
  clearDateIcon = ["fas", "times"],
  ...datePickerProps
}: DatePickerProps<Form>) {
  const [value, setValue] = useState<Date | Date[] | string>(
    datePickerProps.value ?? defaultValue ?? new Date(),
  );

  const [dropdownOpen, setDropdownOpen] = useState(isOpen);

  useEffect(() => {
    if (datePickerProps.value) {
      setValue(datePickerProps.value);
    }
  }, [datePickerProps.value]);

  const openDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => setDropdownOpen(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const clearValue = () => {
    if (!disabled) {
      setValue(getDatePlaceholder());
    }
  };

  // TODO: Link i18n

  const renderContent = (formOnChange?: OnChange) => {
    const onChangeWrapper: OnChangeDateCallback = (newDate, event) => {
      closeDropdown();

      setValue(newDate);
      formOnChange?.(newDate);
      onChange?.(newDate, event);
    };

    return (
      <div className="form-date-picker">
        <ReactDatePicker
          {...datePickerProps}
          onCalendarOpen={() => {
            if (disabled) {
              return;
            }

            datePickerProps.onCalendarOpen?.();
            openDropdown();
          }}
          onCalendarClose={() => {
            datePickerProps.onCalendarClose?.();
            closeDropdown();
          }}
          isOpen={dropdownOpen}
          value={typeof value !== "string" ? value : undefined}
          onChange={onChangeWrapper}
          disabled={disabled}
        />

        <Input
          label={label}
          onClick={toggleDropdown}
          value={
            typeof value !== "string"
              ? formatDate(
                  Array.isArray(value) ? formatDateRange(value) : value,
                )
              : value
          }
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
