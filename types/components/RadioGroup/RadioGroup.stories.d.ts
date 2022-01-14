import { Meta, Story } from "@storybook/react";
import { RadioGroupProps } from "./RadioGroup";
declare const radioGroupData: ({
    data: string;
    disabled: boolean;
} | {
    data: string;
    disabled?: undefined;
})[];
declare type Data = typeof radioGroupData[number];
declare type StoryRadioGroupProps = RadioGroupProps<Data, string>;
declare const meta: Meta<StoryRadioGroupProps>;
export default meta;
export declare const Default: Story<StoryRadioGroupProps>;
export declare const WithGroupLabel: Story<StoryRadioGroupProps>;
export declare const WithForm: Story<StoryRadioGroupProps>;
