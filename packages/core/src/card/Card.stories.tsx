import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { CardContainer } from './CardContainer';
import { CardArea } from './CardArea';

export default {
  title: 'Core/Components/Cards',
} as Meta;

export const SimpleCard: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    Card Content
  </CardContainer>
);

export const CardWithHeader: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea header={true}>Header Area</CardArea>
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
  </CardContainer>
);

export const CardWithHeaderAndSubtitle: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea
      header={true}
      content="Header Area"
      subtitle="Subtitle"
    />
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
  </CardContainer>
);

export const CardWithHighlightedHeader: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea header={true} highlighted={true} >Header Area</CardArea>
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
  </CardContainer>
);

export const CardWithHighlightedHeaderAndSubtitle: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea
      header={true}
      highlighted={true}
      content="Header Area"
      subtitle="Subtitle"
    />
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
  </CardContainer>
);

export const CardWithMutedArea: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
    <CardArea muted={true}>Muted Area</CardArea>
  </CardContainer>
);

export const CardWithHighlightedArea: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
    <CardArea highlighted={true}>Highlighted Area</CardArea>
  </CardContainer>
);

export const CardWithShadow: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }} shadow={1}>
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
    <CardArea highlighted={true}>Highlighted Area</CardArea>
  </CardContainer>
);

export const InteractiveCard: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }} interactive={true}>
    <CardArea
      header={true}
      highlighted={true}
      content="Header Area"
      subtitle="Subtitle"
    />
    <CardArea>Regular Area</CardArea>
    <CardArea muted={true}>Muted area</CardArea>
  </CardContainer>
);
