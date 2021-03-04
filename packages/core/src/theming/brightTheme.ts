import { ThemeDefinition } from './ThemeDefinition';
import { darkTheme } from './darkTheme';
import { darken, lighten } from '../common';

const brandColors = {
  ...darkTheme.brandColors,
  default: '#dddddd',
};

const textColor = '#515151';

export const brightTheme: ThemeDefinition = {
  ...darkTheme,

  brandColors,

  brandTextColors: {
    ...darkTheme.brandTextColors,
    default: textColor,
    primary: darken(brandColors.primary, 0.2),
    info: darken(brandColors.info, 0),
    success: darken(brandColors.success, 0.1),
    warning: darken(brandColors.warning, 0.2),
    danger: darken(brandColors.danger, 0),
  },
  minimalBrandBaseColors: {
    ...darkTheme.minimalBrandBaseColors,
  },
  brandButtonShadowColors: {
    ...darkTheme.brandButtonShadowColors,
    default: darken(brandColors.default, 0.2),
    primary: darken(brandColors.primary, 0.2),
    info: darken(brandColors.info, 0.2),
    success: darken(brandColors.success, 0.2),
    warning: darken(brandColors.warning, 0.2),
    danger: darken(brandColors.danger, 0.3),
  },
  textColorOnBrandColors: {
    ...darkTheme.textColorOnBrandColors,
    default: textColor,
  },

  primaryBackgroundColor: '#ffffff',
  secondaryBackgroundColor: '#f2f4f7',
  tertiaryBackgroundColor: '#ebedf0',
  menuBackgroundColor: '#f8f8f8',

  textColor: textColor,
  textHightlightColor: '#3c3c3c',
  textMutedColor: '#7e7e7e',
  textDisabledColor: '#bababa',

  isDark: false,
};
