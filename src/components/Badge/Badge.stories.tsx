import { Meta, Story } from "@storybook/react";
import React from "react";
import { Badge, BadgeProps } from ".";
import { storyIconOption, storyIcons } from "../resources/story-icon";
import "./Badge.stories.scss";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: { icon: { ...storyIconOption } },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BadgeProps> = (args) => (
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
Template.args = {
  text: "Math",
};

const StandaloneTemplate: Story<BadgeProps> = (args) => (
  <div className="standalone-badge-canvas-container">
    <Badge {...args} />
  </div>
);
Template.args = {
  text: "Math",
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Standalone = StandaloneTemplate.bind({});

Default.args = {};
