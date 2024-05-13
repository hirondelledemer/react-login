import { useAuth } from '@src/hooks/use-auth';
import { HOME } from '@src/utils/consts/routes';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = () => {
  const { token } = useAuth();

  return token ? <Navigate to={HOME} /> : <Outlet />;
};
