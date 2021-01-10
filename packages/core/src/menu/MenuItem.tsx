import * as React from 'react';
import { Falsy, IconName, Intent, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';

export interface MenuItemProps {
  intent?: Intent;
  icon?: IconName | JSX.Element | Falsy;
  iconRight?: IconName | JSX.Element | Falsy;
}

export const MenuItem: React.FC<MenuItemProps> = props => {
  const theme = useTheme();

  return (
    <div
      className={ cxs({
        padding: '8px 12px',
        borderRadius: theme.definition.borderRadiusSmall,
        cursor: 'pointer',
        transition: '.05s background-color ease',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        color: props.intent === Intent.Default || !props.intent ? theme.definition.textHightlightColor : theme.getColor(props.intent),
        ':hover': {
          backgroundColor: theme.getColor(props.intent ?? Intent.Primary),
          color: theme.definition.textHightlightColor
        },
        ':active': {
          backgroundColor: theme.getColorLighten(props.intent ?? Intent.Primary, .15),
          color: theme.definition.textHightlightColor
        }
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
