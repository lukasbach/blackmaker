import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';

export interface MenuBreakProps {}

export const MenuBreak: React.FC<MenuBreakProps> = props => {
  const theme = useTheme();

  return (
    <hr
      className={cxs({
        border: 'none',
        borderBottom: `1px solid ${theme.definition.textDisabledColor}`,
      })}
    />
  );
};
