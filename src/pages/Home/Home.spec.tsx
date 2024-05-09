import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import * as authHooks from '@src/hooks/use-auth';

describe('Home', () => {
  describe('user is logged in', () => {
    it('should not show login button', async () => {
      jest
        .spyOn(authHooks, 'useAuth')
        .mockImplementation(() => ({ token: 'token', setToken: jest.fn() }));

      // todo: consider exporting browserRouter to utils folder
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      );

      expect(
        screen.queryByRole('button', { name: /login/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('user not is logged in', () => {
    it('should show login button', async () => {
      jest
        .spyOn(authHooks, 'useAuth')
        .mockImplementation(() => ({ token: undefined, setToken: jest.fn() }));

      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      );

      expect(
        screen.getByRole('button', { name: /login/i }),
      ).toBeInTheDocument();
    });
  });
});
