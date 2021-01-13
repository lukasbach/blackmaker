import React from 'react';
import { Meta } from '@storybook/react';
import { Alert } from './Alert';
import { Intent } from '../../common';
import { IconName } from '../../icons';

export default {
  title: 'Core/Overlays/Alert',
  component: Alert,
} as Meta;

const lorem =
  "Couldn't create the file because the containing folder doesn't exist anymore. You will be redirected to your user folder.";

export const SimpleAlert = () => <Alert isOpen={true}>{lorem}</Alert>;

export const AlertWithIntent = () => (
  <Alert isOpen={true} intent={Intent.Danger}>
    {lorem}
  </Alert>
);

export const AlertWithIntentAndIcon = () => (
  <Alert isOpen={true} intent={Intent.Danger} icon={IconName.EscalatorWarning}>
    {lorem}
  </Alert>
);

export const AlertWithTitle = () => (
  <Alert isOpen={true} icon={IconName.EscalatorWarning} title="Alert Title">
    {lorem}
  </Alert>
);

export const AlertWithTitleAndIntent = () => (
  <Alert isOpen={true} intent={Intent.Danger} icon={IconName.EscalatorWarning} title="Alert Title">
    {lorem}
  </Alert>
);
