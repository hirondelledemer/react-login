import React from 'react';
import Header from '@src/components/Header/Header';
import LoginSection from '@src/components/LoginSection';

const Login: React.FC = () => {
  return (
    <div className='h-screen'>
      <Header />
      <LoginSection />
    </div>
  );
};

export default Login;
