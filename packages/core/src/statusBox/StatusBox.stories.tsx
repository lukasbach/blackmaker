import React from 'react';
import { Meta } from '@storybook/react';
import { StatusBox } from './StatusBox';
import { Button } from '../button/Button';
import { IconName } from '..';

export default {
  title: 'Core/Components/Status Box',
  component: StatusBox,
} as Meta;

export const ComplexStatusBox = () => (
  <StatusBox
    title="Status Box title"
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    actions={<Button icon={IconName.ChevronRight}>Do something else</Button>}
    icon={IconName.AddAPhoto}
  />
);

export const LoadingStatusBox = () => (
  <StatusBox
    title="Status Box title"
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    actions={<Button icon={IconName.ChevronRight}>Do something else</Button>}
    loading={true}
  />
);

export const StatusBoxJustTitle = () => <StatusBox title="Status Box title" />;

export const StatusBoxJustParagraph = () => (
  <StatusBox paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
);

export const StatusBoxJustIcon = () => <StatusBox icon={IconName.AddAPhoto} />;

export const StatusBoxJustLoading = () => <StatusBox loading={true} />;
