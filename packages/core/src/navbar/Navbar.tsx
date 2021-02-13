import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = props => {
  const theme = useTheme();

  return <div className={cxs({})}>{props.children}</div>;
};
