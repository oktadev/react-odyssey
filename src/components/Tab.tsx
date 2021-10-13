import React, { useState, useRef, forwardRef } from 'react';
import type {
  FunctionComponent,
  ReactElement,
  ReactText,
  ComponentPropsWithRef,
} from "react";

export interface Props {
  children: ReactElement[];
  id: string;
  ariaLabel: string;
  selectedId?: string;
  onTabChange?: (newId: string) => void;
}

export interface PropsTabsContainer {
  children: ReactElement | ReactElement[];
  id: string;
  ariaLabel: string;
}

export interface PropsTabsPanelContainer {
  children: ReactElement | ReactElement[];
}

export interface PropsTabsPanel {
  children: ReactText | ReactElement | ReactElement[];
  label: string;
  id?: string;
  selected?: boolean;
}

export interface PropsTabsList
  // eslint-disable-next-line @typescript-eslint/ban-types
  extends Omit<ComponentPropsWithRef<"div">, "style" | "className"> {
  children: ReactElement | ReactElement[];
}

export interface PropsTab {
  children: ReactText;
  id: string;
  ariaControls: string;
  selected?: boolean;
  onClick: () => void;
}

export interface StaticComponents {
  Container: FunctionComponent<PropsTabsContainer>;
  PanelContainer: FunctionComponent<PropsTabsPanelContainer>;
  Panel: FunctionComponent<PropsTabsPanel>;
  List: FunctionComponent<PropsTabsList>;
  Tab: FunctionComponent<PropsTab>;
}

type TabListRef = HTMLDivElement | null;

const Tabs: FunctionComponent<Props> & StaticComponents = ({
  children,
  id,
  selectedId,
  ariaLabel,
  onTabChange,
}) => {
  const defaultSelectedTabId = selectedId || children[0].props.id;
  const [selectedTabId, setSelectedTabId] = useState(defaultSelectedTabId);

  const tabListRef = useRef<TabListRef>(null);

  const handleTabListKeyUp = (event: React.KeyboardEvent) => {
    if (!tabListRef.current) {
      return;
    }
    const tabs =
      tabListRef.current.querySelectorAll<HTMLButtonElement>("button");
    const tabsArr = Array.prototype.slice.call(tabs);
    const focusableElLast = tabs[tabs.length - 1];
    const focusableIndexActive = tabsArr.indexOf(document.activeElement);
    const isFirstFocused = focusableIndexActive === 0;
    const isLastFocused =
      focusableIndexActive === tabsArr.indexOf(focusableElLast);
    const focusFirst = () => tabs[0].focus();
    const focusLast = () => focusableElLast.focus();

    if (event.key === "ArrowLeft") {
      if (!isFirstFocused) {
        tabs[focusableIndexActive - 1].focus();
      } else if (isFirstFocused) {
        focusLast();
      }
    } else if (event.key === "ArrowRight") {
      if (!isLastFocused) {
        tabs[focusableIndexActive + 1].focus();
      } else if (isLastFocused) {
        focusFirst();
      }
    } else if (event.key === "Home") {
      focusFirst();
    } else if (event.key === "End") {
      focusLast();
    }
  };

  const handleTabChange = (newSelectedId: string) => {
    setSelectedTabId(newSelectedId);

    if (onTabChange) {
      onTabChange(newSelectedId);
    }
  };

  const oid = id || Math.random().toString(36).slice(-6);

  return (
    <Tabs.Container id={oid} ariaLabel={ariaLabel}>
      <Tabs.List ref={tabListRef} onKeyUp={handleTabListKeyUp}>
        {children.map(({ props: { label, id } }) =>
          <Tabs.Tab
            id={`${id}-tab`}
            key={`${id}-tab`}
            ariaControls={id}
            selected={id === selectedTabId}
            onClick={() => handleTabChange(id)}
          >
            {label}
          </Tabs.Tab>
        )}
      </Tabs.List>
      <Tabs.PanelContainer>
        {children.map(
          ({ props: { label, id, children: tabLabelChildren } }) =>
            <Tabs.Panel
              label={label}
              id={id}
              key={id}
              selected={id === selectedTabId}
            >
              {tabLabelChildren}
            </Tabs.Panel>
        )}
      </Tabs.PanelContainer>
    </Tabs.Container>
  );
};

Tabs.Container = function TabsContainer ({ children, id, ariaLabel }) {
  return (
    <div id={id} aria-label={ariaLabel} data-testid="ods-tabs">
      {children}
    </div>
  );
};

Tabs.List = forwardRef<HTMLDivElement, PropsTabsList>(
  ({ children, onKeyUp }, ref) => (
    <div
      tabIndex={-1}
      role="tablist"
      aria-label="label"
      className="ods-tabs--tablist"
      onKeyUp={onKeyUp}
      ref={ref}
    >
      {children}
    </div>
  )
);

Tabs.Tab = function TabsTab ({ children, id, ariaControls, selected, onClick }) {
  return (
    <button
      id={id}
      role="tab"
      tabIndex={selected ? 0 : -1}
      aria-controls={ariaControls}
      aria-selected={selected}
      className="ods-tabs--tab"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Tabs.PanelContainer = function TabsPanelContainer ({ children }) {
  return (
    <div className="ods-tabs--tabpanel">{children}</div>
  );
};

Tabs.Panel = function TabsPanel ({ children, id, selected }) {
  return (
    <div
      id={id}
      role="tabpanel"
      className="ods-tabs--tabpanel"
      aria-labelledby={`${id}-tab`}
      tabIndex={selected ? 0 : -1}
      hidden={!selected}
    >
      {children}
    </div>
  );
};

export default Tabs;
