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

const LoginForm: React.FC = () => {
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
          {/* todo: extract link */}
          <a className='inline-block mt-4 text-center text-blue-500 md:mt-0 mx-6 hover:underline'>
            Forgot your password?
          </a>
        </Tooltip>
      </div>
      {/* todo: extract error text */}
      {serverError && (
        <div className='text-red-500 mt-4'>{serverError.message}</div>
      )}
    </form>
  );
};

export default LoginForm;
