import React from 'react';
import { Meta } from '@storybook/react';
import { ToastProvider } from './ToastProvider';
import { Button } from '../button';
import { ToastData, useToast } from './ToastContext';
import { intents } from '../common/intents';
import { IconName } from '../icons';
import { Intent } from '../common';

export default {
  title: 'Core/Overlays/Toasts',
  component: ToastProvider,
} as Meta;

const CreateToastButton: React.FC<{ toast: ToastData; intent?: Intent }> = props => {
  const { toast } = useToast();
  return (
    <Button onClick={() => toast(props.toast)} intent={props.intent}>
      Toast!
    </Button>
  );
};

export const Example = () => (
  <ToastProvider>
    <div style={{ height: '500px' }}>
      {intents.map(intent => (
        <CreateToastButton
          key={intent}
          intent={intent}
          toast={{
            intent,
            title: 'Toast title',
            text: 'Toast description text',
            icon: IconName.AttachFile,
          }}
        />
      ))}
      <CreateToastButton
        intent={Intent.Primary}
        toast={{
          intent: Intent.Primary,
          title: 'Long Toast title',
          text:
            'Veeeeeeery long toast, quite a bit longer than the other ones, might even wrap around as toasts are limited to 500px in width',
          icon: IconName.AttachFile,
        }}
      />
    </div>
  </ToastProvider>
);
