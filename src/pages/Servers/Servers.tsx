import Header from '@src/components/Header';
import ServersList from '@src/components/ServersList';
import React from 'react';

const Servers: React.FC = () => {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <ServersList />
    </div>
  );
};

export default Servers;
