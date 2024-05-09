import { useAuth } from '@src/hooks/use-auth';
import { LOGIN } from '@src/utils/consts/routes';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to={LOGIN} />;
};
