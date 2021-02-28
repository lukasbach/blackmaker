import * as React from 'react';
import { WidgetProps } from '@rjsf/core';
import { TextInput } from '@blackmaker/core/out/forms/textinput/TextInput';
import { Intent } from '@blackmaker/core';

export const TextWidget: React.FC<WidgetProps> = props => {
  return (
    <TextInput
      fill={true}
      inputId={props.id}
      intent={props.rawErrors?.length > 0 ? Intent.Danger : undefined}
      placeholder={props.placeholder}
      autoFocus={props.autofocus}
      disabled={props.disabled}
      readonly={props.readonly}
      type={
        ((props as any).type || props.schema.type) === 'string' ? 'text' : `${(props as any).type || props.schema.type}`
      }
      value={props.value}
      onChange={(e, value) => props.onChange(value === '' ? props.options?.emptyValue : value)}
      onBlur={e => props.onBlur(props.id, e.target.value)}
      onFocus={e => props.onFocus(props.id, e.target.value)}
    />
  );
};
