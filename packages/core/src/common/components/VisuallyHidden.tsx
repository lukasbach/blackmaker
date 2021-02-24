import * as React from 'react';
import { useTheme } from '../../index';
import cxs from 'cxs';

export const VisuallyHidden: React.FC = props => {
  return (
    <div
      className={cxs({
        height: '0',
        position: 'relative',
        '> *': {
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: -1,
          opacity: 0,
        },
      })}
    >
      {props.children}
    </div>
  );
};
