import * as React from 'react';
import { Icon, IconName, useTheme } from '..';
import cxs from 'cxs';
import { BreadCrumb, BreadCrumbProps } from './BreadCrumb';

export interface BreadCrumbsProps {
  items: Array<BreadCrumbProps>;
  renderItem?: (props: BreadCrumbProps, isFinal?: boolean) => JSX.Element;
  small?: boolean;
  large?: boolean;
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = props => {
  return (
    <div
      className={cxs({
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        fontSize: props.small ? '.8em' : props.large ? '1.2em' : '1em',
      })}
    >
      {props.items.map((item, idx) => {
        const isFinal = idx === props.items.length - 1;
        return props.renderItem ? props.renderItem(item, isFinal) : <BreadCrumb {...item} isFinal={isFinal} />;
      })}
    </div>
  );
};
