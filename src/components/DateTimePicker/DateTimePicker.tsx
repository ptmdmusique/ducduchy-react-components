import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import cx from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/vi";
import { forwardRef, ReactNode, useEffect, useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { formatDate, getDateTimePlaceholder } from "../../utils/date";
import { OmitStrict } from "../../utils/types";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";
import { FormValidationWithController } from "../resources/form/types";
import "./DateTimePicker.scss";

type ValueType = Date | null;
type OnChange = (
  newDateString: ValueType,
  triggeredOn: "user-pick" | "on-accepted" | "on-error" | "on-clear",
) => void;

const localeDateMap = {
  en: "MM/DD/YYYY HH:mm",
  vi: "DD/MM/YYYY HH:mm",
} as const;

export type DateTimePickerProps = OmitStrict<
  InputProps,
  | "onChange"
  | "defaultValue"
  | "value"
  | "min"
  | "max"
  | "minLength"
  | "maxLength"
> & {
  /** https://day.js.org/docs/en/display/format */
  dateFormat?: string;
  label?: string;
  caption?: ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";
  calendarLeadingIcon?: [string, string];
  clearDateIcon?: [string, string];

  locale?: keyof typeof localeDateMap;

  dateTimePickerProps?: OmitStrict<
    Partial<MUIDateTimePickerProps>,
    "minDate" | "maxDate"
  >;

  onChange?: OnChange;
  formValidation?: FormValidationWithController<any>;

  minDate?: Date;
  maxDate?: Date;

  defaultValue?: ValueType;
  value?: ValueType;
};

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (
    {
      label,
      calendarLeadingIcon = ["fas", "calendar-alt"],
      clearDateIcon = ["fas", "times"],

      disabled,
      dateFormat,
      dateTimePickerProps,

      locale = "en",
      formValidation,
      onChange,
      defaultValue,
      value,
      minDate,
      maxDate,
      ...inputProps
    },
    ref,
  ) => {
    const finalFormat = dateFormat ?? localeDateMap[locale];
    const formattedMinDate = useMemo(() => dayjs(minDate), [minDate]);
    const formattedMaxDate = useMemo(() => dayjs(maxDate), [maxDate]);

    const [baseValue, setBaseValue] = useState<ValueType>(
      dayjs(value ?? defaultValue).toDate(),
    );
    const formattedValue = useMemo<string | undefined>(
      () =>
        baseValue
          ? formatDate(baseValue, finalFormat)
          : getDateTimePlaceholder(),
      [baseValue, finalFormat],
    );

    useEffect(() => {
      if (value) {
        setBaseValue(dayjs(value).toDate());
      }
    }, [value]);

    const [isOpen, setIsOpen] = useState(false);
    const closeDropdown = () => setIsOpen(false);
    const openDropdown = () => {
      if (!disabled) {
        setIsOpen(true);
      }
    };

    const clearValue = () => {
      if (!disabled) {
        setBaseValue(null);
        onChange?.(null, "on-clear");
      }
    };

    const renderContent = (formOnChange?: OnChange) => {
      return (
        <LocalizationProvider locale={locale} dateAdapter={AdapterDayjs}>
          <MUIDateTimePicker
            value={baseValue}
            label={label}
            minDate={formattedMinDate}
            maxDate={formattedMaxDate}
            onChange={(newValue) => {
              const dateValue = newValue as ValueType;

              setBaseValue(dateValue);
              formOnChange?.(dateValue, "user-pick");
              onChange?.(dateValue, "user-pick");
            }}
            open={isOpen}
            onClose={closeDropdown}
            onError={(_, curValue) => {
              onChange?.(curValue as ValueType, "on-error");
            }}
            onAccept={(newValue) => {
              onChange?.(newValue as ValueType, "on-accepted");
            }}
            onOpen={openDropdown}
            disabled={disabled}
            showToolbar
            renderInput={({
              size: _1,
              value: _2,
              InputProps: _3,
              fullWidth: _4,
              defaultValue,
              inputRef: MUIInputRef,
              inputProps: MUIInputProps,
              error,
              ...params
            }) => (
              <Input
                {...params}
                state={error ? "error" : undefined}
                onClick={openDropdown}
                leadingAdornment={calendarLeadingIcon}
                leadingAdornmentOnClick={openDropdown}
                trailingAdornment={formattedValue ? clearDateIcon : undefined}
                trailingAdornmentOnClick={clearValue}
                className={cx(
                  `${COMPONENT_PREFIX}-date-time-picker`,
                  inputProps.className,
                )}
                ref={(ele) => {
                  if (ref) {
                    if (typeof ref === "function") {
                      ref(ele);
                    } else {
                      ref.current = ele;
                    }
                  }

                  if (MUIInputRef) {
                    if (typeof MUIInputRef === "function") {
                      MUIInputRef(ele);
                    } else {
                      // @ts-ignore
                      MUIInputRef.current = ele;
                    }
                  }
                }}
                {...MUIInputProps}
                {...inputProps}
                value={formattedValue}
              />
            )}
            ampm={false}
            {...dateTimePickerProps}
            PopperProps={{
              className: cx(
                `${COMPONENT_PREFIX}-date-time-picker__popper`,
                dateTimePickerProps?.PaperProps?.className,
              ),
              popperOptions: {
                placement: "bottom-start",
                modifiers: [{ name: "offset", options: { offset: [0, 5] } }],
              },
            }}
          />
        </LocalizationProvider>
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
        defaultValue={dayjs(value ?? defaultValue).toDate()}
        render={({ field: { onChange } }) => renderContent(onChange)}
      />
    );
  },
);
