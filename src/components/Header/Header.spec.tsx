import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import * as authHooks from '@src/hooks/use-auth';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

describe('HeaderLink', () => {
  describe('user is logged in', () => {
    it('should home/servers/logout buttons', async () => {
      jest
        .spyOn(authHooks, 'useAuth')
        .mockImplementation(() => ({ token: 'token', setToken: jest.fn() }));

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      expect(
        screen.queryByRole('button', { name: /home/i }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /servers/i }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /logout/i }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /login/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('user not is logged in', () => {
    it('should show home/login buttons', async () => {
      jest
        .spyOn(authHooks, 'useAuth')
        .mockImplementation(() => ({ token: undefined, setToken: jest.fn() }));

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      expect(
        screen.queryByRole('button', { name: /home/i }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /servers/i }),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /logout/i }),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /login/i }),
      ).toBeInTheDocument();
    });
  });
});
