import { Meta, StoryFn } from "@storybook/react";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Icon, IconProps } from "../Icon";
import { storyDisabledOption } from "../resources/story-common";
import { TabGroup, TabGroupProps } from "./TabGroup";

const meta: Meta<TabGroupProps> = {
  title: "Components/Tab Group",
  component: TabGroup,
  argTypes: {
    getTabPanelProps: storyDisabledOption,
    getTabProps: storyDisabledOption,
    tabGroupProps: storyDisabledOption,
    tabListProps: storyDisabledOption,
    tabPanelsProps: storyDisabledOption,
    renderTab: storyDisabledOption,
    renderTabPanel: storyDisabledOption,
    numberOfTabs: storyDisabledOption,
    tabActiveIndicatorProps: storyDisabledOption,
    onChange: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const panelList: { icon: IconProps["icon"]; title: string }[] = [
  {
    icon: ["fas", "dog"],
    title: "Dog list",
  },
  {
    icon: ["fas", "cat"],
    title: "Cat list",
  },
  {
    icon: ["fas", "heart"],
    title: "Favorite list",
  },
];

const contentList = [
  {
    text: "Dog content",
  },
  {
    text: "Cat content",
  },
  {
    text: "Favorite content",
  },
];

const Template: StoryFn<TabGroupProps> = (args) => (
  <TabGroup
    {...args}
    tabGroupProps={{ className: "text-skin-base ml-16" }}
    numberOfTabs={Math.min(panelList.length, contentList.length)}
    renderTab={(index) => (
      <div className="flex">
        <Icon icon={panelList[index].icon} className="fa-fw mr-2" />
        {panelList[index].title}
      </div>
    )}
    getTabProps={() => ({ className: "px-4" })}
    renderTabPanel={(index) => <div>{contentList[index].text}</div>}
  />
);
export const Default: typeof Template = Template.bind({});

export const FullyStyled: StoryFn<TabGroupProps> = (args) => (
  <TabGroup
    {...args}
    tabGroupProps={{ className: "text-skin-base ml-16 bg-skin-top rounded-md" }}
    tabListProps={{ className: "flex" }}
    numberOfTabs={Math.min(panelList.length, contentList.length)}
    renderTab={(index) => (
      <div className="flex w-full justify-center">
        <Icon icon={panelList[index].icon} className="fa-fw mr-2" />
        {panelList[index].title}
      </div>
    )}
    getTabProps={() => ({ className: "px-4 flex-grow" })}
    renderTabPanel={(index) => (
      <div className="px-16 py-4">{contentList[index].text}</div>
    )}
  />
);

const getIndex = (index: number, length: number) =>
  Math.max(0, Math.min(index, length - 1));

export const ControlledIndex: StoryFn<TabGroupProps> = (args) => {
  const [selectedIndex, setSelectedIndex] = useState(
    args.defaultSelectedIndex ?? 0,
  );

  useEffect(() => {
    setSelectedIndex(
      getIndex(args.defaultSelectedIndex ?? 0, panelList.length),
    );
  }, [args.selectedIndex, args.defaultSelectedIndex]);

  return (
    <>
      <Button
        className="mb-8"
        onClick={() => setSelectedIndex((selectedIndex + 1) % panelList.length)}
      >
        Next index
      </Button>

      <TabGroup
        {...args}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        tabGroupProps={{ className: "text-skin-base bg-skin-top rounded-md" }}
        tabListProps={{ className: "flex" }}
        numberOfTabs={Math.min(panelList.length, contentList.length)}
        renderTab={(index) => (
          <div className="flex w-full justify-center">
            <Icon icon={panelList[index].icon} className="fa-fw mr-2" />
            {panelList[index].title}
          </div>
        )}
        getTabProps={() => ({ className: "px-4 flex-grow" })}
        renderTabPanel={(index) => (
          <div className="px-16 py-4">{contentList[index].text}</div>
        )}
      />
    </>
  );
};
