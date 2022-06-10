import { Meta, Story } from "@storybook/react";
import { Icon } from "../Icon";
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

const panelList: { icon: [string, string]; title: string }[] = [
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

const Template: Story<TabGroupProps> = (args) => (
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
export const Default = Template.bind({});
