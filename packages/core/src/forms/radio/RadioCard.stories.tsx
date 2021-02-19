import React from 'react';
import { Meta } from '@storybook/react';
import { RadioCard } from './RadioCard';
import { RadioContainer } from './RadioContainer';
import { CardArea } from '../../card/CardArea';
import { Intent } from '../../common';
import { IconName } from '../..';

export default {
  title: 'Core/Components/Forms/Radio Card',
  component: RadioCard,
} as Meta;

export const SimpleRadioCards = () => (
  <div style={{ width: '400px' }}>
    <RadioContainer defaultValue="a1">
      <RadioCard value="a1">
        <CardArea muted={true}>Some additional context</CardArea>
      </RadioCard>
      <RadioCard value="a2">
        <CardArea muted={true}>Some additional context</CardArea>
      </RadioCard>
      <RadioCard value="a3">
        <CardArea muted={true}>Some additional context</CardArea>
      </RadioCard>
    </RadioContainer>
  </div>
);

export const RadioCardsWithIntentAreas = () => (
  <div style={{ width: '400px' }}>
    <RadioContainer defaultValue="a1">
      <RadioCard value="a1">
        <CardArea intent={Intent.Primary}>Card 1</CardArea>
        <CardArea muted={true}>Some additional context</CardArea>
      </RadioCard>
      <RadioCard value="a2">
        <CardArea intent={Intent.Warning}>Card 2</CardArea>
        <CardArea muted={true}>Some additional context</CardArea>
      </RadioCard>
      <RadioCard value="a3">
        <CardArea intent={Intent.Success}>Card 3</CardArea>
        <CardArea muted={true}>Some additional context</CardArea>
      </RadioCard>
    </RadioContainer>
  </div>
);

export const ComplexRadioCards = () => (
  <div style={{ display: 'flex' }}>
    <RadioContainer defaultValue="a1">
      <RadioCard value="a1" css={{ flexGrow: 1, flexBasis: 0 }}>
        <CardArea header={true} highlighted={true} icon={IconName.Dashboard} subtitle="Dark Side">
          Darth Vader
        </CardArea>
        <CardArea css={{ height: '200px', overflow: 'auto' }}>
          Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led
          the Empire’s eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious --
          for decades, enforcing his Master’s will and seeking to crush the fledgling Rebel Alliance. But there was
          still good in him…
        </CardArea>
        <CardArea muted={true} css={{ textAlign: 'right' }}>
          Sith Lord
        </CardArea>
      </RadioCard>
      <RadioCard value="a3" css={{ flexGrow: 1, flexBasis: 0 }}>
        <CardArea header={true} highlighted={true} icon={IconName.Dashboard} subtitle="Dark Side">
          Palpatine
        </CardArea>
        <CardArea css={{ height: '200px', overflow: 'auto' }}>
          The dark side of the Force is a pathway to many abilities some consider to be unnatural, and Sheev Palpatine
          is the most infamous follower of its doctrines. Scheming, powerful, and evil to the core, Darth Sidious
          restored the Sith and destroyed the Jedi Order. Living a double life, he was also Palpatine, a Naboo Senator
          and phantom menace. He manipulated the political system of the Galactic Republic until he was named Supreme
          Chancellor -- and eventually Emperor – and ruled the galaxy through fear and tyranny. The galaxy rejoiced when
          he died at the Battle of Endor, but Sidious had cheated death and patiently plotted a return to power.
        </CardArea>
        <CardArea muted={true} css={{ textAlign: 'right' }}>
          Sith Lord
        </CardArea>
      </RadioCard>
      <RadioCard value="a2" css={{ flexGrow: 1, flexBasis: 0 }}>
        <CardArea header={true} highlighted={true} icon={IconName.Dashboard} subtitle="Bright Side">
          Luke Skywalker
        </CardArea>
        <CardArea css={{ height: '200px', overflow: 'auto' }}>
          Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the
          galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire,
          discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of
          the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and
          convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But
          his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle
          between good and evil.
        </CardArea>
        <CardArea muted={true} css={{ textAlign: 'right' }}>
          Jedi Master
        </CardArea>
      </RadioCard>
    </RadioContainer>
  </div>
);

export const RadioCardDynamicContentRendering = () => (
  <div style={{ width: '400px' }}>
    <RadioContainer defaultValue="a1">
      <RadioCard
        value="a1"
        renderContent={checked => (
          <CardArea muted={!checked} intent={checked ? Intent.Primary : undefined}>
            Some additional context
          </CardArea>
        )}
      />
      <RadioCard
        value="a2"
        renderContent={checked => (
          <CardArea muted={!checked} intent={checked ? Intent.Success : undefined}>
            Some additional context
          </CardArea>
        )}
      />
      <RadioCard
        value="a3"
        renderContent={checked => (
          <CardArea muted={!checked} intent={checked ? Intent.Info : undefined}>
            Some additional context
          </CardArea>
        )}
      />
    </RadioContainer>
  </div>
);
