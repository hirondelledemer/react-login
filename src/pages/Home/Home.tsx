import { useAuth } from '@src/hooks/use-auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  return (
    <div>
      Home page
      {!token && <button onClick={() => navigate('/login')}>login</button>}
    </div>
  );
};

export default Home;
