import { Meta, Story } from "@storybook/react";
import { storyDisabledOption } from "../resources/story-common";
import { Popover, PopoverProps } from "./Popover";

const meta: Meta<PopoverProps> = {
  title: "Components/Popover",
  component: Popover,
  argTypes: {
    popoverContainerAs: storyDisabledOption,
    popoverOpenerProps: storyDisabledOption,
    popoverProps: storyDisabledOption,
    popoverPanelProps: storyDisabledOption,
    children: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PopoverProps> = (args) => {
  return (
    <div className="w-64 h-[20rem] flex justify-center items-center">
      <Popover {...args} popoverOpenerProps={{ children: "Click me!" }}>
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>
      </Popover>
    </div>
  );
};

export const Default = Template.bind({});
