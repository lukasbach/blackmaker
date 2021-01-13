import * as React from 'react';
import { ButtonGroupProps, ButtonProps, useTheme } from '..';
import cxs from 'cxs';

export interface PaginationProps {
  buttonProps?: Partial<ButtonProps>;
  pageCount: number;
  currentPage: number;
  onChangePage: (newPage: number) => any;
  surroundingPages?: number;
}

export const Pagination: React.FC<PaginationProps> = props => {
  const theme = useTheme();

  return <div className={cxs({})}>{props.children}</div>;
};
