import { IconPrefix, IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { Ref } from "react";
import { OmitStrict } from "../../utils/types";
import { COMPONENT_PREFIX } from "../resources/common.data";

export interface IconProps {
  icon: [IconPrefix, string]; // TODO: find a way to use IconName
  className?: string;

  WrapperType?: "div" | "span";
  ref?: Ref<HTMLDivElement>;
}

export const Icon = ({
  icon,
  className,
  WrapperType = "div",
  ref,
  ...faProps
}: Partial<OmitStrict<FontAwesomeIconProps, "icon" | "cx">> & IconProps) => (
  <WrapperType
    ref={ref}
    className={cx(`${COMPONENT_PREFIX}-icon`, "icon", className)}
  >
    <FontAwesomeIcon {...faProps} icon={icon as IconProp} />
  </WrapperType>
);
