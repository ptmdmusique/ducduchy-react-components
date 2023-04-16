import { Menu as LibMenu } from "@headlessui/react";
import cx from "classnames";
import React, { Fragment, ReactElement } from "react";
import { OmitStrict } from "../../utils/types";
import { Button, ButtonProps } from "../Button";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./Menu.scss";

export interface MenuProps<
  Item,
  T extends React.ElementType = "div",
  OpenerProps extends object = ButtonProps,
> {
  onItemChosen?: (item: Item, index: number) => void;

  menuContainerAs?: T;

  itemContainerOnRightSide?: boolean;
  useDivider?: boolean;

  menuProps?: React.ComponentProps<T>;
  menuItemsProps?: Parameters<typeof LibMenu.Items>[0];
  menuOpenerProps?: (OpenerProps extends ButtonProps
    ? OmitStrict<OpenerProps, "as">
    : OpenerProps) &
    Parameters<typeof LibMenu.Button>[0];
  renderCustomMenuOpener?: (menuOpen: boolean) => React.ReactNode;

  menuItemList: Item[] | readonly Item[];
  /** Render whole item, including the container
   *
   * Use `renderItemContent` or `renderItem` to render just the content of the item
   *   and leave accessbility and styling of the container handled by the component
   */
  renderWholeItem?: (
    item: Item,
    index: number,
    menuOpen: boolean,
  ) => React.ReactNode;
  /** Render just the inner of the item and let the lib handle accessiblity
   *
   * Unnecessary if `renderItem` is present
   */
  renderItem?: (
    item: Item,
    index: number,
    props: { active: boolean; disabled: boolean; menuOpen: boolean },
  ) => ReactElement;

  /** Used to render each item, unnecessary if `renderItem` or `renderWholeItem` is present */
  renderItemContent?: (
    item: Item,
    index: number,
    props: { active: boolean; disabled: boolean; menuOpen: boolean },
  ) => React.ReactNode;
}

// TODO: add dynamic positioning to fit in screen
// TODO: add ref access
/** Note, the menu dropdown is relative to the outer container */
export function Menu<
  Item,
  ContainerAs extends React.ElementType,
  OpenerProps extends object = ButtonProps,
>({
  onItemChosen,
  menuContainerAs,
  menuProps,
  menuItemsProps,
  useDivider = true,
  renderCustomMenuOpener,
  menuOpenerProps,
  itemContainerOnRightSide,
  menuItemList,
  renderWholeItem,
  renderItem,
  renderItemContent,
}: MenuProps<Item, ContainerAs, OpenerProps>) {
  return (
    // @ts-ignore
    <LibMenu
      as={menuContainerAs ?? "div"}
      {...menuProps}
      className={cx(`${COMPONENT_PREFIX}-menu`, menuProps?.className)}
    >
      {({ open: menuOpen }) => (
        <>
          {renderCustomMenuOpener?.(menuOpen) ?? (
            <LibMenu.Button
              as={Button}
              {...menuOpenerProps}
              className={cx(
                `${COMPONENT_PREFIX}-menu__opener`,
                { [`${COMPONENT_PREFIX}-menu__opener--open`]: menuOpen },
                menuOpenerProps?.className,
              )}
            />
          )}

          <LibMenu.Items
            as="ul"
            {...menuItemsProps}
            className={cx(
              `${COMPONENT_PREFIX}-menu__item-container`,
              {
                [`${COMPONENT_PREFIX}-menu__item-container--right`]:
                  itemContainerOnRightSide,
                [`${COMPONENT_PREFIX}-menu__item-container--open`]: menuOpen,
                [`${COMPONENT_PREFIX}-menu__item-container--use-divider`]:
                  useDivider,
              },
              menuItemsProps?.className,
            )}
          >
            {menuItemList.map(
              (item, index) =>
                renderWholeItem?.(item, index, menuOpen) ?? (
                  <LibMenu.Item key={`menu-item---${index}`} as={Fragment}>
                    {({ active, disabled }) =>
                      renderItem?.(item, index, {
                        active,
                        disabled,
                        menuOpen,
                      }) ?? (
                        <li
                          className={cx(`${COMPONENT_PREFIX}-menu__item`, {
                            [`${COMPONENT_PREFIX}-menu__item--menu-open`]:
                              menuOpen,
                            [`${COMPONENT_PREFIX}-menu__item--active`]: active,
                            [`${COMPONENT_PREFIX}-menu__item--disabled`]:
                              disabled,
                          })}
                          onClick={() => {
                            onItemChosen?.(item, index);
                          }}
                        >
                          {renderItemContent?.(item, index, {
                            active,
                            disabled,
                            menuOpen,
                          })}
                        </li>
                      )
                    }
                  </LibMenu.Item>
                ),
            )}
          </LibMenu.Items>
        </>
      )}
    </LibMenu>
  );
}
