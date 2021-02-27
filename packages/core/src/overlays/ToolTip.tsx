import * as React from 'react';
import { Intent, TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import { Popover, PopoverOpenTrigger, PopoverProps } from './Popover';
import { useUniqueId } from '../common/useUniqueId';

export interface ToolTipProps
  extends Omit<
    PopoverProps,
    'noLeftPadding' | 'animationDefaultStyles' | 'animationDisplayStyles' | 'animationHiddenStyles'
  > {
  intent?: Intent;
  tooltipIdPrefix?: string;
}

export const ToolTip: React.FC<ToolTipProps> = props => {
  const theme = useTheme();
  const tooltipId = useUniqueId(props.tooltipIdPrefix);

  return (
    <Popover
      interactiveBorder={0}
      inline={props.inline ?? true}
      trigger={PopoverOpenTrigger.HoverReference}
      placement={props.placement ?? TooltipPlacement.Bottom}
      // offset={[0, 20]} // TODO
      interactiveDebounce={0}
      closeOnClick={false}
      closeOnEscape={false}
      isOpen={props.isOpen}
      elementProps={{
        ['aria-describedby']: tooltipId,
        ...props.elementProps,
      }}
      {...props}
      content={
        <div
          role="tooltip"
          id={tooltipId}
          className={cxs({
            backgroundColor: theme.getColor(props.intent, theme.definition.menuBackgroundColor),
            color: theme.getTextColorOnBrandColors(props.intent, theme.definition.textHightlightColor),
            borderRadius: theme.definition.borderRadiusSmall,
            padding: '.8em',
            fontSize: '.8em',
            ...theme.cssShadow(1),
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
