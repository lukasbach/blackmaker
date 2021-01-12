import React from 'react';
import { Meta } from '@storybook/react';
import { Tag } from './Tag';
import { intents } from '../common/intents';
import { IconName } from '../icons';

export default {
  title: 'Core/Components/Tags',
  component: Tag,
} as Meta;

export const TagExamples = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Tag intent={intent} content="Simple" interactive={true} />
        <Tag intent={intent} content="Removable" onRemove={() => alert('Remove!')} interactive={true} />
        <Tag intent={intent} content="Left Icon" icon={IconName.Dashboard} interactive={true} />
        <Tag intent={intent} content="Right Icon" rightIcon={IconName.Dashboard} interactive={true} />
        <Tag
          intent={intent}
          content="Both Icons"
          icon={IconName.Dashboard}
          rightIcon={IconName.Dashboard}
          interactive={true}
        />
        <Tag
          intent={intent}
          content="Outlined"
          icon={IconName.Dashboard}
          rightIcon={IconName.Dashboard}
          outlined={true}
          interactive={true}
        />
        <Tag
          intent={intent}
          content="Minimal"
          icon={IconName.Dashboard}
          rightIcon={IconName.Dashboard}
          minimal={true}
          interactive={true}
        />
        <Tag
          intent={intent}
          content="Outlined Large"
          icon={IconName.Dashboard}
          rightIcon={IconName.Dashboard}
          outlined={true}
          large={true}
          onRemove={() => alert('Remove!')}
          interactive={true}
        />
        <Tag
          intent={intent}
          content="Minimal Large"
          icon={IconName.Dashboard}
          rightIcon={IconName.Dashboard}
          minimal={true}
          large={true}
          onRemove={() => alert('Remove!')}
          interactive={true}
        />
        <Tag
          intent={intent}
          content="Not interactive"
          icon={IconName.Dashboard}
          rightIcon={IconName.Dashboard}
          minimal={true}
          large={true}
          interactive={false}
        />
        <Tag
          intent={intent}
          content="Small"
          icon={IconName.Dashboard}
          rightIcon={IconName.Dashboard}
          minimal={true}
          small={true}
          interactive={true}
          onRemove={() => alert('Remove!')}
        />
        <Tag
          intent={intent}
          round={true}
          content="Round"
          icon={IconName.Dashboard}
          interactive={true}
          onRemove={() => alert('Remove!')}
        />
      </div>
    ))}
  </div>
);
