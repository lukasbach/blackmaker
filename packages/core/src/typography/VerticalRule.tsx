import * as React from 'react';
import { darken, useTheme } from '..';
import cxs from 'cxs';
import { BackgroundColor } from '../theming/BackgroundColor';

export interface VerticalRuleProps {
  high?: boolean;
  horizontalSpace?: string;
  color?: string;
}

export const VerticalRule: React.FC<VerticalRuleProps> = props => {
  const theme = useTheme();
  const color = props.color ?? darken(theme.getBackgroundColor(BackgroundColor.Primary), theme.isDark ? -.3 : 0.2);

  return (
    <hr
      className={cxs({
        border: '0',
        width: '1px',
        minWidth: '1px',
        height: 'auto',
        background: color,
        margin: !props.high ? `.2em ${props.horizontalSpace ?? '1em'}` : `0 ${props.horizontalSpace ?? '1em'}`,
      })}
    />
  );
};
