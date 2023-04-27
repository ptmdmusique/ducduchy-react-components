import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../Button";
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

const Template: StoryFn<ColorPickerProps> = (args) => <ColorPicker {...args} />;
export const Default: typeof Template = Template.bind({});
Default.args = {};

export const WithFreqUsedColor: typeof Template = Template.bind({});
WithFreqUsedColor.args = {
  defaultValue: "#6bf388",
  frequentlyUsedColorList: [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
  ],
};

export const WithFreqUsedColorAndNoPicker: typeof Template = Template.bind({});
WithFreqUsedColorAndNoPicker.args = {
  hidePicker: true,
  defaultValue: "#6bf388",
  frequentlyUsedColorList: [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
  ],
};

export const WithForm: StoryFn<ColorPickerProps> = (args) => {
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

const generateRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color: HEX = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export const WithControlledValue: StoryFn<ColorPickerProps> = (args) => {
  const [color, setColor] = useState<HEX>();

  return (
    <>
      <p className="mb-8">
        <strong>NOTE</strong>: There will be a small debounce delay (1ms) if
        you're using controlled props to prevent infinite render loop when
        dragging the picker's handler
        <br />
        <br />
        You won't see much effect, but it should technically put the change to
        the subsequent event loop. So it might cause some unintended side-effect
        but really rarely
      </p>

      <p>Current color: {color}</p>
      <ColorPicker
        {...args}
        label="My label"
        value={color}
        onChange={(event) => {
          setColor(event.target.value as HEX);
        }}
      />

      <Button
        onClick={() => {
          setColor(generateRandomHexColor());
        }}
        className="mt-4"
      >
        Generate random color
      </Button>
    </>
  );
};
