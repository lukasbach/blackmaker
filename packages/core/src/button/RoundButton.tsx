import * as React from 'react';
import { Icon, IconName, Intent, switchEnum, useTheme } from '..';
import cxs from 'cxs';

export interface RoundButtonProps {
  icon: IconName;
  intent?: Intent;
  size?: string | 1 | 2 | 3 | 4;
  onClick?: () => any;
}

export const RoundButton: React.FC<RoundButtonProps> = props => {
  const theme = useTheme();

  return (
    <button
      onClick={props.onClick}
      className={cxs({
        outline: 'none',
        display: 'inline-block',
        borderRadius: '9999px',
        color: theme.getBrandTextColor(props.intent),
        backgroundColor: 'transparent',
        border: 'none',
        padding: '.6em',
        margin: '.2em',
        fontSize:
          typeof props.size === 'string'
            ? props.size
            : switchEnum(props.size ?? 1, [
                [1, '1em'],
                [2, '1.2em'],
                [3, '1.6em'],
                [4, '2em'],
              ]),
        transition: '.2s background-color ease',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.2),
        },
        ':active': {
          transition: '.05s background-color ease',
          backgroundColor: theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.35),
        },
      })}
    >
      <Icon name={props.icon} />
    </button>
  );
};
