import { utils, withTheme } from '@rjsf/core';
import React from 'react';
import { Button, Intent } from '@blackmaker/core';
import { TextWidget } from './widgets/TextWidget';
import { CheckboxWidget } from './widgets/CheckboxWidget';
import { FieldTemplate } from './templates/FieldTemplate';
import { ArrayFieldTemplate } from './templates/ArrayFieldTemplate';
import { ObjectFieldTemplate } from './templates/ObjectFieldTemplate';
import { CheckboxesWidget } from './widgets/CheckboxesWidget';
import { DescriptionField } from './fields/DescriptionField';
import { TitleField } from './fields/TitleField';
import { SelectWidget } from './widgets/SelectWidget';

const { getDefaultRegistry } = utils;

const { fields, widgets } = getDefaultRegistry();

export const Form = withTheme({
  widgets: {
    ...widgets,
    TextWidget,
    CheckboxWidget,
    CheckboxesWidget,
    SelectWidget
  },
  fields: {
    ...fields,
    DescriptionField,
    TitleField
  },
  FieldTemplate,
  ArrayFieldTemplate,
  ObjectFieldTemplate,
  ErrorList: undefined,
  children: () => (
    <div>
      <Button type="submit" intent={Intent.Primary}>
        Submit
      </Button>
    </div>
  ),
}) as any;
