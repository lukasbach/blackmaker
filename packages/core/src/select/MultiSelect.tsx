import * as React from 'react';
import { Button, ButtonProps, IconName, useTheme } from '..';
import { ComplexSelect, ComplexSelectProps } from './ComplexSelect';
import { SelectDefaultItemRenderer } from './SelectDefaultItemRenderer';
import { SimpleSelectObject, SimpleSelectObjectMatcher } from './Select';
import { AnyElement } from '../common/AnyElement';

export interface MultiSelectProps
  extends Omit<
      ComplexSelectProps<true, SimpleSelectObject>,
      'multi' | 'isMatching' | 'renderItem' | 'renderState' | 'itemsEqual' | 'embedSearch'
    >,
    Pick<
      Partial<ComplexSelectProps<true, SimpleSelectObject>>,
      'isMatching' | 'renderItem' | 'renderState' | 'itemsEqual'
    > {
  renderText: (selectedItems: SimpleSelectObject[], isOpen: boolean) => AnyElement;
  buttonProps?: ButtonProps;
}

export const MultiSelect: React.FC<MultiSelectProps> = props => {
  return (
    <ComplexSelect<SimpleSelectObject, true>
      multi={true}
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
          {props.renderText(selected, isOpen)}
        </Button>
      )}
      {...props}
    />
  );
};
