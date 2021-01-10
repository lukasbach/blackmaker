import * as React from 'react';
import { Falsy, IconName, Intent, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';

export interface MenuItemProps {
  intent?: Intent;
  icon?: IconName | JSX.Element | Falsy;
  iconRight?: IconName | JSX.Element | Falsy;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => any;
}

export const MenuItem: React.FC<MenuItemProps> = props => {
  const theme = useTheme();

  return (
    <div
      onClick={!props.disabled && !props.selected ? props.onClick : undefined}
      className={ cxs({
        padding: '8px 12px',
        marginBottom: '2px',
        borderRadius: theme.definition.borderRadiusSmall,
        cursor: props.disabled ? 'not-allowed' : !props.selected ? 'pointer' : undefined,
        transition: '.05s background-color ease',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        color: props.intent === Intent.Default || !props.intent ? theme.definition.textHightlightColor : theme.getColor(props.intent),
        ...(props.selected ? ({
          backgroundColor: theme.getColor(props.intent ?? Intent.Primary),
          color: theme.definition.textHightlightColor
        }) : !props.disabled ? ({
          ':hover': {
            backgroundColor: theme.getColor(props.intent ?? Intent.Primary),
            color: theme.definition.textHightlightColor
          },
          ':active': {
            backgroundColor: theme.getColorLighten(props.intent ?? Intent.Primary, .15),
            color: theme.definition.textHightlightColor
          }
        }) : ({
          color: theme.definition.textMutedColor
        }))
      }) }
    >
      <RenderMaybeIcon
        icon={props.icon}
        iconProps={{
          marginRight: true,
          css: {
            marginLeft: '-.3em'
          }
        }}
      />
      <div className={cxs({
        flexGrow: 1,
        marginRight: '1em'
      })}>
        { props.children }
      </div>
      <RenderMaybeIcon
        icon={props.iconRight}
        iconProps={{
          marginLeft: true,
          css: {
            marginRight: '-.3em'
          }
        }}
      />
    </div>
  );
};
