import cx from "classnames";
import React, { forwardRef } from "react";
import Icon from "../Icon/Icon";
import { ColorType, COMPONENT_PREFIX } from "../resources/common.data";
import "./Button.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  borderType?: "outline" | "fill" | "plain";
  colorType?: ColorType;
  icon?: [string, string];
  iconClassName?: string;
  iconPlacement?: "left" | "right";
  isLoading?: boolean;
  isRounded?: boolean;
  withBackground?: boolean;
  loadingIcon?: [string, string];
  ref?: React.ForwardedRef<HTMLButtonElement>;
  useFocusStyle?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      borderType = "fill",
      icon,
      colorType = "normal",
      iconPlacement = "left",
      iconClassName,
      isLoading,
      isRounded,
      withBackground,
      loadingIcon,
      useFocusStyle,
      ...buttonProps
    },
    ref,
  ) => {
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
            className={cx(
              `fa-fw ${COMPONENT_PREFIX}-button-icon`,
              {
                [`${COMPONENT_PREFIX}-button-icon--with-children`]:
                  !!buttonProps.children,
              },
              iconClassName,
            )}
            spin
          />
        ) : (
          icon && (
            <Icon
              icon={icon}
              className={cx(
                `fa-fw ${COMPONENT_PREFIX}-button-icon`,
                {
                  [`${COMPONENT_PREFIX}-button-icon--with-children--${iconPlacement}`]:
                    !!buttonProps.children,
                },
                iconClassName,
              )}
            />
          )
        )}

        {iconPlacement === "left" && buttonProps.children}
      </button>
    );
  },
);
