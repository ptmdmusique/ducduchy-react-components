import { Meta, Story } from "@storybook/react";
import { useRef } from "react";
import { Tooltip, TooltipProps } from ".";
import { Button } from "../Button";
import { storyDisabledOption } from "../resources/story-common";

const meta: Meta<TooltipProps> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    className: storyDisabledOption,
    containerId: storyDisabledOption,
    openOn: storyDisabledOption,
    defaultOpen: storyDisabledOption,
    offset: storyDisabledOption,
    popoverOption: storyDisabledOption,
    refElement: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story<TooltipProps> = (args) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const buttonRef3 = useRef<HTMLButtonElement>(null);

  return (
    <div className="text-skin-base">
      <Button ref={buttonRef}>Hover over me!</Button>

      <Tooltip
        offset={[0, 10]}
        stylePreset="preset-1"
        {...args}
        refElement={buttonRef}
      >
        <p>This is a tooltip with preset styling ╰(*°▽°*)╯</p>
      </Tooltip>

      <Button ref={buttonRef2} className="mt-8">
        Barebone tooltip!
      </Button>
      <Tooltip {...args} stylePreset={null} refElement={buttonRef2}>
        This is a barebone tooltip ☆*: .｡. o(≧▽≦)o .｡.:*☆
      </Tooltip>

      <Button ref={buttonRef3} className="mt-8">
        Top tooltip!
      </Button>
      <Tooltip
        offset={[0, 10]}
        {...args}
        refElement={buttonRef3}
        popoverOption={{ placement: "top" }}
      >
        This should show at the top (❁´◡`❁)
      </Tooltip>
    </div>
  );
};
