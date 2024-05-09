import { TOKEN_KEY } from '@src/utils/consts/local-storage';
import { useLocalStorage } from './use-local-storage';

export const useAuth = () => {
  const [token, setToken] = useLocalStorage<string>(TOKEN_KEY, undefined);

  return { token, setToken };
};
