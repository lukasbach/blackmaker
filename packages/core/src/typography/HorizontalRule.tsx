import * as React from 'react';
import { darken, useTheme } from '..';
import cxs from 'cxs';
import { BackgroundColor } from '../theming/BackgroundColor';

export interface HorizontalRuleProps {
  wide?: boolean;
  verticalSpace?: string;
}

export const HorizontalRule: React.FC<HorizontalRuleProps> = props => {
  const theme = useTheme();
  const color = darken(theme.getBackgroundColor(BackgroundColor.Primary), 0.2);

  return (
    <hr
      className={cxs({
        border: '0',
        height: '1px',
        background: color, // theme.isDark ? 'rgba(255, 255, 255, .3)' : 'rgba(0, 0, 0, .3)',
        margin: !props.wide ? `${props.verticalSpace ?? '1em'} 1em` : `${props.verticalSpace ?? '1em'} 0`,
      })}
    />
  );
};
