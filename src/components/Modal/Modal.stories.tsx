import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
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

export const WithMultipleModal: Story<ModalProps> = (args) => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isFirstOpen2, setIsFirstOpen2] = useState(false);
  const [isSecondOpen2, setIsSecondOpen2] = useState(false);

  return (
    <>
      <div className="px-6 pb-4 text-base">
        <p>
          <strong>Notice</strong> how after the 2nd modal is opened, when you
          click anywhere (even inside the modal), the 1st modal will be closed
        </p>

        <p className="mt-2">
          This is by designed because those click count as "clicking outside"
          relative to the 1st modal, which in turns emit the onClose event
        </p>
      </div>

      <Button onClick={() => setIsFirstOpen(true)}>Open first modal</Button>

      <Modal
        {...args}
        isOpen={isFirstOpen}
        onClose={() => {
          setIsFirstOpen(false);
        }}
        footer={
          <>
            <Button onClick={() => setIsSecondOpen(true)}>
              Open second modal
            </Button>
          </>
        }
      >
        <div className="px-6 py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?
        </div>
      </Modal>

      <Modal
        {...args}
        isOpen={isSecondOpen}
        onClose={() => {
          setIsSecondOpen(false);
        }}
      >
        <div className="px-6 py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?
        </div>
      </Modal>

      <div className="px-6 pb-4 mt-6 text-base">
        <p>
          If you don't want that to happen, make sure to check if the 2nd modal
          is opened or not when you receive the onClose event from the 1st modal
        </p>

        <p>
          <strong>Note</strong> even this will still fail if the user click
          outside of the 2nd modal
        </p>
      </div>

      <Button onClick={() => setIsFirstOpen2(true)}>
        Open first modal with strict check
      </Button>

      <Modal
        {...args}
        isOpen={isFirstOpen2}
        onClose={() => {
          if (!isSecondOpen2) {
            // Only close if the 2nd one is not
            setIsFirstOpen2(false);
          }
        }}
        footer={
          <>
            <Button onClick={() => setIsSecondOpen2(true)}>
              Open second modal
            </Button>
          </>
        }
      >
        <div className="px-6 py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?
        </div>
      </Modal>

      <Modal
        {...args}
        isOpen={isSecondOpen2}
        onClose={() => {
          setIsSecondOpen2(false);
        }}
      >
        <div className="px-6 py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis
          nisi, voluptate rem eaque odit provident repudiandae veritatis nihil
          facilis beatae, ea quibusdam error maxime. Et nihil nam delectus esse
          aliquam, impedit rerum beatae? Natus officiis dolore quia, ratione
          minus dolor voluptas tempora placeat iusto, nisi vitae ipsa magnam ad?
        </div>
      </Modal>

      <div className="px-6 pb-4 mt-6 text-base">
        <p>
          Overall, I don't recommend using nested modal because it makes UI even
          more complex. Some alternatives are Tabs, navigate to new location,
          multi-step flow inside a single modal etc
        </p>
      </div>
    </>
  );
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
