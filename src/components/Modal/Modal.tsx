import { Dialog } from "@headlessui/react";
import cx from "classnames";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC, ReactNode, useMemo, useRef } from "react";
import { useWindowSize } from "react-use";
import { Icon, IconProps } from "../Icon";
import {
  getModalIntuitiveAnimation,
  modalVariantMap,
} from "../resources/animation";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./Modal.scss";

type OnCloseTriggerdOn = "close-button-click" | "standard";
export interface ModalProps {
  isOpen: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  /** Use for more fine-grained control on when to trigger the close */
  onClose?: (triggeredOn: OnCloseTriggerdOn) => void;

  showCloseButton?: boolean;
  closeButtonIcon?: IconProps["icon"];

  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;

  isFullscreen?: boolean;

  animationType?: "fade-down" | "natural";
  animationAnchorElement?: HTMLElement | null;
  targetSize?: { width?: number; height?: number };
}

export const Modal: FC<ModalProps> = ({
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
  animationAnchorElement,
  targetSize,
}) => {
  // * Animation
  const { width: winWidth, height: winHeight } = useWindowSize();
  const modalVariants = useMemo<Variants>(() => {
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
            className="overlay"
            variants={modalVariantMap.overlay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-hidden="true"
          />

          <Dialog.Panel
            as={motion.div}
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
              <Dialog.Title className={cx("modal-header", headerClassName)}>
                {header}
              </Dialog.Title>
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
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
