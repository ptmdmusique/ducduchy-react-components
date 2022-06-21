import cx from "classnames";
import { ReactNode } from "react";
import { Icon } from "../Icon";
import { ColorType, COMPONENT_PREFIX } from "../resources/common.data";
import "./AlertBanner.scss";

type BorderPlacement = "top" | "bottom" | "left" | "right";
export interface AlertBannerProps {
  className?: string;
  iconClassName?: string;
  iconContainerClassName?: string;
  contentClassName?: string;
  colorType?: ColorType;

  /** Use a plain string header if you want to use the pre-styled option */
  header?: ReactNode;
  /** Use a plain string description if you want to use the pre-styled option */
  description?: ReactNode;
  icon?: [string, string];

  hasShadow?: boolean;
  roundedCorner?: boolean;

  borderPlacement?: BorderPlacement;
}

export const AlertBanner = ({
  className,
  iconClassName,
  contentClassName,
  iconContainerClassName,
  colorType,
  header,
  description,
  icon,
  hasShadow = true,
  roundedCorner = true,
  borderPlacement = "top",
}: AlertBannerProps) => {
  return (
    <div
      className={cx(
        `${COMPONENT_PREFIX}-alert-banner`,
        `${COMPONENT_PREFIX}-alert-banner--${colorType}`,
        `${COMPONENT_PREFIX}-alert-banner--border-${borderPlacement?.[0]}`,
        {
          [`${COMPONENT_PREFIX}-alert-banner--has-shadow`]: hasShadow,
          [`${COMPONENT_PREFIX}-alert-banner--rounded-corner`]: roundedCorner,
        },
        className,
      )}
    >
      {icon && (
        <div className={cx("icon-container", iconContainerClassName)}>
          <Icon icon={icon} className={cx("fa-fw", iconClassName)} />
        </div>
      )}

      <div className={cx("content", contentClassName)}>
        {typeof header === "string" ? (
          <p className="header-text">{header}</p>
        ) : (
          header
        )}

        {typeof description === "string" ? (
          <p className="description">{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
};
