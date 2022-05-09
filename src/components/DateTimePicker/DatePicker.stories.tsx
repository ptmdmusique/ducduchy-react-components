import { Meta, Story } from "@storybook/react";
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

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;
export const Default = Template.bind({});

const TemplateWithForm: Story<DatePickerProps> = (args) => {
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

export const WithForm = TemplateWithForm.bind({});
WithForm.args = {
  label: "Date of Birth",
};
