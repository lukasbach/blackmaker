import React from 'react';
import { Meta } from '@storybook/react';
import { NotificationContent } from './NotificationContent';
import { IconName, Intent } from '../../out';

export default {
  title: 'Core/Components/NotificationContent',
} as Meta;

export const Example = () => (
  <NotificationContent
    size={'normal'}
    icon={IconName.AttachFile}
    onClose={() => {}}
    title={'Title content'}
    actions={[
      { text: 'Some action', intent: Intent.Primary },
      { icon: IconName.DeleteForever, text: 'Danger!', intent: Intent.Danger }
    ]}
  >
    Notification Content
  </NotificationContent>
);
