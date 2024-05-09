import { useServersList } from '@src/hooks/use-servers';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// todo: clean
const Home: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useServersList();

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>{JSON.stringify(error)}</div>;
  }
  return (
    <div>
      {JSON.stringify(data)}
      <button onClick={() => navigate('/login')}>login</button>
    </div>
  );
};

export default Home;
