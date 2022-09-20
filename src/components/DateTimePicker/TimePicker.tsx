import cx from "classnames";
import dayjs from "dayjs";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { getIsAMFromDurationInMs } from "../../utils/date";
import { DurationPicker, DurationPickerProps } from "../DurationPicker";
import { COMPONENT_PREFIX } from "../resources/common.data";

const getAmPmPostfix = (isAm: boolean) => (isAm ? " \\am" : " pm");

export type TimePickerProps = DurationPickerProps & {
  onAmPmChange?: (isAm: boolean) => void;
};

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ onAmPmChange, ...props }, ref) => {
    const [isAm, setIsAm] = useState(
      props.value ? getIsAMFromDurationInMs(props.value) : true,
    );

    const localeText = useMemo(
      () => ({ hours: ":", minutes: getAmPmPostfix(isAm) }),
      [isAm],
    );

    useEffect(() => {
      onAmPmChange?.(isAm);
    }, [isAm]);

    return (
      <DurationPicker
        ref={ref}
        separatedBySpace={false}
        {...props}
        className={cx(`${COMPONENT_PREFIX}-time-picker`, props.className)}
        localeTextMap={{ ...localeText, ...props.localeTextMap }}
        maskLocaleTextMap={{
          hours: ":",
          minutes: /([ap][m])/,
          ...props.localeTextMap,
        }}
        usingAmPm
        parseDurationInMsToString={(durationInMs) => {
          const isAM = getIsAMFromDurationInMs(durationInMs);
          const hours = Math.floor(durationInMs / 3600000);
          const actualHours = (isAM ? hours : hours - 12)
            .toString()
            .padStart(2, "0");

          const minutes = Math.floor((durationInMs % 3600000) / 60000)
            .toString()
            .padStart(2, "0");

          return `${actualHours}:${minutes}${getAmPmPostfix(isAM)}`;
        }}
        dropdownItemProps={{
          ...props.dropdownItemProps,
          minDuration: 0,
          maxDuration: 86400000, // 24 hours
          interval: 900000, // 15 minutes
          inclusiveEnd: false,
          formatItem: (duration, durationInMs) => {
            return (
              props.dropdownItemProps?.formatItem?.(duration, durationInMs) ??
              dayjs().startOf("day").add(durationInMs, "ms").format("hh:mm a")
            );
          },
        }}
        onChange={(unmaskedValue, maskedValue, durationInMs) => {
          props.onChange?.(
            unmaskedValue,
            // Strip the " " from the masked value to remove the workaround
            props?.localeTextMap == undefined
              ? maskedValue.trim()
              : maskedValue,
            durationInMs,
          );

          setIsAm(getIsAMFromDurationInMs(durationInMs));
        }}
      />
    );
  },
);
