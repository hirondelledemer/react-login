import { useLogin } from '@src/hooks/use-login';
import React, { FormEvent, useState } from 'react';
import UserIcon from '../icons/User';
import Input from '../Input';
import PasswordIcon from '../icons/Password';
import Button from '../Button';
import Tooltip from '../Tooltip';
import Link from '../Link';
import Text, { Variant } from '../Text';

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
  const {
    mutate: login,
    isPending: isLoading,
    error: serverError,
  } = useLogin();
  const [values, setValues] = useState<FormValues>({
    [FormFields.USERNAME]: '',
    [FormFields.PASSWORD]: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = values;
    if (!username || !password) {
      setErrors({
        [FormFields.USERNAME]: !username ? 'Username required' : undefined,
        [FormFields.PASSWORD]: !password ? 'Password required' : undefined,
      });
      return;
    }
    setErrors({});
    login({ username, password });
  };

  const handleFieldChange = (field: FormFields, value: string) => {
    setValues((val) => ({
      ...val,
      [field]: value,
    }));
  };

  return (
    <form className='w-full lg:max-w-xl' onSubmit={handleSubmit}>
      <Input
        name={FormFields.USERNAME}
        placeholder='Username'
        aria-label='username'
        value={values.username}
        icon={<UserIcon />}
        onChange={(e) => handleFieldChange(FormFields.USERNAME, e.target.value)}
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
        onChange={(e) => handleFieldChange(FormFields.PASSWORD, e.target.value)}
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
          <Link>Forgot your password?</Link>
        </Tooltip>
      </div>
      {serverError && (
        <Text className='mt-4' variant={Variant.error}>
          {serverError.message}
        </Text>
      )}
    </form>
  );
};

LoginForm.displayName = 'LoginForm';
export default LoginForm;
