import * as React from 'react';
import { WidgetProps } from '@rjsf/core';
import { Select } from '@blackmaker/core/out/select/Select';
import { MultiSelect } from '@blackmaker/core/out/select/MultiSelect';
import { Intent } from '@blackmaker/core';
import { Paragraph } from '@blackmaker/core/out/typography/Paragraph';

export const SelectWidget: React.FC<WidgetProps> = props => {
  const { enumOptions, enumDisabled }: any = props.options;
  console.log(props);

  const selectProps = {
    // TODO id
    // TODO disabled
    // TODO readonly
    // TODO autofocus
    // TODO onBlur, onFocus
    buttonProps: {
      intent: props.rawErrors?.length > 0 ? Intent.Danger : undefined,
    },
  };

  if (props.multiple) {
    return (
      <MultiSelect
        {...selectProps}
        onChange={items => {
          props.onChange(items.map(item => item.value));
        }}
        selectedItems={props.value.map((value: any) => ({ value }))}
        items={enumOptions.map((option: any, index: number) => ({
          value: option.value,
          label: option.label, // TODO disabled
        }))}
        renderText={selectedItems => (
          <Paragraph children={selectedItems.map(item => item.label).join(', ')} truncate={true} />
        )}
      />
    );
  } else {
    return (
      <Select
        {...selectProps}
        onChange={item => {
          props.onChange(item?.value);
        }}
        selectedItems={{ value: props.value }}
        embedSearch={true}
        items={enumOptions.map((option: any, index: number) => ({
          value: option.value,
          label: option.label, // TODO disabled
        }))}
      />
    );
  }
};
