import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';
import { GlobalHotKeyContext } from './GlobalHotKeyContext';
import { GlobalHotKeys } from './GlobalHotKeys';

export const GlobalHotKeyProvider: React.FC<GlobalHotKeys> = props => {
  return (
    <GlobalHotKeyContext.Provider value={props}>
      { props.children }
    </GlobalHotKeyContext.Provider>
  );
};
