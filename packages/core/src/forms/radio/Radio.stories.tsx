import React from 'react';
import { Meta } from '@storybook/react';
import { Radio } from './Radio';
import { RadioContainer } from './RadioContainer';

export default {
  title: 'Core/Components/Forms/Radio Buttons',
  component: Radio,
} as Meta;

export const RadioButtonsExample = () => (
  <RadioContainer>
    <Radio value="a" label="Darth Vader" />
    <Radio value="b" label="Luke Skywalker" />
    <Radio value="c" label="Palpatine" />
  </RadioContainer>
);

export const PredefinedDefaultValue = () => (
  <RadioContainer defaultValue="b">
    <Radio value="a" label="Darth Vader" />
    <Radio value="b" label="Luke Skywalker" />
    <Radio value="c" label="Palpatine" />
  </RadioContainer>
);

export const PredefinedValue = () => (
  <RadioContainer value="b">
    <Radio value="a" label="Darth Vader" />
    <Radio value="b" label="Luke Skywalker" />
    <Radio value="c" label="Palpatine" />
  </RadioContainer>
);

export const OnChangeEvents = () => (
  <RadioContainer onChange={(e, v) => alert("Changed to " + v)}>
    <Radio value="vader" label="Darth Vader" />
    <Radio value="luke" label="Luke Skywalker" />
    <Radio value="sidious" label="Palpatine" />
  </RadioContainer>
);

export const DifferentRadioProps = () => (
  <RadioContainer>
    <Radio disabled={true} value="a" label="Disabled" />
    <Radio large={true} value="b" label="Large" />
    <Radio value="c" label="Normal" />
    <Radio small={true} value="d" label="Small" />
  </RadioContainer>
);
