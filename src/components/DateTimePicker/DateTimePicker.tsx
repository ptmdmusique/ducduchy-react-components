import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps
} from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import cx from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/vi";
import { forwardRef, ReactNode, useState } from "react";
import { Controller } from "react-hook-form";
import { formatDate } from "../../utils/date";
import { OmitStrict } from "../../utils/types";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";
import { FormValidationWithController } from "../resources/form/types";
import "./DateTimePicker.scss";

type ValueType = string | null;
type OnChange = (newDate: Date) => void;

const localeDateMap = {
  en: "MM/DD/YYYY HH:mm",
  vi: "DD/MM/YYYY HH:mm",
} as const;

export type DateTimePickerProps = OmitStrict<InputProps, "onChange"> & {
  dateFormat?: string;
  label?: string;
  caption?: ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";
  calendarLeadingIcon?: [string, string];
  clearDateIcon?: [string, string];

  locale?: keyof typeof localeDateMap;

  timePickerProps?: MUIDateTimePickerProps;

  onChange?: OnChange;
  formValidation?: FormValidationWithController<any>;
};

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (
    {
      label,
      calendarLeadingIcon = ["fas", "calendar-alt"],
      clearDateIcon = ["fas", "times"],

      disabled,
      dateFormat,
      timePickerProps,

      locale = "en",
      formValidation,
      onChange,
      ...inputProps
    },
    ref,
  ) => {
    const finalFormat = dateFormat ?? localeDateMap[locale];
    const [value, setValue] = useState<ValueType>(
      formatDate(dayjs().toISOString(), finalFormat),
    );

    const [isOpen, setIsOpen] = useState(false);
    const closeDropdown = () => setIsOpen(false);
    const openDropdown = () => {
      if (!disabled) {
        setIsOpen(true);
      }
    };

    const clearValue = () => {
      if (!disabled) {
        setValue(null);
      }
    };

    const renderContent = (formOnChange?: OnChange) => {
      return (
        <LocalizationProvider locale={locale} dateAdapter={AdapterDayjs}>
          <MUIDateTimePicker
            value={value}
            label={label}
            onChange={(newValue) => {
              const dateValue = newValue as Date;

              setValue(formatDate(dateValue, finalFormat));

              formOnChange?.(dateValue);
              onChange?.(dateValue);
            }}
            open={isOpen}
            onClose={closeDropdown}
            onOpen={openDropdown}
            disabled={disabled}
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
                value={value ?? undefined}
                state={error ? "error" : undefined}
                onClick={openDropdown}
                leadingAdornment={calendarLeadingIcon}
                leadingAdornmentOnClick={openDropdown}
                trailingAdornment={value ? clearDateIcon : undefined}
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
              />
            )}
            ampm={false}
            {...timePickerProps}
            PopperProps={{
              className: cx(
                `${COMPONENT_PREFIX}-date-time-picker__popper`,
                timePickerProps?.PaperProps?.className,
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
        defaultValue={dayjs(value, finalFormat).toDate()}
        render={({ field: { onChange } }) => renderContent(onChange)}
      />
    );
  },
);
