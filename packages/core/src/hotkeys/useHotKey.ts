import { useHotkey as useHotkeyHook } from '@react-hook/hotkey';
import { HotKeyConfiguration } from './HotKeyConfiguration';
import { useGlobalHotKeys } from './useGlobalHotKeys';
import { useState } from 'react';

export const useHotKey = (hotkey: string | HotKeyConfiguration, handler?: () => void) => {
  const globalHotkeys = useGlobalHotKeys();
  const [currentConfig, setCurrentConfig] = useState<HotKeyConfiguration>();
  const [wasPressed, setWasPressed] = useState(false)

  const currentConfigNotUndefined = currentConfig ?? (typeof hotkey === 'string' ? globalHotkeys.hotkeys.find(h => h.id === hotkey) : hotkey);

  if (!currentConfigNotUndefined) {
    throw Error(`Hotkey ${hotkey} not found`);
  }

  if (!currentConfig) {
    setCurrentConfig(currentConfigNotUndefined);
  }

  console.log(currentConfigNotUndefined.combination)

  useHotkeyHook(
    (currentConfigNotUndefined as any).ref ?? window,
    globalHotkeys.userSetting?.[currentConfigNotUndefined.id] ?? currentConfigNotUndefined.combination,
    () => {
      handler?.();
      currentConfigNotUndefined.globalHandler?.();
      setWasPressed(true);
      setTimeout(() => setWasPressed(false), 500);
    }
  );

  return wasPressed;
};
