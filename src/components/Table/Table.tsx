import React from 'react';
import { useSortableData } from '@src/hooks/use-sortable-data';
import SortButton from '../SortButton';
import usePagination from '@src/hooks/use-pagination';
import Button, { Variant } from '../Button';

export interface ColumnProps<T> {
  key: keyof T;
  title: string;
  render?: (column: ColumnProps<T>, item: T) => string;
}

interface TableProps<T> {
  columns: Array<ColumnProps<T>>;
  data?: T[];
  pageSize: number;
}

//todo: test
const Table = <T,>({ data, columns, pageSize }: TableProps<T>) => {
  const { items, requestSort, sortConfig } = useSortableData<T>(data, null);
  const {
    pageNumber,
    changePage,
    getPageData,
    goToNextPage,
    gotToPreviousPage,
    pageCount,
  } = usePagination<T>(items, pageSize);

  const headers = columns.map((column, index) => {
    return (
      <th
        key={`th-${index}`}
        scope='col'
        className='px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
      >
        <button
          className='flex items-center gap-x-2'
          onClick={() => requestSort(column.key)}
        >
          <span>{column.title}</span>
          <SortButton
            active={sortConfig && sortConfig.key === column.key}
            direction={sortConfig && sortConfig.direction}
          />
        </button>
      </th>
    );
  });

  const rows = getPageData()?.map((row, index) => {
    return (
      <tr key={`tr-${index}`}>
        {columns.map((column, index2) => {
          const value = column.render
            ? column.render(column, row as T)
            : (row[column.key as keyof typeof row] as string);

          return (
            <td
              key={`td-${index2}`}
              className='px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'
            >
              <div className='inline-flex items-center gap-x-3'>
                <div className='flex items-center gap-x-2'>
                  <div className='font-medium text-gray-800 dark:text-white '>
                    {value}
                  </div>
                </div>
              </div>
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <>
      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead className='bg-gray-50 dark:bg-gray-800'>
                  <tr>{headers}</tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                  {rows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between mt-6'>
        <Button
          onClick={gotToPreviousPage}
          variant={Variant.secondary}
          className={pageNumber === 0 ? 'invisible' : ''}
        >
          Prevous
        </Button>
        <div className='items-center hidden md:flex gap-x-3'>
          {[...Array(pageCount)].map((_item, index) => (
            <Button
              key={index}
              onClick={() => changePage(index)}
              variant={
                pageNumber === index
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
          className={pageNumber === pageCount - 1 ? 'invisible' : ''}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Table;
