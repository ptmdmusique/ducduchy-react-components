import { PopoverGroup } from "@headlessui/react";
import cx from "classnames";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { AnyMaskedOptions, MaskedRange } from "imask";
import {
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
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

// interface DropdownItemProps {
//   disabled: boolean;
//   active: boolean;
//   index: number;

//   durationInMs: number;
//   internalValue: number | undefined;
//   durationInMsList: number[];

//   onNewDuration: (durationInMs: number) => void;
//   formatItem?: (duration: Duration, durationInMs: number) => ReactNode;
//   getFinalValueString: (durationInMs: number | undefined) => string | undefined;
// }
// const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
//   (
//     {
//       active,
//       disabled,
//       index,
//       durationInMs,
//       internalValue,
//       durationInMsList,
//       onNewDuration,
//       formatItem,
//       getFinalValueString,
//     },
//     forwardRefRef,
//   ) => {
//     const ref = useRef<HTMLButtonElement>(null);
//     const scrollIntoView = () => {
//       const cta = ref.current;
//       if (cta) {
//         setTimeout(() => {
//           // cta.focus();
//           // cta.scrollIntoView({
//           //   behavior: "smooth",
//           //   block: "center",
//           // });
//         }, 10);
//       }
//     };

//     useLayoutEffect(() => {
//       if (ref.current) {
//         if (internalValue === durationInMs) {
//           scrollIntoView();
//         } else if (internalValue !== undefined) {
//           if (
//             // Try to move to the closest item
//             (index === 0 && internalValue < durationInMs) ||
//             (index === durationInMsList.length - 1 &&
//               internalValue > durationInMs) ||
//             (internalValue > durationInMs &&
//               internalValue < durationInMsList[index + 1])
//           ) {
//             scrollIntoView();
//           }
//         }
//       }

//       if (forwardRefRef) {
//         if (typeof forwardRefRef === "function") {
//           forwardRefRef(ref.current);
//         } else {
//           forwardRefRef.current = ref.current;
//         }
//       }
//     }, [ref.current]);

//     useEffect(() => {
//       if (active) {
//         console.log("active:", index, active);
//         scrollIntoView();
//         onNewDuration(durationInMs);
//       }
//     }, [active]);

//     return (
//       <Button
//         className={cx(`${COMPONENT_PREFIX}-duration-item`)}
//         borderType="plain"
//         disabled={disabled}
//         useFocusStyle={active}
//         ref={ref}
//         onClick={() => {
//           scrollIntoView();
//           onNewDuration(durationInMs);
//         }}
//       >
//         {formatItem?.(getDurationFromMs(durationInMs), durationInMs) ??
//           getFinalValueString(durationInMs)}
//       </Button>
//     );
//   },
// );

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

  /** Should we close the popover on item click */
  closeOnClick?: boolean;
  /** Should we close the popover on item focus */
  closeOnFocus?: boolean;

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

  ref?: Ref<HTMLInputElement>;
}

// TODO: support clear value
// TODO: fix bug where cursor move to the end whenever editing and there is a state changed after (check TemplateWithForm for example)
export const DurationPicker = ({
  localeText,
  doDisabled,
  onChange,
  value: _value,
  separatedBySpace = true,
  defaultValue: _defaultValue,
  dropdownItemProps,
  closeOnClick = true,
  closeOnFocus,
  ref,
  ...maskedInputProps
}: DurationPickerProps) => {
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
    [doDisabled, localeText, separatedBySpace],
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputMaskHandleRef = useRef<MaskedInputHandle>(null);
  useEffect(() => {
    if (ref) {
      if (typeof ref === "function") {
        ref(inputRef.current);
      } else {
        ref.current = inputRef.current;
      }
    }
  }, [ref]);

  // Split value from defaultValue to avoid total controlled form
  const value = useMemo(
    () => (_value == null ? undefined : getFinalValueString(_value)),
    [_value, getFinalValueString],
  );

  const defaultValue = useMemo(
    () =>
      _defaultValue == null ? undefined : getFinalValueString(_defaultValue),
    [_defaultValue, getFinalValueString],
  );

  // Used to help with dropdown item focus
  const [internalValue, setInternalValue] = useState(_value ?? _defaultValue);
  useEffect(() => {
    setInternalValue(_value ?? _defaultValue);
  }, [_value, _defaultValue]);

  const getIfDisabled = useCallback(
    (type: PossibleDurationType) => {
      if (doDisabled) {
        return doDisabled[type];
      }

      return DEFAULT_DURATION_DISABLE[type];
    },
    [doDisabled],
  );

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
  }, [separatedBySpace, getIfDisabled, getLocaleText]);

  const durationInMsList = useMemo(() => {
    const minDuration = dropdownItemProps?.minDuration ?? 0;
    const maxDuration = dropdownItemProps?.maxDuration ?? 8.64e7; // 1 day
    const interval = dropdownItemProps?.interval ?? 900000; // 15 minutes
    const inclusiveEnd = dropdownItemProps?.inclusiveEnd ?? true;
    const isItemValid = dropdownItemProps?.isItemValid;

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

    return durationInMsList;
  }, [
    dropdownItemProps?.minDuration,
    dropdownItemProps?.maxDuration,
    dropdownItemProps?.interval,
    dropdownItemProps?.inclusiveEnd,
    dropdownItemProps?.isItemValid,
  ]);

  const renderDropdownItem = (
    durationInMs: number,
    index: number,
    close: () => void,
  ) => {
    const { formatItem } = dropdownItemProps ?? {};

    const bubbleNewDurationInMs = () => {
      const newDurationString = getFinalValueString(durationInMs);
      inputMaskHandleRef.current?.setValue(newDurationString!);
    };

    return (
      <Button
        className={`${COMPONENT_PREFIX}-duration-item`}
        borderType="plain"
        key={index}
        ref={(ref) => {
          if (internalValue === durationInMs) {
            ref?.focus();
          } else if (internalValue !== undefined) {
            if (
              (index === 0 && internalValue < durationInMs) ||
              (index === durationInMsList.length - 1 &&
                internalValue > durationInMs) ||
              (internalValue > durationInMs &&
                internalValue < durationInMsList[index + 1])
            ) {
              ref?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
              });
            }
          }
        }}
        onFocus={(event) => {
          event.target.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });

          bubbleNewDurationInMs();

          closeOnFocus && close();
        }}
        // onMouseDown instead of onClick because onFocus is executed before
        // onClick so it will stop onClick being called if we use event.target.scrollIntoView
        // in onFocus
        // https://stackoverflow.com/questions/57756002/react-prevent-onclick-firing-when-onfocus-fires
        onMouseDown={() => {
          bubbleNewDurationInMs();
          closeOnClick && close();
        }}
      >
        {formatItem?.(getDurationFromMs(durationInMs), durationInMs) ??
          getFinalValueString(durationInMs)}
      </Button>
    );
  };

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
    <PopoverGroup>
      <Popover<"div", MaskedInputProps>
        popoverProps={{ className: `${COMPONENT_PREFIX}-duration-picker` }}
        popoverOpenerProps={{
          // @ts-ignore
          as: MaskedInput,
          ...maskedInputProps,
          // @ts-ignore
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
          // @ts-ignore
          onChange: (unmaskedValue: string, maskedValue: string) => {
            const durationInMs = getDurationInMsFromString(
              maskedValue,
              localeText,
              doDisabled,
            );
            onChange?.(unmaskedValue, maskedValue, durationInMs);
            setInternalValue(durationInMs);
          },
        }}
        popoverPanelProps={{
          className: `${COMPONENT_PREFIX}-duration-picker__panel`,
        }}
      >
        {(_, close) =>
          durationInMsList.map((durationInMs, index) =>
            renderDropdownItem(durationInMs, index, close),
          )
        }
      </Popover>

      {/* <Menu<number, "div", MaskedInputProps>
        menuOpenerProps={{
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
          placeholder,
          // @ts-ignore
          maskOptions,
          onChange: (unmaskedValue, maskedValue) => {
            const durationInMs = getDurationInMsFromString(
              maskedValue,
              localeText,
              doDisabled,
            );
            onChange?.(unmaskedValue, maskedValue, durationInMs);
            setInternalValue(durationInMs);
          },
        }}
        // popoverPanelProps={{
        //   className: `${COMPONENT_PREFIX}-duration-picker__panel`,
        // }}
        useDivider={false}
        menuItemsProps={{
          className: `${COMPONENT_PREFIX}-duration-picker__panel`,
        }}
        menuItemList={durationInMsList}
        renderItem={(durationInMs, index, { active, disabled }) => {
          const { formatItem } = dropdownItemProps ?? {};

          return (
            <DropdownItem
              key={index}
              active={active}
              disabled={disabled}
              index={index}
              internalValue={internalValue}
              durationInMs={durationInMs}
              durationInMsList={durationInMsList}
              formatItem={formatItem}
              getFinalValueString={getFinalValueString}
              onNewDuration={(durationInMs) => {
                const newDurationString = getFinalValueString(durationInMs);
                inputMaskHandleRef.current?.setValue(newDurationString!);
              }}
            />
          );
        }}
      >

      </Menu> */}
    </PopoverGroup>
  );
};
