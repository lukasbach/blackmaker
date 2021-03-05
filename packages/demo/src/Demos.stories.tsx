import React from 'react';
import { Meta } from '@storybook/react';
import { NoPaddingDecorator } from '../../../.storybook/utils/NoPaddingDecorator';

export default {
  title: 'Introduction/Demos',
  decorators: [NoPaddingDecorator],
} as Meta;

export * from './DemoAppWithSideBar';
