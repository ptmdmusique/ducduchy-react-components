import { Meta, StoryFn } from "@storybook/react";
import {
  storyDisabledOption,
  storyIconOption,
} from "../resources/story-common";
import { Link, LinkProps } from "./Link";

const meta: Meta<LinkProps> = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    children: { control: { type: "text" } },
    iconStart: { ...storyIconOption },
    iconEnd: { ...storyIconOption },
    iconEndClassName: storyDisabledOption,
    iconStartClassName: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "A link for you!",
};
