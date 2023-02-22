import React, { ReactNode, useEffect, useState } from "react";
import Calendar, { OnChangeDateCallback } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReactDatePicker, {
  DatePickerProps as ReactDatePickerProps,
} from "react-date-picker";
import { FieldValues } from "react-hook-form";
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

export type DatePickerProps<Form extends FieldValues = any> = OmitStrict<
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

    /* Display the picker inline. Always shown */
    inline?: boolean;
  };

export function DatePicker<Form extends FieldValues>({
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
  inline,
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

  const CalendarComponent = inline ? Calendar : ReactDatePicker;

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
      useInput={!inline}
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
          <CalendarComponent
            {...datePickerProps}
            onCalendarOpen={() => {
              if (disabled) {
                return;
              }

              datePickerProps.onCalendarOpen?.();
              openDropdown();
            }}
            onCalendarClose={() => {
              if (inline) {
                return;
              }

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
