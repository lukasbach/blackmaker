import React from 'react';
import { Meta } from '@storybook/react';
import { Select } from './Select';
import { items } from './ComplexSelect.stories';
import { MultiSelect } from './MultiSelect';
import { Suggest } from './Suggest';
import { SelectDefaultItemRenderer } from './SelectDefaultItemRenderer';
import { ComplexSelect } from './ComplexSelect';
import { documentStory } from '../../../../.storybook/utils/documentStory';

export default {
  title: 'Core/Select/Simple Select Interfaces',
  component: Select,
  subcomponents: {MultiSelect, Suggest},
  parameters: {
    docs: {
      storyDescription: "Description"
    }
  }
} as Meta;

export const SimpleSelect = () => (
  <Select
    items={items}
    defaultText={"Nothing selected :("}
  />
);

export const SimpleMultiSelect = () => (
  <MultiSelect
    items={items}
    renderText={(selectedItems, isOpen) => `${selectedItems.length} items selected`}
  />
);
documentStory(SimpleMultiSelect, "Description 2");

export const SimpleSuggest = () => (
  <Suggest
    items={items}
  />
);
