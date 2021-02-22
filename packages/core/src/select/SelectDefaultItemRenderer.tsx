import * as React from 'react';
import { IconName } from '..';
import { RenderItemProps } from './ComplexSelect';
import { MenuItem, MenuItemProps } from '../menu/MenuItem';

export const SelectDefaultItemRenderer: React.FC<
  RenderItemProps & { key: string; menuItemProps?: MenuItemProps }
> = props => {
  return (
    <MenuItem
      interactive={true}
      canFocus={false}
      icon={props.selected && IconName.Done}
      selected={props.active}
      onClick={props.onClick}
      elementProps={{
        id: props.id,
        onMouseOver: props.onHover,
        ...props.menuItemProps?.elementProps,
      }}
      text={props.children}
      {...props.menuItemProps}
    />
  );
};
