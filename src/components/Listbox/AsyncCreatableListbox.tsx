import cx from "classnames";
import { FieldValues } from "react-hook-form";
import { GroupBase } from "react-select";
import AsyncCreatableSelect, {
  AsyncCreatableProps,
} from "react-select/async-creatable";
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

export type AsyncCreatableListboxProps<
  Data,
  IsMulti extends boolean = boolean,
  Form extends FieldValues = any,
> = OmitStrict<
  Partial<
    AsyncCreatableProps<
      ListboxOption<Data>,
      IsMulti,
      GroupBase<ListboxOption<Data>>
    >
  >,
  "onChange"
> &
  ListboxBaseProps<Data, IsMulti, Form>;

export function AsyncCreatableListbox<
  Data,
  IsMulti extends boolean = false,
  Form extends FieldValues = any,
>(props: AsyncCreatableListboxProps<Data, IsMulti, Form>) {
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
    <ListboxBase {...props}>
      {(formOnChange) => (
        <AsyncCreatableSelect<ListboxOption<Data>, IsMulti>
          isOptionDisabled={() => (disabled ? true : false)}
          noOptionsMessage={listboxNoOptionMessage}
          {...selectProps}
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
