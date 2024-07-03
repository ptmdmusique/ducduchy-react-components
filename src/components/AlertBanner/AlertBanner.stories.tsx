import { Meta, StoryFn } from "@storybook/react";
import { Fragment } from "react";
import { ColorType, colorTypeList } from "../resources/common.data";
import {
  storyDisabledOption,
  storyIconOption,
} from "../resources/story-common";
import { AlertBanner, AlertBannerProps } from "./AlertBanner";

const meta: Meta<AlertBannerProps> = {
  title: "Components/Alert Banner",
  component: AlertBanner,
  argTypes: {
    icon: { ...storyIconOption },
    className: storyDisabledOption,
    iconClassName: storyDisabledOption,
    colorType: storyDisabledOption,

    header: { type: "string" },
    description: { type: "string" },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const colorTypeToIcon = (colorType: ColorType) => {
  switch (colorType) {
    case "danger":
    case "warning":
      return "triangle-exclamation";
    case "success":
      return "circle-check";
    case "info":
      return "circle-info";
    default:
      return "dog";
  }
};

export const Default: StoryFn<AlertBannerProps> = (args) => (
  <>
    <p className="text-base mb-8">
      Inspired by{" "}
      <a
        href="https://esri.github.io/calcite-components/?path=/story/components-alert--title-message-link"
        target="_blank"
        rel="noreferrer"
        className="text-skin-info font-medium hover:underline"
      >
        Calcite Alert
      </a>
    </p>

    {colorTypeList.map((type) => (
      <Fragment key={type}>
        <p>Color type: {type}</p>
        <AlertBanner
          colorType={type}
          icon={["fas", colorTypeToIcon(type)]}
          {...args}
        />
        <br className="my-2" />
      </Fragment>
    ))}
  </>
);
Default.args = {
  header: "This is a header",
  description: "What a description",
};

export const NoIcon: StoryFn<AlertBannerProps> = () => {
  return (
    <div className="text-skin-base">
      <AlertBanner
        colorType="info"
        header="No icon"
        description="No icon description"
      />

      <br className="my-2" />

      <AlertBanner
        colorType="info"
        header="No icon"
        description="No icon description No icon description No icon description No icon description No icon description No icon description No icon description No icon description No icon description"
      />
    </div>
  );
};
