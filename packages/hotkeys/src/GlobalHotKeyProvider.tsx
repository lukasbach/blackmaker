import * as React from 'react';
import { GlobalHotKeyContext, GlobalHotKeysContextValue } from './GlobalHotKeyContext';

export const GlobalHotKeyProvider: React.FC<GlobalHotKeysContextValue> = props => {
  return <GlobalHotKeyContext.Provider value={props}>{props.children}</GlobalHotKeyContext.Provider>;
};
