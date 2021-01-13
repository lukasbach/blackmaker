import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';
import { TabProps } from './Tab';
import { TabsContext } from './TabsContext';
import { useState } from 'react';

export interface TabsContextValue extends Omit<TabProps, 'id' | 'title'> {
  currentTab?: string;
  onChangeTab?: (tab: string) => any;
}

export interface TabsProps extends TabsContextValue {
  tabs?: Array<TabProps>;
}

export const Tabs: React.FC<TabsProps> = props => {
  return <TabsContext.Provider value={props}>{props.children}</TabsContext.Provider>;
};
