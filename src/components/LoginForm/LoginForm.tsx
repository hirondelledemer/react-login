import { useLogin } from '@src/hooks/use-login';
import React, { FormEvent, useState } from 'react';
import UserIcon from '../icons/User';
import Input from '../Input';
import PasswordIcon from '../icons/Password';
import Button from '../Button';
import Tooltip from '../Tooltip';

enum FormFields {
  USERNAME = 'username',
  PASSWORD = 'password',
}

type FormValues = {
  [key in FormFields]: string;
};
type FormErrors = {
  [key in FormFields]?: string;
};

const Login: React.FC = () => {
  const [login, isLoading, serverError] = useLogin();
  const [values, setValues] = useState<FormValues>({
    [FormFields.USERNAME]: '',
    [FormFields.PASSWORD]: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleSumit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = values;
    if (!username || !password) {
      setErrors({
        [FormFields.USERNAME]: !username ? 'Username required' : undefined,
        [FormFields.PASSWORD]: !password ? 'Password required' : undefined,
      });
      return;
    }
    login({ username, password });
  };

  const handleFieldOnChange = (field: FormFields, value: string) => {
    setValues((val) => ({
      ...val,
      [field]: value,
    }));
  };

  return (
    <section className='bg-white dark:bg-gray-900 min-h-screen'>
      <div className='container px-6 py-24 mx-auto lg:py-32 min-h-80'>
        <div className='lg:flex'>
          <div className='lg:w-1/2'>
            <img className='w-auto h-10 xl:h-14' src='./logo.png' alt='' />
            <h1 className='mt-4 text-gray-600 dark:text-gray-300 md:text-lg'>
              Welcome
            </h1>

            <h1 className='mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white'>
              login to your account
            </h1>
          </div>

          <div className='mt-8 lg:w-1/2 lg:mt-0'>
            <form className='w-full lg:max-w-xl' onSubmit={handleSumit}>
              <Input
                name={FormFields.USERNAME}
                placeholder='Username'
                aria-label='username'
                value={values.username}
                icon={<UserIcon />}
                onChange={(e) =>
                  handleFieldOnChange(FormFields.USERNAME, e.target.value)
                }
                errorMessage={errors[FormFields.USERNAME]}
              />

              <Input
                type='password'
                placeholder='Password'
                aria-label={FormFields.PASSWORD}
                value={values.password}
                className='mt-4'
                icon={<PasswordIcon />}
                errorMessage={errors[FormFields.PASSWORD]}
                onChange={(e) =>
                  handleFieldOnChange(FormFields.PASSWORD, e.target.value)
                }
              />

              <div className='mt-8 md:flex md:items-center'>
                <Button type='submit' disabled={isLoading}>
                  Login
                </Button>
                <Tooltip
                  content={
                    <>
                      Username: tesonet <br /> Password: partyanimal
                    </>
                  }
                >
                  <a className='inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400'>
                    Forgot your password?
                  </a>
                </Tooltip>
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
