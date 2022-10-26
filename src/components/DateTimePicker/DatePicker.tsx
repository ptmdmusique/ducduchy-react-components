import React, { ReactNode, useEffect, useState } from "react";
import { OnChangeDateCallback } from "react-calendar";
import ReactDatePicker, {
  DatePickerProps as ReactDatePickerProps,
} from "react-date-picker";
import {
  formatDate,
  formatDateRange,
  getDatePlaceholder,
} from "../../utils/date";
import { OmitStrict } from "../../utils/types";
import { IconProps } from "../Icon";
import { COMPONENT_PREFIX } from "../resources/common.data";
import { FormValidationWithController } from "../resources/form/types";
import "./DatePicker.scss";
import { PickerBase, PickerBaseProps } from "./PickerBase";

export type DatePickerProps<Form = any> = OmitStrict<
  PickerBaseProps<Form>,
  "value"
> &
  ReactDatePickerProps & {
    label?: string;
    formValidation?: FormValidationWithController<Form>;
    onChange?: (date: Date, event: React.ChangeEvent<HTMLInputElement>) => void;
    caption?: ReactNode;
    captionIcon?: IconProps["icon"];
    state?: "normal" | "error";
    calendarLeadingIcon?: IconProps["icon"];
    clearDateIcon?: IconProps["icon"];
    displayDateFormat?: string;
  };

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
  displayDateFormat,
  ...datePickerProps
}: DatePickerProps<Form>) {
  const [value, setValue] = useState<Date | Date[] | string>(
    // TODO: fix this
    // @ts-ignore
    datePickerProps.value ?? defaultValue ?? new Date(),
  );

  const [dropdownOpen, setDropdownOpen] = useState(isOpen);

  useEffect(() => {
    if (datePickerProps.value) {
      // TODO: fix this
      // @ts-ignore
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

  return (
    <PickerBase
      className={`${COMPONENT_PREFIX}-date-picker`}
      disabled={disabled}
      formValidation={formValidation}
      toggleDropdown={toggleDropdown}
      clearValue={clearValue}
      clearDateIcon={clearDateIcon}
      calendarLeadingIcon={calendarLeadingIcon}
      state={state}
      caption={caption}
      captionIcon={captionIcon}
      label={label}
      value={
        typeof value !== "string"
          ? formatDate(
              Array.isArray(value)
                ? formatDateRange(value, displayDateFormat)
                : value,
              displayDateFormat,
            )
          : value
      }
    >
      {(formOnChange) => {
        const onChangeWrapper: OnChangeDateCallback = (newDate, event) => {
          closeDropdown();

          setValue(newDate);
          formOnChange?.(newDate);
          onChange?.(newDate, event);
        };

        return (
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
            // TODO: fix this
            // @ts-ignore
            value={typeof value !== "string" ? value : undefined}
            onChange={onChangeWrapper}
            disabled={disabled}
          />
        );
      }}
    </PickerBase>
  );
}
