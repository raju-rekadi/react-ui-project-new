import React from 'react';
import Pagination from 'react-pagination';

export {PaginationComponent}
function PaginationComponent  ({ currentPage, totalPages, onPageChange }) {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onChange={onPageChange}
    />
  );
};

