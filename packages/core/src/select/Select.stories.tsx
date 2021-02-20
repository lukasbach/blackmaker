import React from 'react';
import { Meta } from '@storybook/react';
import { Select } from './Select';
import { SelectDefaultItemRenderer } from './SelectDefaultItemRenderer';
import { Button } from '../button';
import { IconName } from '../../out';

export default {
  title: 'Core/Select/Select Component',
  component: Select,
} as Meta;

const items = [
  { value: 'Skywalker and Solo families' },
  { value: 'Force-wielders' },
  { value: 'Mandalorians' },
  { value: 'Galactic Republic' },
  { value: 'Confederacy of Independent Systems' },
  { value: 'Rebel Alliance' },
  { value: 'Galactic Empire' },
  { value: 'Resistance' },
  { value: 'New Republic' },
  { value: 'First Order' },
  { value: 'Bounty hunters, mercenaries, and criminals' },
  { value: 'Naboo humans' },
  { value: 'Tatooine humans' },
  { value: 'Sorgan humans' },
  { value: 'Versio family' },
  { value: 'Uncategorized humans' },
] as const;

export const SingleSelect = () => (
  <Select<{ value: string }, false>
    multi={false}
    embedSearch={true}
    items={items}
    isMatching={(query, item) => item.value.toLowerCase().includes(query)}
    itemsEqual={(a, b) => a.value === b.value}
    renderItem={(item, props) => (
      <SelectDefaultItemRenderer {...props} key={item.value}>
        {item.value}
      </SelectDefaultItemRenderer>
    )}
    renderState={({ selected, isOpen }) => (
      <Button active={isOpen} rightIcon={isOpen ? IconName.ExpandLess : IconName.ExpandMore}>
        {selected?.value ?? 'Click to select...'}
      </Button>
    )}
  />
);

export const MultiSelect = () => (
  <Select<{ value: string }, true>
    multi={true}
    embedSearch={true}
    items={items}
    isMatching={(query, item) => item.value.toLowerCase().includes(query)}
    itemsEqual={(a, b) => a.value === b.value}
    renderItem={(item, props) => (
      <SelectDefaultItemRenderer {...props} key={item.value}>
        {item.value}
      </SelectDefaultItemRenderer>
    )}
    renderState={({ selected, isOpen }) => (
      <Button active={isOpen} rightIcon={isOpen ? IconName.ExpandLess : IconName.ExpandMore}>
        {selected.length ? `${selected.length} items selected` : 'Click to select...'}
      </Button>
    )}
  />
);
