import * as React from 'react';
import cxs, { CSSProperties } from 'cxs';

export interface BoxProps extends CSSProperties {
  elementProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLElement>, HTMLElement>;
  element?: keyof JSX.IntrinsicElements;
}

export const Box: React.FC<BoxProps> = props => {
  const Element = props.element ?? ('div' as any);

  return (
    <Element
      {...props.elementProps}
      className={[
        cxs({
          ...props,
          elementProps: undefined,
          children: undefined,
        }),
        props.elementProps?.className,
      ].join(' ')}
    >
      {props.children}
    </Element>
  );
};
