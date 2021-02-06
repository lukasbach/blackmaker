import React from 'react';
import { Meta } from '@storybook/react';
import { NotificationContent } from './NotificationContent';
import { IconName } from '../../out';

export default {
  title: 'Core/Components/NotificationContent',
} as Meta;

export const Example = () => (
  <NotificationContent size={'normal'} icon={IconName.AttachFile} onClose={() => {}} title={'Title content'}>
    Notification Content
  </NotificationContent>
);
