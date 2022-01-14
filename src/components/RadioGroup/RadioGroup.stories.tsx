import { Meta, Story } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

const radioGroupData = [
  { data: "Dog", disabled: true },
  { data: "Cat" },
  { data: "Mouse" },
  { data: "Bird" },
];

type Data = typeof radioGroupData[number];
type StoryRadioGroupProps = RadioGroupProps<Data, string>;

const meta: Meta<StoryRadioGroupProps> = {
  title: "Components/Form/RadioGroup",
  component: RadioGroup,
  argTypes: {
    formValidation: { table: { disable: true } },
    onChange: { table: { disable: true } },
    renderOptionLabel: { table: { disable: true } },
    renderOption: { table: { disable: true } },
    getDescription: { table: { disable: true } },
    itemClassNameGetter: { table: { disable: true } },
    itemClassName: { table: { disable: true } },
    checkOptionDisable: { table: { disable: true } },
    getValue: { table: { disable: true } },
    getLabel: { table: { disable: true } },
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

const TemplateWithForm: Story<StoryRadioGroupProps> = (args) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.info("data:", data);
  });

  return (
    <form onSubmit={onSubmit}>
      <RadioGroup
        getLabel={({ data }) => data.data}
        formValidation={{ control, name: "radioGroup" }}
        {...args}
      />
    </form>
  );
};
TemplateWithForm.args = {
  dataList: radioGroupData,
  getValue: ({ data }) => data,
  getLabel: ({ data }) => data.data,
  checkOptionDisable: ({ disabled }) => disabled,
};

export const WithForm = TemplateWithForm.bind({});
