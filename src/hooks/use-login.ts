import { HOME } from '@src/utils/consts/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface InputProps {
  username: string;
  password: string;
}

export const useLogin = (): [(input: InputProps) => void, boolean, Error] => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
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

      if (!res.ok) {
        throw new Error('username or password is not valid');
      }

      return res;
    },
    onSuccess: async (res) => {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      navigate(HOME);
    },
  });

  const login = async (input: InputProps) => {
    mutate(input);
  };

  return [login, isPending, error];
};
