import * as React from 'react';
import { FocusRing, FocusRingProps } from 'react-focus-rings';

export const MaybeFocusRing: React.FC<
  {
    canFocus?: boolean;
    children: React.ReactElement;
  } & FocusRingProps
> = props => {
  if (props.canFocus ?? true) {
    return (
      <FocusRing offset={-2} {...props}>
        {props.children}
      </FocusRing>
    );
  } else {
    return props.children;
  }
};
