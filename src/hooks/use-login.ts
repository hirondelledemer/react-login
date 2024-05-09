import { HOME } from '@src/utils/consts/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface InputProps {
  username: string;
  password: string;
}

export const useLogin = (): [(input: InputProps) => void, boolean, Error] => {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (params: InputProps) => {
      const url = 'https://playground.tesonet.lt/v1/tokens';

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      // todo: handle errors
      if (!res.ok) {
        console.log('I am here');
        throw new Error('Network response was not ok');
        // return { message: 'error while loggin in' };
      }

      return res;
    },
    // todo: rethink
    onError: (error) => {
      console.log('error', error);
    },
    onSuccess: async (res) => {
      const data = await res.json();
      console.log('data', data);
      console.log(data.token);
      localStorage.setItem('token', data.token);
      navigate(HOME);
    },
  });

  const login = async (input: InputProps) => {
    mutate(input);
    console.log(isError, error);
  };

  return [login, isPending, error];
};
