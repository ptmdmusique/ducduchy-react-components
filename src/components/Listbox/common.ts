import cx from "classnames";
import { ActionMeta, MultiValue, SingleValue } from "react-select";

export type ListboxOption<Data> = { label: string; value: Data };

export type ListboxBorderType = "outline" | "fill";

export type ListboxOnChange<Data, IsMulti extends boolean> = (
  value: IsMulti extends true ? Data[] : Data | undefined,
) => void;

export function getListboxValue<Data, IsMulti extends boolean>(
  data: MultiValue<ListboxOption<Data>> | SingleValue<ListboxOption<Data>>,
  isMulti: IsMulti,
): Data | Data[] | undefined {
  if (!data) {
    return undefined;
  }

  return isMulti
    ? (data as MultiValue<ListboxOption<Data>>).map((item) => item.value)
    : (data as SingleValue<ListboxOption<Data>>)?.value ?? undefined;
}

export const getListboxClassName = (borderType: ListboxBorderType) =>
  cx(
    "form-listbox",
    { "form-listbox--fill": borderType === "fill" },
    { "form-listbox--outline": borderType === "outline" },
  );

export const listboxClassNamePrefix = "form-listbox";

export function listBoxOnChange<Data, IsMulti extends boolean = false>(
  onChange?: ListboxOnChange<Data, IsMulti>,
  isMulti?: IsMulti,
  formOnChange?: ListboxOnChange<Data, IsMulti>,
) {
  return (
    newValue:
      | MultiValue<ListboxOption<Data>>
      | SingleValue<ListboxOption<Data>>,
    _: ActionMeta<ListboxOption<Data>>,
  ) => {
    const newData = getListboxValue(
      newValue,
      isMulti ?? false,
    ) as IsMulti extends true ? Data[] : Data | undefined;

    onChange?.(newData);
    formOnChange?.(newData);
  };
}

export const listboxNoOptionMessage = () => "No options";
