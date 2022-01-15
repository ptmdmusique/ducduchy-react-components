import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toggle } from ".";
import { Button, ToggleProps } from "..";
import { storyDisabledOption } from "../resources/story-common";

const meta: Meta<ToggleProps> = {
  title: "Components/Form/Toggle",
  component: Toggle,
  argTypes: {
    formValidation: storyDisabledOption,
    onChange: storyDisabledOption,
    className: storyDisabledOption,
    onBlur: storyDisabledOption,
    checkIcon: storyDisabledOption,
    type: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "My toggle",
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: "My checkbox",
  type: "checkbox",
};

const TemplateWithForm: Story<ToggleProps> = (args) => {
  const [submittedValue, setSubmittedValue] = useState<{
    [key: string]: string;
  } | null>(null);
  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data) => {
    setSubmittedValue(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Toggle
        label="What a Label"
        formValidation={{ control, name: "toggle" }}
        type="checkbox"
        {...args}
      />

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
