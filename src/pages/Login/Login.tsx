import React from 'react';

const Login: React.FC = () => (
  <div>
    <label htmlFor='username'>Username</label>
    <input name='username' aria-label='username' />
    <label htmlFor='password'>Password</label>
    <input name='password' aria-label='password' type='password' />
  </div>
);

export default Login;
