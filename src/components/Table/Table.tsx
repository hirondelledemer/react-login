import React from 'react';
import SortDownIcon from '../icons/SortDown';
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';

export interface ColumnProps<T> {
  key: string;
  title: string;
  render?: (column: ColumnProps<T>, item: T) => string;
}

interface TableProps<T> {
  columns: Array<ColumnProps<T>>;
  data?: T[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  const headers = columns.map((column, index) => {
    return (
      <th
        key={`th-${index}`}
        scope='col'
        className='px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'
      >
        <button className='flex items-center gap-x-2'>
          <span>{column.title}</span>
          <SortDownIcon />
        </button>
      </th>
    );
  });

  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length} className='text-center'>
        No data //todo: show empty state
      </td>
    </tr>
  ) : (
    data?.map((row, index) => {
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
    })
  );

  //todo: check mobile view
  return (
    <section className='bg-white px-40 dark:bg-gray-900 min-h-screen min-w-screen py-10'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 dark:text-white'>
          Severs
        </h2>
      </div>

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
        <a
          href='#'
          className='flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'
        >
          <ArrowLeft />
          <span>previous</span>
        </a>

        <div className='items-center hidden lg:flex gap-x-3'>
          <a
            href='#'
            className='px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60'
          >
            1
          </a>
          <a
            href='#'
            className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
          >
            2
          </a>
          <a
            href='#'
            className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
          >
            3
          </a>
          <a
            href='#'
            className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
          >
            ...
          </a>
          <a
            href='#'
            className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
          >
            12
          </a>
          <a
            href='#'
            className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
          >
            13
          </a>
          <a
            href='#'
            className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
          >
            14
          </a>
        </div>

        <a
          href='#'
          className='flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'
        >
          <span>Next</span>
          <ArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Table;
