import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import * as loginHooks from '@src/hooks/use-login';

describe('Login', () => {
  it('should username and password inputs', async () => {
    jest
      .spyOn(loginHooks, 'useLogin')
      .mockImplementation(() => [jest.fn(), false, undefined]);

    render(<LoginForm />);

    const userNameInput = screen.getByRole('textbox', { name: /username/i });
    // currently password input has no role: issue for reference:
    // https://github.com/testing-library/dom-testing-library/issues/1128
    const passwordInput = document.querySelector('input[type="password"]');

    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should call login function with form params', async () => {
    const username = 'user';
    const password = 'pass';

    const loginSpy = jest.fn();
    jest
      .spyOn(loginHooks, 'useLogin')
      .mockImplementation(() => [loginSpy, false, undefined]);

    render(<LoginForm />);

    const userNameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = document.querySelector('input[type="password"]');
    const loginButton = screen.getByRole('button');

    fireEvent.change(userNameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.submit(loginButton);

    expect(loginSpy).toHaveBeenCalledWith({ username, password });
  });

  describe('loading', () => {
    it('should disable login button', () => {
      jest
        .spyOn(loginHooks, 'useLogin')
        .mockImplementation(() => [jest.fn(), true, undefined]);

      render(<LoginForm />);

      const loginButton = screen.getByRole('button');

      expect(loginButton).toHaveAttribute('disabled');
    });
  });

  describe('errors', () => {
    describe('inputs are empty', () => {
      it('should show "please fill username and password" error', () => {
        // todo: think the best way to handle this
      });
    });

    describe('server error', () => {
      it('should show error message', () => {
        jest
          .spyOn(loginHooks, 'useLogin')
          .mockImplementation(() => [
            jest.fn(),
            false,
            new Error('username or password is not valid'),
          ]);

        render(<LoginForm />);

        const errorMessage = screen.getByText(
          'username or password is not valid',
        );
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
