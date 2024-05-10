import { SERVERS } from '@src/utils/consts/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './use-auth';

interface InputProps {
  username: string;
  password: string;
}

export const useLogin = (): [(input: InputProps) => void, boolean, Error] => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
    // todo: extract
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
        throw new Error('Username or password is not valid');
      }

      return await res.json();
    },
    onSuccess: async (data) => {
      setToken(data.token);
      navigate(SERVERS);
    },
  });

  const login = async (input: InputProps) => {
    mutate(input);
  };

  return [login, isPending, error];
};
