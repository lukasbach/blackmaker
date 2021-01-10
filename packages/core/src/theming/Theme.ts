import {Intent} from "..";
import Color from "color";
import { ThemeDefinition } from './ThemeDefinition';

export class Theme {
  public readonly definition: ThemeDefinition;

  constructor(theme: ThemeDefinition) {
    this.definition = theme;
  }

  public getColor(intent?: Intent, defaultColor?: string) {
    switch (intent) {
      case Intent.Primary:
        return this.definition.primaryColor;
      case Intent.Warning:
        return this.definition.warningColor;
      case Intent.Danger:
        return this.definition.dangerColor;
      case Intent.Info:
        return this.definition.infoColor;
      case Intent.Success:
        return this.definition.successColor;
      case Intent.Default:
      default:
        return defaultColor ?? this.definition.defaultColor;
    }
  }

  public get isDark() {
    return this.definition.isDark;
  }

  public switchByDarkness(switchColor: string, ifDarkColor: string, ifLightColor: string) {
    const col = new Color(switchColor);
    const [r, g, b] = [col.red(), col.green(), col.blue()];
    const hsp = Math.sqrt(.299 * r * r + .587 * g * g + .114 * b * b);
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
    return { boxShadow: `rgba(0, 0, 0, .1) 0 ${level + 1}px ${level * 2}px ${level}px` };
  }
}
