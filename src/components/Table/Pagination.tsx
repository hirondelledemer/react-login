import React from 'react';
import Button, { Variant } from '../Button';

interface PaginationProps {
  gotToPreviousPage(): void;
  goToNextPage(): void;
  activePageNumber: number;
  pageCount: number;
  changePage(page: number): void;
}

const Pagination: React.FC<PaginationProps> = ({
  gotToPreviousPage,
  activePageNumber,
  pageCount,
  changePage,
  goToNextPage,
}) => {
  return (
    <div className='flex items-center justify-between mt-6'>
      <Button
        onClick={gotToPreviousPage}
        variant={Variant.secondary}
        className={activePageNumber === 0 ? 'invisible' : ''}
      >
        Prevous
      </Button>
      <div className='items-center hidden md:flex gap-x-3'>
        {[...Array(pageCount)].map((_item, index) => (
          <Button
            key={index}
            onClick={() => changePage(index)}
            variant={
              activePageNumber === index
                ? Variant.secondaryActive
                : Variant.secondary
            }
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <Button
        variant={Variant.secondary}
        onClick={goToNextPage}
        className={activePageNumber === pageCount - 1 ? 'invisible' : ''}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
