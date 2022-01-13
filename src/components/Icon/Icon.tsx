import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { forwardRef } from "react";
import { OmitStrict } from "../../utils/types";
import React from "react";

interface IconInfo {
  icon: [string, string];
  className?: string;
}

export const Icon = forwardRef<
  HTMLDivElement,
  Partial<OmitStrict<FontAwesomeIconProps, "icon" | "cx">> & IconInfo
>(({ icon, className, ...faProps }, ref) => (
  <div ref={ref} className={cx("icon", className)}>
    <FontAwesomeIcon {...faProps} icon={icon as IconProp} />
  </div>
));

export default Icon;
