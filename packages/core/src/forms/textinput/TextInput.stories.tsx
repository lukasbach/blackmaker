import React from 'react';
import { Meta } from '@storybook/react';
import { TextInput } from './TextInput';
import { IconName } from '../../icons';
import { Button } from '../../button/Button';
import { intents } from '../../common/intents';

export default {
  title: 'Core/Components/Forms/TextInput',
  component: TextInput,
} as Meta;

export const Playground = () => (
  <div>
    <div>
      <TextInput defaultValue="Default Value" />
    </div>
    <div>
      <TextInput placeholder="Placeholder" />
    </div>
    <div>
      <TextInput leftElement={IconName.AccessAlarm} defaultValue="Default Value" />
    </div>
    <div>
      <TextInput rightElement={IconName.AccessAlarm} defaultValue="Default Value" />
    </div>
    <div>
      <TextInput leftElement={IconName.AccessAlarm} rightElement={IconName.ChevronRight} defaultValue="Default Value" />
    </div>
    <div>
      <TextInput leftElement={<span>Yo</span>} rightElement={<span>Bye</span>} defaultValue="Default Value" />
    </div>
    <div>
      <TextInput
        leftElement={IconName.AccessAlarm}
        rightElement={(
          <Button
            icon={IconName.ChevronRight}
            minimal={true}
            small={true}
          />
        )}
        defaultValue="Input with button"
      />
    </div>
    <div>
      <TextInput
        leftElement={IconName.AccessAlarm}
        rightElement={(
          <Button
            icon={IconName.ChevronRight}
            minimal={true}
          >
            Start!
          </Button>
        )}
        defaultValue="Input with button"
      />
    </div>
    <div>
      <TextInput leftElement={IconName.AccessAlarm} defaultValue="Large Input" large={true} />
    </div>
    <div>
      <TextInput leftElement={IconName.AccessAlarm} defaultValue="Small Input" small={true} />
    </div>
    <div>
      <TextInput leftElement={IconName.AccessAlarm} defaultValue="Round Input" round={true} />
    </div>
    <div>
      <TextInput leftElement={IconName.AccessAlarm} defaultValue="Disabled Input" disabled={true} />
    </div>
    <div>
      <TextInput leftElement={IconName.AccessAlarm} defaultValue="Readonly Input" readonly={true} />
    </div>
    { intents.map(i => (
      <div>
        <TextInput leftElement={IconName.AccessAlarm} defaultValue={`Intent ${i}`} key={i} intent={i} />
      </div>
    )) }
    <div>
      <TextInput leftElement={IconName.AccessAlarm} defaultValue="Filled Input" fill={true} />
    </div>
  </div>
);
