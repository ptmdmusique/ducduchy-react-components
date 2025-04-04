import {
  Popover as LibPopover,
  PopoverPanelProps as LibPopoverPanelProps,
  PopoverGroup,
} from "@headlessui/react";
import { Meta, StoryFn } from "@storybook/react";
import { Icon, IconProps } from "../Icon";
import { storyDisabledOption } from "../resources/story-common";
import { Popover, PopoverProps } from "./Popover";

type PopoverData = PopoverProps & {
  anchor: LibPopoverPanelProps["anchor"];
};

const anchor = [
  "bottom start",
  "bottom",
  "bottom end",
  "top start",
  "top",
] as const;

const meta: Meta<PopoverData> = {
  title: "Components/Popover",
  component: Popover,
  argTypes: {
    popoverContainerAs: storyDisabledOption,
    popoverOpenerProps: storyDisabledOption,
    popoverProps: storyDisabledOption,
    popoverPanelProps: storyDisabledOption,
    popperProps: storyDisabledOption,
    children: storyDisabledOption,
    anchor: {
      options: anchor,
      mapping: anchor.reduce((acc, cur) => ({ ...acc, [cur]: cur }), {}),
      control: {
        type: "select",
        labels: anchor.reduce((acc, cur) => ({ ...acc, [cur]: cur }), {}),
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const IconWithText = ({
  icon,
  text,
}: {
  text: string;
  icon: IconProps["icon"];
}) => {
  return (
    <button className="flex items-center py-2 px-4 w-64 focus:outline-none focus:bg-skin-disabled hover:bg-skin-disabled hover:cursor-pointer">
      <Icon icon={icon} className="fa-fw text-skin-secondary mr-2" />
      <span className="ml-2 text-skin-base">{text}</span>
    </button>
  );
};

const Template: StoryFn<PopoverData> = (args) => {
  return (
    <div className="w-[40rem] h-[30rem] flex flex-col justify-center items-center">
      <p className="text-skin-base mb-12">
        Try placement with screen responsive to see Popover in action!
      </p>

      <LibPopover.Group>
        <Popover
          {...args}
          popoverOpenerProps={{ children: "Click me!" }}
          popoverPanelProps={{ anchor: args.anchor }}
        >
          <div className="divide-y divide-skin-disabled">
            <div>
              <IconWithText icon={["fas", "dog"]} text="A doggo option" />
              <IconWithText icon={["fas", "cat"]} text="A kat option" />
            </div>

            <div>
              <IconWithText
                icon={["fas", "hand-peace"]}
                text="A peace option"
              />
            </div>

            <div>
              <IconWithText icon={["fas", "trash"]} text="Delete" />
            </div>
          </div>
        </Popover>
      </LibPopover.Group>
    </div>
  );
};

export const Default: typeof Template = Template.bind({});

const dataList = [
  {
    buttonText: "Solution",
    contentList: [
      [
        { icon: ["fas", "dog"], text: "Doggo" },
        { icon: ["fas", "cat"], text: "Cat" },
        { icon: ["fas", "file-audio"], text: "Music" },
      ],
      [{ icon: ["fas", "trash"], text: "Delete" }],
    ],
  },
  {
    buttonText: "Something else",
    contentList: [[{ icon: ["fas", "hand-peace"], text: "Peace" }]],
  },
  {
    buttonText: "More here!",
    contentList: [
      [
        { icon: ["fas", "heart"], text: "What a heart" },
        { icon: ["fas", "spinner"], text: "Here come a spinner" },
      ],
      [{ icon: ["fas", "check"], text: "Check mate!" }],
      [{ icon: ["fas", "info-circle"], text: "Hey I'm an info!" }],
    ],
  },
] as const;

const GroupTemplate: StoryFn<PopoverData> = (args) => {
  return (
    <div className="w-[40rem] h-[30rem] flex flex-col justify-center items-center">
      <p className="text-skin-base mb-12">
        Notice how Popover doesn't close when tabbing other Opener
      </p>

      <PopoverGroup className="flex border border-skin-base border-opacity-40 divide-x divide-skin-disabled rounded-lg">
        {dataList.map((data, index) => (
          <Popover
            {...args}
            key={index}
            popoverOpenerProps={{
              children: data.buttonText,
              borderType: "plain",
              className: "!rounded-none",
            }}
            popoverPanelProps={{ anchor: args.anchor }}
          >
            <div className="divide-y divide-skin-disabled">
              {data.contentList.map((content, index) => (
                <div key={index}>
                  {content.map((item, index) => (
                    <IconWithText
                      key={index}
                      // @ts-ignore
                      icon={item.icon}
                      text={item.text}
                    />
                  ))}
                </div>
              ))}
            </div>
          </Popover>
        ))}
      </PopoverGroup>
    </div>
  );
};

export const Group: typeof GroupTemplate = GroupTemplate.bind({});
