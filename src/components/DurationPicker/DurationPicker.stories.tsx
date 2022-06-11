import { Meta, Story } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DurationPicker, DurationPickerProps } from ".";
import { Button } from "../Button";
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

export const WithControlledForm: Story<DurationPickerProps> = (args) => {
  const methods = useForm<{ durationPicker: number }>();
  const durationInMs = methods.watch("durationPicker");

  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <p className="text-skin-base mb-2">Value in ms {durationInMs}</p>

        <DurationPicker
          {...args}
          {...methods.register("durationPicker")}
          value={durationInMs}
          onChange={(_1, _2, durationInMs) => {
            methods.setValue("durationPicker", durationInMs);
          }}
        />

        <Button
          className="mt-4"
          onClick={() => {
            methods.setValue(
              "durationPicker",
              Math.round(Math.random() * 86400000),
            );
          }}
          type="button"
        >
          Set custom value in ms
        </Button>
      </StorybookCommonWithForm>
    </FormProvider>
  );
};

export const TimeOfDatePicker: Story<DurationPickerProps> = (args) => {
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

        <DurationPicker
          {...args}
          {...methods.register("durationPicker")}
          onChange={(unmaskedValue, maskedValue, durationInMs) => {
            methods.setValue("durationPicker", durationInMs);
            setUnmaskedValue(unmaskedValue);
            setMaskedValue(maskedValue);
            setDurationInMs(durationInMs);
          }}
          doDisabled={{ days: true, seconds: true }}
          localeText={{
            // hours: ":",
            minutes: "as",
          }}
          separatedBySpace={false}
          dropdownItemProps={{
            minDuration: 0,
            maxDuration: 86400000,
            interval: 900000,
            inclusiveEnd: false,
            formatItem: (_, durationInMs) => {
              return dayjs()
                .startOf("day")
                .add(durationInMs, "ms")
                .format("hh:mm a");
            },
          }}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};
