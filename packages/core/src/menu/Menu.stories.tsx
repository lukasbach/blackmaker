import React from 'react';
import { Meta } from '@storybook/react';
import { Menu, MenuProps } from './Menu';
import { MenuItem } from './MenuItem';
import { MenuBreak } from './MenuBreak';
import { MenuHeader } from './MenuHeader';
import { Intent } from '../common';
import { IconName } from '..';

export default {
  title: 'Core/Components/Menu',
  component: Menu,
} as Meta;

export const MenuExample: React.FC<Partial<MenuProps>> = props => {
  return (
    <Menu>
      <MenuItem>Hello World</MenuItem>
      <MenuItem>Hello World</MenuItem>
      <MenuItem selected={true}>Selected Item</MenuItem>
      <MenuItem>Hello World</MenuItem>
      <MenuItem disabled={true}>Disabled item</MenuItem>
      <MenuBreak />
      <MenuItem intent={Intent.Primary} icon={IconName.Accessibility}>
        Hello World
      </MenuItem>
      <MenuItem intent={Intent.Info} icon={IconName.Accessibility}>
        Hello World
      </MenuItem>
      <MenuItem intent={Intent.Success} icon={IconName.Accessibility} iconRight={<>3</>}>
        Hello World
      </MenuItem>
      <MenuItem intent={Intent.Warning} icon={IconName.Accessibility} iconRight={IconName.AddCircle}>
        Hello World
      </MenuItem>
      <MenuHeader>Other options</MenuHeader>
      <MenuItem iconRight={IconName.ChevronRight}>Hello World</MenuItem>
      <MenuItem>Hello World</MenuItem>
      <MenuItem intent={Intent.Danger}>Hello World</MenuItem>
    </Menu>
  );
};
