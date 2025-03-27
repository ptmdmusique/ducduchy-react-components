import {
  TabGroup as HeadlessTabGroup,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import cx from "classnames";
import {
  ComponentProps,
  ReactElement,
  Ref,
  useCallback,
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
  tabActiveIndicatorType?: "pill" | "underline" | "custom";

  renderIndicator?: boolean;

  numberOfTabs: number;

  /** Render the entire tab and have total control over accessibility */
  renderWholeTab?: (index: number, selected: boolean) => ReactElement;
  renderTab?: (index: number, selected: boolean) => ReactElement;

  getTabProps?: (index: number, selected: boolean) => ExtractProps<typeof Tab>;
  renderTabPanel: (index: number, selected: boolean) => ReactElement;
  getTabPanelProps?: (
    index: number,
    selected: boolean,
  ) => ExtractProps<typeof TabPanel>;

  tabGroupProps?: ExtractProps<typeof Tab>;
  tabListProps?: ExtractProps<typeof TabList>;
  tabPanelsProps?: ExtractProps<typeof TabPanels>;

  ref?: Ref<HTMLDivElement>;
}

// TODO: fix bug where tab and tab panel still got switch even in controller mode
// https://github.com/tailwindlabs/headlessui/issues/1509#issuecomment-1171905348
export const TabGroup = ({
  selectedIndex: _selectedIndex,
  defaultSelectedIndex,
  onChange,
  tabActiveIndicatorProps,
  tabActiveIndicatorType = "underline",
  renderIndicator = true,
  numberOfTabs,
  renderWholeTab,
  renderTab,
  renderTabPanel,
  tabGroupProps,
  getTabPanelProps,
  getTabProps,
  tabListProps,
  tabPanelsProps,
  ref,
}: TabGroupProps) => {
  const tabListRef = useRef<HTMLDivElement>(null);
  // TODO: support vertical tab
  const [indicatorInfo, setIndicatorInfo] = useState({ left: 0, width: 0 });

  const [selectedIndex, setSelectedIndex] = useState(
    getIndex(_selectedIndex ?? defaultSelectedIndex ?? 0, numberOfTabs),
  );

  const calculateIndicatorInfo = useCallback(
    (curSelectedIndex: number) => {
      const tabList = tabListRef.current;
      if (tabList && renderIndicator) {
        // First spot is reserved for the indicator
        const activeChild = tabList.children[curSelectedIndex + 1];
        const { left: childLeft, width } = activeChild.getBoundingClientRect();
        const { left: listLeft } = tabList.getBoundingClientRect();
        setIndicatorInfo({ left: childLeft - listLeft, width });
      }
    },
    [renderIndicator],
  );

  useEffect(() => {
    calculateIndicatorInfo(
      getIndex(_selectedIndex ?? defaultSelectedIndex ?? 0, numberOfTabs),
    );
  }, [
    calculateIndicatorInfo,
    _selectedIndex,
    defaultSelectedIndex,
    numberOfTabs,
  ]);

  useEffect(() => {
    if (_selectedIndex != null) {
      const newIndex = getIndex(_selectedIndex, numberOfTabs);
      setSelectedIndex(newIndex);
      calculateIndicatorInfo(newIndex);
    }
  }, [_selectedIndex, numberOfTabs, calculateIndicatorInfo]);

  const renderArr = useMemo<any[]>(
    () => Array.from<any>(Array(numberOfTabs)),
    [numberOfTabs],
  );

  const tabList = useMemo(
    () =>
      renderArr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          renderWholeTab?.(index, selected) ?? (
            <Tab
              {...getTabProps?.(index, selected)}
              as="button"
              key={index}
              className={cx(
                "tab-group__tab",
                `tab-group__tab--${tabActiveIndicatorType}`,
                { "tab-group__tab--selected": selected },
                getTabProps?.(index, selected)?.className,
              )}
            >
              {({ selected }) =>
                renderTab?.(index, selected) ?? <div>{index}</div>
              }
            </Tab>
          )
        );
      }),
    [
      selectedIndex,
      renderArr,
      tabActiveIndicatorType,
      getTabProps,
      renderTab,
      renderWholeTab,
    ],
  );

  const panelList = useMemo(
    () =>
      renderArr.map((_, index) => {
        const isSelected = index === selectedIndex;
        const tabPanelProps = getTabPanelProps?.(index, isSelected);
        return (
          <TabPanel
            {...tabPanelProps}
            key={index}
            className={cx(
              "tab-group__tab-panel",
              { "tab-group__tab-panel--selected": isSelected },
              tabPanelProps?.className,
            )}
          >
            {renderTabPanel(index, isSelected)}
          </TabPanel>
        );
      }),
    [renderArr, selectedIndex, getTabPanelProps, renderTabPanel],
  );

  return (
    <HeadlessTabGroup
      as="div"
      {...tabGroupProps}
      className={cx(`${COMPONENT_PREFIX}-tab-group`, tabGroupProps?.className)}
      ref={ref}
      selectedIndex={_selectedIndex}
      onChange={(newIndex: number) => {
        // Only update the state if selectedIndex is not specified
        if (_selectedIndex == null) {
          calculateIndicatorInfo(newIndex);
          setSelectedIndex(getIndex(newIndex, numberOfTabs));
        }

        onChange?.(newIndex);
      }}
    >
      <TabList
        {...tabListProps}
        as="div"
        ref={tabListRef}
        className={cx("tab-group__tab-list", tabListProps?.className)}
      >
        {renderIndicator && (
          <div
            {...tabActiveIndicatorProps}
            className={cx(
              "tab-group__tab-active-indicator",
              `tab-group__tab-active-indicator--${tabActiveIndicatorType}`,
              tabActiveIndicatorProps?.className,
            )}
            style={indicatorInfo}
          />
        )}

        {tabList}
      </TabList>

      <TabPanels
        {...tabPanelsProps}
        className={cx("tab-group__tab-panels", tabPanelsProps?.className)}
      >
        {panelList}
      </TabPanels>
    </HeadlessTabGroup>
  );
};
