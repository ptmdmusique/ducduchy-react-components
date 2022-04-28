import cx from "classnames";
import { GroupBase } from "react-select";
import AsyncSelect, { AsyncProps } from "react-select/async";
import { OmitStrict } from "../../utils/types";
import { Icon } from "../Icon";
import {
  getListboxClassName,
  listboxClassNamePrefix,
  listboxNoOptionMessage,
  listBoxOnChange,
  ListboxOption,
} from "./common";
import { ListboxBase, ListboxBaseProps } from "./ListboxBase";

export type AsyncListboxProps<
  Data,
  IsMulti extends boolean = boolean,
  Form = any,
> = OmitStrict<
  Partial<
    AsyncProps<ListboxOption<Data>, IsMulti, GroupBase<ListboxOption<Data>>>
  >,
  "onChange"
> &
  ListboxBaseProps<Data, IsMulti, Form>;

export function AsyncListbox<Data, IsMulti extends boolean = false, Form = any>(
  props: AsyncListboxProps<Data, IsMulti, Form>,
) {
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
        <AsyncSelect<ListboxOption<Data>, IsMulti>
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
          classNamePrefix={listboxClassNamePrefix}
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
