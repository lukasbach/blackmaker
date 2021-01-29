import { ThemeDefinition } from './ThemeDefinition';
import { darkTheme } from './darkTheme';
import { darken, lighten } from '../common';

const brandColors = darkTheme.brandColors;

export const brightTheme: ThemeDefinition = {
  ...darkTheme,

  brandTextColors: {
    ...brandColors,
    default: '#3c3c3c',
    primary: darken(brandColors.primary, 0.2),
    info: darken(brandColors.info, 0),
    success: darken(brandColors.success, 0.1),
    warning: darken(brandColors.warning, 0.2),
    danger: darken(brandColors.danger, 0),
  },
  minimalBrandBaseColors: {
    ...brandColors,
    default: '#5f6570',
    primary: '#6C5FC7',
    info: '#3498db',
    success: '#27ae60',
    warning: '#e8a318',
    danger: '#e74c3c',
  },

  primaryBackgroundColor: '#ffffff',
  secondaryBackgroundColor: '#eeeff1',
  tertiaryBackgroundColor: '#bababa',
  menuBackgroundColor: '#f8f8f8',

  textColor: '#515151',
  textHightlightColor: '#3c3c3c',
  textMutedColor: '#7e7e7e',
  textDisabledColor: '#bababa',

  isDark: false,
};
