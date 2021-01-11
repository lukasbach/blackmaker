import React from 'react';
import { Meta } from '@storybook/react';
import { CheckboxBlock } from './CheckboxBlock';
import { intents } from '../../common/intents';
import { Slider } from './Slider';
import { Checkbox } from './Checkbox';

export default {
  title: 'Core/Components/Forms/Checkbox',
  component: CheckboxBlock,
} as Meta;

export const CheckboxBlockComponent = () => (
  <div>
    <CheckboxBlock checked={false} />
    <CheckboxBlock />
    <CheckboxBlock checked={true} />
    <CheckboxBlock large={true} checked={false} />
    <CheckboxBlock large={true} />
    <CheckboxBlock large={true} checked={true} />
  </div>
);

export const CheckboxBlockComponentIntents = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <CheckboxBlock intent={intent} checked={false} />
        <CheckboxBlock intent={intent} />
        <CheckboxBlock intent={intent} checked={true} />
        <CheckboxBlock intent={intent} large={true} checked={false} />
        <CheckboxBlock intent={intent} large={true} />
        <CheckboxBlock intent={intent} large={true} checked={true} />
      </div>
    ))}
  </div>
);

export const SliderComponent = () => (
  <div>
    <Slider checked={false} />
    <Slider />
    <Slider checked={true} />
    <Slider large={true} checked={false} />
    <Slider large={true} />
    <Slider large={true} checked={true} />
  </div>
);

export const SliderComponentIntents = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Slider intent={intent} checked={false} />
        <Slider intent={intent} />
        <Slider intent={intent} checked={true} />
        <Slider intent={intent} large={true} checked={false} />
        <Slider intent={intent} large={true} />
        <Slider intent={intent} large={true} checked={true} />
      </div>
    ))}
  </div>
);

export const CheckboxLines = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Checkbox label="Checkbox label" checked={true} intent={intent} />
        <Checkbox label="Checkbox label" checked={undefined} intent={intent} />
        <Checkbox label="Checkbox label" checked={false} intent={intent} />
      </div>
    ))}
  </div>
);

export const CheckboxLinesLarge = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Checkbox label="Checkbox label" checked={true} intent={intent} large={true} />
        <Checkbox label="Checkbox label" checked={undefined} intent={intent} large={true} />
        <Checkbox label="Checkbox label" checked={false} intent={intent} large={true} />
      </div>
    ))}
  </div>
);

export const CheckboxLinesSwitches = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Checkbox label="Checkbox label" checked={true} intent={intent} slider={true} />
        <Checkbox label="Checkbox label" checked={undefined} intent={intent} slider={true} />
        <Checkbox label="Checkbox label" checked={false} intent={intent} slider={true} />
      </div>
    ))}
  </div>
);

export const CheckboxLinesSwitchesLarge = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Checkbox label="Checkbox label" checked={true} intent={intent} slider={true} large={true} />
        <Checkbox label="Checkbox label" checked={undefined} intent={intent} slider={true} large={true} />
        <Checkbox label="Checkbox label" checked={false} intent={intent} slider={true} large={true} />
      </div>
    ))}
  </div>
);

export const CheckboxLinesRightAligned = () => (
  <div style={{ maxWidth: '280px' }}>
    <Checkbox label="Checkbox label" checked={true} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={undefined} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={false} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={true} slider={true} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={undefined} slider={true} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={false} slider={true} alignBoxRight={true} />

    <Checkbox label="Checkbox label" checked={true} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={undefined} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={false} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={true} slider={true} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={undefined} slider={true} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={false} slider={true} alignBoxRight={true} large={true} />
  </div>
);
