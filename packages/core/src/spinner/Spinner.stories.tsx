import React from 'react';
import { Meta } from '@storybook/react';
import { Spinner } from './Spinner';
import { intents } from '../common/intents';

export default {
  title: 'Core/Components/Spinner',
  component: Spinner,
} as Meta;

export const Spinners = () => (
  <div>
    {[16, 24, 32, 48, 64, 128].map(size => (
      <div key={size}>
        {intents.map(intent => (
          <Spinner key={intent} intent={intent} size={size} />
        ))}
        <Spinner color={'red'} size={size} />
      </div>
    ))}
  </div>
);
