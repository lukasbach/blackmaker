import { Hotkey } from '@react-hook/hotkey/src/index';
import React from 'react';

interface HotKeyConfigurationBase<T = HTMLElement> {
  combination?: Hotkey | Hotkey[];
  globalHandler?: (e: KeyboardEvent) => any;
  title?: string;
  description?: string;
}

export type HotKeyConfiguration<T = HTMLElement> =
  | (HotKeyConfigurationBase<T> & {
      id?: string;
      global?: false;
      ref?: React.RefObject<T> | Document | Window | null | false;
    })
  | (HotKeyConfigurationBase<T> & {
      id: string;
      global: true;
    });
