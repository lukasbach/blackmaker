import React from 'react';
import { Meta } from '@storybook/react';
import { CheckboxBlock } from './CheckboxBlock';
import { intents } from '../../common/intents';
import { Switch } from './Switch';
import { Checkbox } from './Checkbox';
import { Checkable } from './Checkable';
import { MenuItem } from '../../menu/MenuItem';
import { Menu } from '../../menu/Menu';
import { IconName } from '../../icons';
import { Intent } from '../../common';

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

export const SwitchComponent = () => (
  <div>
    <Switch checked={false} />
    <Switch />
    <Switch checked={true} />
    <Switch large={true} checked={false} />
    <Switch large={true} />
    <Switch large={true} checked={true} />
  </div>
);

export const SwitchComponentIntents = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Switch intent={intent} checked={false} />
        <Switch intent={intent} />
        <Switch intent={intent} checked={true} />
        <Switch intent={intent} large={true} checked={false} />
        <Switch intent={intent} large={true} />
        <Switch intent={intent} large={true} checked={true} />
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
        <Checkbox label="Checkbox label" checked={true} intent={intent} switch={true} />
        <Checkbox label="Checkbox label" checked={undefined} intent={intent} switch={true} />
        <Checkbox label="Checkbox label" checked={false} intent={intent} switch={true} />
      </div>
    ))}
  </div>
);

export const CheckboxLinesSwitchesLarge = () => (
  <div>
    {intents.map(intent => (
      <div key={intent}>
        <Checkbox label="Checkbox label" checked={true} intent={intent} switch={true} large={true} />
        <Checkbox label="Checkbox label" checked={undefined} intent={intent} switch={true} large={true} />
        <Checkbox label="Checkbox label" checked={false} intent={intent} switch={true} large={true} />
      </div>
    ))}
  </div>
);

export const CheckboxLinesRightAligned = () => (
  <div style={{ maxWidth: '280px' }}>
    <Checkbox label="Checkbox label" checked={true} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={undefined} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={false} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={true} switch={true} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={undefined} switch={true} alignBoxRight={true} />
    <Checkbox label="Checkbox label" checked={false} switch={true} alignBoxRight={true} />

    <Checkbox label="Checkbox label" checked={true} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={undefined} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={false} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={true} switch={true} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={undefined} switch={true} alignBoxRight={true} large={true} />
    <Checkbox label="Checkbox label" checked={false} switch={true} alignBoxRight={true} large={true} />
  </div>
);

export const CheckableComponent = () => (
  <div>
    <Checkable
      renderContainerCss={({ checked }) => ({
        border: '1px solid blue',
        background: checked ? 'red' : undefined,
        color: checked ? 'yellow' : undefined,
      })}
      renderContent={({ checked }) => (checked === undefined ? 'No state' : checked ? 'Active' : 'Deactive')}
    />
  </div>
);

export const ExampleForMenuItemAsCheckable = () => (
  <Menu>
    <MenuItem text="Other items..." />
    <Checkable
      renderContainerCss={({ checked }) => ({})}
      renderContent={({ checked }) => (
        <MenuItem
          canFocus={false}
          iconRight={
            checked === undefined
              ? IconName.IndeterminateCheckBox
              : checked
              ? IconName.CheckBox
              : IconName.CheckBoxOutlineBlank
          }
          intent={checked === undefined || checked ? Intent.Primary : undefined}
          selected={checked === undefined || checked}
          interactive={true}
          text="Some checkable option"
        />
      )}
    />
    <MenuItem text="Other items..." />
    <MenuItem text="Other items..." />
    <MenuItem text="Other items..." />
  </Menu>
);
