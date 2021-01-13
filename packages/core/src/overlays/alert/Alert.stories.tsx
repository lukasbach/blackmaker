import React from 'react';
import { Meta } from '@storybook/react';
import { Alert } from './Alert';
import { Intent } from '../../common';
import { IconName } from '../../icons';
import { useAlert } from './useAlert';
import { Button } from '../../button';

export default {
  title: 'Core/Overlays/Alert',
  component: Alert,
} as Meta;

const lorem =
  "Couldn't create the file because the containing folder doesn't exist anymore. You will be redirected to your user folder.";

export const SimpleAlert = () => <Alert isOpen={true}>{lorem}</Alert>;

export const AlertWithConfirm = () => (
  <Alert isOpen={true} onConfirm={() => {}}>
    {lorem}
  </Alert>
);

export const AlertWithIntent = () => (
  <Alert isOpen={true} intent={Intent.Danger} onConfirm={() => {}}>
    {lorem}
  </Alert>
);

export const AlertWithIntentAndIcon = () => (
  <Alert isOpen={true} intent={Intent.Danger} icon={IconName.EscalatorWarning} onConfirm={() => {}}>
    {lorem}
  </Alert>
);

export const AlertWithTitle = () => (
  <Alert isOpen={true} icon={IconName.EscalatorWarning} title="Alert Title" onConfirm={() => {}}>
    {lorem}
  </Alert>
);

export const AlertWithTitleAndIntent = () => (
  <Alert isOpen={true} intent={Intent.Danger} icon={IconName.EscalatorWarning} title="Alert Title" onConfirm={() => {}}>
    {lorem}
  </Alert>
);

export const UseAlertHook: React.FC = () => {
  const [openAlert, alertContainer] = useAlert();
  return (
    <div>
      {alertContainer}
      <Button
        onClick={() =>
          openAlert({
            content: 'Are you ready?',
            onConfirm: () => openAlert({ content: 'Great!' }),
            onCancel: () => openAlert({ content: 'Too bad...' }),
          })
        }
      >
        Super simple alerting
      </Button>
    </div>
  );
};
