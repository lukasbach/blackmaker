import React from 'react';
import { Meta } from '@storybook/react';
import { Bar } from './Bar';
import { NoPaddingDecorator } from '../../../../.storybook/utils/NoPaddingDecorator';
import { IconName } from '../icons';
import { Intent, intents } from '../common';
import cxs from 'cxs';
import { documentStory } from '../../../../.storybook/utils/documentStory';

export default {
  title: 'Core/Components/Bar',
  component: Bar,
  decorators: [NoPaddingDecorator],
} as Meta;

export const SimpleBarExample = () => (
  <Bar
    icon={IconName.Dashboard}
    content="Lorem ipsum dolores amet."
    intent={Intent.Primary}
    actions={[{ text: 'Ignore' }, { text: 'Okay' }]}
    canClose={true}
    onClose={() => alert('Closed!')}
  />
);

export const BarsWithIntents = () => (
  <>
    {intents.map(intent => (
      <Bar
        icon={IconName.Dashboard}
        content="Lorem ipsum dolores amet."
        intent={intent}
        actions={[{ text: 'Ignore' }, { text: 'Okay' }]}
        canClose={true}
        onClose={() => alert('Closed!')}
      />
    ))}
  </>
);

export const JustContent = () => <Bar content="Lorem ipsum dolores amet." intent={Intent.Primary} />;

export const JustContentAndIcon = () => (
  <Bar icon={IconName.Dashboard} content="Lorem ipsum dolores amet." intent={Intent.Primary} />
);

export const BarWithLongText = () => (
  <Bar
    icon={IconName.Dashboard}
    content="Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. Lorem ipsum dolores amet. "
    intent={Intent.Primary}
  />
);
documentStory(
  BarWithLongText,
  'Add text as a string to the ``content`` property to have it ' +
    'automatically truncate if it gets too large. A title element with the complete text is added dynamically ' +
    'based on whether the text is truncated or not.'
);

export const FixedBar = () => (
  <div
    className={cxs({
      position: 'relative',
    })}
  >
    <Bar content="I'm fixed to the top. Try scrolling" fixedToTop={true} />
    {'.'
      .repeat(100)
      .split('')
      .map((_, i) => (
        <p key={i}>Hello</p>
      ))}
  </div>
);
