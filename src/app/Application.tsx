import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import Servers from '@src/pages/Severs';
import { HOME, LOGIN, SERVERS } from '@src/utils/consts/routes';
import '../index.css';
import NotFound from '@src/pages/NotFound';

const Application: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path={SERVERS} element={<Servers />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Application;
