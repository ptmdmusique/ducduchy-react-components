import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { storyDisabledOption } from "../resources/story-common";
import { Menu, MenuProps } from "./Menu";

const menuItemList = [
  { label: "💪 My label", value: "my value" },
  { label: "✌ Hands", value: "my value 2" },
  { label: "🐶 Dog", value: "my value 3" },
  { label: "🐱 Cat", value: "my value 4" },
] as const;
type ItemType = typeof menuItemList[number];

type MenuData = MenuProps<ItemType>;

const meta: Meta<MenuData> = {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    renderCustomMenuOpener: storyDisabledOption,
    menuContainerAs: storyDisabledOption,
    menuProps: storyDisabledOption,
    menuItemList: storyDisabledOption,
    menuOpenerProps: storyDisabledOption,
    renderWholeItem: storyDisabledOption,
    renderItemContent: storyDisabledOption,
    onItemChosen: storyDisabledOption,
    itemContainerOnRightSide: { type: "boolean" },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<MenuData> = (args) => {
  const [chosenItem, setChosenItem] = useState<ItemType | null>(null);

  return (
    <div>
      <Menu
        {...args}
        menuProps={{ className: "ml-64", style: { width: "fit-content" } }}
        onItemChosen={setChosenItem}
        menuOpenerProps={{ children: "Click Me!" }}
        renderItemContent={(item) => (
          <div className="w-full py-2 px-4 text-skin-base">{item.label}</div>
        )}
      />

      <div className="mt-8 text-skin-base">
        Chosen item: {chosenItem?.label}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  menuItemList,
};
