import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { forwardRef } from "react";
import { OmitStrict } from "../../utils/types";
import { COMPONENT_PREFIX } from "../resources/common.data";

export interface IconProps {
  icon: ["fas" | "far" | "fal" | "fat" | "fad" | "fab", string];
  className?: string;

  WrapperType?: "div" | "span";
}

export const Icon = forwardRef<
  HTMLDivElement,
  Partial<OmitStrict<FontAwesomeIconProps, "icon" | "cx">> & IconProps
>(({ icon, className, WrapperType = "div", ...faProps }, ref) => (
  <WrapperType
    ref={ref}
    className={cx(`${COMPONENT_PREFIX}-icon`, "icon", className)}
  >
    <FontAwesomeIcon {...faProps} icon={icon as IconProp} />
  </WrapperType>
));

export default Icon;
