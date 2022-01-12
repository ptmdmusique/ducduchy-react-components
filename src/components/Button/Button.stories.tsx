import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: "I'm a button (*/ω＼*)",
      control: {
        type: 'text',
      },
    },
    icon: {
      options: [
        ['fas', 'hand-peace'],
        ['fas', 'dog'],
        ['fas', 'cat'],
      ],
      control: {
        type: 'select',
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
