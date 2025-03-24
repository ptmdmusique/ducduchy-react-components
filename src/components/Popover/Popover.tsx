import {
  Popover as LibPopover,
  PopoverProps as LibPopoverProps,
  PopoverButton,
  PopoverButtonProps,
  PopoverPanel,
  PopoverPanelProps,
} from "@headlessui/react";
import cx from "classnames";
import React from "react";
import { OmitStrict } from "../../utils/types";
import { Button, ButtonProps } from "../Button";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./Popover.scss";

export interface PopoverProps<
  T extends React.ElementType = "div",
  OpenerProps extends object = ButtonProps,
> {
  popoverContainerAs?: T;
  popoverProps?: React.ComponentProps<T>;

  children:
    | ((
        open: boolean,
        close: (
          focusableElement?:
            | HTMLElement
            | React.MutableRefObject<HTMLElement | null>
            | undefined,
        ) => void,
      ) => React.ReactNode)
    | React.ReactNode;

  popoverOpenerProps?: (OpenerProps extends ButtonProps
    ? OmitStrict<OpenerProps, "as">
    : OpenerProps) &
    PopoverButtonProps;

  popoverPanelProps?: Partial<PopoverPanelProps>;
  popperProps?: Partial<LibPopoverProps>;
}

// TODO: add ref access
/**
 * TODO: improve this export
 *
 * To close popover manually, add a PopoverButton from @headlessui/react
 * https://headlessui.dev/react/popover#closing-popovers-manually
 *
 * To group with other Popover, wrap the Popover in a PopoverGroup from @headlessui/react
 * https://headlessui.dev/react/popover#grouping-related-popovers
 */
export function Popover<
  ContainerAs extends React.ElementType = "div",
  OpenerProps extends object = ButtonProps,
>({
  popoverContainerAs,
  popoverProps,
  popoverOpenerProps,
  popoverPanelProps,
  popperProps,
  children,
}: PopoverProps<ContainerAs, OpenerProps>) {
  const anchorProps = popoverPanelProps?.anchor;
  return (
    <LibPopover
      as={(popoverContainerAs as any) ?? "div"}
      {...popoverProps}
      className={cx(`${COMPONENT_PREFIX}-popover`, popoverProps?.className)}
    >
      {({ open, close }) => (
        <>
          <PopoverButton
            as={Button}
            {...popoverOpenerProps}
            className={cx(
              `${COMPONENT_PREFIX}-popover__opener`,
              { [`${COMPONENT_PREFIX}-popover__opener--open`]: open },
              popoverOpenerProps?.className,
            )}
          />

          <PopoverPanel
            transition
            {...popoverPanelProps}
            anchor={
              typeof anchorProps === "string" ||
              typeof anchorProps === "boolean"
                ? anchorProps
                : { to: "bottom start", gap: 8, ...anchorProps }
            }
            className={cx(
              "transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",
              `${COMPONENT_PREFIX}-popover__panel`,
              popoverPanelProps?.className,
            )}
          >
            {typeof children === "function" ? children(open, close) : children}
          </PopoverPanel>
        </>
      )}
    </LibPopover>
  );
}
