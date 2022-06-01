import cx from "classnames";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { AnyMaskedOptions, MaskedRange } from "imask";
import { useMemo } from "react";
import {
  DEFAULT_DURATION_PREFIX,
  durationToString,
  getDurationFromMs,
  PossibleDurationType,
  possibleDurationTypeList,
} from "../../utils/date";
import { OmitStrict } from "../../utils/types";
import { MaskedInput, MaskedInputProps } from "../MaskedInput";
import { COMPONENT_PREFIX } from "../resources/common.data";
dayjs.extend(duration);

const DEFAULT_DISABLE: Record<PossibleDurationType, boolean> = {
  days: true,
  hours: false,
  minutes: false,
  seconds: true,
};

type MaskedType = `dd--${PossibleDurationType}`;
const DEFAULT_BLOCKS: Record<MaskedType, AnyMaskedOptions> = {
  "dd--days": {
    mask: MaskedRange,
    placeholderChar: "0",
    from: 0,
    to: 99,
    maxLength: 2,
  },
  "dd--hours": {
    mask: MaskedRange,
    placeholderChar: "0",
    from: 0,
    to: 99,
    maxLength: 2,
  },
  "dd--minutes": {
    mask: MaskedRange,
    placeholderChar: "0",
    from: 0,
    to: 99,
    maxLength: 2,
  },
  "dd--seconds": {
    mask: MaskedRange,
    placeholderChar: "0",
    from: 0,
    to: 99,
    maxLength: 2,
  },
};

export const getMsFromDurationType = (
  durationType: PossibleDurationType,
  durationValue: number,
) => dayjs.duration({ [durationType]: durationValue }).asMilliseconds();

/** // TODO: fix controlled form  */
export interface DurationPickerProps
  extends Partial<
    OmitStrict<MaskedInputProps, "onChange" | "value" | "defaultValue">
  > {
  localeText?: {
    [key in PossibleDurationType]?: string;
  };
  /** Do we NOT use day/hour/minute/second? */
  doDisabled?: {
    [key in PossibleDurationType]?: boolean;
  };

  /** Use 3rd parameter to get duration in milliseconds */
  onChange?: (
    unmaskedValue: string,
    maskedValue: string,
    durationInMs: number,
  ) => void;

  value?: number;
  defaultValue?: number;
}

export const DurationPicker = ({
  localeText,
  doDisabled,
  onChange,
  value: _value,
  defaultValue: _defaultValue,
  ...maskedInputProps
}: DurationPickerProps) => {
  const value = useMemo(
    () =>
      _value == undefined
        ? undefined
        : durationToString(getDurationFromMs(_value, doDisabled), localeText),
    [_value],
  );

  const defaultValue = useMemo(
    () =>
      _defaultValue == undefined
        ? undefined
        : durationToString(
            getDurationFromMs(_defaultValue, doDisabled),
            localeText,
          ),
    [_defaultValue],
  );

  const getIfDisabled = (type: PossibleDurationType) => {
    if (doDisabled) {
      return doDisabled[type];
    }
    return DEFAULT_DISABLE[type];
  };

  const getLocaleText = (type: PossibleDurationType) =>
    localeText?.[type] ?? DEFAULT_DURATION_PREFIX[type];

  const { mask, placeholder } = useMemo(() => {
    const maskMap: Partial<Record<`${MaskedType}${string}`, boolean>> = {};
    let placeholder = "";
    possibleDurationTypeList.forEach((type) => {
      const typeDisabled = getIfDisabled(type);
      const localeText = getLocaleText(type);
      maskMap[`dd--${type}${localeText}`] = !typeDisabled;
      if (!typeDisabled) {
        placeholder += `00${localeText} `;
      }
    });

    return { mask: cx(maskMap), placeholder };
  }, [localeText, doDisabled]);

  return (
    <MaskedInput
      {...maskedInputProps}
      defaultValue={defaultValue}
      value={value}
      className={cx(
        `${COMPONENT_PREFIX}-duration-picker`,
        maskedInputProps.className,
      )}
      placeholder={placeholder}
      // @ts-ignore
      maskOptions={{
        ...maskedInputProps.maskOptions,
        mask,
        lazy: false,
        blocks: DEFAULT_BLOCKS,
        eager: true,
        autofix: true,
        overwrite: true,
      }}
      onChange={(unmaskedValue, maskedValue) => {
        const mapToCheck = localeText ?? DEFAULT_DURATION_PREFIX;
        const durationInMs = maskedValue.split(" ").reduce((acc, curr) => {
          const curLocaleText = curr.substring(2);
          const type = possibleDurationTypeList.find(
            (type) => mapToCheck[type] === curLocaleText,
          )!;

          if (getIfDisabled(type)) {
            return acc;
          }

          const duration = parseInt(curr.replaceAll("_", ""), 10);
          return (
            acc + (isNaN(duration) ? 0 : getMsFromDurationType(type, duration))
          );
        }, 0);

        onChange?.(unmaskedValue, maskedValue, durationInMs);
      }}
    />
  );
};
