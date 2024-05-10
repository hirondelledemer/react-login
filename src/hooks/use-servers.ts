import { TOKEN_KEY } from '@src/utils/consts/local-storage';
import { useQuery } from '@tanstack/react-query';
import { useLocalStorage } from './use-local-storage';
import { Server } from '@src/utils/types/servers';

const fetchServersList = async (token: string) => {
  const url = 'https://playground.tesonet.lt/v1/servers';
  const res = await fetch(url, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    if (res.status === 401) {
      throw new Error('unauthorized');
    }
    throw new Error('oops, something went wrong');
  }

  const data = await res.json();

  return data;
};

export const useServersList = () => {
  const [token] = useLocalStorage<string>(TOKEN_KEY, undefined);
  return useQuery<Server[]>({
    queryKey: ['servers'],
    queryFn: () => fetchServersList(token),
    enabled: !!token,
  });
};
