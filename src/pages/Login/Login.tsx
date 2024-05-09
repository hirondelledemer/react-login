import { useLogin } from '@src/hooks/use-login';
import React, { FormEvent, useState } from 'react';

// todo: clean
const Login: React.FC = () => {
  const [login, isLoading, error] = useLogin();
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          aria-label='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div>{error.message}</div>}
        {isLoading && <div>loading</div>}
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
