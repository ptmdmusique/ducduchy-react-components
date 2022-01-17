import cx from "classnames";
import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import Select, {
  ActionMeta,
  CommonProps as CommonSelectProps,
  GroupBase,
  MultiValue,
  Props as SelectProps,
  SingleValue,
} from "react-select";
import { Icon } from "..";
import { OmitStrict } from "../../utils/types";
import { FadeTransition } from "../animation/CustomTransition";
import { FormValidationWithController } from "../resources/form/types";
import "./Dropdown.scss";

type Option<Data> = { label: string; value: Data };
type OnChange<Data, IsMulti extends boolean> = (
  value: IsMulti extends true ? Data[] : Data | undefined,
) => void;
type OptionType<D> = D | GroupBase<D>;

export interface DropdownProps<
  Data,
  IsMulti extends boolean = boolean,
  Form = any,
> extends OmitStrict<
    Partial<
      // TODO: handle this any
      CommonSelectProps<Option<Data>, IsMulti, any> &
        SelectProps<Option<Data>, IsMulti, GroupBase<Option<Data>>>
    >,
    "onChange"
  > {
  label?: string;
  optionList: OptionType<Option<Data>>[] | readonly OptionType<Option<Data>>[];
  placeholder?: ReactNode;
  disabled?: boolean;
  onChange?: OnChange<Data, IsMulti>;
  formValidation?: FormValidationWithController<Form>;

  type?: "outline" | "fill";
  caption?: ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";

  chevronDownIcon?: [string, string];

  isMulti?: IsMulti;
}

function getValue<Data, IsMulti extends boolean>(
  data: MultiValue<Option<Data>> | SingleValue<Option<Data>>,
  isMulti: IsMulti,
): Data | Data[] | undefined {
  if (!data) {
    return undefined;
  }

  return isMulti
    ? (data as MultiValue<Option<Data>>).map((item) => item.value)
    : (data as SingleValue<Option<Data>>)?.value ?? undefined;
}

export function Dropdown<Data, IsMulti extends boolean = false, Form = any>({
  label,
  optionList,
  placeholder,
  disabled,
  onChange,
  formValidation,
  type = "outline",
  state = "normal",
  caption,
  captionIcon,
  isMulti,
  className,
  chevronDownIcon = ["fas", "chevron-down"],
  ...selectProps
}: DropdownProps<Data, IsMulti, Form>) {
  const hasError = state === "error";

  const renderContent = (formOnChange?: OnChange<Data, IsMulti>) => {
    const onChangeWrapper = (
      newValue: MultiValue<Option<Data>> | SingleValue<Option<Data>>,
      // actionMeta
      _: ActionMeta<Option<Data>>,
    ) => {
      const newData = getValue(
        newValue,
        isMulti ?? false,
      ) as IsMulti extends true ? Data[] : Data | undefined;

      onChange?.(newData);
      formOnChange?.(newData);
    };

    // TODO: Figure out this ignore
    return (
      <div
        className={cx(
          "form-dropdown",
          { "form-dropdown--disabled": disabled },
          className,
        )}
      >
        <div
          className={cx(
            "dropdown-container",
            { "dropdown-container--fill": type === "fill" },
            { "dropdown-container--outline": type === "outline" },
            { "dropdown-container--has-content": true },
            { "dropdown-container--error": hasError },
          )}
        >
          <label>{label}</label>

          <Select<Option<Data>, IsMulti>
            {...selectProps}
            isMulti={isMulti}
            isDisabled={disabled}
            className={cx(
              "form-dropdown",
              { "form-dropdown--fill": type === "fill" },
              { "form-dropdown--outline": type === "outline" },
            )}
            options={optionList}
            onChange={onChangeWrapper}
            classNamePrefix="form-dropdown"
            placeholder={placeholder}
            // TODO: possibly dissect this more
            isOptionDisabled={() => (disabled ? true : false)}
            components={{
              DropdownIndicator: (props) => (
                <Icon
                  icon={chevronDownIcon}
                  className={cx("fa-fw icon", props.className)}
                />
              ),
            }}
            noOptionsMessage={(arg) =>
              selectProps.noOptionsMessage?.(arg) ?? "No options"
            }
          />
        </div>

        <FadeTransition show={!!caption}>
          <div
            className={cx("caption-container", {
              "caption-container--error": hasError,
            })}
          >
            {(hasError || captionIcon) && (
              <Icon
                icon={captionIcon || ["fas", "info-circle"]}
                className="fa-fw icon"
              />
            )}
            {caption}
          </div>
        </FadeTransition>
      </div>
    );
  };

  if (!formValidation) {
    return renderContent();
  }

  const { control, name, rules } = formValidation;
  const { defaultValue } = selectProps;

  // TODO: Figure out this ignore
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      // TODO: figure this out
      // @ts-ignore
      defaultValue={
        defaultValue ? getValue(defaultValue, isMulti ?? false) : undefined
      }
      render={({ field: { onChange } }) => renderContent(onChange)}
    />
  );
}
