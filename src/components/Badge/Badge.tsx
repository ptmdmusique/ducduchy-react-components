import cx from "classnames";
import Icon from "../Icon/Icon";
import { ColorType, COMPONENT_PREFIX } from "../resources/common.data";
import "./Badge.scss";

export interface BadgeProps {
  colorType?: ColorType;
  className?: string;
  type?: "outline" | "filled";

  icon?: [string, string];
  iconClassName?: string;

  text?: string;
}

export const Badge = ({
  icon,
  text,
  colorType = "info",
  type = "filled",
  iconClassName,
  className,
}: BadgeProps) => {
  return (
    <div
      className={cx(
        `${COMPONENT_PREFIX}-badge`,
        `${COMPONENT_PREFIX}-badge--${colorType}`,
        `${COMPONENT_PREFIX}-badge--${type}`,
        className,
      )}
    >
      {icon && <Icon icon={icon} className={cx("fa-fw", iconClassName)} />}
      <p>{text}</p>
    </div>
  );
};
