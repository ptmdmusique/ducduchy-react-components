import cx from "classnames";
import Select, {
  CommonProps as CommonSelectProps,
  GroupBase,
  Props as SelectProps,
} from "react-select";
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

export type ListboxProps<Data, IsMulti extends boolean = boolean, Form = any> =
  OmitStrict<
    Partial<
      // TODO: handle this any
      CommonSelectProps<ListboxOption<Data>, IsMulti, any> &
        SelectProps<
          ListboxOption<Data>,
          IsMulti,
          GroupBase<ListboxOption<Data>>
        >
    >,
    "onChange"
  > &
    ListboxBaseProps<Data, IsMulti, Form>;

export function Listbox<Data, IsMulti extends boolean = false, Form = any>(
  props: ListboxProps<Data, IsMulti, Form>,
) {
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
    <ListboxBase {...props}>
      {(formOnChange) => (
        <Select<ListboxOption<Data>, IsMulti>
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
