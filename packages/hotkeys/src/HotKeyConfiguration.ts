import { Hotkey } from '@react-hook/hotkey/src/index';
import React from 'react';
import { Falsy } from '@blackmaker/core';

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
      ref?: React.RefObject<T> | Document | Window | Falsy;
    })
  | (HotKeyConfigurationBase<T> & {
      id: string;
      global: true;
    });
