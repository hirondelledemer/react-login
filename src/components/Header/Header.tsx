import React from 'react';
import HeaderLink from './HeaderLink';
import { HOME, LOGIN, SERVERS } from '@src/utils/consts/routes';
import { useAuth } from '@src/hooks/use-auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { token, setToken } = useAuth();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className='bg-white shadow '>
      <div className='container flex items-center justify-center p-6 mx-auto text-gray-600'>
        <HeaderLink onClick={() => navigate(HOME)} active={pathname === HOME}>
          Home
        </HeaderLink>
        {token && (
          <HeaderLink
            onClick={() => navigate(SERVERS)}
            active={pathname === SERVERS}
          >
            Servers
          </HeaderLink>
        )}
        {!token && (
          <HeaderLink
            onClick={() => navigate(LOGIN)}
            active={pathname === LOGIN}
          >
            Login
          </HeaderLink>
        )}
        {token && (
          <HeaderLink
            onClick={() => {
              navigate(LOGIN);
              setToken(undefined);
            }}
          >
            Logout
          </HeaderLink>
        )}
      </div>
    </nav>
  );
};

Header.displayName = 'Header';
export default Header;
