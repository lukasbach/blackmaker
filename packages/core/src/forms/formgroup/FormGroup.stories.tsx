import React from 'react';
import { Meta } from '@storybook/react';
import { FormGroup } from './FormGroup';
import { TextInput } from '../textinput/TextInput';
import { intents } from '../../common/intents';
import { Intent } from '../../common';
import { Checkbox } from '../checkbox/Checkbox';

export default {
  title: 'Core/Components/Forms/FormGroup',
  component: FormGroup,
} as Meta;

export const SimpleFormGroup = () => (
  <div>
    <FormGroup
      label="Label text"
      labelInfo="(label info)"
      helperText="Helper text bla bla bla bla bla bla bla bla bla bla "
    >
      <TextInput defaultValue="Default value" />
    </FormGroup>
  </div>
);

export const FormGroupsWithIntents = () => (
  <div>
    {intents.map(intent => (
      <FormGroup label="Label text" helperText="(helper text)" key={intent} intent={intent}>
        <TextInput defaultValue="Default value" />
      </FormGroup>
    ))}
  </div>
);

export const FormGroupsProps = () => (
  <div>
    <FormGroup label="Large Form Group" helperText="(helper text)" large={true}>
      <TextInput defaultValue="Default value" />
    </FormGroup>
    <FormGroup label="Normal text" labelInfo="(label info)" helperText="(helper text)">
      <TextInput defaultValue="Default value" />
    </FormGroup>
    <FormGroup label="Small Form Group" helperText="(helper text)" small={true}>
      <TextInput defaultValue="Default value" />
    </FormGroup>
    <FormGroup label="Disabled Form Group" helperText="(helper text)" disabled={true}>
      <TextInput defaultValue="Default value" />
    </FormGroup>
    <FormGroup label="No automapped label" helperText="(helper text)" dontAutomapLabel={true}>
      <TextInput defaultValue="Default value" />
    </FormGroup>
  </div>
);

export const FromGroupPassInputProps = () => (
  <div>
    <FormGroup
      dontAutomapLabel={true}
      inputProps={{
        intent: Intent.Primary,
        fill: true,
        round: true,
        switch: true,
      }}
    >
      <TextInput defaultValue="Default value" />
      <TextInput defaultValue="Default value" intent={Intent.Danger} />
      <Checkbox label="Checkbox label" checked={false} />
      <Checkbox label="Checkbox label" checked={false} />
      <Checkbox label="Checkbox label" checked={true} />
    </FormGroup>
  </div>
);
