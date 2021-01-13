import React from 'react';
import { Meta } from '@storybook/react';
import { ToolTip } from './ToolTip';
import { Button } from '../button';
import { Intent } from '../common';
import { Tag } from '../tags/Tag';
import { IconName } from '../icons';
import { intents } from '../common/intents';

export default {
  title: 'Core/Overlays/Tooltip',
  component: ToolTip,
} as Meta;

export const TooltipExample = () => (
  <div>
    <ToolTip content="All your bases are belong to us">
      <Button>Hover over me</Button>
    </ToolTip>
  </div>
);

export const ComplexTooltipExample = () => (
  <div>
    <ToolTip
      content={
        <Tag intent={Intent.Primary} icon={IconName.Check}>
          All your bases are belong to us
        </Tag>
      }
    >
      <Button>Hover over me</Button>
    </ToolTip>
  </div>
);

export const TooltipsWithIntents = () => (
  <div>
    <ToolTip content="All your bases are belong to us">
      <Button>No Intent</Button>
    </ToolTip>
    {intents.map(intent => (
      <ToolTip content="All your bases are belong to us" intent={intent} key={intent}>
        <Button intent={intent}>Intent {intent}</Button>
      </ToolTip>
    ))}
  </div>
);
