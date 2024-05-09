import { useLogin } from '@src/hooks/use-login';
import React, { FormEvent, useState } from 'react';

const Login: React.FC = () => {
  const [login, isLoading, serverError] = useLogin();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <label htmlFor='username'>Username</label>
        <input
          name='username'
          aria-label='username'
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          aria-label='password'
          type='password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {serverError && <div>{serverError.message}</div>}
        <button type='submit' disabled={isLoading}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
