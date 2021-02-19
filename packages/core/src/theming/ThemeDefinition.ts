export interface BrandColorSet {
  primary: string;
  danger: string;
  warning: string;
  success: string;
  info: string;
  default: string;
}

export interface ThemeDefinition {
  brandColors: BrandColorSet;
  brandTextColors: BrandColorSet;
  textColorOnBrandColors: BrandColorSet;
  minimalBrandBaseColors: BrandColorSet;

  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  tertiaryBackgroundColor: string;
  menuBackgroundColor: string;

  focusRingColor: string;

  textColor: string;
  textHightlightColor: string;
  textMutedColor: string;
  textDisabledColor: string;

  borderRadiusSmall: string;
  borderRadiusRegular: string;
  borderRadiusBig: string;

  isDark: boolean;

  popoverInteractiveDebounce?: number;
  popoverInteractiveBorder?: number;
}
