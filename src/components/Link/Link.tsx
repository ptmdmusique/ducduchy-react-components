import cx from "classnames";
import { forwardRef, HTMLProps, ReactNode } from "react";
import { OmitStrict } from "../../utils/types";
import { Icon, IconProps } from "../Icon";
import { ColorType, COMPONENT_PREFIX } from "../resources/common.data";
import "./Link.scss";

export interface LinkProps
  extends OmitStrict<HTMLProps<HTMLAnchorElement>, "ref"> {
  colorType?: ColorType;
  iconStart?: IconProps["icon"] | ReactNode;
  /** Not necessary if ReactNode is provided as `iconStart` */
  iconStartClassName?: string;
  iconEnd?: IconProps["icon"] | ReactNode;
  /** Not necessary if ReactNode is provided as `iconEnd` */
  iconEndClassName?: string;
  /** Should we hide underline by default and only show underline on hover/focus, etc */
  hideUnderlineByDefault?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      iconStart,
      iconStartClassName,
      iconEnd,
      iconEndClassName,
      colorType = "primary",
      hideUnderlineByDefault,
      children,
      ...linkProps
    },
    ref,
  ) => {
    return (
      <a
        {...linkProps}
        ref={ref}
        className={cx(
          `${COMPONENT_PREFIX}-link`,
          `${COMPONENT_PREFIX}-link--${colorType}`,
          {
            [`${COMPONENT_PREFIX}-link--show-underline`]:
              !hideUnderlineByDefault,
          },
          linkProps.className,
        )}
      >
        {iconStart &&
          (Array.isArray(iconStart) ? (
            <Icon
              icon={iconStart}
              className={cx(
                `${COMPONENT_PREFIX}-link__icon--start`,
                iconStartClassName,
              )}
            />
          ) : (
            iconStart
          ))}

        {children}

        {iconEnd &&
          (Array.isArray(iconEnd) ? (
            <Icon
              icon={iconEnd}
              className={cx(
                `${COMPONENT_PREFIX}-link__icon--end`,
                iconEndClassName,
              )}
            />
          ) : (
            iconEnd
          ))}
      </a>
    );
  },
);
