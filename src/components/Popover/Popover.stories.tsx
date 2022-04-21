import { Placement } from "@floating-ui/react-dom";
import { Meta, Story } from "@storybook/react";
import { Icon } from "../Icon";
import { storyDisabledOption } from "../resources/story-common";
import { Popover, PopoverProps } from "./Popover";
import { Popover as LibPopover } from "@headlessui/react";

type PopoverData = PopoverProps & { placement: Placement };
const placement = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end",
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
    placement: {
      options: placement,
      mapping: placement.reduce((acc, cur) => ({ ...acc, [cur]: cur }), {}),
      control: {
        type: "select",
        labels: placement.reduce((acc, cur) => ({ ...acc, [cur]: cur }), {}),
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
  icon: [string, string];
}) => {
  return (
    <button className="flex items-center py-2 px-4 w-64 focus:outline-none focus:bg-skin-disabled hover:bg-skin-disabled hover:cursor-pointer">
      <Icon icon={icon} className="fa-fw text-skin-secondary mr-2" />
      <span className="ml-2 text-skin-base">{text}</span>
    </button>
  );
};

const Template: Story<PopoverData> = (args) => {
  return (
    <div className="w-[40rem] h-[30rem] flex flex-col justify-center items-center">
      <p className="text-skin-base mb-12">
        Try placement with screen responsive to see Popover in action!
      </p>

      <Popover
        {...args}
        popoverOpenerProps={{ children: "Click me!" }}
        popperProps={{ placement: args.placement }}
      >
        <div className="divide-y divide-skin-disabled">
          <div>
            <IconWithText icon={["fas", "dog"]} text="A doggo option" />
            <IconWithText icon={["fas", "cat"]} text="A kat option" />
          </div>

          <div>
            <IconWithText icon={["fas", "hand-peace"]} text="A peace option" />
          </div>

          <div>
            <IconWithText icon={["fas", "trash"]} text="Delete" />
          </div>
        </div>
      </Popover>
    </div>
  );
};

export const Default = Template.bind({});

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

const GroupTemplate: Story<PopoverData> = (args) => {
  return (
    <div className="w-[40rem] h-[30rem] flex flex-col justify-center items-center">
      <p className="text-skin-base mb-12">
        Notice how Popover doesn't close when tabbing other Opener
      </p>

      <LibPopover.Group className="flex border border-skin-base border-opacity-40 divide-x divide-skin-disabled rounded-lg">
        {dataList.map((data, index) => (
          <Popover
            {...args}
            key={index}
            popoverOpenerProps={{
              children: data.buttonText,
              borderType: "plain",
              className: "!rounded-none",
            }}
            popperProps={{ placement: args.placement }}
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
      </LibPopover.Group>
    </div>
  );
};

export const Group = GroupTemplate.bind({});
