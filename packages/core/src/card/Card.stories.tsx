import React from 'react';
import { Meta } from '@storybook/react';
import { CardContainer } from './CardContainer';
import { CardArea } from './CardArea';
import { Button } from '../button/Button';
import { Intent } from '../common';
import { BackgroundColor, IconName } from '..';
import { intents } from '../common/intents';
import { TextAlign } from '../common/TextAlign';
import { HorizontalRule } from '../typography/HorizontalRule';

export default {
  title: 'Core/Components/Cards',
} as Meta;

export const SimpleCard: React.FC = () => <CardContainer css={{ minWidth: '400px' }}>Card Content</CardContainer>;

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
    <CardArea header={true} subtitle="Subtitle" align={TextAlign.Center}>
      Another title
    </CardArea>
    <CardArea>Regular Area</CardArea>
    <CardArea actions={actions}>Non-Interactive Area with actions</CardArea>
    <CardArea actions={actions} interactive={true} onClick={() => alert('You clicked!')}>
      Interactive Area 1 with actions
    </CardArea>
    <CardArea actions={actions} interactive={true} onClick={() => alert('You clicked!')}>
      Interactive Area 2 with actions
    </CardArea>
    <CardArea css={{ textAlign: 'right' }} muted={true}>
      <Button>Abort</Button>
      <Button intent={Intent.Primary}>Okay</Button>
    </CardArea>
  </CardContainer>
);

export const CardWithBorderedHeader: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea header={true} borderBottom={true}>
      Card header
    </CardArea>
    <CardArea actions={actions} interactive={true} onClick={() => alert('You clicked!')}>
      Interactive Area 2
    </CardArea>
    <HorizontalRule verticalSpace="0" />
    <CardArea actions={actions} interactive={true} onClick={() => alert('You clicked!')}>
      Interactive Area 2
    </CardArea>
  </CardContainer>
);

export const CardWithIntentAreas: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea header={true}>Header Area</CardArea>
    <CardArea>Regular Area</CardArea>
    {intents.map(intent => (
      <CardArea key={intent} intent={intent} interactive={true} icon={IconName.Dashboard}>
        {intent}
      </CardArea>
    ))}
  </CardContainer>
);

export const CardWithIntentHeaderAreas: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea header={true}>Header Area</CardArea>
    <CardArea>Regular Area</CardArea>
    {intents.map(intent => (
      <CardArea
        key={intent}
        intent={intent}
        interactive={true}
        header={true}
        highlighted={true}
        icon={IconName.Dashboard}
        subtitle="Some additional details"
      >
        {intent}
      </CardArea>
    ))}
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
    <CardArea header={true} content="Header Area" subtitle="Subtitle" />
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
  </CardContainer>
);

export const CardWithHighlightedHeader: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea header={true} highlighted={true}>
      Header Area
    </CardArea>
    <CardArea>Regular Area</CardArea>
    <CardArea>Regular Area</CardArea>
  </CardContainer>
);

export const CardWithHighlightedHeaderAndSubtitle: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea header={true} highlighted={true} content="Header Area" subtitle="Subtitle" />
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
  <CardContainer css={{ minWidth: '400px' }}>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true}>
      Regular Area
    </CardArea>
    <CardArea icon={IconName.Dashboard}>Regular Area</CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true}>
      Regular Area
    </CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true}>
      Regular Area
    </CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true} muted={true}>
      Muted Area
    </CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true} highlighted={true}>
      Highlighted Area
    </CardArea>
    <CardArea actions={actions} onClick={() => {}} icon={IconName.Dashboard} interactive={true} subtitle="Subtitle">
      Regular Area
    </CardArea>
    <CardArea
      actions={actions}
      onClick={() => {}}
      icon={IconName.Dashboard}
      interactive={true}
      subtitle="Subtitle"
      muted={true}
    >
      Muted Area
    </CardArea>
    <CardArea
      actions={actions}
      onClick={() => {}}
      icon={IconName.Dashboard}
      interactive={true}
      subtitle="Subtitle"
      highlighted={true}
    >
      Highlighted Area
    </CardArea>
  </CardContainer>
);

export const InteractiveCard: React.FC = () => (
  <CardContainer css={{ minWidth: '400px' }} interactive={true}>
    <CardArea header={true} highlighted={true} content="Header Area" subtitle="Subtitle" />
    <CardArea>Regular Area</CardArea>
    <CardArea muted={true}>Muted area</CardArea>
  </CardContainer>
);

export const NestedCard: React.FC = () => (
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
    <CardArea>
      <CardContainer fill={true}>
        <CardArea>Complex Card</CardArea>
        <CardArea css={{ textAlign: 'right' }} muted={true}>
          <Button>Abort</Button>
          <Button intent={Intent.Primary}>Okay</Button>
        </CardArea>
      </CardContainer>
    </CardArea>
    <CardArea>
      <CardContainer fill={true}>
        <CardArea>Plain Card</CardArea>
      </CardContainer>
    </CardArea>
    <CardArea>
      <CardContainer fill={true} css={{ marginBottom: '.8em' }}>
        <CardArea>Two plain card containers within one card area</CardArea>
      </CardContainer>
      <CardContainer fill={true}>
        <CardArea>Two plain card containers within one card area</CardArea>
      </CardContainer>
    </CardArea>
    <CardArea>
      <CardContainer fill={true} css={{ marginBottom: '.8em' }} background={BackgroundColor.Primary}>
        <CardArea>Background Primary</CardArea>
      </CardContainer>
      <CardContainer fill={true} css={{ marginBottom: '.8em' }} background={BackgroundColor.Secondary}>
        <CardArea>Background Secondary</CardArea>
      </CardContainer>
      <CardContainer fill={true} css={{ marginBottom: '.8em' }} background={BackgroundColor.Tertiary}>
        <CardArea>Background Tertiary</CardArea>
      </CardContainer>
      <CardContainer fill={true} css={{ marginBottom: '.8em' }} background={BackgroundColor.Menu}>
        <CardArea>Background Menu</CardArea>
      </CardContainer>
    </CardArea>
  </CardContainer>
);

const CardWithBackground: React.FC<{background: BackgroundColor | string}> = props => (
  <CardContainer background={props.background} css={{ marginRight: '20px' }}>
    <CardArea header={true} subtitle={`Color ${props.background}`} highlighted={true}>
      Highlighted element
    </CardArea>
    <CardArea>
      Normal element
    </CardArea>
    <CardArea muted={true}>
      Muted element
    </CardArea>
  </CardContainer>
);

export const CardsWithBackground = () => (
  <div>
    {[BackgroundColor.Primary, BackgroundColor.Secondary, BackgroundColor.Tertiary, BackgroundColor.Menu, '#c0ffee'].map(color => (
      <CardWithBackground background={color} key={color} />
    ))}
  </div>
)
