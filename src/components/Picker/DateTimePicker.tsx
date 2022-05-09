import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePickerProps as MUIDateTimePickerProps } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import cx from "classnames";
import dayjs from "dayjs";
import { forwardRef, ReactNode, useMemo, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { formatDate, STANDARD_DATE_TIME_FORMAT } from "../../utils/date";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./DateTimePicker.scss";

type ValueType = string | null;

export type DateTimePickerProps = InputProps & {
  dateFormat?: string;
  label?: string;
  caption?: ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";
  calendarLeadingIcon?: [string, string];
  clearDateIcon?: [string, string];

  timePickerProps?: MUIDateTimePickerProps;
};

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (
    {
      label,
      calendarLeadingIcon = ["fas", "clock"],
      clearDateIcon = ["fas", "times"],

      disabled,
      dateFormat,
      timePickerProps,
      ...inputProps
    },
    ref,
  ) => {
    // TODO: add props for this
    const isLg = useMediaQuery("lg");
    const Component = useMemo(
      () => (isLg ? DesktopDateTimePicker : MobileDateTimePicker),
      [isLg],
    );

    const [value, setValue] = useState<ValueType>(
      formatDate(
        dayjs().toISOString(),
        dateFormat ?? STANDARD_DATE_TIME_FORMAT,
      ),
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

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component
          value={value}
          label={label}
          onChange={(value) => {
            setValue(
              formatDate(
                value as Date,
                dateFormat ?? STANDARD_DATE_TIME_FORMAT,
              ),
            );
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
          }) => {
            return (
              <Input
                {...params}
                {...MUIInputProps}
                state={error ? "error" : undefined}
                value={value ?? undefined}
                defaultValue={defaultValue as InputProps["value"]}
                trailingAdornment={value && clearDateIcon}
                trailingAdornmentOnClick={clearValue}
                onClick={openDropdown}
                {...inputProps}
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
              />
            );
          }}
          {...timePickerProps}
        />
      </LocalizationProvider>
    );
  },
);
