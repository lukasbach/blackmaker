import React from 'react';
import { Meta } from '@storybook/react';
import { CardContainer } from './CardContainer';
import { CardArea } from './CardArea';
import { Button } from '../button/Button';
import { Intent } from '../common';
import { IconName } from '../../out';

export default {
  title: 'Core/Components/Cards',
} as Meta;

export const SimpleCard: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    Card Content
  </CardContainer>
);

const actions = (
  <>
    <Button small={true} icon={IconName.Dashboard} />
    <Button small={true} icon={IconName.AccessAlarm} />
    <Button small={true} intent={Intent.Danger} icon={IconName.Close} />
  </>
);

export const ComplexCard: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea
      header={true}
      highlighted={true}
      actions={<Button icon={IconName.Close} intent={Intent.Danger} />}
      subtitle="Subtitle"
      icon={IconName.AddLocation}
    >
      Header Area
    </CardArea>
    <CardArea header={true} subtitle="Subtitle">Another title</CardArea>
    <CardArea>Regular Area</CardArea>
    <CardArea
      actions={actions}
      interactive={true}
      onClick={() => alert("You clicked!")}
    >
      Interactive Area 1
    </CardArea>
    <CardArea
      actions={actions}
      interactive={true}
      onClick={() => alert("You clicked!")}
    >
      Interactive Area 2
    </CardArea>
    <CardArea css={{ textAlign: 'right' }} muted={true}>
      <Button>Abort</Button>
      <Button intent={Intent.Primary}>Okay</Button>
    </CardArea>
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

export const InteractiveCardAreas: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }} >
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true}>Regular Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true}>Regular Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true}>Regular Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true}>Regular Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true} muted={true}>Muted Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true} highlighted={true}>Highlighted Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true} subtitle="Subtitle">Regular Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true} subtitle="Subtitle" muted={true}>Muted Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true} subtitle="Subtitle" highlighted={true}>Highlighted Area</CardArea>
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
