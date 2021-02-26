import React from 'react';
import { Meta } from '@storybook/react';
import { CopyToClipboardButton } from './CopyToClipboardButton';
import { CopyToClipboardInput } from './CopyToClipboardInput';

export default {
  title: 'Core/Components/CopyToClipboard',
  component: CopyToClipboardButton,
  subcomponents: { CopyToClipboardInput },
} as Meta;

export const CopyToClipboardButtonExample = () => (
  <div>
    <CopyToClipboardButton textToCopy="I was copied!">Hover here to copy</CopyToClipboardButton>
    <br />
    <br />
    <CopyToClipboardButton textToCopy="I was copied!" cloneOnClick={true}>
      This one you can also directly click
    </CopyToClipboardButton>
  </div>
);

export const CopyToClipboardInputExample = () => (
  <div>
    <CopyToClipboardInput defaultValue="Copy me to your clipboard!" />
    <br />
    <CopyToClipboardInput defaultValue="Can also copy by focusing the input" cloneOnClick={true} />
  </div>
);
