import React from 'react';
import { Meta } from '@storybook/react';
import { Select } from './Select';
import { items } from './ComplexSelect.stories';
import { MultiSelect } from './MultiSelect';
import { Suggest } from './Suggest';
import { SelectDefaultItemRenderer } from './SelectDefaultItemRenderer';
import { ComplexSelect } from './ComplexSelect';
import { documentStory } from '../../../../.storybook/utils/documentStory';

export * from '../select/SimpleSelects.stories';

export default {
  title: 'Core/Components/Forms/Select',
  component: Select,
  subcomponents: { MultiSelect, Suggest, ComplexSelect },
  parameters: {
    docs: {
      description: {
        component: 'Selection Components which are part of the *Core/Select* subpackage, shown here for convenience.',
      },
    },
  },
} as Meta;
