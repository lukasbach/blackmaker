import React from 'react';
import { Meta } from '@storybook/react';
import { Menu, MenuProps } from './Menu';
import { MenuItem } from './MenuItem';
import { MenuBreak } from './MenuBreak';
import { MenuHeader } from './MenuHeader';
import { Intent } from '../common';
import { Icon, IconName } from '..';

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
      <MenuItem
        dontTruncate={true}
        text="This text is not truncated, which means it wraps around its container, which probably does not look as nice."
      />
      <MenuItem text="This text is truncated, which means it is not completely shown which looks much nicer." />
      <MenuItem text="Hello World" iconRight={IconName.CheckBoxOutlineBlank} />
      <MenuItem text="Hello World" iconRight={IconName.CheckBox} />
      <MenuItem text="Hello World" intent={Intent.Danger} />
    </Menu>
  );
};

export const SmallMenu = () => (
  <Menu small={true}>
    <MenuItem text="Some Text" />
    <MenuItem text="Some Text" />
    <MenuItem icon={IconName.Check} text="Some Text" />
    <MenuItem text="Some Text" />
  </Menu>
);

export const LargeMenu = () => (
  <Menu large={true}>
    <MenuItem text="Some Text" />
    <MenuItem text="Some Text" />
    <MenuItem icon={IconName.Check} text="Some Text" />
    <MenuItem text="Some Text" />
  </Menu>
);

export const MenuWithSubtext = () => (
  <Menu>
    <MenuItem text="Some Text" subText="This is additional info" />
    <MenuItem text="Some Text" subText="This is additional info" />
    <MenuItem icon={IconName.Check} text="Some Text" subText="This is additional info" />
    <MenuItem
      text="Some Text"
      subText="This text is truncated, which means it is not completely shown which looks much nicer."
    />
    <MenuItem text="Some Text" subText="This is additional info" />
    <MenuItem
      text="Some Text"
      subText={
        <>
          Core <Icon name={IconName.ChevronRight} /> Components <Icon name={IconName.ChevronRight} /> Menu{' '}
          <Icon name={IconName.ChevronRight} /> Menu With Subtext
        </>
      }
    />
  </Menu>
);

export const MenuWithoutBackground = () => (
  <Menu background={false}>
    <MenuItem text="Some Text" />
    <MenuItem text="Some Text" />
    <MenuItem icon={IconName.Check} text="Some Text" />
    <MenuItem text="Some Text" />
  </Menu>
);
