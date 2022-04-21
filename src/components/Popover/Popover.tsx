import { Popover as LibPopover } from "@headlessui/react";
import cx from "classnames";
import { Float } from "headlessui-float-react";
import React from "react";
import { OmitStrict } from "../../utils/types";
import { Button, ButtonProps } from "../Button";
import { COMPONENT_PREFIX } from "../main/data";
import "./Popover.scss";

export interface PopoverProps<T extends React.ElementType = "div"> {
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

  popoverOpenerProps?: OmitStrict<ButtonProps, "as"> &
    Parameters<typeof LibPopover.Button>[0];

  popoverPanelProps?: Parameters<typeof LibPopover.Panel>[0];

  popperProps?: Partial<Parameters<typeof Float>[0]>;
}

// TODO: add ref access
/**
 * TODO: improve this export
 *
 * To close popover manually, add a Popover.Button from @headlessui/react
 * https://headlessui.dev/react/popover#closing-popovers-manually
 *
 * To group with other Popover, wrap the Popover in a Popover.Group from @headlessui/react
 * https://headlessui.dev/react/popover#grouping-related-popovers
 */
export function Popover<ContainerAs extends React.ElementType = "div">({
  popoverContainerAs,
  popoverProps,
  popoverOpenerProps,
  popoverPanelProps,
  popperProps,
  children,
}: PopoverProps<ContainerAs>) {
  return (
    // @ts-ignore
    <LibPopover
      as={popoverContainerAs ?? "div"}
      {...popoverProps}
      className={cx(`${COMPONENT_PREFIX}-popover`, popoverProps?.className)}
    >
      {({ open, close }) => (
        // @ts-ignore
        <Float
          placement="bottom-start"
          offset={8}
          shift
          flip
          portal
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
          {...popperProps}
        >
          <LibPopover.Button
            as={Button}
            {...popoverOpenerProps}
            className={cx(
              `${COMPONENT_PREFIX}-popover__opener`,
              { [`${COMPONENT_PREFIX}-popover__opener--open`]: open },
              popoverOpenerProps?.className,
            )}
          />

          <LibPopover.Panel
            {...popoverPanelProps}
            className={cx(
              `${COMPONENT_PREFIX}-popover__panel`,
              popoverPanelProps?.className,
            )}
          >
            {typeof children === "function" ? children(open, close) : children}
          </LibPopover.Panel>
        </Float>
      )}
    </LibPopover>
  );
}
