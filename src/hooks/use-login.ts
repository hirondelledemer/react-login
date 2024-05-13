import { SERVERS } from '@src/utils/consts/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './use-auth';
import { InputProps, UserData } from '@src/utils/types/data';

const URL = 'https://playground.tesonet.lt/v1/tokens';

const fetchLogin = async (params: InputProps) => {
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    throw new Error('Username or password is not valid');
  }

  return res.json();
};

export const useLogin = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  return useMutation<UserData, Error, InputProps>({
    mutationFn: (input) => fetchLogin(input),
    onSuccess: async (data) => {
      setToken(data.token);
      navigate(SERVERS);
    },
  });
};
