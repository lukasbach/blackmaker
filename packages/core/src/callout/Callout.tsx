import * as React from 'react';
import { IconName, Intent, MaybeIcon, RenderMaybeIcon, switchEnum, useTheme } from '..';
import cxs from 'cxs';
import Color from 'color';
import { RoundButton } from '../button/RoundButton';

export enum CalloutStyle {
  Heavy,
  Minimal,
  Outlined,
  LeftBorder,
  BackgroundColor,
}

export interface CalloutProps {
  style: CalloutStyle;
  backgroundColorStyle?: 1 | 2 | 3;
  intent?: Intent;
  icon?: MaybeIcon;
  title?: string | JSX.Element;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  onClose?: () => any;
  size?: 'tiny' | 'small' | 'normal' | 'large' | 'x-large';
}

export const Callout: React.FC<CalloutProps> = props => {
  const theme = useTheme();

  const backgroundColor = switchEnum(props.style ?? CalloutStyle.Minimal, [
    [ CalloutStyle.Minimal, theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), .2) ],
    [ CalloutStyle.Outlined, theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), .2) ],
    [ CalloutStyle.Heavy, theme.getColor(props.intent) ],
    [ CalloutStyle.LeftBorder, theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), .2) ],
    [ CalloutStyle.BackgroundColor, (
      switchEnum(props.backgroundColorStyle ?? 1, [
        [ 1, theme.definition.primaryBackgroundColor ],
        [ 2, theme.definition.secondaryBackgroundColor ],
        [ 3, theme.definition.tertiaryBackgroundColor ],
      ])
    ) ],
  ]);

  const TitleElement = `h${props.headingLevel ?? 1}` as 'h1';

  return (
    <div
      className={ cxs({
        backgroundColor: backgroundColor,
        color: theme.definition.textHightlightColor,
        borderWidth: props.style === CalloutStyle.Outlined || props.style === CalloutStyle.BackgroundColor ? '1px' : '0',
        borderColor: props.style === CalloutStyle.Outlined ? theme.getColor(props.intent) : new Color(backgroundColor).darken(.35).toString(),
        borderStyle: 'solid',
        marginBottom: '.8em',
        padding: '.8em',
        borderRadius: theme.definition.borderRadiusRegular,
        display: 'flex',
        borderLeft: props.style === CalloutStyle.LeftBorder && `6px solid ${theme.getColor(props.intent)}`,
        fontSize: switchEnum(props.size, [
          ['tiny', '.7em'],
          ['small', '.85em'],
          ['normal', '1em'],
          ['large', '1.2em'],
          ['x-large', '1.4em'],
        ], '1em')
      }) }
    >
      { props.icon && (
        <div>
          <RenderMaybeIcon
            icon={props.icon}
            iconProps={{
              size: '2em',
              marginRight: '.4em',
              color: props.style === CalloutStyle.Heavy ? theme.definition.textHightlightColor : theme.getColor(props.intent, theme.definition.textHightlightColor)
            }}
          />
        </div>
      ) }
      <div className={cxs({
        flexGrow: 1
      })}>
        { props.title && (
          <TitleElement
            className={cxs({
              fontSize: '1.4em',
              margin: '.1em 0 .4em 0',
              color: props.style !== CalloutStyle.Heavy && theme.getColor(props.intent, theme.definition.textHightlightColor)
            })}
          >
            { props.title }
          </TitleElement>
        ) }
        { props.children }
      </div>
      { props.onClose && (
        <div>
          <RoundButton
            icon={IconName.Close}
            onClick={props.onClose}
            intent={props.style !== CalloutStyle.Heavy && props.intent}
          />
        </div>
      ) }
    </div>
  );
};
