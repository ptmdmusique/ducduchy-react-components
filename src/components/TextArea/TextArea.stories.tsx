import { Meta, Story } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { TextArea, TextAreaProps } from ".";
import { Button } from "../Button";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";
import "./TextArea.stories.scss";

const meta: Meta<TextAreaProps> = {
  title: "Components/Form/Text Area",
  component: TextArea,
  argTypes: {
    label: { type: "string" },
    caption: { type: "string" },
    debounceParam: storyDisabledOption,
    formControl: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextAreaProps> = ({ ref, ...args }) => (
  <TextArea {...args} />
);
export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = { label: "Hello Label!" };

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = { placeholder: "John Doe" };

export const WithMinRows = Template.bind({});
WithMinRows.args = { minRows: 5 };

export const WithLabelAndPlaceholder = Template.bind({});
WithLabelAndPlaceholder.args = {
  label: "What a label",
  placeholder: "John Doe",
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  label: "What a label",
  placeholder: "John Doe",
  caption: <div className="input-stories-caption">Here is a caption</div>,
};

Default.args = {};

export const WithUseFormSetValue: Story<TextAreaProps> = (args) => {
  const methods = useForm<{ formValue: string }>();
  const { register, setValue, control } = methods;

  const generateRandomValue = () => {
    setValue("formValue", Math.random().toString());
  };

  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <p className="mb-4">
          <code>useForm's</code> <code>setValue</code> demo
        </p>

        <TextArea
          {...args}
          {...register("formValue")}
          label="My Label"
          formControl={control}
        />

        <Button
          borderType="outline"
          className="mt-4"
          onClick={generateRandomValue}
        >
          Generate random value
        </Button>

        <p className="mt-8">
          You <strong>MUST</strong> pass the <code>control</code> value from
          <code>useForm</code> to make the label float correctly
          <br />
          ---
          <br />
          OR you can pass the `hasContent` prop to control the label float
          yourself
        </p>
      </StorybookCommonWithForm>
    </FormProvider>
  );
};