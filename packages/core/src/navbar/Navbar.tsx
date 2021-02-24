import * as React from 'react';
import { ButtonGroupContext, HtmlElementProps, useTheme } from '..';
import cxs from 'cxs';
import { BackgroundColor } from '../theming/BackgroundColor';

export interface NavbarProps extends HtmlElementProps {
  background?: BackgroundColor | string;
  condensed?: boolean;
}

export const Navbar: React.FC<NavbarProps> = props => {
  const theme = useTheme();

  return (
    <nav
      className={cxs({
        display: 'flex',
        backgroundColor: theme.getBackgroundColor(
          props.background ?? (theme.isDark ? BackgroundColor.Tertiary : BackgroundColor.Primary)
        ),
        padding: '0 20px',
        height: !props.condensed ? '60px' : '32px',
        fontSize: !props.condensed ? '1em' : '.9em',
        alignItems: 'center',
        ...props.css,
      })}
      {...props.elementProps}
    >
      <ButtonGroupContext.Provider value={{ minimal: true, margin: false, small: props.condensed }}>
        {props.children}
      </ButtonGroupContext.Provider>
    </nav>
  );
};
