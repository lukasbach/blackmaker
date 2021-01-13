import { HotKeyConfiguration } from './HotKeyConfiguration';
import { Hotkey } from '@react-hook/hotkey/src/index';

export interface GlobalHotKeys {
  hotkeys: HotKeyConfiguration[];
  userSetting?: {[ hotkeyId: string ]: Hotkey | Hotkey[]};
}
