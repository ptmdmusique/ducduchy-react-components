import { Meta, StoryFn } from "@storybook/react";
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

const Template: StoryFn<Partial<ModalProps> & { buttonText?: string }> = ({
  buttonText,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Button onClick={() => setIsOpen(true)}>
        {buttonText ?? "Open Modal"}
      </Button>
    </>
  );
};
export const Default = Template.bind({});
Default.args = {
  header: "What a dope header 👌",
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

export const WithFooter: typeof Template = Template.bind({});
WithFooter.args = {
  header: "What a dope header 👌",
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

export const WithDetailOnCloseControl: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [onCloseMessage, setOnCloseMessage] = React.useState<string | null>(
    null,
  );

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

export const WithMultipleModal: StoryFn<ModalProps> = (args) => {
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
          If you don't want that to happen, make sure the 2nd modal is nested
          (not sibling)
        </p>

        <p>
          This is how HeadlessUI designs their Dialog which follows{" "}
          <a
            href="https://www.w3.org/TR/wai-aria-1.1/#dialog"
            target="_blank"
            rel="noreferrer"
            className="text-skin-info hover:underline"
          >
            W3 spec
          </a>{" "}
          for the focus trap
        </p>
      </div>

      <Button onClick={() => setIsFirstOpen2(true)}>Open first modal</Button>

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
            facilis beatae, ea quibusdam error maxime. Et nihil nam delectus
            esse aliquam, impedit rerum beatae? Natus officiis dolore quia,
            ratione minus dolor voluptas tempora placeat iusto, nisi vitae ipsa
            magnam ad?
          </div>
        </Modal>
      </Modal>
    </>
  );
};

export const CustomAnimation: StoryFn<ModalProps> = (args) => {
  return (
    <>
      <Template
        {...args}
        buttonText="Open modal with bouncy animation "
        animationType={{
          hidden: { opacity: 0, scale: 0.4 },
          visible: { opacity: 1, scale: 1.0 },
        }}
      />

      <div className="mt-4">
        <Template
          {...args}
          buttonText="Open modal with simple fade in animation "
          animationType={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        />
      </div>

      <div className="mt-4">
        <Template
          {...args}
          buttonText="Open modal with slide in from bottom animation and custom transition"
          animationType={{
            hidden: { opacity: 0, y: "100%" },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ ease: "easeOut", duration: 2 }}
          overlayAnimation={{ transition: { ease: "easeOut", duration: 2 } }}
        />
      </div>
    </>
  );
};
CustomAnimation.args = { header: "What a dope header 👌" };

// TODO: fix this
// const TemplateExpandFromEle: StoryFn<ModalProps> = (args) => {
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
