import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, InputProps } from ".";
import { Button } from "../Button";
import { storyIconOption } from "../resources/story-common";
import "./Input.stories.scss";

const meta: Meta<InputProps> = {
  title: "Components/Form/Input",
  component: Input,
  argTypes: {
    leadingAdornment: { ...storyIconOption },
    trailingAdornment: { ...storyIconOption },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = { label: "Hello Label!" };

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = { placeholder: "John Doe" };

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

export const WithAdornments = Template.bind({});
WithAdornments.args = {
  label: "What a label",
  placeholder: "John Doe",
  caption: <div className="input-stories-caption">Here is a caption</div>,
  trailingAdornment: ["fas", "dog"],
  trailingAdornmentOnClick() {
    alert("You clicked the dog!");
  },
  leadingAdornment: ["fas", "hand-peace"],
  leadingAdornmentOnClick() {
    alert("You clicked the hand-peace!");
  },
};

Default.args = {};

export const WithUseFormSetValue: Story<InputProps> = (args) => {
  const { register, setValue, control } = useForm<{ formValue: string }>();

  const generateRandomValue = () => {
    setValue("formValue", Math.random().toString());
  };

  return (
    <div>
      <p className="mb-4">
        <code>useForm's</code> <code>setValue</code> demo
      </p>

      <Input
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
    </div>
  );
};
