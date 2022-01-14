import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "..";
import { storyDisabledOption } from "../resources/story-common";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

const radioGroupData = [
  { data: "🐶 Dog", disabled: true },
  { data: "🐱 Cat" },
  { data: "🐭 Mouse" },
  { data: "🦜 Bird" },
];

type Data = typeof radioGroupData[number];
type StoryRadioGroupProps = RadioGroupProps<Data, string>;

const meta: Meta<StoryRadioGroupProps> = {
  title: "Components/Form/RadioGroup",
  component: RadioGroup,
  argTypes: {
    formValidation: storyDisabledOption,
    onChange: storyDisabledOption,
    renderOption: storyDisabledOption,
    getDescription: storyDisabledOption,
    itemClassNameGetter: storyDisabledOption,
    itemClassName: storyDisabledOption,
    checkOptionDisable: storyDisabledOption,
    getValue: storyDisabledOption,
    getLabel: storyDisabledOption,
    className: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<StoryRadioGroupProps> = (args) => (
  <RadioGroup {...args} />
);
export const Default = Template.bind({});
Default.args = {
  dataList: radioGroupData,
  getValue: ({ data }) => data,
  getLabel: ({ data }) => data.data,
  checkOptionDisable: ({ disabled }) => disabled,
};

export const WithGroupLabel = Template.bind({});
WithGroupLabel.args = {
  dataList: radioGroupData,
  getValue: ({ data }) => data,
  getLabel: ({ data }) => data.data,
  checkOptionDisable: ({ disabled }) => disabled,
  radioGroupLabel: (
    <div className="text-lg font-semibold text-skin-exquisite">😶‍🌫️ A Fancy Label 😶‍🌫️</div>
  ),
};

const TemplateWithForm: Story<StoryRadioGroupProps> = (args) => {
  const [submittedValue, setSubmittedValue] = useState<{
    [key: string]: string;
  } | null>(null);
  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data) => {
    setSubmittedValue(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <RadioGroup formValidation={{ control, name: "radioGroup" }} {...args} />

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
WithForm.args = {
  dataList: radioGroupData,
  getValue: ({ data }) => data,
  getLabel: ({ data }) => data.data,
  checkOptionDisable: ({ disabled }) => disabled,
};
