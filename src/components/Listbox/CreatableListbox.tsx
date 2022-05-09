import cx from "classnames";
import { GroupBase } from "react-select";
import CreatableSelect, { CreatableProps } from "react-select/creatable";
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

export type CreatableListboxProps<
  Data,
  IsMulti extends boolean = boolean,
  Form = any,
> = OmitStrict<
  Partial<
    CreatableProps<ListboxOption<Data>, IsMulti, GroupBase<ListboxOption<Data>>>
  >,
  "onChange"
> &
  ListboxBaseProps<Data, IsMulti, Form>;

export function CreatableListbox<
  Data,
  IsMulti extends boolean = false,
  Form = any,
>(props: CreatableListboxProps<Data, IsMulti, Form>) {
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
        <CreatableSelect<ListboxOption<Data>, IsMulti>
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
