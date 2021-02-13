import { Intent } from '..';
import Color from 'color';
import { ThemeDefinition } from './ThemeDefinition';
import { BackgroundColor } from './BackgroundColor';

export class Theme {
  public readonly definition: ThemeDefinition;

  constructor(theme: ThemeDefinition) {
    this.definition = theme;
  }

  public getColor(intent?: Intent, defaultColor?: string) {
    switch (intent) {
      case Intent.Primary:
        return this.definition.brandColors.primary;
      case Intent.Warning:
        return this.definition.brandColors.warning;
      case Intent.Danger:
        return this.definition.brandColors.danger;
      case Intent.Info:
        return this.definition.brandColors.info;
      case Intent.Success:
        return this.definition.brandColors.success;
      case Intent.Default:
      default:
        return defaultColor ?? this.definition.brandColors.default;
    }
  }

  public getTextColorOnBrandColors(intent?: Intent, defaultColor?: string) {
    switch (intent) {
      case Intent.Primary:
        return this.definition.textColorOnBrandColors.primary;
      case Intent.Warning:
        return this.definition.textColorOnBrandColors.warning;
      case Intent.Danger:
        return this.definition.textColorOnBrandColors.danger;
      case Intent.Info:
        return this.definition.textColorOnBrandColors.info;
      case Intent.Success:
        return this.definition.textColorOnBrandColors.success;
      case Intent.Default:
      default:
        return defaultColor ?? this.definition.textColorOnBrandColors.default;
    }
  }

  public getBrandTextColor(intent?: Intent, defaultColor?: string) {
    switch (intent) {
      case Intent.Primary:
        return this.definition.brandTextColors.primary;
      case Intent.Warning:
        return this.definition.brandTextColors.warning;
      case Intent.Danger:
        return this.definition.brandTextColors.danger;
      case Intent.Info:
        return this.definition.brandTextColors.info;
      case Intent.Success:
        return this.definition.brandTextColors.success;
      case Intent.Default:
      default:
        return defaultColor ?? this.definition.brandTextColors.default;
    }
  }

  public getMinimalBrandBaseColor(intent?: Intent, defaultColor?: string) {
    switch (intent) {
      case Intent.Primary:
        return this.definition.minimalBrandBaseColors.primary;
      case Intent.Warning:
        return this.definition.minimalBrandBaseColors.warning;
      case Intent.Danger:
        return this.definition.minimalBrandBaseColors.danger;
      case Intent.Info:
        return this.definition.minimalBrandBaseColors.info;
      case Intent.Success:
        return this.definition.minimalBrandBaseColors.success;
      case Intent.Default:
      default:
        return defaultColor ?? this.definition.minimalBrandBaseColors.default;
    }
  }

  public get isDark() {
    return this.definition.isDark;
  }

  public switchByDarkness(switchColor: string, ifDarkColor: string, ifLightColor: string) {
    const col = new Color(switchColor);
    const [r, g, b] = [col.red(), col.green(), col.blue()];
    const hsp = Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
    return hsp > 127.5 ? ifLightColor : ifDarkColor;
  }

  public getColorLighten(intent: Intent, percentage: number) {
    return Color(this.getColor(intent)).lighten(percentage).toString();
  }

  public getColorDarken(intent: Intent, percentage: number) {
    return Color(this.getColor(intent)).darken(percentage).toString();
  }

  public colorWithAlpha(color: string, alpha: number) {
    const col = new Color(color);
    return `rgba(${col.red()},${col.green()},${col.blue()},${alpha})`;
  }

  public cssOutlineFromColor(color: string, radius: number) {
    return { boxShadow: `${color} 0 0 0 ${radius}px` };
  }

  public cssShadow(level?: number) {
    if (!level) return {};
    return { boxShadow: `rgba(0, 0, 0, ${this.isDark ? .2 : .1}) 0 ${level + 1}px ${level * 2}px ${level}px` };
  }

  public getBackgroundColor(backgroundColor: BackgroundColor) {
    switch (backgroundColor) {
      case BackgroundColor.Primary:
        return this.definition.primaryBackgroundColor;
      case BackgroundColor.Secondary:
        return this.definition.secondaryBackgroundColor;
      case BackgroundColor.Tertiary:
        return this.definition.tertiaryBackgroundColor;
      case BackgroundColor.Menu:
        return this.definition.menuBackgroundColor;
      default:
        throw Error(`Unknown backgroundcolor code ${backgroundColor}`);
    }
  }
}
