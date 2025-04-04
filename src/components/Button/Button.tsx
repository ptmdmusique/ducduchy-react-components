import cx from "classnames";
import React, { Ref } from "react";
import { Icon, type IconProps } from "../Icon/Icon";
import {
  BorderType,
  ColorType,
  COMPONENT_PREFIX,
} from "../resources/common.data";
import "./Button.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  borderType?: BorderType;
  colorType?: ColorType;
  icon?: IconProps["icon"];
  iconClassName?: string;
  iconPlacement?: "left" | "right";
  isLoading?: boolean;
  isRounded?: boolean;
  withBackground?: boolean;
  loadingIcon?: IconProps["icon"];
  ref?: Ref<HTMLButtonElement>;
  useFocusStyle?: boolean;
}

export const Button = ({
  borderType = "fill",
  icon,
  colorType = "secondary",
  iconPlacement = "left",
  iconClassName,
  isLoading,
  isRounded,
  withBackground,
  loadingIcon,
  useFocusStyle,
  ref,
  ...buttonProps
}: ButtonProps) => {
  const _iconClassName = cx(
    `fa-fw ${COMPONENT_PREFIX}-button-icon`,
    {
      [`${COMPONENT_PREFIX}-button-icon--with-children--${iconPlacement}`]:
        !!buttonProps.children,
    },
    iconClassName,
  );

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={cx(
        `${COMPONENT_PREFIX}-button`,
        `${COMPONENT_PREFIX}-button--${borderType}`,
        `${COMPONENT_PREFIX}-button--${colorType}`,
        {
          [`${COMPONENT_PREFIX}-button--rounded`]: isRounded,
          [`${COMPONENT_PREFIX}-button--with-background`]: withBackground,
          [`${COMPONENT_PREFIX}-button--use-focus-style`]: useFocusStyle,
        },
        buttonProps.className,
      )}
    >
      {iconPlacement === "right" && buttonProps.children}

      {isLoading ? (
        <Icon
          icon={loadingIcon ?? ["fas", "spinner"]}
          className={_iconClassName}
          spin
        />
      ) : (
        icon && <Icon icon={icon} className={_iconClassName} />
      )}

      {iconPlacement === "left" && buttonProps.children}
    </button>
  );
};
