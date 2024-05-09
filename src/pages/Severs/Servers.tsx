import { useServersList } from '@src/hooks/use-servers';
import React from 'react';

const Servers: React.FC = () => {
  const { data, isLoading, error } = useServersList();

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
};

export default Servers;
