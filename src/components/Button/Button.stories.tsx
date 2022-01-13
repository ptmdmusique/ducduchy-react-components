import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from ".";

const icons = {
  "✌": ["fas", "hand-peace"],
  "🐶": ["fas", "dog"],
  "🐱": ["fas", "cat"],
} as const;

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "I'm a button (*/ω＼*)",
      control: {
        type: "text",
      },
    },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: Object.entries(icons).reduce(
          (accum, [key, icon]) => ({
            ...accum,
            [key]: `${key} ${icon[1]}`,
          }),
          {},
        ),
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
