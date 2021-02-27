import * as React from 'react';
import cxs from 'cxs';
import { NavbarGroupProps } from './NavbarGroup';
import { useTheme } from '@blackmaker/core/out/theming/ThemeContext';

export interface NavbarTextProps extends NavbarGroupProps {
  element?: string;
}

export const NavbarText: React.FC<NavbarTextProps> = props => {
  const theme = useTheme();
  const Element = (props.element ?? 'div') as 'div';

  return (
    <Element
      className={cxs({
        flexGrow: props.grow ? 1 : 0,
        margin: '0 .1em',
        padding: '0 1em',
        fontSize: '1em',
        color: theme.definition.textHightlightColor,
      })}
    >
      {props.children}
    </Element>
  );
};
