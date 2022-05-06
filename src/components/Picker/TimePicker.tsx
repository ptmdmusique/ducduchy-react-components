import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  TimePicker as MUITimePicker,
  TimePickerProps as MUITimePickerProps
} from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useState } from "react";
import { STANDARD_TIME_FORMAT } from "../../utils/date";
import { Input, InputProps } from "../Input";
import { PickerBaseProps } from "./PickerBase";
import "./TimePicker.scss";

export type TimePickerProps<Form = any> = PickerBaseProps<Form> &
  MUITimePickerProps & {
    dateFormat?: string;
  };
//  & {
//   label?: string;
//   formValidation?: FormValidationWithController<Form>;
//   onChange?: (date: Date) => void;
//   caption?: ReactNode;
//   captionIcon?: [string, string];
//   state?: "normal" | "error";
//   calendarLeadingIcon?: [string, string];
//   clearDateIcon?: [string, string];
//   displayDateFormat?: string;
// };

export function TimePicker<Form>({
  // label,
  // formValidation,
  // onChange,
  // isOpen,
  // disabled,
  // caption,
  // captionIcon,
  // state,
  // calendarLeadingIcon = ["fas", "clock"],
  // clearDateIcon = ["fas", "times"],
  // displayDateFormat,
  dateFormat,
  ...timePickerProps
}: TimePickerProps<Form>) {
  const [value, setValue] = useState<Date | null>(new Date());

  // const [dropdownOpen, setDropdownOpen] = useState(isOpen);

  // useEffect(() => {
  //   if (timePickerProps.value) {
  //     setValue(timePickerProps.value);
  //   }
  // }, [timePickerProps.value]);

  // const openDropdown = () => setDropdownOpen(true);
  // const closeDropdown = () => setDropdownOpen(false);
  // const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  // const clearValue = () => {
  //   if (!disabled) {
  //     setValue(getDatePlaceholder());
  //   }
  // };

  // return (
  //   <PickerBase
  //     className="form-time-picker"
  //     disabled={disabled}
  //     formValidation={formValidation}
  //     toggleDropdown={toggleDropdown}
  //     clearValue={clearValue}
  //     clearDateIcon={clearDateIcon}
  //     calendarLeadingIcon={calendarLeadingIcon}
  //     state={state}
  //     caption={caption}
  //     captionIcon={captionIcon}
  //     label={label}
  //     value={
  //       typeof value !== "string"
  //         ? formatDate(value, displayDateFormat ?? STANDARD_Time_FORMAT)
  //         : value
  //     }
  //   >
  //     {(formOnChange) => {
  //       const onChangeWrapper = (newTime: TimePickerValue) => {
  //         closeDropdown();

  //         setValue(newTime);
  //         formOnChange?.(new Date(newTime));
  //         onChange?.(newTime);
  //       };

  //       return (
  //         <ReactTimePicker
  //           {...timePickerProps}
  //           onClockOpen={() => {
  //             if (disabled) {
  //               return;
  //             }

  //             timePickerProps.onClockOpen?.();
  //             openDropdown();
  //           }}
  //           onClockClose={() => {
  //             timePickerProps.onClockClose?.();
  //             closeDropdown();
  //           }}
  //           isOpen={dropdownOpen}
  //           value={value}
  //           onChange={onChangeWrapper}
  //           disabled={disabled}
  //         />
  //       );
  //     }}
  //   </PickerBase>
  // );
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUITimePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        open={true}
        renderInput={({
          size: _1,
          ref: MUIRef,
          value: _3,
          defaultValue,
          ...params
        }) => {
          return (
            <Input
              {...params}
              value={dayjs(value).format(dateFormat ?? STANDARD_TIME_FORMAT)}
              defaultValue={defaultValue as InputProps["value"]}
              ref={(ele) => {
                if (MUIRef) {
                  if (typeof MUIRef === "function") {
                    MUIRef(ele);
                  } else {
                    // @ts-ignore
                    MUIRef.current = ele;
                  }
                }
              }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}
