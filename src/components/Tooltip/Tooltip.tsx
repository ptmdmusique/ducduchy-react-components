import { Transition } from "@headlessui/react";
import cx from "classnames";
import { FC, Fragment, RefObject, useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { Portal } from "../Portal/Portal";
import { headlessTransitionData } from "../resources/animation";
import { COMPONENT_PREFIX, ROOT_ID } from "../resources/common.data";
import "./Tooltip.scss";

// TODO: move this out
type TransitionProp = FC<{
  show: boolean;
  as?: React.ElementType<any>;
  className?: string;
}>;

export const FadeTransition: TransitionProp = ({
  show,
  children,
  className,
  as = Fragment,
}) => (
  <Transition
    as={as}
    show={show}
    className={className}
    {...headlessTransitionData.fadeInOut}
  >
    {children}
  </Transition>
);

type Event = keyof HTMLElementEventMap;
type OpenOn = Partial<Record<Event, boolean>>;

const defaultOpenOn: OpenOn = {
  click: false,
  mouseenter: true,
};

export interface TooltipProps {
  containerId?: string;
  refElement: RefObject<HTMLElement>;
  openOn?: OpenOn;
  isOpen?: boolean;
  defaultOpen?: boolean;
  popoverOption?: Parameters<typeof usePopper>[2];
  stylePreset?: "preset-1" | null;
  className?: string;
  /** https://popper.js.org/docs/v2/modifiers/offset/ */
  offset?: [number, number];

  /** Will be overriden if inModal is set to true */
  zIndex?: number;
  inModal?: boolean;
}
export const Tooltip: FC<TooltipProps> = ({
  containerId,
  refElement,
  openOn = defaultOpenOn,
  isOpen: _isOpen,
  defaultOpen = false,
  popoverOption,
  children,
  stylePreset = "preset-1",
  className,
  offset = [0, 20],
  zIndex,
  inModal = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(refElement.current, popperElement, {
    ...popoverOption,
    modifiers: [
      { name: "offset", options: { offset } },
      ...(popoverOption?.modifiers || []),
    ],
  });

  const openPopover = () => setIsOpen(true);
  const closePopover = () => setIsOpen(false);

  useEffect(() => {
    if (_isOpen !== undefined) {
      setIsOpen(_isOpen);
    }
  }, [_isOpen]);

  useEffect(() => {
    const ele = refElement.current;
    if (ele) {
      const returnList: (() => void)[] = [];

      for (const event in { ...defaultOpenOn, ...openOn }) {
        ele.addEventListener(event, openPopover);
        returnList.push(() => ele.removeEventListener(event, openPopover));
      }

      const createCloseEvent = (openEvent: keyof typeof openOn) => {
        let outEventName: keyof HTMLElementEventMap | null = null;
        switch (openEvent) {
          case "mouseenter":
            outEventName = "mouseleave";
            break;
          case "focus":
            outEventName = "blur";
            break;
        }

        if (outEventName) {
          ele.addEventListener(outEventName, closePopover);
          returnList.push(() =>
            ele.removeEventListener(outEventName!, closePopover),
          );
        }
      };

      (["focus", "mouseenter"] as (keyof typeof openOn)[]).forEach(
        createCloseEvent,
      );

      return () => {
        returnList.forEach((unsubscriber) => unsubscriber());
      };
    }
  }, [openOn, refElement, _isOpen]);

  return (
    <Portal containerId={containerId ?? ROOT_ID}>
      <FadeTransition as="div" show={isOpen}>
        <div
          ref={setPopperElement}
          className={cx(`${COMPONENT_PREFIX}-tooltip`, className, {
            [`${COMPONENT_PREFIX}-tooltip--${stylePreset}`]: stylePreset,
          })}
          style={{ ...styles.popper, zIndex: inModal ? 51 : zIndex }}
          {...attributes.popper}
        >
          {children}
        </div>
      </FadeTransition>
    </Portal>
  );
};
