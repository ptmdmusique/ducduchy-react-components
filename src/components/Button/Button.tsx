import cx from "classnames";
import React, { forwardRef } from "react";
import Icon from "../Icon/Icon";
import { StatusType } from "../resources/common.data";
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
          `btn--${borderType}`,
          `btn--${colorType}`,
          { "btn--rounded": isRounded, "btn--with-background": withBackground },
          buttonProps.className,
        )}
      >
        {!isLoading ? (
          <>
            {icon && (
              <Icon
                icon={icon}
                className={cx(
                  "fa-fw",
                  "btn-icon",
                  { "btn-icon--with-children": !!buttonProps.children },
                  iconClassName,
                )}
              />
            )}
            {buttonProps.children}
          </>
        ) : (
          <Icon icon={loadingIcon ?? ["fas", "spinner"]} spin />
        )}
      </button>
    );
  },
);
