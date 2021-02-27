import * as React from 'react';
import { WidgetProps } from '@rjsf/core';
import { FormGroup } from '@blackmaker/core/out/forms/formgroup/FormGroup';
import { Checkbox } from '@blackmaker/core/out/forms/checkbox/Checkbox';

const selectValue = (value: any, selected: any, all: any) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));

  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a: any, b: any) => all.indexOf(a) > all.indexOf(b));
};

const deselectValue = (value: any, selected: any) => {
  return selected.filter((v: any) => v !== value);
};

export const CheckboxesWidget: React.FC<WidgetProps> = props => {
  return (
    <FormGroup
      label={props.label || props.schema.title}
      dontAutomapLabel={true}
      inputId={props.id}
    >
      <div id={props.id}>
        {(props.options.enumOptions as any).map((option: any, index: number) => {
          return (
            <Checkbox
              inputId={`${props.id}_${index}`}
              required={option.required}
              label={option.label}
              checked={props.value.indexOf(option.value) !== -1}
              autofocus={props.autofocus && index === 0}
              disabled={props.disabled || (props.options.enumDisabled as any)?.indexOf(option.value) >= 0}
              readonly={props.readonly}
              onChange={(checked, e) => {
                if (checked) {
                  const all = (props.options.enumOptions as any).map(({ value }: any) => value);
                  if (checked) {
                    props.onChange(selectValue(option.value, props.value, all));
                  } else {
                    props.onChange(deselectValue(option.value, props.value));
                  }
                }
              }}
              elementProps={{
                onFocus: e => props.onFocus(props.id, props.value),
                onBlur: e => props.onBlur(props.id, props.value),
              }}
            />
          )
        })}
      </div>
    </FormGroup>
  );
};
