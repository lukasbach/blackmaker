import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { ToastProvider } from './ToastProvider';
import { Button } from '../button';
import { ToastData, useToast } from './ToastContext';
import { intents } from '../common/intents';
import { Intent } from '../common';
import { Tabs } from '../tabs/Tabs';
import { TabsStyle } from '../tabs/TabsStyle';
import { IconName } from '..';

export default {
  title: 'Core/Overlays/Toasts',
  component: ToastProvider,
} as Meta;

const CreateToastButton: React.FC<{ toast: Omit<ToastData, 'id'>; intent?: Intent, text?: string }> = props => {
  const { toast } = useToast();
  return (
    <Button onClick={() => toast(props.toast)} intent={props.intent}>
      { props.text }
    </Button>
  );
};

export const Example = () => {
  const [horizontal, setHorizontal] = useState<any>('right');
  const [vertical, setVertical] = useState<any>('top');

  return (
    <ToastProvider horizontalOrientation={horizontal} verticalOrientation={vertical}>
      <div style={{ height: '500px' }}>
        {intents.map(intent => (
          <CreateToastButton
            key={intent}
            intent={intent}
            text={intent}
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
          text={'Long'}
          toast={{
            intent: Intent.Primary,
            title: 'Long Toast title',
            text:
              'Veeeeeeery long toast, quite a bit longer than the other ones, might even wrap around as toasts are limited to 500px in width',
            icon: IconName.AttachFile,
          }}
        />
        <CreateToastButton
          intent={Intent.Primary}
          text={'Autoclose'}
          toast={{
            intent: Intent.Primary,
            title: 'Toast title',
            text: 'Toast description text',
            icon: IconName.AttachFile,
            closeAfter: 2000,
          }}
        />

        <CreateToastButton
          intent={Intent.Primary}
          text={'With actions'}
          toast={{
            intent: Intent.Primary,
            title: 'Toast title',
            text: 'Toast description text',
            icon: IconName.AttachFile,
            actions: [
              { text: 'Some action', /*intent: Intent.Primary*/ },
              { text: 'Danger!', intent: Intent.Danger, icon: IconName.DeleteForever },
            ]
          }}
        />
        <CreateToastButton
          intent={Intent.Primary}
          text={'Only title'}
          toast={{
            intent: Intent.Primary,
            title: 'Toast title',
          }}
        />
        <CreateToastButton
          intent={Intent.Primary}
          text={'Only title and icon'}
          toast={{
            intent: Intent.Primary,
            title: 'Toast title',
            icon: IconName.AttachFile,
          }}
        />
        <CreateToastButton
          intent={Intent.Primary}
          text={'Only title and description'}
          toast={{
            intent: Intent.Primary,
            title: 'Toast title',
            text: 'Toast description text',
          }}
        />
        <br />
        <Tabs
          tabs={[{ id: 'left' }, { id: 'center' }, { id: 'right' }]}
          currentTab={horizontal}
          onChangeTab={setHorizontal}
          tabStyle={TabsStyle.Buttons}
        />
        <Tabs
          tabs={[{ id: 'top' }, { id: 'bottom' }]}
          currentTab={vertical}
          onChangeTab={setVertical}
          tabStyle={TabsStyle.Buttons}
        />
      </div>
    </ToastProvider>
  );
};
