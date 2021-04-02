import { BrandColorSet, ThemeDefinition } from './ThemeDefinition';
import { darken, lighten } from '../common';

const brandColors: BrandColorSet = {
  default: '#464d5a',
  primary: '#26ac91',
  info: '#3498db',
  success: '#27ae60',
  warning: '#e8a318',
  danger: '#e74c3c',
};

const textColor = '#dedede';

export const darkTheme: ThemeDefinition = {
  brandColors: brandColors,
  textColorOnBrandColors: {
    default: '#ffffff',
    primary: '#ffffff',
    info: '#ffffff',
    success: '#ffffff',
    warning: '#ffffff',
    danger: '#ffffff',
  },
  brandTextColors: {
    ...brandColors,
    default: textColor,
    primary: lighten(brandColors.primary, 0.2),
    info: lighten(brandColors.info, 0),
    success: lighten(brandColors.success, 0.1),
    warning: lighten(brandColors.warning, 0.1),
    danger: lighten(brandColors.danger, 0),
  },
  minimalBrandBaseColors: {
    ...brandColors,
    default: '#666a72',
    primary: '#089479',
    info: '#3498db',
    success: '#27ae60',
    warning: '#e8a318',
    danger: '#e74c3c',
  },
  brandButtonShadowColors: {
    ...brandColors,
    default: darken(brandColors.default, 0.45),
    primary: darken(brandColors.primary, 0.4),
    info: darken(brandColors.info, 0.4),
    success: darken(brandColors.success, 0.4),
    warning: darken(brandColors.warning, 0.4),
    danger: darken(brandColors.danger, 0.45),
  },

  primaryBackgroundColor: '#36393F',
  secondaryBackgroundColor: '#2F3136',
  tertiaryBackgroundColor: '#202225',
  menuBackgroundColor: '#131515',

  focusRingColor: '#3498db',

  textColor: textColor,
  textHightlightColor: '#ffffff',
  textMutedColor: '#b7b7b7',
  textDisabledColor: '#7e7e7e',

  borderRadiusBig: '14px',
  borderRadiusRegular: '6px',
  borderRadiusSmall: '3px',

  isDark: true,
};
