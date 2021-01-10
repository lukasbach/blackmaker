import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';

export interface MenuHeaderProps {
}

export const MenuHeader: React.FC<MenuHeaderProps> = props => {
  const theme = useTheme();

  return (
    <div
      className={ cxs({
        fontSize: '.8em',
        textTransform: 'uppercase',
        color: theme.definition.textMutedColor,
        fontWeight: 'bolder',
        margin: '8px 12px 0 12px'
      }) }
    >
      { props.children }
    </div>
  );
};
