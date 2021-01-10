import * as React from 'react';
import { noSelect, useTheme } from '..';
import cxs from 'cxs';

export interface MenuProps {
}

export const Menu: React.FC<MenuProps> = props => {
  const theme = useTheme();

  return (
    <div
      className={ cxs({
        display: 'inline-block',
        backgroundColor: theme.definition.menuBackgroundColor,
        borderRadius: theme.definition.borderRadiusSmall,
        padding: '8px',
        minWidth: '120px',
        ...noSelect
      }) }
    >
      { props.children }
    </div>
  );
};
