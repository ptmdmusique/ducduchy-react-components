import { Meta, StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { DatePicker, DatePickerProps } from ".";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";

const meta: Meta<DatePickerProps> = {
  title: "Components/Form/DatePicker",
  component: DatePicker,
  argTypes: {
    className: storyDisabledOption,
    formValidation: storyDisabledOption,
    onChange: storyDisabledOption,
    caption: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;
export const Default: typeof Template = Template.bind({});

const TemplateWithForm: StoryFn<DatePickerProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <DatePicker
          {...args}
          formValidation={{ control: methods.control, name: "datePicker" }}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};

export const WithForm: typeof TemplateWithForm = TemplateWithForm.bind({});
WithForm.args = {
  label: "Date of Birth",
};

export const InlineDatePicker: StoryFn<DatePickerProps> = (args) => {
  const methods = useForm();
  return (
    <DatePicker
      {...args}
      formValidation={{ control: methods.control, name: "datePicker" }}
      inline
    />
  );
};

export const InlineDatePickerWithForm: StoryFn<DatePickerProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <DatePicker
          {...args}
          formValidation={{ control: methods.control, name: "datePicker" }}
          inline
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};
