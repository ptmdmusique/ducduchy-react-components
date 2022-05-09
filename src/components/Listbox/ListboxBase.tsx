import cx from "classnames";
import React from "react";
import { Controller } from "react-hook-form";
import { GroupBase, PropsValue } from "react-select";
import { FadeTransition } from "../animation/CustomTransition";
import { Icon } from "../Icon";
import { COMPONENT_PREFIX } from "../resources/common.data";
import { FormValidationWithController } from "../resources/form/types";
import {
  getListboxValue,
  ListboxBorderType,
  ListboxOnChange,
  ListboxOption
} from "./common";
import "./ListboxBase.scss";

type OptionType<D> = D | GroupBase<D>;

export interface ListboxBaseProps<
  Data,
  IsMulti extends boolean = boolean,
  Form = any,
> {
  className?: string;

  label?: string;
  optionList:
    | OptionType<ListboxOption<Data>>[]
    | readonly OptionType<ListboxOption<Data>>[];
  placeholder?: React.ReactNode;
  disabled?: boolean;
  onChange?: ListboxOnChange<Data, IsMulti>;
  formValidation?: FormValidationWithController<Form>;

  borderType?: ListboxBorderType;
  caption?: React.ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";

  dropdownIndicatorIcon?: [string, string];

  isMulti?: IsMulti;

  defaultValue?: PropsValue<ListboxOption<Data>>;
}

export function ListboxBase<Data, IsMulti extends boolean = false, Form = any>({
  label,
  disabled,
  formValidation,
  borderType = "outline",
  state = "normal",
  caption,
  captionIcon,
  isMulti,
  className,
  children,
  defaultValue,
}: ListboxBaseProps<Data, IsMulti, Form> & {
  children: (formOnChange?: ListboxOnChange<Data, IsMulti>) => React.ReactNode;
}) {
  const hasError = state === "error";

  const renderContent = (formOnChange?: ListboxOnChange<Data, IsMulti>) => {
    // TODO: Figure out this ignore
    return (
      <div
        className={cx(
          `${COMPONENT_PREFIX}-listbox`,
          { [`${COMPONENT_PREFIX}-listbox--disabled`]: disabled },
          className,
        )}
      >
        <div
          className={cx(
            "listbox-container",
            { "listbox-container--fill": borderType === "fill" },
            { "listbox-container--outline": borderType === "outline" },
            { "listbox-container--has-content": true },
            { "listbox-container--error": hasError },
          )}
        >
          <label>{label}</label>

          {children(formOnChange)}
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

  // TODO: Figure out this ignore
  return (
    <Controller
      name={name}
      rules={rules}
      // TODO: figure this out
      // @ts-ignore
      control={control}
      // @ts-ignore
      defaultValue={
        defaultValue
          ? getListboxValue(defaultValue, isMulti ?? false)
          : undefined
      }
      render={({ field: { onChange } }) => renderContent(onChange)}
    />
  );
}
