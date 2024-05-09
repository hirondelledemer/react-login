import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import * as authHooks from '@src/hooks/use-auth';
import Header from './Header';

describe('HeaderLink', () => {
  describe('user is logged in', () => {
    it('should not show login button', async () => {
      jest
        .spyOn(authHooks, 'useAuth')
        .mockImplementation(() => ({ token: 'token', setToken: jest.fn() }));

      render(<Header />);
      screen.logTestingPlaygroundURL();

      expect(
        screen.queryByRole('link', { name: /login/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('user not is logged in', () => {
    it('should show login button', async () => {
      jest
        .spyOn(authHooks, 'useAuth')
        .mockImplementation(() => ({ token: undefined, setToken: jest.fn() }));

      render(<Header />);

      expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
    });
  });
});
