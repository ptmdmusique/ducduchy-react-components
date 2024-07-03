import cx from "classnames";
import React, { forwardRef, useMemo } from "react";
import { Range } from "react-range";
import { OmitStrict } from "../../utils/types";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./Slider.scss";

export type SliderProps = OmitStrict<
  RangeProps,
  | "allowOverlap"
  | "direction"
  | "onFinalChange"
  | "disabled"
  | "draggableTrack"
  | "rtl"
  | "renderMark"
  | "renderTrack"
  | "renderThumb"
  | "values"
> & {
  className?: string;
  useDefaultMark?: boolean;

  valueList: RangeProps["values"];
  allowOverlap?: boolean;
  direction?: Direction;
  onFinalChange?: RangeProps["onFinalChange"];
  disabled?: boolean;
  draggableTrack?: boolean;
  rtl?: boolean;
  renderMark?: RangeProps["renderMark"];
  renderTrack?: RangeProps["renderTrack"];
  renderThumb?: RangeProps["renderThumb"];
  renderThumbValue?: (value: number) => React.ReactNode;
};

const BASE_CLASSNAME = `${COMPONENT_PREFIX}-slider` as const;

/**
 *
 * @param min - The minimum value of the slider.
 * @param max - The maximum value of the slider.
 * @param step - The step size of the slider.
 * @param value {number[]} An array of numbers. It controls the position of thumbs on the track. values.length equals to the number of rendered thumbs.
 * @param onChange {(values: number[]) => void} A callback function that is called when the value of the slider changes.
 * TODO: Support rtl and vertical
 */
export const Slider = forwardRef<Range, SliderProps>(
  (
    {
      className,
      useDefaultMark,
      valueList,
      min,
      max,
      renderThumbValue,
      ...sliderProps
    },
    ref,
  ) => {
    const { trackLeft, trackRight } = useMemo<{
      trackLeft: number;
      trackRight: number;
    }>(() => {
      let minPercent: number;
      let maxPercent: number;

      switch (valueList.length) {
        case 0:
          return { trackLeft: 0, trackRight: 100 };
        case 1:
          maxPercent = (valueList[0] / max) * 100;
          return { trackLeft: 0, trackRight: maxPercent };
        default:
          let minValue = valueList[0];
          let maxValue = valueList[0];
          valueList.forEach((value) => {
            if (value < minValue) {
              minValue = value;
            }
            if (value > maxValue) {
              maxValue = value;
            }
          });

          minPercent = (minValue / max) * 100;
          maxPercent = (maxValue / max) * 100;
          return { trackLeft: minPercent, trackRight: maxPercent };
      }
    }, [valueList, max]);

    return (
      <div className={cx(BASE_CLASSNAME, className)}>
        <Range
          ref={ref}
          renderTrack={({ disabled, props, children }) => (
            <div
              {...props}
              className={cx(`${BASE_CLASSNAME}__track`, {
                [`${BASE_CLASSNAME}__track--disabled`]: disabled,
              })}
            >
              <div
                className={cx(`${BASE_CLASSNAME}__highlighted-part`, {
                  [`${BASE_CLASSNAME}__highlighted-part--disabled`]: disabled,
                })}
                style={{
                  left: `${trackLeft}%`,
                  width: `${trackRight - trackLeft}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props, value }) => (
            <div
              {...props}
              className={cx(`${BASE_CLASSNAME}__thumb`, {
                [`${BASE_CLASSNAME}__thumb--disabled`]: sliderProps?.disabled,
              })}
            >
              {renderThumbValue?.(value) ?? (
                <p className="thumb__value">{value}</p>
              )}
            </div>
          )}
          renderMark={
            useDefaultMark
              ? ({ props }) => (
                  <div {...props} className={`${BASE_CLASSNAME}__mark`} />
                )
              : undefined
          }
          {...sliderProps}
          min={min}
          max={max}
          values={valueList}
        />
      </div>
    );
  },
);

// --- Taken from react-range libs
interface RangeProps {
  values: number[];
  min: number;
  max: number;
  step: number;
  direction: Direction;
  allowOverlap: boolean;
  draggableTrack: boolean;
  disabled: boolean;
  rtl: boolean;
  onChange: (values: number[]) => void;
  onFinalChange?: (values: number[]) => void;
  renderMark?: (params: IRenderMarkParams) => React.ReactNode;
  renderThumb: (params: IRenderThumbParams) => React.ReactNode;
  renderTrack: (params: IRenderTrackParams) => React.ReactNode;
}
interface IRenderMarkParams {
  props: IMarkProps;
  index: number;
}
interface IRenderThumbParams {
  props: IThumbProps;
  value: number;
  index: number;
  isDragged: boolean;
}
interface IRenderTrackParams {
  props: ITrackProps;
  children: React.ReactNode;
  isDragged: boolean;
  disabled: boolean;
}
interface IThumbProps {
  key: number;
  style: React.CSSProperties;
  tabIndex?: number;
  "aria-valuemax": number;
  "aria-valuemin": number;
  "aria-valuenow": number;
  draggable: boolean;
  ref: React.RefObject<any>;
  role: string;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onKeyUp: (e: React.KeyboardEvent) => void;
}
interface IMarkProps {
  key: string;
  style: React.CSSProperties;
  ref: React.RefObject<any>;
}
interface ITrackProps {
  style: React.CSSProperties;
  ref: React.RefObject<any>;
  onMouseDown: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
}

enum Direction {
  Right = "to right",
  Left = "to left",
  Down = "to bottom",
  Up = "to top",
}
