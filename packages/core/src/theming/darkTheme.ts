import { BrandColorSet, ThemeDefinition } from './ThemeDefinition';
import { lighten } from '../common';

const brandColors: BrandColorSet = {
  default: "#464d5a",
  primary: "#6C5FC7",
  info: "#3498db",
  success: "#27ae60",
  warning: "#e8a318",
  danger: "#e74c3c",
}

export const darkTheme: ThemeDefinition = {
  brandColors: brandColors,
  brandTextColors: {
    ...brandColors,
    default: '#ffffff',
    primary: lighten(brandColors.primary, .2),
    info: lighten(brandColors.info, 0),
    success: lighten(brandColors.success, .1),
    warning: lighten(brandColors.warning, .1),
    danger: lighten(brandColors.danger, 0),
  },
  minimalBrandBaseColors: {
    ...brandColors,
    default: "#5f6570",
    primary: "#6C5FC7",
    info: "#3498db",
    success: "#27ae60",
    warning: "#e8a318",
    danger: "#e74c3c",
  },

  primaryBackgroundColor: '#36393F',
  secondaryBackgroundColor: '#2F3136',
  tertiaryBackgroundColor: '#202225',
  menuBackgroundColor: '#131515',

  textColor: '#dedede',
  textHightlightColor: '#ffffff',
  textMutedColor: '#a2a2a2',
  textDisabledColor: '#7e7e7e',

  borderRadiusBig: '14px',
  borderRadiusRegular: '6px',
  borderRadiusSmall: '3px',

  isDark: true,
}
