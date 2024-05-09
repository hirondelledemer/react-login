import { TOKEN_KEY } from '@src/utils/consts/local-storage';
import { useQuery } from '@tanstack/react-query';
import { useLocalStorage } from './use-local-storage';

export interface Server {
  name: string;
  distance: number;
}

export const fetchServersList = async (token: string) => {
  const res = await fetch('https://playground.tesonet.lt/v1/servers', {
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
