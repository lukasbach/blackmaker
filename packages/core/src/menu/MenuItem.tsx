import * as React from 'react';
import { Falsy, HtmlElementProps, IconName, Intent, MaybeIcon, RenderMaybeIcon, TooltipPlacement, useTheme } from '..';
import cxs, { CSSObject } from 'cxs';
import { Popover, PopoverOpenTrigger } from '../overlays/Popover';
import { Menu } from './Menu';
import { MaybeFocusRing } from '../accessibility/MaybeFocusRing';
import { useState } from 'react';
import { useUniqueId } from '../common/useUniqueId';
import { AnyElement } from '../common/AnyElement';

export interface MenuItemProps extends HtmlElementProps<HTMLButtonElement> {
  intent?: Intent;
  icon?: MaybeIcon;
  iconRight?: MaybeIcon;
  selected?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  text?: string | AnyElement;
  subText?: string | AnyElement;
  directContent?: AnyElement;
  dontTruncate?: boolean;
  minimal?: boolean;
  compact?: boolean;
  interactive?: boolean;
  canFocus?: boolean;
}

const truncateCode: CSSObject = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
};

export const MenuItem: React.FC<MenuItemProps> = props => {
  const theme = useTheme();
  const subTextClass = useUniqueId();
  const [isExpanded, setIsExpanded] = useState(false);

  const hoverStyles: CSSObject = !props.minimal
    ? {
        backgroundColor: theme.getColor(props.intent ?? Intent.Primary),
        color: theme.getTextColorOnBrandColors(props.intent),
      }
    : {
        backgroundColor: theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent ?? Intent.Primary), 0.2),
      };
  const activeStyles: CSSObject = !props.minimal
    ? {
        backgroundColor: theme.getColorLighten(props.intent ?? Intent.Primary, 0.15),
        color: theme.getTextColorOnBrandColors(props.intent),
      }
    : {
        backgroundColor: theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent ?? Intent.Primary), 0.3),
      };

  const interactive = props.interactive ?? (!props.disabled && !props.selected);
  const canFocus = props.canFocus ?? interactive;
  const selected = props.selected || isExpanded;

  const itemContent = (
    <MaybeFocusRing canFocus={canFocus}>
      <button
        role="listitem"
        tabIndex={!canFocus ? -1 : undefined}
        onClick={props.onClick}
        className={cxs({
          border: 'none',
          backgroundColor: 'transparent',
          width: '100%',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          textAlign: 'inherit',
          outline: 'none',
          padding: !props.compact ? '8px 12px' : '2px 12px',
          marginBottom: '2px',
          borderRadius: theme.definition.borderRadiusSmall,
          cursor: props.disabled ? 'not-allowed' : interactive ? 'pointer' : undefined,
          transition: '.05s background-color ease',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center',
          overflow: 'hidden',
          color: theme.getBrandTextColor(props.intent),
          ...(selected
            ? hoverStyles
            : !props.disabled
            ? {
                ':hover': hoverStyles,
                ':active': activeStyles,
              }
            : {
                color: theme.definition.textMutedColor,
              }),
          [` .${subTextClass}`]: {
            ...(!props.dontTruncate && truncateCode),
            color: theme.definition.textMutedColor,
            fontSize: '.8em',
          },
          [`:hover .${subTextClass}`]: !props.minimal && {
            color: theme.getTextColorOnBrandColors(props.intent),
          },
          ...props.css,
        })}
        {...props.elementProps}
      >
        {props.directContent}
        <RenderMaybeIcon
          icon={props.icon}
          iconProps={{
            marginRight: '.4em',
            css: {
              marginLeft: '-.3em',
            },
          }}
        />
        {props.text && (
          <div
            className={cxs({
              flexGrow: 1,
              marginRight: '1em',
              maxWidth: '100%',
            })}
          >
            <div
              className={
                !props.dontTruncate
                  ? cxs({
                    ...truncateCode,
                    // TODO paddingRight: '10px',
                    boxSizing: 'border-box',
                  })
                  : undefined
              }
            >
              {props.text}
            </div>
            {props.subText && <div className={subTextClass}>{props.subText}</div>}
          </div>
        )}
        <RenderMaybeIcon
          icon={props.iconRight}
          iconProps={{
            marginLeft: true,
            css: {
              marginRight: '-.3em',
            },
          }}
        />
      </button>
    </MaybeFocusRing>
  );

  if (props.children) {
    return (
      <Popover
        content={<Menu>{props.children}</Menu>}
        trigger={PopoverOpenTrigger.HoverReference}
        placement={TooltipPlacement.RightStart}
        inline={false}
        onOpen={() => setIsExpanded(true)}
        onClose={() => setIsExpanded(false)}
      >
        {itemContent}
      </Popover>
    );
  } else {
    return itemContent;
  }
};
