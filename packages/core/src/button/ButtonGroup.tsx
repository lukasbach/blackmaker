import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';
import { ButtonProps } from './Button';

export interface ButtonGroupProps extends Partial<ButtonProps> {
}

export const ButtonGroupContext = React.createContext<ButtonGroupProps & { grouped?: boolean }>({});

export const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  if (props.fill) {
    return (
      <ButtonGroupContext.Provider value={{ ...props, grouped: true, fill: false }}>
        <div className={cxs({
          display: 'flex',
          '> *': {
            flexGrow: 1
          }
        })}>
          { props.children }
        </div>
      </ButtonGroupContext.Provider>
    );
  } else {
    return (
      <ButtonGroupContext.Provider value={{ ...props, grouped: true }}>
        { props.children }
      </ButtonGroupContext.Provider>
    );
  }
};
