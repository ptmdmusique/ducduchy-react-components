import { Meta, Story } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Listbox, ListboxProps } from ".";
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
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ListboxData> = (args) => <Listbox {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "A label",
  optionList,
};

export const MultiValueListbox = Template.bind({});
MultiValueListbox.args = {
  label: "A label",
  optionList,
  isMulti: true,
};

const TemplateWithForm: Story<ListboxData> = (args) => {
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

export const WithForm = TemplateWithForm.bind({});
WithForm.argTypes = {
  isMulti: { table: { disable: false } },
};
WithForm.args = {
  label: "A label",
  optionList,
};
