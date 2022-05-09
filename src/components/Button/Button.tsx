import cx from "classnames";
import React, { forwardRef } from "react";
import Icon from "../Icon/Icon";
import { COMPONENT_PREFIX, StatusType } from "../resources/common.data";
import "./Button.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  borderType?: "outline" | "fill" | "plain";
  colorType?: StatusType;
  icon?: [string, string];
  iconClassName?: string;
  isLoading?: boolean;
  isRounded?: boolean;
  withBackground?: boolean;
  loadingIcon?: [string, string];
  ref?: React.ForwardedRef<HTMLButtonElement>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      borderType = "fill",
      icon,
      colorType = "normal",
      iconClassName,
      isLoading,
      isRounded,
      withBackground,
      loadingIcon,
      ...buttonProps
    },
    ref,
  ) => {
    return (
      <button
        {...buttonProps}
        ref={ref}
        className={cx(
          `${COMPONENT_PREFIX}-button--${borderType}`,
          `${COMPONENT_PREFIX}-button--${colorType}`,
          {
            [`${COMPONENT_PREFIX}-button--rounded`]: isRounded,
            [`${COMPONENT_PREFIX}-button--with-background`]: withBackground,
          },
          buttonProps.className,
        )}
      >
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
                  [`${COMPONENT_PREFIX}-button-icon--with-children`]:
                    !!buttonProps.children,
                },
                iconClassName,
              )}
            />
          )
        )}

        {buttonProps.children}
      </button>
    );
  },
);
