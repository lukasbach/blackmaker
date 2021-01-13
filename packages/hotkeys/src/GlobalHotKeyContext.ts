import { GlobalHotKeys } from './GlobalHotKeys';
import React from 'react';
import { Hotkey } from '@react-hook/hotkey/src/index';

export interface GlobalHotKeysContextValue extends GlobalHotKeys {
  onChange: (hotKeyId: string, combination: Hotkey | Hotkey[]) => any;
}

export const GlobalHotKeyContext = React.createContext<GlobalHotKeysContextValue>({
  hotkeys: [],
  onChange: () => {},
});
