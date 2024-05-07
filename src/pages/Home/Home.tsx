import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/login')}>login</button>
    </div>
  );
};

export default Home;
