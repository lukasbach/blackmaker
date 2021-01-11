import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Heading } from './Heading';
import { intents } from '../common/intents';

export default {
  title: 'Core/Typography/Headings',
} as Meta;

export const Headings = () => (
  <div>
    <Heading>Heading first level (h1)</Heading>
    <Heading level={2}>Heading second level (h2)</Heading>
    <Heading level={3}>Heading third level (h3)</Heading>
    <Heading level={4}>Heading forth level (h4)</Heading>
    <Heading level={5}>Heading fifth level (h5)</Heading>
    <Heading level={6}>Heading sixth level (h6)</Heading>
  </div>
);

export const IntentHeadings = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Heading intent={intent}>Heading first level (h1)</Heading>
        <Heading intent={intent} level={2}>
          Heading second level (h2)
        </Heading>
        <Heading intent={intent} level={3}>
          Heading third level (h3)
        </Heading>
        <Heading intent={intent} level={4}>
          Heading forth level (h4)
        </Heading>
        <Heading intent={intent} level={5}>
          Heading fifth level (h5)
        </Heading>
        <Heading intent={intent} level={6}>
          Heading sixth level (h6)
        </Heading>
      </div>
    ))}
  </div>
);
