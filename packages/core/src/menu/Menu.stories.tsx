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
      <MenuItem text="Hello World" />
      <MenuItem text="Hello World" />
      <MenuItem text="Hello World" selected={true} />
      <MenuItem text="Hello World" />
      <MenuItem text="Hover me!" iconRight={IconName.ChevronRight}>
        <MenuItem text="Hello World" />
        <MenuItem text="Hello World" />
        <MenuItem text="Hello World" iconRight={IconName.ChevronRight}>
          <MenuItem text="Hello World" />
          <MenuItem text="Hello World" iconRight={IconName.ChevronRight}>
            <MenuItem text="Hello World" />
            <MenuItem text="Hello World" />
          </MenuItem>
          <MenuItem text="Hello World" />
        </MenuItem>
      </MenuItem>
      <MenuItem text="Hello World" disabled={true} />
      <MenuBreak />
      <MenuItem text="Hello World" intent={Intent.Primary} icon={IconName.Accessibility} />
      <MenuItem text="Hello World" intent={Intent.Info} icon={IconName.Accessibility} />
      <MenuItem text="Hello World" intent={Intent.Success} icon={IconName.Accessibility} iconRight={<>3</>} />
      <MenuItem
        text="Hello World"
        intent={Intent.Warning}
        icon={IconName.Accessibility}
        iconRight={IconName.AddCircle}
      />
      <MenuHeader>Other options</MenuHeader>
      <MenuItem text="Hello World" />
      <MenuItem text="Hello World" iconRight={IconName.CheckBoxOutlineBlank} />
      <MenuItem text="Hello World" iconRight={IconName.CheckBox} />
      <MenuItem text="Hello World" intent={Intent.Danger} />
    </Menu>
  );
};
