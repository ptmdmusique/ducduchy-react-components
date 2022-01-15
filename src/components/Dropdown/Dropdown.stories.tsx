import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Dropdown, DropdownProps } from ".";
import { Button } from "..";
import { storyDisabledOption } from "../resources/story-common";

const optionList = [
  { label: "💪 My label", value: "my value" },
  { label: "✌ Hands", value: "my value 2" },
  { label: "🐶 Dog", value: "my value 3" },
  { label: "🐱 Cat", value: "my value 4" },
];

type DropdownData = DropdownProps<string>;

const meta: Meta<DropdownData> = {
  title: "Components/Form/Dropdown",
  component: Dropdown,
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

const Template: Story<DropdownData> = (args) => <Dropdown {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "A label",
  optionList,
};

export const MultiValueDropdown = Template.bind({});
MultiValueDropdown.args = {
  label: "A label",
  optionList,
  isMulti: true,
};

const TemplateWithForm: Story<DropdownData> = (args) => {
  const [submittedValue, setSubmittedValue] = useState<{
    [key: string]: string;
  } | null>(null);
  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data) => {
    setSubmittedValue(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Dropdown {...args} formValidation={{ control, name: "dropdown" }} />

      <Button type="submit" borderType="outline" className="mt-4">
        Submit
      </Button>

      {submittedValue && (
        <pre className="mt-8">
          <code>Submitted value {JSON.stringify(submittedValue)}</code>
        </pre>
      )}
    </form>
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
