import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Application: React.FC = () => (
  // todo: consts for paths
  // todo: add error page
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<div>page not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default Application;
