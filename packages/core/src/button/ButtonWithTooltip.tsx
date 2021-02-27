import * as React from 'react';
import { Button, ButtonProps } from '..';
import { ToolTip, ToolTipProps } from '../overlays/ToolTip';
import { AnyElement } from '../common/AnyElement';

export interface ButtonWithTooltipProps extends ButtonProps {
  tooltip?: AnyElement;
  tooltipProps?: ToolTipProps;
}

export const ButtonWithTooltip: React.FC<ButtonWithTooltipProps> = props => {
  const button = <Button {...props} />;

  if (props.tooltip) {
    return (
      <ToolTip {...props.tooltipProps} content={props.tooltip}>
        {button}
      </ToolTip>
    );
  } else {
    return button;
  }
};
