import { Meta, Story } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { TimePicker, TimePickerProps } from ".";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";

const meta: Meta<TimePickerProps> = {
  title: "Components/Form/TimePicker",
  component: TimePicker,
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

const Template: Story<TimePickerProps> = (args) => <TimePicker {...args} />;
export const Default = Template.bind({});

const TemplateWithForm: Story<TimePickerProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <TimePicker
          {...args}
          formValidation={{ control: methods.control, name: "timePicker" }}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};

export const WithForm = TemplateWithForm.bind({});
WithForm.args = {
  label: "Meeting time",
};
