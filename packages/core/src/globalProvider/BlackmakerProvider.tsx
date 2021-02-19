import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useHotKey } from '@blackmaker/hotkeys';
import { BlackmakerContext } from './BlackmakerContext';
import { FocusRingScope } from 'react-focus-rings';
import { StackedProviders } from '../common/StackedProviders';
import { darkTheme, ThemeDefinition, ThemeProvider } from '../theming';
import { AccessibilityProvider } from '../accessibility/AccessibilityProvider';

export interface BlackmakerProviderProps {
  provideTheme?: boolean;
  provideAccessibility?: boolean;
  theme?: ThemeDefinition;
}

export const BlackmakerProvider: React.FC<BlackmakerProviderProps> = props => {
  const [keyboardMode, setKeyboardMode] = useState(false);
  useHotKey({ combination: 'tab' }, e => {
    setKeyboardMode(true);
  });
  useEffect(() => {
    const onClick = () => {
      setKeyboardMode(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  });

  return (
    <StackedProviders
      providers={[
        [BlackmakerContext.Provider, { value: { keyboardMode } }],
        (props.provideTheme ?? true) && [ThemeProvider, { themeDefinition: props.theme ?? darkTheme }],
        (props.provideAccessibility ?? true) && AccessibilityProvider,
      ]}
    >
      {props.children}
    </StackedProviders>
  );
};
