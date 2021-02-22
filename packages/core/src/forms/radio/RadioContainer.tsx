import * as React from 'react';
import { RadioContainerContext } from './RadioContainerContext';
import { useUniqueId } from '../../common/useUniqueId';
import { useEffect, useState } from 'react';

export interface RadioContainerProps {
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => any;
  groupNamePrefix?: string;
}

export const RadioContainer: React.FC<RadioContainerProps> = props => {
  const [value, setValue] = useState<string | undefined>(props.value ?? props.defaultValue);
  const groupName = useUniqueId(props.groupNamePrefix ?? '__blackmaker_radiogroup');
  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);
  return (
    <RadioContainerContext.Provider
      value={{
        ...props,
        groupName,
        currentValue: value,
        onChange: (e, v) => {
          setValue(v);
          props.onChange?.(e, v);
        },
      }}
    >
      {props.children}
    </RadioContainerContext.Provider>
  );
};
