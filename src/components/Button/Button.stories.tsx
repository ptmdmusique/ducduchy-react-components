import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from ".";
import { storyIconOption } from "../resources/story-icon";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: { type: "text" } },
    icon: { ...storyIconOption },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => (
  <Button {...args} children={args.children ?? "I'm a button (*/ω＼*)"} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
