import React from 'react';
import HeaderLink from './HeaderLink';
import { HOME, LOGIN, SERVERS } from '@src/utils/consts/routes';
import { useAuth } from '@src/hooks/use-auth';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { token } = useAuth();

  const { pathname } = useLocation();

  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
        <HeaderLink href={HOME} active={pathname === HOME}>
          Home
        </HeaderLink>
        {token && (
          <HeaderLink href={SERVERS} active={pathname === SERVERS}>
            Servers
          </HeaderLink>
        )}
        {!token && (
          <HeaderLink href={LOGIN} active={pathname === LOGIN}>
            Login
          </HeaderLink>
        )}
      </div>
    </nav>
  );
};

Header.displayName = 'Header';
export default Header;
