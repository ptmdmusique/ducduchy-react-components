import { Menu as LibMenu } from "@headlessui/react";
import cx from "classnames";
import React, { Fragment } from "react";
import { OmitStrict } from "../../utils/types";
import { Button, ButtonProps } from "../Button";
import { COMPONENT_PREFIX } from "../main/data";
import "./Menu.scss";

export interface MenuProps<Item, T extends React.ElementType = "div"> {
  onItemChosen?: (item: Item, index: number) => void;

  menuContainerAs?: T;
  menuProps?: React.ComponentProps<T>;

  itemContainerOnRightSide?: boolean;

  menuOpenerProps?: OmitStrict<ButtonProps, "as">;
  renderCustomMenuOpener?: (menuOpen: boolean) => React.ReactNode;

  menuItemList: Item[] | readonly Item[];
  /** Render whole item, including the container
   * Use `renderItemContent` to render just the content of the item
   *   and leave accessbility and styling of the container handled by the component
   */
  renderItem?: (
    item: Item,
    index: number,
    menuOpen: boolean,
  ) => React.ReactNode;
  /** Used to render each item, unnecessary if `renderItem` is present */
  renderItemContent?: (
    item: Item,
    index: number,
    props: { active: boolean; disabled: boolean; menuOpen: boolean },
  ) => React.ReactNode;
}

// TODO: add dynamic positioning to fit in screen
// TODO: add ref access
/** Note, the menu dropdown is relative to the outer container */
export function Menu<Item, ContainerAs extends React.ElementType>({
  onItemChosen,
  menuContainerAs,
  menuProps,
  renderCustomMenuOpener,
  menuOpenerProps,
  itemContainerOnRightSide,
  menuItemList,
  renderItem,
  renderItemContent,
}: MenuProps<Item, ContainerAs>) {
  return (
    // @ts-ignore
    <LibMenu
      as={menuContainerAs ?? "div"}
      {...menuProps}
      className={cx(`${COMPONENT_PREFIX}-menu`, menuProps?.className)}
    >
      {({ open }) => (
        <>
          {renderCustomMenuOpener?.(open) ?? (
            <LibMenu.Button
              as={Button}
              {...menuOpenerProps}
              className={cx(
                `${COMPONENT_PREFIX}-menu__opener`,
                { [`${COMPONENT_PREFIX}-menu__opener--open`]: open },
                menuOpenerProps?.className,
              )}
            />
          )}

          <LibMenu.Items
            as="ul"
            className={cx(`${COMPONENT_PREFIX}-menu__item-container`, {
              [`${COMPONENT_PREFIX}-menu__item-container--right`]:
                itemContainerOnRightSide,
              [`${COMPONENT_PREFIX}-menu__item-container--open`]: open,
            })}
          >
            {menuItemList.map(
              (item, index) =>
                renderItem?.(item, index, open) ?? (
                  <LibMenu.Item key={`menu-item---${index}`} as={Fragment}>
                    {({ active, disabled }) => (
                      <li
                        className={cx(`${COMPONENT_PREFIX}-menu__item`, {
                          [`${COMPONENT_PREFIX}-menu__item--menu-open`]: open,
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
                          menuOpen: open,
                        })}
                      </li>
                    )}
                  </LibMenu.Item>
                ),
            )}
          </LibMenu.Items>
        </>
      )}
    </LibMenu>
  );
}
