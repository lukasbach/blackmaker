import React from 'react';
import { Meta } from '@storybook/react';
import { BreadCrumbs } from './BreadCrumbs';
import { IconName } from '../../out';
import { Intent } from '../common';
import { MenuItemProps } from '../menu/MenuItem';

export default {
  title: 'Core/Components/BreadCrumbs',
  component: BreadCrumbs,
} as Meta;

export const SimpleBreadCrumbs = () => (
  <BreadCrumbs
    items={[
      { title: 'C:', icon: IconName.FolderOpen, onClick: () => {} },
      { title: 'Users', icon: IconName.FolderOpen, onClick: () => {} },
      { title: 'JDoe', icon: IconName.FolderOpen, onClick: () => {} },
      { title: 'My Documents', icon: IconName.FolderOpen, onClick: () => {} },
      { title: 'tax_return.pdf', icon: IconName.AttachFile, current: true, onClick: () => {} },
    ]}
  />
);

export const BreadCrumbsWithoutIcons = () => (
  <BreadCrumbs
    items={[
      { title: 'C:', onClick: () => {} },
      { title: 'Users', onClick: () => {} },
      { title: 'JDoe', onClick: () => {} },
      { title: 'My Documents', current: true, onClick: () => {} },
      { title: 'tax_return.pdf', onClick: () => {} },
    ]}
  />
);

export const BreadCrumbsWithIntents = () => (
  <BreadCrumbs
    items={[
      { title: 'C:', intent: Intent.Primary, onClick: () => {} },
      { title: 'Users', intent: Intent.Danger, onClick: () => {} },
      { title: 'JDoe', intent: Intent.Warning, onClick: () => {} },
      { title: 'My Documents', intent: Intent.Success, onClick: () => {} },
      { title: 'tax_return.pdf', intent: Intent.Info, onClick: () => {} },
    ]}
  />
);

const menu: MenuItemProps[] = [
  { text: 'Some Folder', icon: IconName.FolderOpen },
  { text: 'Another Folder', icon: IconName.FolderOpen },
  { text: 'Tax Returns', icon: IconName.FolderOpen },
  { text: 'tax_return_2019.pdf', icon: IconName.AttachFile },
  { text: 'tax_return_2020.pdf', icon: IconName.AttachFile },
];

export const BreadCrumbsWithClickableArrows = () => (
  <BreadCrumbs
    items={[
      { title: 'C:', icon: IconName.FolderOpen, onClick: () => {}, childs: menu },
      { title: 'Users', icon: IconName.FolderOpen, onClick: () => {}, childs: menu },
      { title: 'JDoe', icon: IconName.FolderOpen, onClick: () => {}, childs: menu },
      { title: 'My Documents', icon: IconName.FolderOpen, onClick: () => {}, childs: menu },
      { title: 'tax_return.pdf', icon: IconName.AttachFile, current: true, onClick: () => {} },
    ]}
  />
);
