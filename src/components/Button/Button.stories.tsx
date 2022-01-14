import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from ".";
import {
  storyDisabledOption,
  storyIconOption,
} from "../resources/story-common";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: { type: "text" } },
    icon: { ...storyIconOption },
    iconClassName: storyDisabledOption,
    type: storyDisabledOption,
    loadingIcon: storyDisabledOption,
    isRounded: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "I'm a button (*/ω＼*)",
};

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
  icon: ["fas", "heart"],
};
