import cx from "classnames";
import { FieldValues } from "react-hook-form";
import Select, {
  CommonProps as CommonSelectProps,
  GroupBase,
  Props as SelectProps,
} from "react-select";
import { OmitStrict } from "../../utils/types";
import { Icon } from "../Icon";
import { ListboxBase, ListboxBaseProps } from "./ListboxBase";
import {
  ListboxOption,
  getListboxClassName,
  listBoxOnChange,
  listboxInnerClassNamePrefix,
  listboxNoOptionMessage,
} from "./common";

export type ListboxProps<
  Data,
  IsMulti extends boolean = boolean,
  Form extends FieldValues = any,
> = OmitStrict<
  Partial<
    // TODO: handle this any
    CommonSelectProps<ListboxOption<Data>, IsMulti, any> &
      SelectProps<ListboxOption<Data>, IsMulti, GroupBase<ListboxOption<Data>>>
  >,
  "onChange"
> &
  ListboxBaseProps<Data, IsMulti, Form>;

export function Listbox<
  Data,
  IsMulti extends boolean = false,
  Form extends FieldValues = any,
>(props: ListboxProps<Data, IsMulti, Form>) {
  const {
    label,
    optionList,
    placeholder,
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
        <Select<ListboxOption<Data>, IsMulti>
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
