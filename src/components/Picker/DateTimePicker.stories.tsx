import { Meta, Story } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { DateTimePicker, DateTimePickerProps } from ".";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";

const meta: Meta<DateTimePickerProps> = {
  title: "Components/Form/DateTimePicker",
  component: DateTimePicker,
  argTypes: {
    className: storyDisabledOption,
    onChange: storyDisabledOption,
    caption: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DateTimePickerProps> = (args) => (
  <div className="mt-[20rem]">
    <DateTimePicker {...args} />
  </div>
);
export const Default = Template.bind({});

export const WithForm: Story<DateTimePickerProps> = (args) => {
  const methods = useForm<{ dateTimePicker: string }>();
  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <DateTimePicker {...args} {...methods.register("dateTimePicker")} />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};
WithForm.args = {
  label: "Meeting time",
};
