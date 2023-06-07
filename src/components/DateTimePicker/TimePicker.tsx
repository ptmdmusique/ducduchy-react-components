import dayjs from "dayjs";
import { forwardRef } from "react";
import { DurationPicker, DurationPickerProps } from "../DurationPicker";
import cx from "classnames";
import { COMPONENT_PREFIX } from "../resources/common.data";

/** The " " is to used so that the DurationPicker can regex the duration correctly */
const localeText = { hours: ":", minutes: " " } as const;

export type TimePickerProps = DurationPickerProps;

export const TimePicker = forwardRef<HTMLInputElement, DurationPickerProps>(
  (props, ref) => {
    return (
      <DurationPicker
        ref={ref}
        separatedBySpace={false}
        {...props}
        className={cx(`${COMPONENT_PREFIX}-time-picker`, props.className)}
        localeText={{ ...localeText, ...props.localeText }}
        dropdownItemProps={{
          ...props.dropdownItemProps,
          minDuration: 0,
          maxDuration: 86400000,
          interval: 900000,
          inclusiveEnd: false,
          formatItem: (_, durationInMs) => {
            return dayjs()
              .startOf("day")
              .add(durationInMs, "ms")
              .format("hh:mm a");
          },
        }}
        onChange={(unmaskedValue, maskedValue, durationInMs) => {
          props.onChange?.(
            unmaskedValue,
            // Strip the " " from the masked value to remove the workaround
            props?.localeText === undefined ? maskedValue.trim() : maskedValue,
            durationInMs,
          );
        }}
      />
    );
  },
);
