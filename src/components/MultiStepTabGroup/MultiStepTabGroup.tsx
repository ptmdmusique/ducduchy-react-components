import cx from "classnames";
import { Fragment, HTMLAttributes, ReactNode, Ref, useMemo } from "react";
import { Button } from "../Button";
import { ColorType, COMPONENT_PREFIX } from "../resources/common.data";
import "./MultiStepTabGroup.scss";

export type MultiStepTabGroupProps = {
  selectedIndex: number;
  onChange?: (index: number) => void;

  colorType?: ColorType;
  className?: string;

  numberOfTabs: number;
  getTabContent: (index: number, selected: boolean) => ReactNode;

  getTabPanelProps?: (index: number) => HTMLAttributes<HTMLDivElement>;
  renderTabPanel: (index: number) => ReactNode;

  contentPreset?: "bubble-step" | null;
  getBubbleContent?: (index: number, selected: boolean) => ReactNode;

  /** Prevent onChange to bubble if the same selected index is clicked again */
  preventSelectIfSelected?: boolean;

  ref?: Ref<HTMLDivElement>;
};

export const MultiStepTabGroup = ({
  numberOfTabs,
  selectedIndex,
  className,
  onChange,
  getTabContent,
  getTabPanelProps,
  getBubbleContent,
  renderTabPanel,
  colorType = "secondary",
  contentPreset = "bubble-step",
  preventSelectIfSelected = true,
  ref,
}: MultiStepTabGroupProps) => {
  const renderArr = useMemo(
    () => Array.from<any>(Array(numberOfTabs)),
    [numberOfTabs],
  );

  const tabList = useMemo(
    () =>
      renderArr.map((_, index) => {
        const selected = index === selectedIndex;

        return (
          <Fragment key={index}>
            <div
              className={cx("step-content", `step-content--${contentPreset}`)}
            >
              {contentPreset == null ? (
                getTabContent?.(index, selected)
              ) : (
                <>
                  <Button
                    className={cx("bubble", `bubble--${colorType}`, {
                      "bubble--selected": index <= selectedIndex,
                    })}
                    borderType="plain"
                    onClick={() =>
                      (!preventSelectIfSelected || index !== selectedIndex) &&
                      onChange?.(index)
                    }
                  >
                    {getBubbleContent?.(index, selected) ?? index + 1}
                  </Button>

                  <div
                    className={cx("content", `content--${colorType}`, {
                      "content--selected": index <= selectedIndex,
                    })}
                  >
                    {getTabContent?.(index, selected)}
                  </div>
                </>
              )}
            </div>

            {index !== numberOfTabs - 1 && (
              <div className="step-indicator">
                <div
                  className={cx(
                    "step-indicator__line",
                    `step-indicator__line--${colorType}`,
                    {
                      "step-indicator__line--active": index < selectedIndex,
                    },
                  )}
                />
              </div>
            )}
          </Fragment>
        );
      }),
    [
      selectedIndex,
      renderArr,
      numberOfTabs,
      getTabContent,
      getBubbleContent,
      onChange,
      colorType,
      contentPreset,
      preventSelectIfSelected,
    ],
  );

  const panelList = useMemo(
    () =>
      renderArr.map((_, index) => {
        const tabPanelProps = getTabPanelProps?.(index);

        return (
          <div
            {...tabPanelProps}
            key={index}
            className={cx("tab-group__tab-panel", tabPanelProps?.className)}
          >
            {renderTabPanel(index)}
          </div>
        );
      }),
    [renderArr, getTabPanelProps, renderTabPanel],
  );

  return (
    <div
      className={cx(`${COMPONENT_PREFIX}-multi-step-tab-group`, className)}
      ref={ref}
    >
      <div className={`${COMPONENT_PREFIX}-multi-step-tab-group__tab-list`}>
        {tabList}
      </div>

      <div className={`${COMPONENT_PREFIX}-multi-step-tab-group__panel-list`}>
        {panelList[selectedIndex]}
      </div>
    </div>
  );
};
