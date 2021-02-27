import * as React from 'react';
import { Checkbox } from '@blackmaker/core/out/forms/checkbox/Checkbox';
import { WidgetProps } from '@rjsf/core';

export const CheckboxWidget: React.FC<WidgetProps> = props => {
  return (
    <Checkbox
      inputId={props.id}
      label={props.label || props.schema.description || ''}
      checked={props.value}
      onChange={props.onChange}
      required={props.required}
      disabled={props.disabled}
      elementProps={{
        onFocus: e => props.onFocus(props.id, props.value),
        onBlur: e => props.onBlur(props.id, props.value),
      }}
    />
  );
};
