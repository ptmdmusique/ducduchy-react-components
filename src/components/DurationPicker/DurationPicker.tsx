import { Popover as LibPopover } from "@headlessui/react";
import cx from "classnames";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { AnyMaskedOptions, MaskedRange } from "imask";
import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  DEFAULT_DURATION_DISABLE,
  DEFAULT_DURATION_LOCALE_TEXT,
  Duration,
  durationToString,
  getDurationFromMs,
  getDurationInMsFromString,
  PossibleDurationType,
  possibleDurationTypeList,
} from "../../utils/date";
import { OmitStrict } from "../../utils/types";
import { Button } from "../Button";
import {
  MaskedInput,
  MaskedInputHandle,
  MaskedInputProps,
} from "../MaskedInput";
import { Popover } from "../Popover";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./DurationPicker.scss";
dayjs.extend(duration);

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

  separatedBySpace?: boolean;

  dropdownItemProps?: {
    minDuration?: number;
    maxDuration?: number;
    interval?: number;
    /** Whether to include last item if equal to maxDuration or not */
    inclusiveEnd?: boolean;
    formatItem?: (duration: Duration, durationInMs: number) => ReactNode;
    isItemValid?: (durationInMs: number) => boolean;
  };
}

// TODO: support clear value
export const DurationPicker = forwardRef<HTMLInputElement, DurationPickerProps>(
  (
    {
      localeText,
      doDisabled,
      onChange,
      value: _value,
      separatedBySpace = true,
      defaultValue: _defaultValue,
      dropdownItemProps,
      ...maskedInputProps
    },
    ref,
  ) => {
    const getFinalValueString = useCallback(
      (newDurationInMs: number | undefined) => {
        let newValue: string | undefined = undefined;

        if (newDurationInMs !== undefined) {
          const newDuration = getDurationFromMs(
            newDurationInMs,
            doDisabled ?? DEFAULT_DURATION_DISABLE,
          );

          newValue = durationToString(newDuration, localeText, {
            doDisabled: doDisabled ?? DEFAULT_DURATION_DISABLE,
            doPrepend0: true,
            separatedBySpace,
          });
        }

        return newValue;
      },
      [doDisabled, localeText],
    );

    const inputRef = useRef<HTMLInputElement>(null);
    const inputMaskHandleRef = useRef<MaskedInputHandle>(null);
    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(inputRef.current);
        } else {
          ref.current = inputRef.current;
        }
      }
    }, [inputRef.current]);

    const value = useMemo(
      () => (_value == undefined ? undefined : getFinalValueString(_value)),
      [_value],
    );

    const defaultValue = useMemo(
      () =>
        _defaultValue == undefined
          ? undefined
          : getFinalValueString(_defaultValue),
      [_defaultValue],
    );

    const getIfDisabled = (type: PossibleDurationType) => {
      if (doDisabled) {
        return doDisabled[type];
      }

      return DEFAULT_DURATION_DISABLE[type];
    };

    const getLocaleText = useCallback(
      (type: PossibleDurationType) =>
        localeText?.[type] ?? DEFAULT_DURATION_LOCALE_TEXT[type],
      [localeText],
    );
    const { mask, placeholder } = useMemo(() => {
      const maskMap: Partial<Record<`${MaskedType}{${string}}`, boolean>> = {};
      let placeholder = "";
      possibleDurationTypeList.forEach((type) => {
        const typeDisabled = getIfDisabled(type);
        const localeText = getLocaleText(type);
        maskMap[`dd--${type}{${localeText}}`] = !typeDisabled;
        if (!typeDisabled) {
          placeholder += `00${localeText} `;
        }
      });

      const maskString = Object.keys(maskMap)
        .filter((key) => maskMap[key as any] === true)
        .join(separatedBySpace ? " " : "");

      return { mask: maskString, placeholder };
    }, [localeText, doDisabled]);

    const dropDownItemList = useMemo(() => {
      const {
        minDuration = 0,
        maxDuration = 8.64e7, // 1 day
        interval = 900000, // 15 minutes
        formatItem,
        inclusiveEnd = true,
        isItemValid,
      } = dropdownItemProps ?? {};
      const curValueInMs = value
        ? getDurationInMsFromString(value, localeText, doDisabled)
        : null;

      const durationInMsList: number[] = [];
      let durationInMs = minDuration;
      while (
        inclusiveEnd ? durationInMs <= maxDuration : durationInMs < maxDuration
      ) {
        if (isItemValid?.(durationInMs) ?? true) {
          durationInMsList.push(durationInMs);
        }

        durationInMs += interval;
      }

      const bubbleNewDuration = (durationInMs: number) => {
        const newDurationString = getFinalValueString(durationInMs);
        inputMaskHandleRef.current?.setValue(newDurationString!);
      };

      return durationInMsList.map((durationInMs, index) => (
        <Button
          className={`${COMPONENT_PREFIX}-duration-item`}
          borderType="plain"
          key={index}
          ref={(ref) => {
            if (curValueInMs === durationInMs) {
              ref?.focus();
            }
          }}
          onFocus={(event) => {
            event.target.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
            bubbleNewDuration(durationInMs);
          }}
        >
          {formatItem?.(getDurationFromMs(durationInMs), durationInMs) ??
            getFinalValueString(durationInMs)}
        </Button>
      ));
    }, [dropdownItemProps, doDisabled, localeText, getFinalValueString, value]);

    const maskOptions = useMemo(
      () => ({
        ...maskedInputProps.maskOptions,
        mask,
        lazy: false,
        blocks: DEFAULT_BLOCKS,
        eager: true,
        autofix: true,
        overwrite: true,
      }),
      [maskedInputProps.maskOptions, mask],
    );

    // TODO: remove this LibPopover once the focus via Tab in Popover is fixed
    return (
      <LibPopover.Group>
        <Popover<"div", MaskedInputProps>
          popoverProps={{ className: `${COMPONENT_PREFIX}-duration-picker` }}
          popoverOpenerProps={{
            as: MaskedInput,
            ...maskedInputProps,
            ref: inputRef,
            handlerRef: inputMaskHandleRef,
            value,
            defaultValue,
            className: cx(
              `${COMPONENT_PREFIX}-duration-picker__input`,
              maskedInputProps.className,
            ),
            placeholder: placeholder,
            // @ts-ignore
            maskOptions,
            onChange: (unmaskedValue, maskedValue) => {
              const durationInMs = getDurationInMsFromString(
                maskedValue,
                localeText,
                doDisabled,
              );
              onChange?.(unmaskedValue, maskedValue, durationInMs);
            },
          }}
          popoverPanelProps={{
            className: `${COMPONENT_PREFIX}-duration-picker__panel`,
          }}
        >
          {dropDownItemList}
        </Popover>
      </LibPopover.Group>
    );
  },
);
