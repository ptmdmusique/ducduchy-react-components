import cx from "classnames";
import {
  forwardRef,
  Fragment,
  HTMLAttributes,
  ReactNode,
  useMemo,
} from "react";
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
};

export const MultiStepTabGroup = forwardRef<
  HTMLDivElement,
  MultiStepTabGroupProps
>(
  (
    {
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
    },
    ref,
  ) => {
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
                      onClick={() => onChange?.(index)}
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
      [selectedIndex, renderArr, numberOfTabs],
    );

    const panelList = useMemo(
      () =>
        renderArr.map((_, index) => {
          return (
            <div
              {...getTabPanelProps?.(index)}
              key={index}
              className={cx(
                "tab-group__tab-panel",
                getTabPanelProps?.(index)?.className,
              )}
            >
              {renderTabPanel(index)}
            </div>
          );
        }),
      [renderArr, selectedIndex],
    );

    // return (
    //   <TabGroup
    //     {...props}
    //     ref={ref}
    //     // TODO: Relax conditions when https://github.com/tailwindlabs/headlessui/issues/1509#issuecomment-1171905348 is done
    //     tabGroupProps={{
    //       ...props.tabGroupProps,
    //       manual: true,
    //       className: cx(
    //         `${COMPONENT_PREFIX}-multi-step-tab-group`,
    //         props.tabGroupProps?.className,
    //       ),
    //     }}
    //     tabActiveIndicatorType="custom"
    //     renderIndicator={false}
    //     renderWholeTab={(index, selected) => {
    //       const tabProps = props.getTabProps?.(index, selected);
    //       return (
    //         <Tab
    //           {...tabProps}
    //           key={index}
    //           className={cx(
    //             `${COMPONENT_PREFIX}-multi-step-tab-group__tab`,
    //             tabProps?.className,
    //           )}
    //           // TODO: Relax conditions when https://github.com/tailwindlabs/headlessui/issues/1509#issuecomment-1171905348 is done
    //           // @ts-ignore
    //           disabled
    //           as="div"
    //         >
    //           <div
    //             className={cx("step-content", `step-content--${contentPreset}`)}
    //           >
    //             {contentPreset == null ? (
    //               getTabContent?.(index, selected)
    //             ) : (
    //               <>
    //                 <Button
    //                   className={cx("bubble", `bubble--${colorType}`, {
    //                     "bubble--selected": index <= props.selectedIndex,
    //                   })}
    //                   borderType="plain"
    //                   onClick={() => props.onChange?.(index)}
    //                 >
    //                   {getBubbleContent?.(index, selected) ?? index + 1}
    //                 </Button>

    //                 <div
    //                   className={cx("content", `content--${colorType}`, {
    //                     "content--selected": index <= props.selectedIndex,
    //                   })}
    //                 >
    //                   {getTabContent?.(index, selected)}
    //                 </div>
    //               </>
    //             )}
    //           </div>

    //           {index !== props.numberOfTabs - 1 && (
    //             <div className="step-indicator">
    //               <div
    //                 className={cx(
    //                   "step-indicator__line",
    //                   `step-indicator__line--${colorType}`,
    //                   {
    //                     "step-indicator__line--active":
    //                       index < props.selectedIndex,
    //                   },
    //                 )}
    //               />
    //             </div>
    //           )}
    //         </Tab>
    //       );
    //     }}
    //   />
    // );

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
  },
);
