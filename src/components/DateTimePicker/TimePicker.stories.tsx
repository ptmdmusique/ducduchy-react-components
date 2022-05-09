import { Meta, Story } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";
import { TimePicker, TimePickerProps } from "./TimePicker";

const meta: Meta<TimePickerProps> = {
  title: "Components/Form/TimePicker",
  component: TimePicker,
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

const Template: Story<TimePickerProps> = (args) => (
  <div className="mt-[20rem]">
    <TimePicker {...args} />
  </div>
);
export const Default = Template.bind({});

const TemplateWithForm: Story<TimePickerProps> = (args) => {
  const methods = useForm<{ timePicker: string }>();

  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <TimePicker
          {...args}
          {...methods.register("timePicker")}
          onChange={(unmaskedValue) => {
            // methods.setValue("timePicker", unmaskedValue);
          }}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};

export const WithForm = TemplateWithForm.bind({});
WithForm.args = {
  label: "Meeting time",
};
