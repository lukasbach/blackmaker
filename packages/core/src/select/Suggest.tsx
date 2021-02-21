import * as React from 'react';
import { useState } from 'react';
import { ComplexSelect, ComplexSelectProps } from './ComplexSelect';
import { SelectDefaultItemRenderer } from './SelectDefaultItemRenderer';
import { SimpleSelectObject, SimpleSelectObjectMatcher } from './Select';
import { TextInput, TextInputProps } from '../forms/textinput/TextInput';
import { PopoverOpenTrigger } from '../overlays/Popover';

export interface SuggestProps
  extends Omit<ComplexSelectProps<false, SimpleSelectObject>, 'multi' | 'isMatching' | 'renderItem' | 'renderState' | 'itemsEqual' | 'embedSearch'>,
  Pick<Partial<ComplexSelectProps<false, SimpleSelectObject>>, 'isMatching' | 'renderItem' | 'renderState' | 'itemsEqual'> {
  inputProps?: TextInputProps;
}

export const Suggest: React.FC<SuggestProps> = props => {
  const [query, setQuery] = useState('');
  return (
    <ComplexSelect<SimpleSelectObject, false>
      popoverProps={{
        trigger: PopoverOpenTrigger.FocusReference,
        closeOnClick: false,
        ...props.popoverProps
      }}
      multi={false}
      embedSearch={false}
      isMatching={SimpleSelectObjectMatcher}
      itemsEqual={(a, b) => a.value === b.value}
      renderItem={(item, props) => (
        <SelectDefaultItemRenderer {...props} key={item.value}>
          {item.value}
        </SelectDefaultItemRenderer>
      )}
      query={query}
      onChangeQuery={setQuery}
      onChange={item => {
        setQuery(item?.label ?? item?.value);
        props.onChange?.(item);
      }}
      renderState={({ selected, isOpen }) => (
        /*<Button active={isOpen} rightIcon={isOpen ? IconName.ExpandLess : IconName.ExpandMore} {...props.buttonProps}>
          {selected?.value ?? props.defaultText ?? 'Click to select...'}
        </Button>*/
        <TextInput
          value={query}
          onChange={(e, value) => setQuery(value)}
          selectAllOnClick={true}
          {...props.inputProps}
        />
      )}
      {...props}
    />
  );
};