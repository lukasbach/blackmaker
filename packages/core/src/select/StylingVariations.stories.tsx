import React from 'react';
import { Meta } from '@storybook/react';
import { Select } from './Select';
import { items } from './ComplexSelect.stories';
import { ComplexSelect } from './ComplexSelect';
import { SelectDefaultItemRenderer } from './SelectDefaultItemRenderer';
import { Intent } from '../common';

export default {
  title: 'Core/Select/Styling Variations',
  component: ComplexSelect,
} as Meta;

export const SelectWithoutSearch = () => (
  <Select
    embedSearch={false}
    items={items}
  />
);

export const MinimalSelect = () => (
  <Select
    items={items}
    renderItem={(item, props) => (
      <SelectDefaultItemRenderer {...props} key={item.value} menuItemProps={{ minimal: true }}>
        {item.value}
      </SelectDefaultItemRenderer>
    )}
  />
);

export const DefaultIntentSelect = () => (
  <Select
    items={items}
    renderItem={(item, props) => (
      <SelectDefaultItemRenderer {...props} key={item.value} menuItemProps={{ intent: Intent.Default }}>
        {item.value}
      </SelectDefaultItemRenderer>
    )}
  />
);

export const MinimalDefaultIntentSelect = () => (
  <Select
    items={items}
    renderItem={(item, props) => (
      <SelectDefaultItemRenderer {...props} key={item.value} menuItemProps={{ minimal: true, intent: Intent.Default }}>
        {item.value}
      </SelectDefaultItemRenderer>
    )}
  />
);

export const CompactSelect = () => (
  <Select
    items={items}
    renderItem={(item, props) => (
      <SelectDefaultItemRenderer {...props} key={item.value} menuItemProps={{ compact: true }}>
        {item.value}
      </SelectDefaultItemRenderer>
    )}
  />
);
