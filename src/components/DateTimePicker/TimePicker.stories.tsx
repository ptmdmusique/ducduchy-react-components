import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
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

const Template: StoryFn<TimePickerProps> = (args) => (
  <div className="mt-[20rem]">
    <p>
      <strong>NOTE:</strong> Technically this is still a normal duration picker
      but masked as a time of date picker.
    </p>
    <p className="mb-12">
      Thus, only the masked and unmasked value are different
    </p>

    <TimePicker {...args} />
  </div>
);
export const Default: typeof Template = Template.bind({});

const TemplateWithForm: StoryFn<TimePickerProps> = (args) => {
  const methods = useForm<{ durationPicker: number }>();
  const [unmaskedValue, setUnmaskedValue] = useState<string>();
  const [maskedValue, setMaskedValue] = useState<string>();
  const [durationInMs, setDurationInMs] = useState<number>();

  return (
    <FormProvider {...methods}>
      <p>
        <strong>NOTE:</strong> Technically this is still a normal duration
        picker but masked as a time of date picker.
      </p>
      <p className="mb-12">
        Thus, only the masked and unmasked value are different
      </p>

      <StorybookCommonWithForm>
        <div className="flex flex-col mb-8">
          <code className="text-skin-base">Unmasked value {unmaskedValue}</code>
          <code className="text-skin-base">Masked value {maskedValue}</code>
          <code className="text-skin-base">Duration in MS {durationInMs}</code>
        </div>

        <TimePicker
          {...args}
          {...methods.register("durationPicker")}
          onChange={(unmaskedValue, maskedValue, durationInMs) => {
            methods.setValue("durationPicker", durationInMs);
            setUnmaskedValue(unmaskedValue);
            setMaskedValue(maskedValue);
            setDurationInMs(durationInMs);
          }}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};

export const WithForm: typeof TemplateWithForm = TemplateWithForm.bind({});
WithForm.args = {
  label: "Meeting time",
};
