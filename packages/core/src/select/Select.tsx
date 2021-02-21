import * as React from 'react';
import { Button, ButtonProps, IconName, useTheme } from '..';
import { ComplexSelect, ComplexSelectProps } from './ComplexSelect';
import { SelectDefaultItemRenderer } from './SelectDefaultItemRenderer';
import { AnyElement } from '../common/AnyElement';

export interface SimpleSelectObject {
  value: string;
  label?: string;
}

export const SimpleSelectObjectMatcher = (query: string, item: SimpleSelectObject) => (
  item.value.toLowerCase().includes(query.toLowerCase())
);

export interface SelectProps
  extends Omit<ComplexSelectProps<false, SimpleSelectObject>, 'multi' | 'isMatching' | 'renderItem' | 'renderState' | 'itemsEqual' | 'embedSearch'>,
  Pick<Partial<ComplexSelectProps<false, SimpleSelectObject>>, 'isMatching' | 'renderItem' | 'renderState' | 'itemsEqual' | 'embedSearch'> {
  defaultText?: AnyElement;
  buttonProps?: ButtonProps;
}

export const Select: React.FC<SelectProps> = props => {
  return (
    <ComplexSelect<SimpleSelectObject, false>
      multi={false}
      embedSearch={true}
      isMatching={SimpleSelectObjectMatcher}
      itemsEqual={(a, b) => a.value === b.value}
      renderItem={(item, props) => (
        <SelectDefaultItemRenderer {...props} key={item.value}>
          {item.value}
        </SelectDefaultItemRenderer>
      )}
      renderState={({ selected, isOpen }) => (
        <Button active={isOpen} rightIcon={isOpen ? IconName.ExpandLess : IconName.ExpandMore} {...props.buttonProps}>
          {selected?.value ?? props.defaultText ?? 'Click to select...'}
        </Button>
      )}
      {...props}
    />
  );
};
