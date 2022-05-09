import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { TimePickerProps as MUITimePickerProps } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import IMask from "imask";
import { forwardRef, ReactNode, useMemo, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { STANDARD_TIME_FORMAT } from "../../utils/date";
import { OmitStrict } from "../../utils/types";
import { InputProps } from "../Input";
import { MaskedInput } from "../MaskedInput/MaskedInput";
import "./TimePicker.scss";

type ValueType = string | null;

/** @ignore */
export type TimePickerProps = OmitStrict<InputProps, "onChange"> & {
  dateFormat?: string;
} & {
  label?: string;
  caption?: ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";
  calendarLeadingIcon?: [string, string];
  clearDateIcon?: [string, string];
  displayDateFormat?: string;

  timePickerProps?: MUITimePickerProps;
  onChange: (unmaskedValue: string, maskedValue: string) => void;
};

// TODO: finish this later, need to figure out the best way to handle the time format
/** @ignore */
export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      label,
      caption,
      captionIcon,
      state,
      calendarLeadingIcon = ["fas", "clock"],
      clearDateIcon = ["fas", "times"],

      displayDateFormat,
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
      () => (isLg ? DesktopTimePicker : MobileTimePicker),
      [isLg],
    );

    const [value, setValue] = useState<ValueType>(dayjs().toISOString());
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
          label="Basic example"
          value={value}
          onChange={(value, bbb) => {
            console.log("value:", value);
            console.log("bbb:", bbb);
            setValue(dayjs(value as Date).toISOString());
          }}
          open={isOpen}
          onClose={closeDropdown}
          onOpen={openDropdown}
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
              <MaskedInput
                {...params}
                maskOptions={{
                  mask: Date,
                  pattern: dateFormat ?? STANDARD_TIME_FORMAT,
                  format: (date) => {
                    return dayjs(date).format(
                      displayDateFormat ?? STANDARD_TIME_FORMAT,
                    );
                  },
                  blocks: {
                    HH: {
                      mask: IMask.MaskedRange,
                      from: 0,
                      to: 23,
                    },
                    mm: {
                      mask: IMask.MaskedRange,
                      from: 0,
                      to: 59,
                    },
                  },
                }}
                state={error ? "error" : state}
                value={value ?? undefined}
                defaultValue={defaultValue as InputProps["value"]}
                trailingAdornment={value && clearDateIcon}
                trailingAdornmentOnClick={clearValue}
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
            );
          }}
          {...timePickerProps}
        />
      </LocalizationProvider>
    );
  },
);
