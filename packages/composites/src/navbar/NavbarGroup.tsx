import * as React from 'react';
import cxs from 'cxs';
import { useTheme } from '@blackmaker/core/out/theming/ThemeContext';
import { HtmlElementProps } from '@blackmaker/core/out/common/HtmlElementProps';

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
