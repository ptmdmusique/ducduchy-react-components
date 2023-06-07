import cx from "classnames";
import { FieldValues } from "react-hook-form";
import { GroupBase } from "react-select";
import AsyncSelect, { AsyncProps } from "react-select/async";
import { OmitStrict } from "../../utils/types";
import { Icon } from "../Icon";
import {
  getListboxClassName,
  listboxInnerClassNamePrefix,
  listboxNoOptionMessage,
  listBoxOnChange,
  ListboxOption,
} from "./common";
import { ListboxBase, ListboxBaseProps } from "./ListboxBase";

export type AsyncListboxProps<
  Data,
  IsMulti extends boolean = boolean,
  Form extends FieldValues = any,
> = OmitStrict<
  Partial<
    AsyncProps<ListboxOption<Data>, IsMulti, GroupBase<ListboxOption<Data>>>
  >,
  "onChange"
> &
  ListboxBaseProps<Data, IsMulti, Form>;

export function AsyncListbox<
  Data,
  IsMulti extends boolean = false,
  Form extends FieldValues = any,
>(props: AsyncListboxProps<Data, IsMulti, Form>) {
  const {
    label,
    optionList,
    disabled,
    onChange,
    formValidation,
    borderType = "outline",
    state = "normal",
    caption,
    captionIcon,
    className,
    dropdownIndicatorIcon = ["fas", "chevron-down"],
    ...selectProps
  } = props;

  return (
    <ListboxBase state={state} {...props}>
      {(formOnChange) => (
        <AsyncSelect<ListboxOption<Data>, IsMulti>
          noOptionsMessage={listboxNoOptionMessage}
          {...selectProps}
          isOptionDisabled={(option, selectValue) =>
            selectProps.isOptionDisabled?.(option, selectValue) ??
            (disabled ? true : false)
          }
          isDisabled={disabled}
          className={getListboxClassName(borderType)}
          options={optionList}
          onChange={listBoxOnChange(
            onChange,
            selectProps.isMulti,
            formOnChange,
          )}
          classNamePrefix={listboxInnerClassNamePrefix}
          components={{
            DropdownIndicator: (props) => (
              <Icon
                icon={dropdownIndicatorIcon}
                className={cx("fa-fw icon", props.className)}
              />
            ),
            ...selectProps.components,
          }}
        />
      )}
    </ListboxBase>
  );
}
