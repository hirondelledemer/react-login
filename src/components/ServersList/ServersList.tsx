import { useServersList } from '@src/hooks/use-servers';
import React from 'react';
import Table from '../Table';
import { ColumnProps } from '../Table/Table';
import Skeleton from '../Skeleton';
import { Server } from '@src/utils/types/servers';

const ServersList: React.FC = () => {
  const { data, isLoading, error } = useServersList();

  if (error) {
    return <div>{error.message}</div>;
  }
  const columns: Array<ColumnProps<Server>> = [
    {
      key: 'name',
      title: 'Sever Name',
    },
    {
      key: 'distance',
      title: 'Distance',
    },
  ];

  return (
    <section className='bg-white px-10 md:px-40 dark:bg-gray-900 min-h-screen min-w-screen py-10'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 dark:text-white'>
          Severs
        </h2>
      </div>
      {isLoading ? <Skeleton /> : <Table data={data} columns={columns} />}
    </section>
  );
};

export default ServersList;
