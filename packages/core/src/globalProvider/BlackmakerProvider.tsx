import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useHotKey } from '@blackmaker/hotkeys';
import { BlackmakerContext, BlackmakerContextValue } from './BlackmakerContext';
import { StackedProviders } from '../common/StackedProviders';
import { darkTheme, ThemeDefinition, ThemeProvider } from '../theming';
import { AccessibilityProvider } from '../accessibility/AccessibilityProvider';

export interface BlackmakerProviderProps {
  provideTheme?: boolean;
  provideAccessibility?: boolean;
  theme?: ThemeDefinition;
  appContext?: BlackmakerContextValue;
}

export const BlackmakerProvider: React.FC<BlackmakerProviderProps> = props => {
  const [appContext, setAppContext] = useState<BlackmakerContextValue>(props.appContext ?? { keyboardMode: false });
  useEffect(() => {
    const onClick = () => {
      if (appContext.keyboardMode) {
        setAppContext(ctx => ({ ...ctx, keyboardMode: false }));
      }
    };
    const onTab = (e: KeyboardEvent) => {
      // We cannot track this event with useHotKey, because that ignores events
      // with `defaultPrevented` set to true, which is the case for every first
      // tab event
      if (e.code.toLowerCase() === 'tab') {
        if (!appContext.keyboardMode) {
          setAppContext(ctx => ({ ...ctx, keyboardMode: true }));
        }
      }
    };

    document.body.addEventListener('pointerdown', onClick);
    document.body.addEventListener('keydown', onTab);
    return () => {
      document.body.removeEventListener('pointerdown', onClick);
      document.body.removeEventListener('keydown', onTab);
    };
  }, [appContext.keyboardMode]);

  return (
    <StackedProviders
      providers={[
        [BlackmakerContext.Provider, { value: appContext }],
        (props.provideTheme ?? true) && [ThemeProvider, { themeDefinition: props.theme ?? darkTheme }],
        (props.provideAccessibility ?? true) && AccessibilityProvider,
      ]}
    >
      {props.children}
    </StackedProviders>
  );
};
