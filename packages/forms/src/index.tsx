import { utils, withTheme } from '@rjsf/core';
import React from 'react';
import { Button, Intent } from '@blackmaker/core';
import { TextInput } from '@blackmaker/core/out/forms/textinput/TextInput';
import { FormGroup } from '@blackmaker/core/out/forms/formgroup/FormGroup';
import { Checkbox } from '@blackmaker/core/out/forms/checkbox/Checkbox';

const { getDefaultRegistry } = utils;

const { fields, widgets } = getDefaultRegistry();

export const Form = withTheme({
  widgets: {
    ...widgets,
    TextWidget: props => (
        <TextInput
          inputId={props.id}
          intent={props.rawErrors?.length > 0 ? Intent.Danger : undefined}
          placeholder={props.placeholder}
          autoFocus={props.autofocus}
          disabled={props.disabled}
          readonly={props.readonly}
          type={((props as any).type || props.schema.type) === 'string' ?  'text' : `${(props as any).type || props.schema.type}`}
          value={props.value}
          onChange={(e, value) => props.onChange(value === '' ? props.options?.emptyValue : value)}
          onBlur={(e) => props.onBlur(props.id, e.target.value)}
          onFocus={(e) => props.onFocus(props.id, e.target.value)}
        />
    ),
    CheckboxWidget: props => (
      <Checkbox
        inputId={props.id}
        label={props.label || props.schema.description || ''}
        checked={props.value}
        onChange={props.onChange}
      />
    ),
  },
  fields: {
    ...fields
  },
  FieldTemplate: props => (
    <FormGroup
      label={props.label}
      inputId={props.id}
      intent={props.rawErrors?.length > 0 ? Intent.Danger : undefined}
      helperText={props.rawErrors?.length > 0 ? props.rawErrors.map(error => <div key={error}>{error}</div>) : props.rawDescription}
    >
      {props.children}
    </FormGroup>
  ),
  ArrayFieldTemplate: undefined,
  ObjectFieldTemplate: undefined,
  ErrorList: undefined,
  children: () => (
    <div>
      <Button type="submit" intent={Intent.Primary}>
        Submit
      </Button>
    </div>
  )
}) as any;
