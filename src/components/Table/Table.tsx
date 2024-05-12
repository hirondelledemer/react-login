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
      <th key={`th-${index}`} scope='col' className='px-4 xl:px-12 py-3.5'>
        {/* todo: extracy button */}
        <button
          className='flex items-center gap-x-2'
          onClick={() => requestSort(column.key)}
        >
          <span>{column.title}</span>
          <SortButton
            active={sortConfig && sortConfig.key === column.key}
            direction={
              sortConfig && sortConfig.key === column.key
                ? sortConfig && sortConfig.direction
                : undefined
            }
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
              className='px-4 xl:px-12 py-4 text-sm whitespace-nowrap'
            >
              {value}
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
            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
              <table className='min-w-full divide-y'>
                <thead>
                  <tr>{headers}</tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
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
