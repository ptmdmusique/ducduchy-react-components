import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DurationPicker, DurationPickerProps } from ".";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";

const meta: Meta<DurationPickerProps> = {
  title: "Components/Form/DurationPicker",
  component: DurationPicker,
  argTypes: {
    className: storyDisabledOption,
    onChange: storyDisabledOption,
    caption: storyDisabledOption,
    localeText: storyDisabledOption,
    doDisabled: storyDisabledOption,
    captionIcon: storyDisabledOption,
    label: storyDisabledOption,
    leadingAdornment: storyDisabledOption,
    leadingAdornmentOnClick: storyDisabledOption,
    trailingAdornment: storyDisabledOption,
    trailingAdornmentOnClick: storyDisabledOption,
    debounceParam: storyDisabledOption,
    formControl: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DurationPickerProps> = (args) => (
  <div className="mt-[20rem]">
    <p className="mb-12">
      <strong>NOTE:</strong> Controlled form hasn't work yet
    </p>

    <DurationPicker {...args} label="A simple label" defaultValue={45240000} />
  </div>
);
export const Default = Template.bind({});

const TemplateWithForm: Story<DurationPickerProps> = (args) => {
  const methods = useForm<{ durationPicker: number }>();
  const [unmaskedValue, setUnmaskedValue] = useState<string>();
  const [maskedValue, setMaskedValue] = useState<string>();
  const [durationInMs, setDurationInMs] = useState<number>();

  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <div className="flex flex-col mb-8">
          <code className="text-skin-base">Unmasked value {unmaskedValue}</code>
          <code className="text-skin-base">Masked value {maskedValue}</code>
          <code className="text-skin-base">Duration in MS {durationInMs}</code>
        </div>

        <DurationPicker
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

export const WithForm = TemplateWithForm.bind({});
WithForm.args = {
  label: "Meeting time",
};
