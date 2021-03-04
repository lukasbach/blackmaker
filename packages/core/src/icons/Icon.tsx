import * as React from 'react';
import { Falsy, Intent, noSelect, useTheme } from '..';
import { IconName } from './IconName';
import cxs from 'cxs';
import Color from 'color';

export interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
  intent?: Intent;
  elementProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLSpanElement>, HTMLSpanElement> | Falsy;
  padding?: string;
  marginRight?: boolean | string | number;
  marginLeft?: boolean | string | number;
  css?: cxs.CSSObject;
}

export const Icon: React.FC<IconProps> = props => {
  const theme = useTheme();
  const color = props.color || (props.intent ? theme.getColor(props.intent) : undefined);
  // const isColorDark = color ? new Color(color).isDark() : !theme.isDark;

  return (
    <span
      aria-hidden="true"
      className={cxs({
        // fontFamily: isColorDark ? 'Material Icons Outlined' : 'Material Icons',
        fontFamily: 'Material Icons',
        // fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: props.size || '1.5em',
        fontWeight: 'normal !important' as any,
        color: color && `${color} !important`,
        display: 'inline-block',
        textTransform: 'none',
        letterSpacing: 'normal',
        wordWrap: 'normal',
        whiteSpace: 'nowrap',
        direction: 'ltr',
        verticalAlign: 'middle',
        padding: props.padding,
        marginLeft: props.marginLeft ? (typeof props.marginLeft === 'boolean' ? '.2em' : props.marginLeft) : undefined,
        marginRight: props.marginRight
          ? typeof props.marginRight === 'boolean'
            ? '.2em'
            : props.marginRight
          : undefined,
        ['-webkit-font-smoothing']: 'antialiased',
        ['text-rendering']: 'optimizeLegibility',
        ['-moz-osx-font-smoothing']: 'grayscale',
        ['font-feature-settings']: 'liga',
        ...noSelect,
        ...(props.css ?? {}),
      })}
    >
      {props.name}
    </span>
  );
};
