import React from 'react';
import { Meta } from '@storybook/react';
import { ToolTip } from './ToolTip';
import { Button } from '../button';
import { Intent, TooltipPlacement } from '../common';
import { Tag } from '../tags/Tag';
import { IconName } from '../icons';
import { intents } from '../common/intents';
import { Flex } from '../common/components/Flex';
import cxs from 'cxs';

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

const toolTipContent = (
  <div>
    Tooltip content yay
    <br />
    Next Line
    <br />
    Yup
  </div>
);
const ToolTipButton = () => <Button>XXXXXX</Button>;
const remainingProps = {};

export const TooltipDirections = () => (
  <div className={cxs({ margin: '200px' })}>
    <Flex>
      <ToolTipButton />
      <ToolTip content={toolTipContent} placement={TooltipPlacement.TopStart} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTip content={toolTipContent} placement={TooltipPlacement.Top} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTip content={toolTipContent} placement={TooltipPlacement.TopEnd} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTipButton />
    </Flex>

    <Flex>
      <ToolTip content={toolTipContent} placement={TooltipPlacement.LeftStart} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTipButton />
      <ToolTipButton />
      <ToolTipButton />
      <ToolTip content={toolTipContent} placement={TooltipPlacement.RightStart} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
    </Flex>

    <Flex>
      <ToolTip content={toolTipContent} placement={TooltipPlacement.Left} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTipButton />
      <ToolTipButton />
      <ToolTipButton />
      <ToolTip content={toolTipContent} placement={TooltipPlacement.Right} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
    </Flex>

    <Flex>
      <ToolTip content={toolTipContent} placement={TooltipPlacement.LeftEnd} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTipButton />
      <ToolTipButton />
      <ToolTipButton />
      <ToolTip content={toolTipContent} placement={TooltipPlacement.RightEnd} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
    </Flex>

    <Flex>
      <ToolTipButton />
      <ToolTip content={toolTipContent} placement={TooltipPlacement.BottomStart} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTip content={toolTipContent} placement={TooltipPlacement.Bottom} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTip content={toolTipContent} placement={TooltipPlacement.BottomEnd} {...remainingProps}>
        <ToolTipButton />
      </ToolTip>
      <ToolTipButton />
    </Flex>
  </div>
);
