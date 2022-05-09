import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { forwardRef } from "react";
import { OmitStrict } from "../../utils/types";
import { COMPONENT_PREFIX } from "../resources/common.data";

interface IconInfo {
  icon: [string, string];
  className?: string;
}

export const Icon = forwardRef<
  HTMLDivElement,
  Partial<OmitStrict<FontAwesomeIconProps, "icon" | "cx">> & IconInfo
>(({ icon, className, ...faProps }, ref) => (
  <div ref={ref} className={cx(`${COMPONENT_PREFIX}-icon`, "icon", className)}>
    <FontAwesomeIcon {...faProps} icon={icon as IconProp} />
  </div>
));

export default Icon;
