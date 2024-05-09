import { useLogin } from '@src/hooks/use-login';
import React, { FormEvent, useState } from 'react';
import UserIcon from '../icons/User';
import Input from '../Input/Input';
import PasswordIcon from '../icons/Password';
import Button from '../Button/Button';

const Login: React.FC = () => {
  const [login, isLoading, serverError] = useLogin();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <section className='bg-white dark:bg-gray-900 min-h-screen'>
      <div className='container px-6 py-24 mx-auto lg:py-32 min-h-80'>
        <div className='lg:flex'>
          <div className='lg:w-1/2'>
            <img
              className='w-auto h-7 sm:h-8'
              src='https://merakiui.com/images/logo.svg'
              alt=''
            />

            <h1 className='mt-4 text-gray-600 dark:text-gray-300 md:text-lg'>
              Welcome
            </h1>

            <h1 className='mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white'>
              login to your account
            </h1>
          </div>

          <div className='mt-8 lg:w-1/2 lg:mt-0'>
            <form className='w-full lg:max-w-xl' onSubmit={handleSumit}>
              <div className='relative flex items-center'>
                <span className='absolute'>
                  <UserIcon />
                </span>

                <Input
                  type='email'
                  name='username'
                  placeholder='Username'
                  aria-label='username'
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className='relative flex items-center mt-4'>
                <span className='absolute'>
                  <PasswordIcon />
                </span>

                <Input
                  type='password'
                  placeholder='Password'
                  aria-label='password'
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='mt-8 md:flex md:items-center'>
                <Button type='submit' disabled={isLoading}>
                  Login
                </Button>

                <a
                  href='#'
                  className='inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400'
                >
                  Forgot your password?
                </a>
              </div>
              {serverError && (
                <div className='text-red-500 mt-4'>{serverError.message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
