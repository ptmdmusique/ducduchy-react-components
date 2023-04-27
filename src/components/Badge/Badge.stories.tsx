import { Meta, StoryFn } from "@storybook/react";
import { Badge, BadgeProps } from ".";
import {
  storyDisabledOption,
  storyIconOption,
} from "../resources/story-common";
import "./Badge.stories.scss";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    icon: { ...storyIconOption },
    className: storyDisabledOption,
    iconClassName: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: StoryFn<BadgeProps> = (args) => (
  <div className="canvas-container">
    <div className="title">
      <p className="title-text">Midterm Quiz</p>
      <Badge {...args} />
    </div>

    <p className="desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam quo
      in! Consectetur dolor sint ab atque asperiores, eligendi esse dolore
      magni, harum odit dolorum inventore facilis autem aspernatur vero
      blanditiis fugiat? Nemo pariatur eius ut, eos mollitia voluptate dicta
      illo fuga id quo et beatae asperiores animi qui praesentium.
    </p>
  </div>
);

Default.args = { text: "Math" };

export const Standalone: StoryFn<BadgeProps> = (args) => (
  <div className="standalone-badge-canvas-container">
    <Badge {...args} />
  </div>
);

Standalone.args = { text: "A smol badge" };
