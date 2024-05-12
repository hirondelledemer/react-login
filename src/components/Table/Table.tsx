import React from 'react';
import { useSortableData } from '@src/hooks/use-sortable-data';
import SortButton from '../SortButton';
import usePagination from '@src/hooks/use-pagination';
import Pagination from './Pagination';

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
        className='px-4 xl:px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
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
              className='px-4 xl:px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'
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
      <Pagination
        gotToPreviousPage={gotToPreviousPage}
        activePageNumber={pageNumber}
        pageCount={pageCount}
        changePage={changePage}
        goToNextPage={goToNextPage}
      />
    </>
  );
};

export default Table;
