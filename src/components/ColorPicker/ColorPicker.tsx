import cx from "classnames";
import Color from "color";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { OmitStrict } from "../../utils/types";
import { Input, InputProps } from "../Input";
import { Popover } from "../Popover";
import "./ColorPicker.scss";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type ValidColor = HEX | RGB | RGBA;

// TODO: support other display type
type ColorDisplayType = "hex";
interface ColorTypeLookupMap {
  hex: HEX;
  rgb: RGB;
  rgba: RGBA;
}

export const isValidColor = (color: string): color is ValidColor => {
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

const DEFAULT_COLOR = "#37d67a";

export interface ColorPickerProps
  extends OmitStrict<InputProps, "defaultValue" | "value"> {
  defaultColor?: ValidColor;
  color?: ValidColor;

  colorDisplayType?: ColorDisplayType;

  frequentlyUsedColorList?: ValidColor[];
}

export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      colorDisplayType = "hex",
      frequentlyUsedColorList,
      defaultColor,
      color,
      onChange,
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

    const initialRender = useRef(true);
    const [curColor, setCurColor] = useState<ValidColor>(
      color ?? defaultColor ?? DEFAULT_COLOR,
    );

    useEffect(() => {
      if (inputRef.current && initialRender.current) {
        initialRender.current = false;
        inputRef.current.value = curColor;
      }
    }, [inputRef.current, curColor]);

    useEffect(() => {
      setCurColor(color ?? DEFAULT_COLOR);
    }, [color]);

    const onColorChange = (newColor: string) => {
      // Set the value of the Input to automatically have a event bubble up
      const input = inputRef.current;
      const emitter = eventEmitter.current;

      if (input && emitter && isValidColor(newColor)) {
        emitter.call(
          input,
          convertColorToOtherType(newColor, colorDisplayType),
        );

        const newEvent = new Event("input", {
          bubbles: true,
          cancelable: true,
        });
        input.dispatchEvent(newEvent);
      }
    };

    const onInputChange: InputProps["onChange"] = (event) => {
      try {
        const newColor = Color(event.target.value).hex();
        isValidColor(newColor) &&
          setCurColor(convertColorToOtherType(newColor, colorDisplayType));
      } catch (_) {}
    };

    return (
      <div className="color-picker">
        <Popover
          popoverProps={{ className: "color-picker__popover-outer" }}
          popoverOpenerProps={{
            as: "button",
            className: "color-indicator",
            style: { backgroundColor: curColor },
          }}
        >
          <div
            className={cx("color-picker__popover", {
              "color-picker__popover--has-freq-list": !!frequentlyUsedColorList,
            })}
          >
            <Component color={curColor} onChange={onColorChange} />

            {frequentlyUsedColorList && (
              <div className="freq-used-color-container">
                {frequentlyUsedColorList.map((color) => {
                  const isActive =
                    curColor.toLowerCase() === color.toLowerCase();
                  return (
                    <button
                      key={color}
                      style={{ backgroundColor: color }}
                      className={cx("freq-used-color", {
                        "freq-used-color--selected": isActive,
                      })}
                      disabled={isActive}
                      onClick={() => onColorChange(color)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </Popover>

        <Input
          borderType="plain"
          {...inputProps}
          onChange={onInputChange}
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
