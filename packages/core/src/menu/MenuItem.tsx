import * as React from 'react';
import { Falsy, HtmlElementProps, IconName, Intent, RenderMaybeIcon, TooltipPlacement, useTheme } from '..';
import cxs, { CSSObject } from 'cxs';
import { Popover, PopoverOpenTrigger } from '../overlays/Popover';
import { Menu } from './Menu';
import { MaybeFocusRing } from '../accessibility/MaybeFocusRing';
import { useState } from 'react';

export interface MenuItemProps extends HtmlElementProps<HTMLButtonElement> {
  intent?: Intent;
  icon?: IconName | JSX.Element | Falsy;
  iconRight?: IconName | JSX.Element | Falsy;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => any;
  text?: string | JSX.Element;
  subText?: string | JSX.Element;
  dontTruncate?: boolean;
  minimal?: boolean;
  compact?: boolean;
}

const truncateCode: CSSObject = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
};

export const MenuItem: React.FC<MenuItemProps> = props => {
  const theme = useTheme();
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

  const canFocus = !props.disabled && !props.selected;
  const selected = props.selected || isExpanded;

  const itemContent = (
    <MaybeFocusRing canFocus={canFocus}>
      <button
        role="listitem"
        tabIndex={!canFocus ? -1 : undefined}
        onClick={!props.disabled && !props.selected ? props.onClick : undefined}
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
          cursor: props.disabled ? 'not-allowed' : !props.selected ? 'pointer' : undefined,
          transition: '.05s background-color ease',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center',
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
          ...props.css
        })}
        {...props.elementProps}
      >
        <RenderMaybeIcon
          icon={props.icon}
          iconProps={{
            marginRight: true,
            css: {
              marginLeft: '-.3em',
            },
          }}
        />
        <div
          className={cxs({
            flexGrow: 1,
            marginRight: '1em',
            maxWidth: '100%',
          })}
        >
          <div className={!props.dontTruncate && cxs(truncateCode)}>{props.text}</div>
          {props.subText && (
            <div
              className={cxs({
                ...(!props.dontTruncate && truncateCode),
                color: theme.definition.textMutedColor, // TODO is not overwritten by parent hover and looks bad in bright ui
                fontSize: '.8em',
              })}
            >
              {props.subText}
            </div>
          )}
        </div>
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
