import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from ".";
import {
  storyDisabledOption,
  storyIconOption,
} from "../resources/story-common";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button as React.FC<ButtonProps>,
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

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;
export const Default: typeof Template = Template.bind({});
Default.args = {
  children: "I'm a button (*/ω＼*)",
};

export const Rounded: typeof Template = Template.bind({});
Rounded.args = {
  isRounded: true,
  icon: ["fas", "heart"],
};
