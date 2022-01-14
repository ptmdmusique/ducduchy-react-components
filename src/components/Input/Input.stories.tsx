import { Meta, Story } from "@storybook/react";
import React from "react";
import { Input, InputProps } from ".";
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
  leadingAdornment: ["fas", "hand-peace"],
};

Default.args = {};
