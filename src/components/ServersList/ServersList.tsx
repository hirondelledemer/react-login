import { Server, useServersList } from '@src/hooks/use-servers';
import React from 'react';
import Table from '../Table';
import { ColumnProps } from '../Table/Table';

const ServersList: React.FC = () => {
  const { data, isLoading, error } = useServersList();

  if (isLoading) {
    return <div>loading</div>;
  }
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

  return <Table data={data} columns={columns} />;
};

export default ServersList;
