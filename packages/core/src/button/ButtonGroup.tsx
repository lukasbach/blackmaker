import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';
import { ButtonProps } from './Button';
import { useMemo } from 'react';

export interface ButtonGroupProps extends Partial<ButtonProps> {}

export const ButtonGroupContext = React.createContext<ButtonGroupProps & { grouped?: boolean }>({});

export const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const context = {
    ...props,
    grouped: true,
    fill: !!props.fill,
    children: undefined
  };

  if (props.fill) {
    return (
      <ButtonGroupContext.Provider value={context}>
        <div
          className={cxs({
            display: 'flex',
            '> *': {
              flexGrow: 1,
            },
          })}
        >
          {props.children}
        </div>
      </ButtonGroupContext.Provider>
    );
  } else {
    return (
      <ButtonGroupContext.Provider value={context}>{props.children}</ButtonGroupContext.Provider>
    );
  }
};
