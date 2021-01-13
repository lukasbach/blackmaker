import { useHotkey as useHotkeyHook } from '@react-hook/hotkey';
import { HotKeyConfiguration } from './HotKeyConfiguration';
import { useGlobalHotKeys } from './useGlobalHotKeys';
import { useState } from 'react';

export const useHotKey = (hotkey: string | HotKeyConfiguration, handler?: (e: KeyboardEvent) => void) => {
  const globalHotkeys = useGlobalHotKeys();
  const [currentConfig, setCurrentConfig] = useState<HotKeyConfiguration>();
  const [wasPressed, setWasPressed] = useState(false);

  const currentConfigNotUndefined =
    currentConfig ?? (typeof hotkey === 'string' ? globalHotkeys.hotkeys.find(h => h.id === hotkey) : hotkey);

  if (!currentConfigNotUndefined) {
    throw Error(`Hotkey ${hotkey} not found`);
  }

  if (!currentConfig) {
    setCurrentConfig(currentConfigNotUndefined);
  }

  const combination =
    globalHotkeys.userSetting?.[currentConfigNotUndefined.id] ?? currentConfigNotUndefined.combination;

  useHotkeyHook((currentConfigNotUndefined as any).ref ?? window, combination, e => {
    handler?.(e);
    currentConfigNotUndefined.globalHandler?.(e);
    setWasPressed(true);
    setTimeout(() => setWasPressed(false), 500);
  });

  return [
    {
      ...currentConfigNotUndefined,
      combination,
    },
    wasPressed,
  ] as const;
};
