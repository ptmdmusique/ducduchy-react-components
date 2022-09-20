// @ts-nocheck
import { Meta, Story } from "@storybook/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DateTimePicker, DateTimePickerProps } from ".";
import { Button } from "../Button";
import { Modal } from "../Modal";
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
    dateTimePickerProps: storyDisabledOption,
    formControl: storyDisabledOption,
    debounceParam: storyDisabledOption,
    captionIcon: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DateTimePickerProps> = (args) => {
  const [regularOnChangeValue, setRegularOnChangeValue] =
    useState<Date | null>(null);
  const [onCloseValue, setOnCloseValue] = useState<Date | null>(null);

  return (
    <div className="mt-[12rem]">
      <p className="mb-4">
        Regular onChange value:{" "}
        {regularOnChangeValue ? regularOnChangeValue.toString() : "null"}
      </p>

      <p className="mb-32">
        onClose value: {onCloseValue ? onCloseValue.toString() : "null"}
      </p>

      <DateTimePicker
        {...args}
        onChange={(newValue, triggeredOn) => {
          if (triggeredOn === "user-pick") {
            setRegularOnChangeValue(newValue);
          } else if (triggeredOn === "on-accepted") {
            setOnCloseValue(newValue);
          }
        }}
      />
    </div>
  );
};
const Default = Template.bind({});

const WithForm: Story<DateTimePickerProps> = (args) => {
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

const WithLocale: Story<DateTimePickerProps> = (args) => {
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

const WithReactHookFormSetValue: Story<DateTimePickerProps> = (args) => {
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

const WithDateConstraints: Story<DateTimePickerProps> = (args) => (
  <DateTimePicker {...args} />
);
WithDateConstraints.args = {
  minDate: dayjs(new Date(2022, 1, 1)),
  maxDate: dayjs(new Date()),
};

const getTomorrowDate = (date: Date) => {
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

const WithSyncPicker: Story<DateTimePickerProps> = (args) => {
  const [startDate, setStartDate] = useState<null | Date>(new Date());
  const [endDate, setEndDate] = useState<null | Date>(
    getTomorrowDate(new Date()),
  );

  useEffect(() => {
    setEndDate(startDate ? getTomorrowDate(startDate) : null);
  }, [startDate]);

  return (
    <div className="mt-32">
      <DateTimePicker value={startDate} label="Start date" />
      <DateTimePicker value={endDate} label="Tomorrow date" className="mt-2" />

      <Button
        onClick={() => {
          setStartDate(null);
        }}
        className="mt-8"
      >
        Clear Date
      </Button>
      <Button
        onClick={() => {
          setStartDate(randomDate(new Date(), new Date(2099, 1, 1)));
        }}
        borderType="outline"
        className="mt-2"
      >
        Random date
      </Button>
    </div>
  );
};

const WithModal: Story<DateTimePickerProps> = (args) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setModalOpen(!modalOpen)}>Open modal</Button>

      <Modal
        isOpen={modalOpen}
        bodyClassName="px-4 py-16"
        onClose={() => setModalOpen(false)}
      >
        <DateTimePicker {...args} />
      </Modal>
    </>
  );
};

WithModal.args = {
  minDate: new Date(2022, 1, 1),
  maxDate: new Date(),
};
