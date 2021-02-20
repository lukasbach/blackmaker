import * as React from 'react';
import { IconName } from '..';
import { RenderItemProps } from './Select';
import { MenuItem } from '../menu/MenuItem';

export const SelectDefaultItemRenderer: React.FC<RenderItemProps & {key: string}> = props => {
  return (
    <MenuItem
      interactive={true}
      icon={props.selected && IconName.Done}
      selected={props.active}
      onClick={props.onClick}
      elementProps={{
        onMouseOver: props.onHover
      }}
      text={props.children}
    />
  );
};
