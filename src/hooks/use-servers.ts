import { TOKEN_KEY } from '@src/utils/consts/local-storage';
import { useQuery } from '@tanstack/react-query';
import { useLocalStorage } from './use-local-storage';
import { Server } from '@src/utils/types/data';

const MINS_5 = 1000 * 60 * 5;
const URL = 'https://playground.tesonet.lt/v1/servers';

const fetchServersList = async (token: string) => {
  const res = await fetch(URL, {
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

  return res.json();
};

export const useServersList = () => {
  const [token] = useLocalStorage<string>(TOKEN_KEY, undefined);
  return useQuery<Server[]>({
    queryKey: ['servers'],
    queryFn: () => fetchServersList(token),
    staleTime: MINS_5,
    enabled: !!token,
  });
};
