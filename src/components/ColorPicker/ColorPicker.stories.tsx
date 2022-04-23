import { Meta, Story } from "@storybook/react";
import { storyDisabledOption } from "../resources/story-common";
import { ColorPicker, ColorPickerProps } from "./ColorPicker";

const meta: Meta<ColorPickerProps> = {
  title: "Components/Form/Color Picker",
  component: ColorPicker,
  argTypes: {
    caption: storyDisabledOption,
    captionIcon: storyDisabledOption,
    state: storyDisabledOption,
    leadingAdornment: storyDisabledOption,
    trailingAdornment: storyDisabledOption,
    leadingAdornmentOnClick: storyDisabledOption,
    trailingAdornmentOnClick: storyDisabledOption,
    debounceParam: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ColorPickerProps> = (args) => <ColorPicker {...args} />;
export const Default = Template.bind({});
Default.args = {};

export const WithFreqUsedColor = Template.bind({});
WithFreqUsedColor.args = {
  frequentlyUsedColorList: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5"],
};
