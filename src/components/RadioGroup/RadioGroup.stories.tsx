import { Meta, StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";
import { storyDisabledOption } from "../resources/story-common";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

const radioGroupData = [
  { data: "🐶 Dog", disabled: true },
  { data: "🐱 Cat" },
  { data: "🐭 Mouse" },
  { data: "🦜 Bird" },
];

type Data = (typeof radioGroupData)[number];
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
    radioGroupLabel: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<StoryRadioGroupProps> = (args) => (
  <RadioGroup {...args} />
);
export const Default: typeof Template = Template.bind({});
Default.args = {
  dataList: radioGroupData,
  getValue: ({ data }) => data,
  getLabel: ({ data }) => <div>{data.data}</div>,
  checkOptionDisable: ({ disabled }) => disabled,
};

export const WithGroupLabel: typeof Template = Template.bind({});
WithGroupLabel.args = {
  dataList: radioGroupData,
  getValue: ({ data }) => data,
  getLabel: ({ data }) => <div>{data.data}</div>,
  checkOptionDisable: ({ disabled }) => disabled,
  radioGroupLabel: (
    <div className="text-lg font-semibold text-skin-exquisite">
      😶‍🌫️ A Fancy Label 😶‍🌫️
    </div>
  ),
};

const TemplateWithForm: StoryFn<StoryRadioGroupProps> = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <RadioGroup
          formValidation={{ control: methods.control, name: "radioGroup" }}
          {...args}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};

export const WithForm: typeof TemplateWithForm = TemplateWithForm.bind({});
WithForm.args = {
  dataList: radioGroupData,
  getValue: ({ data }) => data,
  getLabel: ({ data }) => <div>{data.data}</div>,
  checkOptionDisable: ({ disabled }) => disabled,
};
