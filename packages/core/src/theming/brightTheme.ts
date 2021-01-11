import { ThemeDefinition } from './ThemeDefinition';
import { darkTheme } from './darkTheme';

export const brightTheme: ThemeDefinition = {
  ...darkTheme,

  primaryBackgroundColor: '#ffffff',
  secondaryBackgroundColor: '#F2F3F5',
  tertiaryBackgroundColor: '#c6c6c6',
  menuBackgroundColor: '#e7e7e7',

  textColor: '#414141',
  textHightlightColor: '#000000',
  textMutedColor: '#7e7e7e',
  textDisabledColor: '#bababa',

  isDark: false,
};
