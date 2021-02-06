import * as React from 'react';
import { Intent, switchEnum, useTheme } from '..';
import cxs from 'cxs';
import Color from 'color';
import { NotificationContent, NotificationContentProps } from '../notificationContent/NotificationContent';

export enum CalloutStyle {
  Heavy,
  Minimal,
  Outlined,
  LeftBorder,
  BackgroundColor,
}

export interface CalloutProps extends NotificationContentProps {
  style: CalloutStyle;
  backgroundColorStyle?: 1 | 2 | 3;
  intent?: Intent;
}

export const Callout: React.FC<CalloutProps> = props => {
  const theme = useTheme();

  const backgroundColor = switchEnum(props.style ?? CalloutStyle.Minimal, [
    [CalloutStyle.Minimal, theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.2)],
    [CalloutStyle.Outlined, theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.2)],
    [CalloutStyle.Heavy, theme.getColor(props.intent)],
    [CalloutStyle.LeftBorder, theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.2)],
    [
      CalloutStyle.BackgroundColor,
      switchEnum(props.backgroundColorStyle ?? 1, [
        [1, theme.definition.primaryBackgroundColor],
        [2, theme.definition.secondaryBackgroundColor],
        [3, theme.definition.tertiaryBackgroundColor],
      ]),
    ],
  ]);

  return (
    <div
      className={cxs({
        backgroundColor: backgroundColor,
        borderWidth:
          props.style === CalloutStyle.Outlined || props.style === CalloutStyle.BackgroundColor ? '1px' : '0',
        borderColor:
          props.style === CalloutStyle.Outlined
            ? theme.getColor(props.intent)
            : new Color(backgroundColor).darken(0.35).toString(),
        borderStyle: 'solid',
        marginBottom: '.8em',
        borderRadius: theme.definition.borderRadiusRegular,
        borderLeft: props.style === CalloutStyle.LeftBorder && `6px solid ${theme.getColor(props.intent)}`,
        fontSize: switchEnum(
          props.size,
          [
            ['tiny', '.7em'],
            ['small', '.85em'],
            ['normal', '1em'],
            ['large', '1.2em'],
            ['x-large', '1.4em'],
          ],
          '1em'
        ),
      })}
    >
      <NotificationContent
        {...props}
        closeButtonIntent={props.style !== CalloutStyle.Heavy && props.intent}
        iconColor={
          props.style === CalloutStyle.Heavy
            ? theme.getTextColorOnBrandColors(props.intent)
            : theme.getColor(props.intent, theme.definition.textHightlightColor)
        }
        titleColor={
          props.style !== CalloutStyle.Heavy &&
          theme.getBrandTextColor(props.intent, theme.definition.textHightlightColor)
        }
        textColor={
          props.style === CalloutStyle.Heavy
            ? theme.getTextColorOnBrandColors(props.intent)
            : theme.definition.textHightlightColor
        }
        size={'normal'}
      >
        {props.children}
      </NotificationContent>
    </div>
  );
};
