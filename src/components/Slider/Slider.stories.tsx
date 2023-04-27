import { Meta, StoryFn } from "@storybook/react";
import { useEffect, useState } from "react";
import { storyDisabledOption } from "../resources/story-common";
import { Slider, SliderProps } from "./Slider";

const meta: Meta<SliderProps> = {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    className: storyDisabledOption,
    renderMark: storyDisabledOption,
    renderThumb: storyDisabledOption,
    renderTrack: storyDisabledOption,
    onChange: storyDisabledOption,
    onFinalChange: storyDisabledOption,
    rtl: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const DEFAULT_VALUE_LIST = [40, 50];

const Template: StoryFn<SliderProps> = (args) => {
  const [valueList, setValueList] = useState<number[]>(args.valueList);
  const onChange: SliderProps["onChange"] = (newValueList) => {
    setValueList(newValueList);
  };

  useEffect(() => {
    setValueList(args.valueList);
  }, [args.valueList]);

  return (
    <div>
      <Slider {...args} valueList={valueList} onChange={onChange} />

      <div className="text-skin-base mt-8">
        Value list: {JSON.stringify(valueList)}
      </div>
    </div>
  );
};

export const Default: typeof Template = Template.bind({});
Default.args = {
  valueList: DEFAULT_VALUE_LIST,
  min: 0,
  max: 100,
  step: 2,
};
