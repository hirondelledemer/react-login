import { useLogin } from '@src/hooks/use-login';
import React from 'react';

const Login: React.FC = () => {
  const [loginFunc, isLoading] = useLogin();
  const login = async () => {
    loginFunc({ username: 'tesonet', password: 'partyanimal' });
  };

  return (
    <div>
      <div>
        <label htmlFor='username'>Username</label>
        <input name='username' aria-label='username' />
        <label htmlFor='password'>Password</label>
        <input name='password' aria-label='password' type='password' />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
