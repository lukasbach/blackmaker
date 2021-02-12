import * as React from 'react';
import { HtmlElementProps, Icon, IconName, useTheme } from '..';
import cxs from 'cxs';
import { BreadCrumb, BreadCrumbProps } from './BreadCrumb';

export interface BreadCrumbsProps extends HtmlElementProps {
  items: Array<BreadCrumbProps>;
  renderItem?: (props: BreadCrumbProps, isFinal?: boolean) => JSX.Element;
  small?: boolean;
  large?: boolean;
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = props => {
  return (
    <nav
      className={cxs({
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'visible',
        fontSize: props.small ? '.8em' : props.large ? '1.2em' : '1em',
        ...props.css,
      })}
      {...props.elementProps}
    >
      {props.items.map((item, idx) => {
        const isFinal = idx === props.items.length - 1;
        return props.renderItem ? props.renderItem(item, isFinal) : <BreadCrumb {...item} isFinal={isFinal} />;
      })}
    </nav>
  );
};
