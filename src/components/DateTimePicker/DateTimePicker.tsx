// @ts-nocheck
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import cx from "classnames";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/vi";
import {
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Controller } from "react-hook-form";
import { useClickAway } from "react-use";
import { formatDate, getDateTimePlaceholder } from "../../utils/date";
import { OmitStrict } from "../../utils/types";
import { IconProps } from "../Icon";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";
import { FormValidationWithController } from "../resources/form/types";
import "./DateTimePicker.scss";

type DateValueType = Dayjs | null;
type OnChange = (
  newDateString: DateValueType,
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
  captionIcon?: IconProps["icon"];
  state?: "normal" | "error";
  calendarLeadingIcon?: IconProps["icon"];
  clearDateIcon?: IconProps["icon"];

  closeOnClickAway?: boolean;

  locale?: keyof typeof localeDateMap;

  dateTimePickerProps?: OmitStrict<
    Partial<MUIDateTimePickerProps<Date, Date>>,
    "minDate" | "maxDate"
  >;

  onChange?: OnChange;
  formValidation?: FormValidationWithController<any>;

  minDate?: Date;
  maxDate?: Date;

  defaultValue?: DateValueType;
  value?: DateValueType;
};

export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (
    {
      label,
      calendarLeadingIcon = ["fas", "calendar-alt"],
      clearDateIcon = ["fas", "times"],
      closeOnClickAway = true,

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
    const formattedMinDate = useMemo(
      () => (minDate ? dayjs(minDate) : undefined),
      [minDate],
    );
    const formattedMaxDate = useMemo(
      () => (maxDate ? dayjs(maxDate) : undefined),
      [maxDate],
    );

    const [baseValue, setBaseValue] = useState<DateValueType>(
      dayjs(value ?? defaultValue),
    );
    const formattedValue = useMemo<string | undefined>(
      () =>
        baseValue
          ? formatDate(baseValue.toDate(), finalFormat)
          : getDateTimePlaceholder(),
      [baseValue, finalFormat],
    );

    useEffect(() => {
      if (value !== undefined) {
        setBaseValue(value ? dayjs(value) : null);
      }
    }, [value]);

    const [isOpen, setIsOpen] = useState(false);
    const closeDropdown = () => setIsOpen(false);
    const openDropdown = () => {
      if (!disabled) {
        setIsOpen(true);
      }
    };

    const pickerRef = useRef<HTMLDivElement | null>(null);
    useClickAway(pickerRef, () => {
      closeOnClickAway && closeDropdown();
    });

    const renderContent = (formOnChange?: OnChange) => {
      const clearValue = () => {
        if (!disabled) {
          setBaseValue(null);
          onChange?.(null, "on-clear");
          formOnChange?.(null, "user-pick");
        }
      };

      return (
        <LocalizationProvider locale={locale} dateAdapter={AdapterDayjs}>
          <MUIDateTimePicker
            value={baseValue}
            label={label}
            minDate={formattedMinDate?.toDate()}
            maxDate={formattedMaxDate?.toDate()}
            onChange={(newValue) => {
              // const dateValue = newValue ? (newValue as Dayjs).toDate() : null;

              setBaseValue(newValue);
              formOnChange?.(newValue, "user-pick");
              onChange?.(newValue, "user-pick");
            }}
            open={isOpen}
            onClose={closeDropdown}
            onError={(_, curValue) => {
              console.log("curValue:", curValue);
              // const dateValue = curValue ? (curValue as Dayjs).toDate() : null;
              onChange?.(curValue, "on-error");
            }}
            onAccept={(newValue) => {
              // const dateValue = newValue ? (newValue as Dayjs).toDate() : null;
              formOnChange?.(newValue, "on-accepted");
              onChange?.(newValue, "on-accepted");
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
                onClick={() => {
                  isOpen ? closeDropdown() : openDropdown();
                }}
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
            // {...dateTimePickerProps}
            PopperProps={{
              className: cx(
                `${COMPONENT_PREFIX}-date-time-picker__popper`,
                dateTimePickerProps?.PaperProps?.className,
              ),
              popperOptions: {
                placement: "bottom-start",
                modifiers: [{ name: "offset", options: { offset: [0, 5] } }],
              },
              ref: pickerRef,
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
