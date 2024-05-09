import { useMutation } from '@tanstack/react-query';

interface InputProps {
  username: string;
  password: string;
}

export const useLogin = (): [(input: InputProps) => void, boolean] => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data: InputProps) => {
      const url = 'https://playground.tesonet.lt/v1/tokens';

      return fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },

    onSuccess: async (res) => {
      const data = await res.json();
      console.log(data.token);
      localStorage.setItem('token', data.token);
    },
  });

  const login = async (input: InputProps) => {
    mutate(input);
  };

  return [login, isPending]; // todo: add login
};
