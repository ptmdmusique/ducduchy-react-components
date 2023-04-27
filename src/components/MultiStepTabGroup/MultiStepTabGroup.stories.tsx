import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { IconProps } from "../Icon";
import { Modal } from "../Modal";
import { storyDisabledOption } from "../resources/story-common";
import { MultiStepTabGroup, MultiStepTabGroupProps } from "./MultiStepTabGroup";

const meta: Meta<MultiStepTabGroupProps> = {
  title: "Components/Multi Step Tab Group",
  component: MultiStepTabGroup,
  argTypes: {
    getTabPanelProps: storyDisabledOption,
    className: storyDisabledOption,
    getBubbleContent: storyDisabledOption,
    renderTabPanel: storyDisabledOption,
    numberOfTabs: storyDisabledOption,
    getTabContent: storyDisabledOption,
    onChange: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const panelList: { icon: IconProps["icon"]; title: string }[] = [
  { icon: ["fas", "dog"], title: "Dog list" },
  { icon: ["fas", "cat"], title: "Cat list" },
  { icon: ["fas", "heart"], title: "Favorite list" },
];

const contentList = [
  { text: "Dog content" },
  { text: "Cat content" },
  { text: "Favorite content" },
];

export const ControlledIndex: StoryFn<MultiStepTabGroupProps> = (args) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<null | number>(null);

  return (
    <>
      <div className="text-skin-base mb-4">
        <p>Useful for multi step form</p>
        <p>You have fully controlled of whether to move to any other steps</p>
        <br />
        <p>For instance:</p>
        <p>Click on Next Index will move the user to next step</p>
        <p>While clicking on step bubble will show a confirmation modal</p>
      </div>

      <Button
        className="mb-8"
        onClick={() => setSelectedIndex((selectedIndex + 1) % panelList.length)}
      >
        Next index
      </Button>

      <p className="mb-12 text-skin-base">Cur index: {selectedIndex}</p>

      <MultiStepTabGroup
        {...args}
        selectedIndex={selectedIndex}
        onChange={setNextIndex}
        numberOfTabs={Math.min(panelList.length, contentList.length)}
        getTabContent={(index) => panelList[index].title}
        renderTabPanel={(index) => <div>{contentList[index].text}</div>}
      />

      <Modal
        isOpen={nextIndex != null}
        onClose={() => {
          setNextIndex(null);
        }}
        header="Confirm"
        footer={
          <div className="flex justify-end">
            <Button borderType="plain" onClick={() => setNextIndex(null)}>
              Cancel
            </Button>
            <Button
              borderType="plain"
              onClick={() => {
                nextIndex != null && setSelectedIndex(nextIndex);
                setNextIndex(null);
              }}
            >
              Confirm
            </Button>
          </div>
        }
      >
        <p className="text-skin-base px-6">
          {nextIndex != null &&
            `Are you sure you want to move on to "${panelList[nextIndex].title}" step?`}
        </p>
      </Modal>
    </>
  );
};
