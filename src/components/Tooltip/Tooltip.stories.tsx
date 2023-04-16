import { Meta, StoryFn } from "@storybook/react";
import { useRef } from "react";
import { Tooltip, TooltipProps } from ".";
import { Button } from "../Button";
import { Modal } from "../Modal";
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

export const Default: StoryFn<TooltipProps> = (args) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const buttonRef3 = useRef<HTMLButtonElement>(null);

  return (
    <div className="text-skin-base" id="root">
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

export const InAModal: StoryFn<TooltipProps> = (args) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const buttonRef3 = useRef<HTMLButtonElement>(null);

  return (
    <div id="root">
      <Modal isOpen={true} bodyClassName="py-16 px-4 text-skin-base">
        <p className="mb-2">
          Tooltip without z-index set will be behind the modal
        </p>
        <Button ref={buttonRef} className="mb-16">
          Hover over me!
        </Button>

        <Tooltip
          offset={[0, 10]}
          stylePreset="preset-1"
          {...args}
          refElement={buttonRef}
        >
          <p>This is a tooltip with preset styling ╰(*°▽°*)╯</p>
        </Tooltip>

        <p className="mb-2">You can use `inModal` prop</p>
        <Button ref={buttonRef2} className="mb-16">
          Hover over me!
        </Button>

        <Tooltip
          offset={[0, 10]}
          stylePreset="preset-1"
          {...args}
          refElement={buttonRef2}
          inModal
        >
          <p>This is a tooltip with preset styling ╰(*°▽°*)╯</p>
        </Tooltip>

        <p className="mb-2">
          Or manually set the z-index to be higher than the modal (don't go too
          wild!)
        </p>
        <Button ref={buttonRef3} className="mb-16">
          Hover over me!
        </Button>

        <Tooltip
          offset={[0, 10]}
          stylePreset="preset-1"
          {...args}
          refElement={buttonRef3}
          zIndex={1000}
        >
          <p>This is a tooltip with preset styling ╰(*°▽°*)╯</p>
        </Tooltip>
      </Modal>
    </div>
  );
};
