import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Core/Components/Pagination',
  component: Pagination,
} as Meta;

export const SimplePagination = () => (
  <div>
    <Pagination pageCount={20} currentPage={4} onChangePage={() => {}} />
  </div>
);

export const PaginationWithState = () => {
  const [page, setPage] = useState(4);
  return (
    <div>
      <Pagination pageCount={20} currentPage={page} onChangePage={setPage} />
    </div>
  );
};
