import cx from "classnames";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { Button, ButtonProps } from "../Button";
import { IconProps } from "../Icon";
import { COMPONENT_PREFIX, ColorType } from "../resources/common.data";
import "./Paginate.scss";

export interface PaginateProps extends ReactPaginateProps {
  /** Use nextLabel if you want to override the component completely */
  nextLabelIcon?: IconProps["icon"];
  nextLabelButtonProps?: ButtonProps;
  /** Use previousLabel if you want to override the component completely */
  previousLabelIcon?: IconProps["icon"];
  previousLabelButtonProps?: ButtonProps;
  colorType?: ColorType;
}

export const Paginate = ({
  className,
  nextLabelIcon,
  nextLabelButtonProps,
  previousLabelIcon,
  previousLabelButtonProps,
  nextLabel,
  previousLabel,
  pageClassName,
  colorType = "secondary",
  pageLinkClassName,
  breakClassName,
  breakLinkClassName,
  ...reactPaginateProps
}: PaginateProps) => {
  return (
    <ReactPaginate
      {...reactPaginateProps}
      className={cx(`${COMPONENT_PREFIX}-paginate`, className)}
      pageClassName={cx(`${COMPONENT_PREFIX}-paginate__page`, pageClassName)}
      pageLinkClassName={cx(
        `${COMPONENT_PREFIX}-paginate__page-link`,
        `${COMPONENT_PREFIX}-paginate__page-link--${colorType}`,
        pageLinkClassName,
      )}
      breakClassName={cx(`${COMPONENT_PREFIX}-paginate__page`, breakClassName)}
      breakLinkClassName={cx(
        `${COMPONENT_PREFIX}-paginate__page-link`,
        `${COMPONENT_PREFIX}-paginate__page-link--${colorType}`,
        breakLinkClassName,
      )}
      nextLabel={
        nextLabel ?? (
          <Button
            borderType="plain"
            colorType={colorType}
            {...nextLabelButtonProps}
            className={cx(
              `${COMPONENT_PREFIX}-paginate__nav-cta`,
              nextLabelButtonProps?.className,
            )}
            icon={nextLabelIcon ?? ["fas", "chevron-right"]}
          />
        )
      }
      previousLabel={
        previousLabel ?? (
          <Button
            borderType="plain"
            colorType={colorType}
            {...previousLabelButtonProps}
            className={cx(
              `${COMPONENT_PREFIX}-paginate__nav-cta`,
              previousLabelButtonProps?.className,
            )}
            icon={previousLabelIcon ?? ["fas", "chevron-left"]}
          />
        )
      }
    />
  );
};
