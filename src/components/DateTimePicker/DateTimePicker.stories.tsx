import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DateTimePicker, DateTimePickerProps } from ".";
import { Button } from "../Button";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";

const meta: Meta<DateTimePickerProps> = {
  title: "Components/Form/DateTimePicker",
  component: DateTimePicker,
  argTypes: {
    className: storyDisabledOption,
    onChange: storyDisabledOption,
    caption: storyDisabledOption,
    leadingAdornment: storyDisabledOption,
    trailingAdornment: storyDisabledOption,
    leadingAdornmentOnClick: storyDisabledOption,
    trailingAdornmentOnClick: storyDisabledOption,
    locale: storyDisabledOption,
    calendarLeadingIcon: storyDisabledOption,
    clearDateIcon: storyDisabledOption,
    formValidation: storyDisabledOption,
    timePickerProps: storyDisabledOption,
    formControl: storyDisabledOption,
    debounceParam: storyDisabledOption,
    captionIcon: storyDisabledOption,
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
        <DateTimePicker
          {...args}
          formValidation={{ control: methods.control, name: "dateTimePicker" }}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};
WithForm.args = {
  label: "Meeting time",
};

export const WithLocale: Story<DateTimePickerProps> = (args) => {
  const [locale, setLocale] = useState<"vi" | "en">("en");

  return (
    <div className="mt-64">
      <DateTimePicker {...args} locale={locale} />

      <Button
        onClick={() => {
          setLocale(locale === "en" ? "vi" : "en");
        }}
        className="mt-8"
      >
        {locale === "vi" ? "Đổi ngôn ngữ!" : "Change languages"}
      </Button>
    </div>
  );
};

const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const WithReactHookFormSetValue: Story<DateTimePickerProps> = (args) => {
  const methods = useForm<{ dateTimeISO: string | undefined }>({
    defaultValues: { dateTimeISO: new Date().toISOString() },
  });
  const curValue = methods.watch("dateTimeISO")!;

  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <div className="mt-64">
          <DateTimePicker
            {...args}
            value={new Date(curValue)}
            onChange={(newISO) => {
              methods.setValue("dateTimeISO", newISO?.toISOString());
            }}
          />

          <Button
            onClick={() => {
              methods.setValue(
                "dateTimeISO",
                randomDate(new Date(1998, 0, 1), new Date()).toISOString(),
              );
            }}
            borderType="outline"
            className="mt-8"
            type="button"
          >
            Generate random date
          </Button>
        </div>
      </StorybookCommonWithForm>
    </FormProvider>
  );
};
WithReactHookFormSetValue.args = {
  dateFormat: "DD/MM/YYYY HH:mm",
};
