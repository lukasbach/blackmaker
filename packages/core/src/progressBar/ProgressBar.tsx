import * as React from 'react';
import { darken, HtmlElementProps, Intent, useTheme } from '..';
import cxs from 'cxs';

export interface ProgressBarProps extends HtmlElementProps {
  value: number;
  intent?: Intent;
  inlineWidth?: string | number;
  small?: boolean;
  large?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = props => {
  const theme = useTheme();

  return (
    <div
      className={ cxs({
        display: props.inlineWidth ? 'inline-block' : 'block',
        width: typeof props.inlineWidth === 'number' ? `${props.inlineWidth}px` : props.inlineWidth,
        height: props.small ? '.6em' : props.large ? '1.7em' : '1em',
        borderRadius: '9999px',
        backgroundColor: theme.colorWithAlpha(theme.definition.menuBackgroundColor, .5),
        verticalAlign: 'middle',
        ...props.css
      }) }
      {...props.elementProps}
    >
      <div
        className={ cxs({
          width: `${Math.round(props.value * 100)}%`,
          borderRadius: '9999px',
          backgroundColor: theme.getColor(props.intent),
          height: '100%'
        }) }
      />
    </div>
  );
};
