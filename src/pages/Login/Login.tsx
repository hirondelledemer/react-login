import React from 'react';
import Header from '@src/components/Header/Header';
import LoginForm from '@src/components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className='h-sreen'>
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;
