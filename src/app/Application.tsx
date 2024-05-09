import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import Servers from '@src/pages/Severs';
import { HOME, LOGIN, SERVERS } from '@src/utils/consts/routes';

const Application: React.FC = () => (
  // todo: add error page
  <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path={SERVERS} element={<Servers />} />
      </Route>
      <Route path='*' element={<div>page not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default Application;
