import React from 'react';
import { TabsContextValue } from './Tabs';

export const TabsContext = React.createContext<TabsContextValue>({
  onRegisterTab: () => {}
});
