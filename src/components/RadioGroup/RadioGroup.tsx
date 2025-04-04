import {
  Description,
  RadioGroup as HeadlessRadioGroup,
  Radio,
} from "@headlessui/react";
import cx from "classnames";
import { ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { clamp } from "../../utils/math";
import { ColorType } from "../resources/common.data";
import { FormValidationWithController } from "../resources/form/types";
import "./RadioGroup.scss";

type ValueType = number | string;
type GetFunction<D> = (props: {
  data: D;
  index: number;
  checked: boolean;
  active: boolean;
  disabled: boolean;
}) => ReactElement;

export interface RadioGroupProps<
  Data = unknown[],
  Value extends ValueType = any,
  FormFields extends FieldValues = any,
> {
  className?: string;
  itemClassName?: string;
  itemClassNameGetter?: (item: Data, index: number) => string;

  dataList: Data[];
  defaultSelectedIndex?: number;
  selectedIndex?: number;
  getValue: (data: Data) => Value;
  checkOptionDisable?: (data: Data, index: number) => boolean | undefined;
  onChange?: (data: Data, index: number) => void;
  disabled?: boolean;

  radioGroupLabel?: ReactNode;
  renderOption?: GetFunction<Data>;
  getLabel?: GetFunction<Data>;
  getDescription?: GetFunction<Data>;
  leftLabel?: boolean;

  formValidation?: FormValidationWithController<FormFields>;

  colorType?: ColorType;
}

export function RadioGroup<
  Data,
  Value extends ValueType,
  FormFields extends FieldValues = any,
>({
  className,
  itemClassName,
  itemClassNameGetter,
  dataList,
  getValue,
  radioGroupLabel,
  defaultSelectedIndex = -1,
  selectedIndex,
  disabled,
  renderOption,
  onChange,
  checkOptionDisable,
  getLabel,
  getDescription,
  leftLabel,
  formValidation,
  colorType = "neutral",
}: RadioGroupProps<Data, Value, FormFields>) {
  const [_selectedIndex, setSelectedIndex] = useState(
    (() => {
      let attemptDefaultIndex = clamp(
        -1,
        dataList.length - 1,
        selectedIndex ?? defaultSelectedIndex,
      );

      if (
        attemptDefaultIndex > -1 &&
        checkOptionDisable?.(dataList[attemptDefaultIndex], attemptDefaultIndex)
      ) {
        attemptDefaultIndex = dataList.findIndex(
          (entry, index) => !checkOptionDisable?.(entry, index),
        );
      }

      return attemptDefaultIndex;
    })(),
  );

  useEffect(() => {
    if (selectedIndex !== undefined) {
      setSelectedIndex(
        selectedIndex >= 0 && selectedIndex < dataList.length
          ? selectedIndex
          : -1,
      );
    }
  }, [selectedIndex, dataList.length]);

  const dataMap = useMemo(() => {
    // @ts-ignore
    const returnMap: Record<Value, { data: Data; index: number }> = {};
    dataList.forEach((entry, index) => {
      returnMap[getValue(entry)] = { data: entry, index };
    });

    return returnMap;
  }, [dataList, getValue]);

  const value =
    _selectedIndex > -1 && _selectedIndex < dataList.length
      ? getValue(dataList[_selectedIndex])
      : undefined;

  const renderContent = (formOnChange?: (...data: any[]) => void) => {
    const onChangeWrapper = (newValue: Value) => {
      const { data, index } = dataMap[newValue] || {};
      if (selectedIndex === undefined) {
        // Change on uncontrolled form only
        setSelectedIndex(index);
      }

      onChange?.(data, index);
      formOnChange?.(getValue(data));
    };

    const renderRadioLabel = (label: ReactNode) => (
      <HeadlessRadioGroup.Label
        className={cx("radio-label", { "radio-label--left": leftLabel })}
      >
        {label}
      </HeadlessRadioGroup.Label>
    );

    return (
      <HeadlessRadioGroup
        disabled={disabled}
        defaultValue={value}
        value={value}
        onChange={onChangeWrapper}
        className={cx(
          "form-radio-group-container",
          { "form-radio-group-container--disabled": disabled },
          { "form-radio-group-container--default": !renderOption },
          className,
        )}
      >
        {radioGroupLabel && (
          <HeadlessRadioGroup.Label className="radio-main-label">
            {radioGroupLabel}
          </HeadlessRadioGroup.Label>
        )}

        {dataList.map((data, index) => {
          const isDisabled = checkOptionDisable?.(data, index);
          return (
            <Radio
              value={getValue(data)}
              key={index}
              className={cx(
                "radio-container",
                { "radio-container--disabled": isDisabled },
                itemClassName,
                itemClassNameGetter?.(data, index),
              )}
              disabled={isDisabled}
            >
              {({ checked, focus, disabled }) => {
                const option = {
                  data,
                  index,
                  checked,
                  active: focus,
                  disabled,
                };
                return (
                  renderOption?.(option) ?? (
                    <>
                      {leftLabel && renderRadioLabel(getLabel?.(option))}

                      <div
                        className={cx(
                          "form-radio-group__radio",
                          `form-radio-group__radio--${colorType}`,
                          { "form-radio-group__radio--checked": checked },
                          { "form-radio-group__radio--active": focus },
                          { "form-radio-group__radio--disabled": disabled },
                        )}
                      >
                        <div className="inner" />
                      </div>

                      {!leftLabel && renderRadioLabel(getLabel?.(option))}

                      {getDescription && (
                        <Description>{getDescription(option)}</Description>
                      )}
                    </>
                  )
                );
              }}
            </Radio>
          );
        })}
      </HeadlessRadioGroup>
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
      defaultValue={value}
      render={({ field: { onChange } }) => renderContent(onChange)}
    />
  );
}
