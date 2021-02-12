import * as React from 'react';
import { HtmlElementProps, useTheme } from '..';
import cxs from 'cxs';
import { Tab, TabProps } from './Tab';
import { TabsContext } from './TabsContext';
import { useRef, useState } from 'react';
import { useHotKey } from '@blackmaker/hotkeys';

export interface TabsContextValue extends Omit<TabProps, 'id' | 'title'> {
  currentTab?: string;
  onChangeTab?: (tab: string) => any;
  onRegisterTab: (tabId: string) => any;
}

export interface TabsProps extends Omit<TabsContextValue, 'onRegisterTab'>, HtmlElementProps {
  tabs?: Array<TabProps>;
}

export const Tabs: React.FC<TabsProps> = props => {
  const [tabIds, setTabIds] = useState(props.tabs?.map(tab => tab.id) ?? []);
  const containerRef = useRef<HTMLDivElement>(null);

  useHotKey(
    {
      combination: ['right'],
      ref: containerRef,
    },
    e => {
      const currentTabIndex = tabIds.findIndex(tab => tab === props.currentTab);
      if (currentTabIndex !== undefined) {
        props.onChangeTab(tabIds[(currentTabIndex + 1) % tabIds.length]);
      }
    }
  );

  useHotKey(
    {
      combination: ['left'],
      ref: containerRef,
    },
    e => {
      const currentTabIndex = tabIds.findIndex(tab => tab === props.currentTab);
      if (currentTabIndex !== undefined) {
        props.onChangeTab(tabIds[currentTabIndex === 0 ? tabIds.length - 1 : currentTabIndex - 1]);
      }
    }
  );

  return (
    <TabsContext.Provider
      value={{
        ...props,
        onRegisterTab: id => {
          if (!tabIds.includes(id)) {
            setTabIds(ids => [...ids, id]);
          }
        },
      }}
    >
      <div
        role="tablist"
        aria-orientation="horizontal"
        {...props.elementProps}
        ref={containerRef}
        className={props.css ? cxs(props.css) : undefined}
      >
        {props.children}
        {props.tabs?.map(tab => (
          <Tab {...tab} key={tab.id} />
        ))}
      </div>
    </TabsContext.Provider>
  );
};
