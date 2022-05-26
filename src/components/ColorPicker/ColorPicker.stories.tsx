import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";
import { ColorPicker, ColorPickerProps, HEX } from "./ColorPicker";

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
Default.args = {
  borderType: "plain",
};

export const WithFreqUsedColor = Template.bind({});
WithFreqUsedColor.args = {
  borderType: "plain",
  frequentlyUsedColorList: [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
  ],
};

export const WithForm: Story<ColorPickerProps> = (args) => {
  const methods = useForm<{ color: HEX }>();

  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <ColorPicker {...args} {...methods.register("color")} />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};
WithForm.args = { borderType: "plain" };
