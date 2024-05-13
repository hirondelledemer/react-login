import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import * as loginHooks from '@src/hooks/use-login';
import { UseMutationResult } from '@tanstack/react-query';
import { InputProps, UserData } from '@src/utils/types/data';

describe('LoginForm', () => {
  it('should username and password inputs', async () => {
    jest.spyOn(loginHooks, 'useLogin').mockImplementation(
      () =>
        ({
          mutate: jest.fn(),
          isPending: false,
          error: undefined,
        } as unknown as UseMutationResult<UserData, Error, InputProps>),
    );

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

    jest.spyOn(loginHooks, 'useLogin').mockImplementation(
      () =>
        ({
          mutate: loginSpy,
          isPending: false,
          error: undefined,
        } as unknown as UseMutationResult<UserData, Error, InputProps>),
    );

    render(<LoginForm />);

    const userNameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button');

    fireEvent.change(userNameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.submit(loginButton);

    expect(loginSpy).toHaveBeenCalledWith({ username, password });
  });

  describe('loading', () => {
    it('should disable login button', () => {
      jest.spyOn(loginHooks, 'useLogin').mockImplementation(
        () =>
          ({
            mutate: jest.fn(),
            isPending: true,
            error: undefined,
          } as unknown as UseMutationResult<UserData, Error, InputProps>),
      );

      render(<LoginForm />);

      const loginButton = screen.getByRole('button');

      expect(loginButton).toHaveAttribute('disabled');
    });
  });

  describe('errors', () => {
    describe('inputs are empty', () => {
      it('should show "required" error', () => {
        jest.spyOn(loginHooks, 'useLogin').mockImplementation(
          () =>
            ({
              mutate: jest.fn(),
              isPending: false,
              error: undefined,
            } as unknown as UseMutationResult<UserData, Error, InputProps>),
        );

        render(<LoginForm />);

        const loginButton = screen.getByRole('button');
        fireEvent.click(loginButton);

        const usernameError = screen.getByText('Username required');
        const passwordError = screen.getByText('Password required');

        expect(usernameError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
      });
    });

    describe('server error', () => {
      it('should show error message', () => {
        jest.spyOn(loginHooks, 'useLogin').mockImplementation(
          () =>
            ({
              mutate: jest.fn(),
              isPending: false,
              error: new Error('username or password is not valid'),
            } as unknown as UseMutationResult<UserData, Error, InputProps>),
        );

        render(<LoginForm />);

        const errorMessage = screen.getByText(
          'username or password is not valid',
        );
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
