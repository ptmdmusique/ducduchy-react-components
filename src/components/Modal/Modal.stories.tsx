import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { storyDisabledOption } from "../resources/story-common";
import { Modal, ModalProps } from "./Modal";

const meta: Meta<ModalProps> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: storyDisabledOption,
    onClose: storyDisabledOption,
    className: storyDisabledOption,
    bodyClassName: storyDisabledOption,
    footerClassName: storyDisabledOption,
    animationAnchorElement: storyDisabledOption,
    animationType: storyDisabledOption,
    targetSize: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  header: "What a dope header 👌",
  showCloseButton: false,
  // @ts-ignore
  children: (
    <div className="px-6 pb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi,
      voluptate rem eaque odit provident repudiandae veritatis nihil facilis
      beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam,
      impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor
      voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?
    </div>
  ),
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  header: "What a dope header 👌",
  isOpen: true,
  showCloseButton: false,
  // @ts-ignore
  children: (
    <div className="px-6 pb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis nisi,
      voluptate rem eaque odit provident repudiandae veritatis nihil facilis
      beatae, ea quibusdam error maxime. Et nihil nam delectus esse aliquam,
      impedit rerum beatae? Natus officiis dolore quia, ratione minus dolor
      voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?
    </div>
  ),
  footer: (
    <div className="flex justify-end">
      <Button
        borderType="plain"
        colorType="info"
        onClick={() => window.alert("Hey you clicked me!")}
      >
        Alert!
      </Button>
    </div>
  ),
};

const TemplateWithCloseButton: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="px-6 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?
        </div>
      </Modal>

      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    </>
  );
};
export const WithCloseButtonAndEvent = TemplateWithCloseButton.bind({});
WithCloseButtonAndEvent.args = {
  header: "What a dope header 👌",
};

export const WithDetailOnCloseControl: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [onCloseMessage, setOnCloseMessage] =
    React.useState<string | null>(null);

  return (
    <>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={(triggeredOn) => {
          switch (triggeredOn) {
            case "close-button-click":
              setOnCloseMessage("clicking close button");
              break;
            case "standard":
              setOnCloseMessage("pressing Escape or clicking outside");
              break;
          }

          setIsOpen(false);
        }}
      >
        <div className="px-6 pb-4">
          Try to click on close button vs pressing Escape or clicking outside
        </div>
      </Modal>

      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        <p className="mt-8">Closed by: {onCloseMessage}</p>
      </div>
    </>
  );
};
WithDetailOnCloseControl.args = {
  header: "What a dope header 👌",
};

// TODO: fix this
// const TemplateExpandFromEle: Story<ModalProps> = (args) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   return (
//     <>
//       <Modal
//         {...args}
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         animationType="natural"
//         animationAnchorElement={ref.current}
//         isFullscreen
//       >
//         <div className="px-6 pb-4">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis
//           nisi, voluptate rem eaque odit provident repudiandae veritatis nihil
//           facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse
//           aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione
//           minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?
//         </div>
//       </Modal>

//       <div
//         ref={ref}
//         className="bg-skin-top shadow-md rounded-md mx-auto my-32 px-6 py-4"
//       >
//         <h4 className="text-lg font-semibold mb-2">Card header</h4>

//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Exercitationem optio ea dolore repellat. Veritatis iste molestias nisi
//           debitis excepturi soluta!
//         </p>

//         <div className="flex justify-end">
//           <Button
//             borderType="plain"
//             colorType="info"
//             onClick={() => setIsOpen(true)}
//           >
//             Open Modal
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };
// export const ExpandFromCertainElement = TemplateExpandFromEle.bind({});
// ExpandFromCertainElement.args = {
//   header: "What a dope header 👌",
// };
