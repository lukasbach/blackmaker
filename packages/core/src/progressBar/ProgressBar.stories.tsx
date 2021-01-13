import React from 'react';
import { Meta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { intents } from '../common/intents';

export default {
  title: 'Core/Components/ProgressBar',
  component: ProgressBar,
} as Meta;

export const SimpleProgressBar = () => (
  <ProgressBar value={.42} />
);

export const InlineProgressBar = () => (
  <div>
    Tasks: 5 of 7 done&nbsp;
    <ProgressBar value={5/7} inlineWidth={240} />
  </div>
);

export const ProgressBarWithIntents = () => (
  <div>
    {intents.map((i, v) => (
      <ProgressBar value={v * 0.1 + .2} key={i} intent={i} css={{ marginBottom: '10px', width: '200px' }} />
    ))}
  </div>
);

export const ProgressBarSizes = () => (
  <div>
    <ProgressBar css={{ marginBottom: '10px', width: '200px' }} value={.42} small={true} />
    <ProgressBar css={{ marginBottom: '10px', width: '200px' }} value={.42} />
    <ProgressBar css={{ marginBottom: '10px', width: '200px' }} value={.42} large={true} />
  </div>
);
