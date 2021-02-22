import * as React from 'react';
import { HtmlElementProps, noSelect, useTheme } from '..';
import cxs from 'cxs';

export interface MenuProps extends HtmlElementProps {
  background?: boolean;
  small?: boolean;
  large?: boolean;
  fill?: boolean;
  // TODO
}

export const Menu: React.FC<MenuProps> = props => {
  const theme = useTheme();

  return (
    <div
      role="list"
      className={cxs({
        display: props.fill ? 'block' : 'inline-block',
        backgroundColor: props.background ?? true ? theme.definition.menuBackgroundColor : undefined,
        borderRadius: props.background ?? true ? theme.definition.borderRadiusSmall : undefined,
        boxShadow: props.background ?? true ? 'rgba(0, 0, 0, 0.15) 0px 2px 6px 2px' : undefined,
        padding: '8px',
        minWidth: '120px',
        maxWidth: !props.fill ? '240px' : undefined,
        fontSize: props.small ? '.85em' : props.large ? '1.2em' : '1em',
        ...noSelect,
        ...props.css,
      })}
      {...props.elementProps}
    >
      {props.children}
    </div>
  );
};
