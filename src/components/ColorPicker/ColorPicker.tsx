import cx from "classnames";
import Color from "color";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { debounce } from "../../utils/lodash/debounce";
import { OmitStrict } from "../../utils/types";
import { Icon } from "../Icon";
import { Input, InputProps } from "../Input";
import { Popover } from "../Popover";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./ColorPicker.scss";

export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type ValidColor = HEX | RGB | RGBA;

// TODO: support other display type
type ColorDisplayType = "hex";
interface ColorTypeLookupMap {
  hex: HEX;
  rgb: RGB;
  rgba: RGBA;
}

export const isValidColorString = (
  color: string | undefined,
): color is ValidColor => {
  if (!color) {
    return false;
  }

  try {
    Color(color);
    return true;
  } catch (error) {
    return false;
  }
};

export function convertColorToOtherType<T extends ColorDisplayType>(
  color: ValidColor,
  newType: T,
): ColorTypeLookupMap[T] {
  const colorObj = Color(color);
  switch (newType) {
    case "hex":
      // @ts-ignore
      return colorObj.hex();
    // case "rgb":
    //   // @ts-ignore
    //   return colorObj.rgb().toString();
    // case "rgba":
    //   // @ts-ignore
    //   return colorObj.rgba().toString();
  }

  // @ts-ignore
  return colorObj.hex();
}

export interface ColorPickerProps
  extends OmitStrict<InputProps, "defaultValue" | "value"> {
  defaultValue?: string;
  value?: string;

  colorDisplayType?: ColorDisplayType;

  frequentlyUsedColorList?: string[];
  hidePicker?: boolean;
}

export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      colorDisplayType = "hex",
      frequentlyUsedColorList,
      defaultValue,
      value,
      onChange,
      hidePicker,
      ...inputProps
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>();
    const eventEmitter = useRef(
      Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
      )?.set,
    );

    const Component = useMemo(() => {
      switch (colorDisplayType) {
        case "hex":
          return HexColorPicker;
        // case "rgb":
        //   return RgbColorPicker;
        // case "rgba":
        //   return RgbaColorPicker;
        // default:
        //   return HexColorPicker;
      }
    }, [colorDisplayType]);

    const isFirstRender = useRef(true);
    const [curColor, setCurColor] = useState<string | undefined>(
      value ?? defaultValue,
    );

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = curColor ?? "";
      }
    }, [inputRef.current, curColor]);

    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
      } else {
        // Prevent value getting set to undefined on first render
        //  which causes default `curColor` to be `undefined` even when there is `defaultValue`
        setCurColor(value);
      }
    }, [value]);

    const onColorChange = useRef(
      debounce(
        (newColor: string) => {
          if (curColor === newColor) {
            return;
          }

          // Set the value of the Input to automatically have a event bubble up
          const input = inputRef.current;
          const emitter = eventEmitter.current;

          if (input && emitter && isValidColorString(newColor)) {
            emitter.call(
              input,
              convertColorToOtherType(newColor, colorDisplayType),
            );

            setCurColor(newColor);

            onChange?.({
              bubbles: true,
              cancelable: false,
              currentTarget: input,
              target: input,
              defaultPrevented: false,
              eventPhase: 1,
              isTrusted: true,
              timeStamp: Date.now(),
              type: "change",
              isDefaultPrevented: () => false,
              preventDefault: () => {},
              isPropagationStopped: () => false,
              stopPropagation: () => {},
              nativeEvent: new InputEvent("change", {
                bubbles: true,
                cancelable: false,
              }),
              persist: () => {},
            });
          }
        },
        // Only debounce if it's not controlled props
        value === undefined ? 0 : 1,
      ),
    );

    const onInputChange: InputProps["onChange"] = (event) => {
      onChange?.(event);

      try {
        const newColor = Color(event.target.value).hex() as ValidColor;
        setCurColor(convertColorToOtherType(newColor, colorDisplayType));
      } catch (_) {}
    };

    return (
      <div className={`${COMPONENT_PREFIX}-color-picker`}>
        <Input
          {...inputProps}
          leadingAdornment={
            <Popover
              popoverProps={{
                className: `${COMPONENT_PREFIX}-color-picker__popover-outer`,
              }}
              popoverOpenerProps={{
                as: "button",
                className: "color-indicator",
                style: { backgroundColor: curColor },
              }}
            >
              <div
                className={cx(`${COMPONENT_PREFIX}-color-picker__popover`, {
                  "color-picker__popover--has-freq-list":
                    !!frequentlyUsedColorList,
                })}
              >
                {!hidePicker && (
                  <Component
                    color={curColor}
                    onChange={onColorChange.current}
                  />
                )}

                {frequentlyUsedColorList && (
                  <div
                    className={cx("freq-used-color-container", {
                      "freq-used-color-container--alone": hidePicker,
                    })}
                  >
                    {frequentlyUsedColorList.map((color) => {
                      const isActive =
                        curColor?.toLowerCase() === color.toLowerCase();
                      return (
                        <button
                          key={color}
                          style={{ backgroundColor: color }}
                          className={cx("freq-used-color", {
                            "freq-used-color--selected": isActive,
                          })}
                          disabled={isActive}
                          onClick={() => onColorChange.current(color)}
                        >
                          {isActive && (
                            <Icon
                              icon={["fas", "check"]}
                              className="icon fa-fw"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </Popover>
          }
          onChange={onInputChange}
          hasContent={curColor != null}
          ref={(ele) => {
            inputRef.current = ele ?? undefined;

            if (ref) {
              if (typeof ref === "function") {
                ref(ele);
              } else {
                ref.current = ele;
              }
            }
          }}
        />
      </div>
    );
  },
);
