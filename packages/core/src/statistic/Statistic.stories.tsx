import React from 'react';
import { Meta } from '@storybook/react';
import { Statistic } from './Statistic';
import { IconName } from '../../out';
import { Flex } from '../common/components/Flex';
import { VerticalRule } from '../typography/VerticalRule';
import { HorizontalRule } from '../typography/HorizontalRule';
import { Box } from '../common/components/Box';
import { CardContainer } from '../card/CardContainer';
import { CardArea } from '../card/CardArea';
import { TooltipPlacement } from '../common';

export default {
  title: 'Core/Components/Statistic',
  component: Statistic,
} as Meta;

export const CompleteExample = () => (
  <div style={{ maxWidth: '300px' }}>
    <Statistic
      title="Statistic title"
      value={1337}
      metric="ms"
      canCopy={true}
      icon={IconName.Feedback}
    />
  </div>
);

export const CompleteExampleInline = () => (
  <div style={{ maxWidth: '300px' }}>
    <Statistic
      inline={true}
      title="Statistic title"
      value={1337}
      metric="ms"
      canCopy={true}
      icon={IconName.Feedback}
    />
  </div>
);

export const NoIcon = () => (
  <div style={{ maxWidth: '300px' }}>
    <Statistic
      title="Statistic title"
      value={1337}
      metric="ms"
      canCopy={true}
    />
  </div>
);

export const CannotCopy = () => (
  <div style={{ maxWidth: '300px' }}>
    <Statistic
      title="Statistic title"
      value={1337}
      metric="ms"
    />
  </div>
);

export const NoMetric = () => (
  <div style={{ maxWidth: '300px' }}>
    <Statistic
      title="Statistic title"
      value={1337}
      canCopy={true}
    />
  </div>
);

const CompleteStatistic = () => (
  <Statistic
    title="Statistic title"
    value={1337}
    metric="ms"
    icon={IconName.Feedback}
  />
);

const CompleteStatisticInline = () => (
  <Statistic
    title="Statistic title"
    value={1337}
    metric="ms"
    icon={IconName.Feedback}
    inline={true}
  />
);

export const MultipleStatisticsExample = () => (
  <Flex>
    <CompleteStatistic />
    <VerticalRule horizontalSpace="2em" />
    <CompleteStatistic />
    <VerticalRule horizontalSpace="2em" />
    <CompleteStatistic />
    <VerticalRule horizontalSpace="2em" />
    <CompleteStatistic />
  </Flex>
);

export const MultipleStatisticsInlineExample = () => (
  <Box maxWidth="300px">
    <CompleteStatisticInline />
    <HorizontalRule />
    <CompleteStatisticInline />
    <HorizontalRule />
    <CompleteStatisticInline />
    <HorizontalRule />
    <CompleteStatisticInline />
  </Box>
);

export const CardExample = () => (
  <CardContainer css={{ width: '500px' }}>
    <CardArea header={true} borderBottom={true}>
      Summary
    </CardArea>
    <CardArea>
      <Statistic
        title="Name"
        value="John Doe"
        icon={IconName.Face}
        inline={true}
        canCopy={true}
        copyToClipboardButtonProps={{
          toolTipProps: {
            placement: TooltipPlacement.Left
          }
        }}
        bigValue={false}
      />
      <HorizontalRule />
      <Statistic
        title="User ID"
        value="23489234"
        icon={IconName.Fingerprint}
        inline={true}
        canCopy={true}
        copyToClipboardButtonProps={{
          toolTipProps: {
            placement: TooltipPlacement.Left
          }
        }}
        bigValue={false}
      />
      <HorizontalRule />
      <Statistic
        title="Age"
        value={42}
        icon={IconName.Portrait}
        inline={true}
        canCopy={true}
        copyToClipboardButtonProps={{
          toolTipProps: {
            placement: TooltipPlacement.Left
          }
        }}
        bigValue={false}
      />
      <HorizontalRule />
      <Statistic
        title="Last seen"
        value="4 hours ago"
        icon={IconName.AccessTime}
        inline={true}
        canCopy={true}
        copyToClipboardButtonProps={{
          toolTipProps: {
            placement: TooltipPlacement.Left
          }
        }}
        bigValue={false}
      />
      <HorizontalRule />
      <Statistic
        title="Balance"
        value={1337.42}
        metric=" USD"
        icon={IconName.Money}
        inline={true}
        canCopy={true}
        copyToClipboardButtonProps={{
          toolTipProps: {
            placement: TooltipPlacement.Left
          }
        }}
        bigValue={false}
      />
    </CardArea>
  </CardContainer>
)
