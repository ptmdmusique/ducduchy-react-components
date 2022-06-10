import { Tab } from "@headlessui/react";
import cx from "classnames";
import {
  ComponentProps,
  forwardRef,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ExtractProps } from "../../utils/types";
import { COMPONENT_PREFIX } from "../resources/common.data";
import "./TabGroup.scss";

const getIndex = (index: number, length: number) =>
  Math.max(0, Math.min(index, length - 1));

export interface TabGroupProps {
  selectedIndex?: number;
  defaultSelectedIndex?: number;
  onChange?: (index: number) => void;

  tabActiveIndicatorProps?: ComponentProps<"div">;
  tabActiveIndicatorType?: "pill" | "underline";

  numberOfTabs: number;
  renderTab: (index: number, selected: boolean) => ReactNode;
  getTabProps?: (index: number, selected: boolean) => ExtractProps<typeof Tab>;
  renderTabPanel: (index: number, selected: boolean) => ReactNode;
  getTabPanelProps?: (
    index: number,
    selected: boolean,
  ) => ExtractProps<typeof Tab.Panel>;

  tabGroupProps?: ExtractProps<typeof Tab>;
  tabListProps?: ExtractProps<typeof Tab.List>;
  tabPanelsProps?: ExtractProps<typeof Tab.Panel>;
}

// TODO: fix bug where tab and tab panel still got switch even in controller mode
export const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>(
  (
    {
      selectedIndex: _selectedIndex,
      defaultSelectedIndex,
      onChange,
      tabActiveIndicatorProps,
      tabActiveIndicatorType,
      numberOfTabs,
      renderTab,
      renderTabPanel,
      tabGroupProps,
      getTabPanelProps,
      getTabProps,
      tabListProps,
      tabPanelsProps,
    },
    ref,
  ) => {
    const renderArr = useMemo(
      () => Array.from<any>(Array(numberOfTabs)),
      [numberOfTabs],
    );

    const tabListRef = useRef<HTMLDivElement>(null);
    // TODO: support vertical tab
    const [indicatorInfo, setIndicatorInfo] = useState({ left: 0, width: 0 });

    const [selectedIndex, setSelectedIndex] = useState(
      getIndex(_selectedIndex ?? defaultSelectedIndex ?? 0, numberOfTabs),
    );

    useEffect(() => {
      if (_selectedIndex != null) {
        setSelectedIndex(getIndex(_selectedIndex, numberOfTabs));
      }
    }, [_selectedIndex, numberOfTabs]);

    useEffect(() => {
      const tabList = tabListRef.current;
      if (tabList) {
        // First spot is reserved for the indicator
        const activeChild = tabList.children[selectedIndex + 1];
        const { left: childLef, width } = activeChild.getBoundingClientRect();
        const { left: listLef } = tabList.getBoundingClientRect();
        setIndicatorInfo({ left: childLef - listLef, width });
      }
    }, [selectedIndex]);

    return (
      <Tab.Group
        as="div"
        {...tabGroupProps}
        className={cx(
          `${COMPONENT_PREFIX}-tab-group`,
          tabGroupProps?.className,
        )}
        ref={ref}
        selectedIndex={selectedIndex}
        onChange={(newIndex: number) => {
          // Only update the state if selectedIndex is not specified
          _selectedIndex == null &&
            setSelectedIndex(getIndex(newIndex, numberOfTabs));
          onChange?.(newIndex);
        }}
      >
        <Tab.List
          {...tabListProps}
          as="div"
          ref={tabListRef}
          className={cx("tab-group__tab-list", tabListProps?.className)}
        >
          <div
            {...tabActiveIndicatorProps}
            className={cx(
              "tab-group__tab-active-indicator",
              `tab-group__tab-active-indicator--${tabActiveIndicatorType}`,
              tabActiveIndicatorProps?.className,
            )}
            style={indicatorInfo}
          />

          {renderArr.map((_, index) => (
            <Tab
              {...getTabProps?.(index, index === selectedIndex)}
              as="button"
              key={index}
              className={({ selected }) =>
                cx(
                  "tab-group__tab",
                  `tab-group__tab--${tabActiveIndicatorType}`,
                  { "tab-group__tab--selected": selected },
                  getTabProps?.(index, selected)?.className,
                )
              }
            >
              {({ selected }) => renderTab(index, selected)}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels
          {...tabPanelsProps}
          className={cx("tab-group__tab-panels", tabPanelsProps?.className)}
        >
          {renderArr.map((_, index) => {
            const isSelected = index === selectedIndex;
            return (
              <Tab.Panel
                {...getTabPanelProps?.(index, isSelected)}
                key={index}
                className={cx(
                  "tab-group__tab-panel",
                  { "tab-group__tab-panel--selected": isSelected },
                  getTabPanelProps?.(index, isSelected)?.className,
                )}
              >
                {renderTabPanel(index, isSelected)}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    );
  },
);
