import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';

export interface MenuBreakProps {
}

export const MenuBreak: React.FC<MenuBreakProps> = props => {
  const theme = useTheme();

  return (
    <div
      className={ cxs({}) }
    >
      { props.children }
    </div>
  );
};
