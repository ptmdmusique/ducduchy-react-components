import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  AsyncCreatableListbox,
  AsyncListbox,
  CreatableListbox,
  Listbox,
  ListboxProps,
} from ".";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";

const optionList = [
  { label: "💪 My label", value: "my value" },
  { label: "✌ Hands", value: "my value 2" },
  { label: "🐶 Dog", value: "my value 3" },
  { label: "🐱 Cat", value: "my value 4" },
];

type ListboxData = ListboxProps<string>;

const meta: Meta<ListboxData> = {
  title: "Components/Form/Listbox",
  component: Listbox,
  argTypes: {
    className: storyDisabledOption,
    placeholder: storyDisabledOption,
    formValidation: storyDisabledOption,
    isMulti: storyDisabledOption,
    onChange: storyDisabledOption,
    caption: storyDisabledOption,
    dropdownIndicatorIcon: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<ListboxData> = (args) => (
  <Listbox {...args} caption={"ASD"} state={"error"} />
);
export const Default: typeof Template = Template.bind({});
Default.args = {
  label: "A label",
  optionList,
};

export const WithDisabledOption: StoryFn<ListboxData> = (args) => (
  <Listbox
    {...args}
    isOptionDisabled={(option) => option.value === "disabled"}
    caption={"ASD"}
    state={"error"}
    optionList={[...optionList, { label: "⚠️ Disabled", value: "disabled" }]}
    label="A wild label"
  />
);

export const MultiValueListbox: typeof Template = Template.bind({});
MultiValueListbox.args = {
  label: "A label",
  optionList,
  isMulti: true,
};

const TemplateWithForm: StoryFn<ListboxData> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <Listbox
          {...args}
          formValidation={{ control: methods.control, name: "listbox" }}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};

export const WithForm: typeof TemplateWithForm = TemplateWithForm.bind({});
WithForm.argTypes = {
  isMulti: { table: { disable: false } },
};
WithForm.args = {
  label: "A label",
  optionList,
};

// --- Async  https://react-select.com/async
interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const colourOptions: ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const filterColors = (inputValue: string, optionList?: ColourOption[]) => {
  return (optionList ?? colourOptions).filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase()),
  );
};

const promiseOptions = (optionList?: ColourOption[]) => (inputValue: string) =>
  new Promise<ColourOption[]>((resolve) => {
    if (!inputValue) {
      resolve(colourOptions);
    }

    setTimeout(() => {
      resolve(filterColors(inputValue, optionList));
    }, 1000);
  });

export const AsyncWithDefaultTemplate: StoryFn<ListboxData> = (args) => (
  <AsyncListbox {...args} defaultOptions loadOptions={promiseOptions()} />
);

export const AsyncTemplate: StoryFn<ListboxData> = (args) => (
  <AsyncListbox {...args} loadOptions={promiseOptions()} />
);

export const AsyncMultiTemplate: StoryFn<ListboxData> = (args) => (
  <AsyncListbox
    {...args}
    isMulti
    defaultOptions
    loadOptions={promiseOptions()}
  />
);

export const CreatableTemplate: StoryFn<ListboxData> = (args) => {
  const [optionList, setOptionList] = useState<ColourOption[]>(colourOptions);
  const handleNewOption = (newOption: string) => {
    setOptionList([
      { value: newOption, label: newOption, color: "#00B8D9" },
      ...optionList,
    ]);
  };

  return (
    <CreatableListbox
      {...args}
      optionList={optionList}
      onCreateOption={handleNewOption}
      isValidNewOption={(input) => !!input}
    />
  );
};

export const AsyncCreatableTemplate: StoryFn<ListboxData> = (args) => {
  const [optionList, setOptionList] = useState<ColourOption[]>(colourOptions);
  const handleNewOption = (newOption: string) => {
    setOptionList([
      { value: newOption, label: newOption, color: "#00B8D9" },
      ...optionList,
    ]);
  };

  // TODO: fix this example
  return (
    <AsyncCreatableListbox
      {...args}
      defaultOptions
      optionList={optionList}
      onCreateOption={handleNewOption}
      isValidNewOption={(input) => !!input}
      loadOptions={promiseOptions(optionList)}
    />
  );
};
