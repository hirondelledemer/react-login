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
    <section className='bg-white px-10 md:px-40 min-h-screen min-w-screen py-10'>
      <div className='flex items-center gap-x-3'>
        <h1 className='mt-4 text-2xl font-medium text-gray-800 lg:text-3xl'>
          Servers
        </h1>
      </div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Table data={data} columns={columns} pageSize={10} />
      )}
    </section>
  );
};

ServersList.displayName = 'ServersList';
export default ServersList;
