import * as React from 'react';
import { HtmlElementProps, useTheme } from '..';
import cxs from 'cxs';

export interface NavbarGroupProps extends HtmlElementProps {
  grow?: boolean;
}

export const NavbarGroup: React.FC<NavbarGroupProps> = props => {
  const theme = useTheme();

  return (
    <ul
      className={cxs({
        listStyle: 'none',
        flexGrow: props.grow ? 1 : 0,
        margin: '0 .1em',
        padding: '0 1em',
        '> li': {
          display: 'inline-block',
        },
      })}
    >
      {Array.isArray(props.children) ? (
        props.children.map((child, key) => <li key={key}>{child}</li>)
      ) : (
        <li>{props.children}</li>
      )}
    </ul>
  );
};
