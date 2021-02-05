import * as React from 'react';
import { Intent, TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import { Popover, PopoverOpenTrigger, PopoverProps } from './Popover';

export interface ToolTipProps extends Omit<PopoverProps, 'noLeftPadding' | 'trigger' | 'isOpen' | 'animationDefaultStyles' | 'animationDisplayStyles' | 'animationHiddenStyles'> {
  intent?: Intent;
}

export const ToolTip: React.FC<ToolTipProps> = props => {
  const theme = useTheme();

  return (
    <Popover
      {...props}
      inline={props.inline ?? true}
      trigger={PopoverOpenTrigger.HoverReference}
      placement={props.placement ?? TooltipPlacement.Bottom}
      // offset={[0, 20]} // TODO
      content={
        <div
          className={cxs({
            backgroundColor: theme.getColor(props.intent, theme.definition.menuBackgroundColor),
            color: theme.getTextColorOnBrandColors(props.intent, theme.definition.textHightlightColor),
            borderRadius: theme.definition.borderRadiusSmall,
            padding: '.8em',
            fontSize: '.8em',
          })}
        >
          {props.content}
        </div>
      }
    >
      {props.children}
    </Popover>
  );
};
