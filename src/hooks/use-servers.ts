import { TOKEN_KEY } from '@src/utils/consts/local-storage';
import { useQuery } from '@tanstack/react-query';

export function getToken(): string | undefined {
  const token = localStorage.getItem(TOKEN_KEY);
  return token || undefined;
}

// todo: clean
export const fetchServersList = async () => {
  console.log('fetching');
  const token = getToken();
  const res = await fetch('https://playground.tesonet.lt/v1/servers', {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    console.log('I am here');
    // throw new Error('Network response was not ok');
    return "new Error('Network response was not ok')";
  }
  console.log('res', res);
  const data = await res.json();
  console.log(data);

  return data;
};

export const useServersList = () => {
  return useQuery({ queryKey: ['servers'], queryFn: fetchServersList });
};
