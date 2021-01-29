import * as React from 'react';
import { Button, Icon, IconName, Intent, lighten, MaybeIcon, RenderMaybeIcon, TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import { MenuItem, MenuItemProps } from '../menu/MenuItem';
import { Popover, PopoverOpenTrigger } from '../overlays/Popover';
import { Menu } from '../menu/Menu';
import { BreadCrumbArrow } from './BreadCrumbArrow';

export interface BreadCrumbProps {
  title: string;
  render?: () => JSX.Element;
  onClick?: () => any;
  href?: string;
  icon?: MaybeIcon;
  intent?: Intent;
  current?: boolean;
  disabled?: boolean;
  childs?: MenuItemProps[];
  isFinal?: boolean;
}

export const BreadCrumb: React.FC<BreadCrumbProps> = props => {
  const theme = useTheme();
  const Element = props.href ? 'a' : 'button';

  const color = props.intent
    ? theme.getBrandTextColor(props.intent)
    : props.disabled
    ? theme.definition.textDisabledColor
    : props.current
    ? theme.definition.textHightlightColor
    : theme.definition.textMutedColor;

  // TODO render as ol/li list

  return (
    <>
      <Element
        onClick={props.onClick}
        href={props.href}
        className={cxs({
          display: 'inline-block',
          backgroundColor: 'transparent',
          fontSize: '1em',
          border: 'none',
          padding: '0',
          outline: 'none',
          color: color,
          ...((props.href || props.onClick) && {
            cursor: 'pointer',
            ':hover': {
              color: lighten(color, 0.2),
            },
            ':active': {
              color: lighten(color, 0.3),
            },
          }),
        })}
      >
        <RenderMaybeIcon icon={props.icon} iconProps={{ marginRight: true }} />
        {props.children}
        {props.title}
      </Element>
      {!props.isFinal && <BreadCrumbArrow menu={props.childs} />}
    </>
  );
};
