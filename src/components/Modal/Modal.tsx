import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import cx from "classnames";
import {
  AnimatePresence,
  motion,
  Transition,
  Variant,
  Variants,
} from "framer-motion";
import { PropsWithChildren, ReactNode, useMemo, useRef } from "react";
import { useWindowSize } from "react-use";
import { Icon, IconProps } from "../Icon";
import {
  getModalIntuitiveAnimation,
  modalVariantMap,
} from "../resources/animation";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./Modal.scss";

type OnCloseTriggeredOn = "close-button-click" | "standard";
type CustomAnimationVariant = Record<"hidden" | "visible", Variant>;

export interface ModalProps {
  isOpen: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  /** Use for more fine-grained control on when to trigger the close */
  onClose?: (triggeredOn: OnCloseTriggeredOn) => void;

  showCloseButton?: boolean;
  closeButtonIcon?: IconProps["icon"];

  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;

  isFullscreen?: boolean;

  /**
   * The type of animation to use when opening the modal
   * - `fade-down`: The modal will fade in and slide down from the top
   * - `natural`: The modal will expand from the center of the screen - NOTE: currently this is not working as expected
   * - `CustomAnimationVariant`: Custom animation variants - when the modal is opened, the modal will animate from the `hidden` variant to the `visible` variant and vice versa when the modal is closed. Check [this doc](https://www.framer.com/motion/animation/#variants) for more information on how to create custom variants
   */
  animationType?: "fade-down" | "natural" | CustomAnimationVariant;

  /**
   * Animation for overlay
   *
   * Check [this doc](https://www.framer.com/motion/animation/#variants) for more information on how to create custom variants
   */
  overlayAnimation?: {
    variants?: CustomAnimationVariant;
    transition?: Transition;
  };

  animationAnchorElement?: HTMLElement | null;
  targetSize?: { width?: number; height?: number };
}

export const Modal = ({
  header,
  footer,
  isOpen,
  children,
  onClose,
  showCloseButton = true,
  closeButtonIcon = ["fas", "times"],
  className,
  headerClassName,
  bodyClassName,
  footerClassName,

  isFullscreen,

  animationType = "fade-down",
  overlayAnimation,
  animationAnchorElement,
  targetSize,
}: PropsWithChildren<ModalProps>) => {
  // * Animation
  const { width: winWidth, height: winHeight } = useWindowSize();
  const modalVariants = useMemo<Variants>(() => {
    if (typeof animationType !== "string") {
      return animationType;
    }

    if (animationType === "fade-down") {
      return modalVariantMap.modal;
    }

    if (!animationAnchorElement) {
      return getModalIntuitiveAnimation({});
    }

    const finalWidth = targetSize?.width ?? winWidth;
    const finalHeight = targetSize?.height ?? winHeight;
    const { x, y, width, height } =
      animationAnchorElement.getBoundingClientRect();

    const initialSize = Math.sqrt(width * width + height * height);
    // Expand to the diagonal of the screen since this will make sure we cover
    //  the entire screen
    const finalSize = Math.sqrt(
      finalWidth * finalWidth + finalHeight * finalHeight,
    );

    return getModalIntuitiveAnimation({
      center: { x, y },
      initialSize,
      finalSize,
    });
  }, [animationType, animationAnchorElement, targetSize, winWidth, winHeight]);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          // @ts-ignore
          className={cx(`${COMPONENT_PREFIX}-modal`, className)}
          open={isOpen}
          onClose={() => {
            if (isOpen) {
              onClose?.("standard");
            }
          }}
          initialFocus={containerRef}
          as={motion.div}
        >
          <motion.div
            // @ts-ignore
            className="overlay"
            variants={overlayAnimation?.variants ?? modalVariantMap.overlay}
            transition={overlayAnimation?.transition}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-hidden="true"
          />

          <DialogPanel
            as={motion.div}
            // @ts-ignore
            className={cx("modal-content", {
              "modal-content--fullscreen": isFullscreen,
            })}
            ref={containerRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {header && (
              <DialogTitle className={cx("modal-header", headerClassName)}>
                {header}
              </DialogTitle>
            )}

            <div className={cx("modal-body", bodyClassName)}>{children}</div>

            {footer && (
              <div className={cx("modal-footer", footerClassName)}>
                {footer}
              </div>
            )}

            {showCloseButton && (
              <button
                className="close-button"
                onClick={() => {
                  if (isOpen) {
                    onClose?.("close-button-click");
                  }
                }}
              >
                <Icon icon={closeButtonIcon} className="fa-fw" />
              </button>
            )}
          </DialogPanel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
