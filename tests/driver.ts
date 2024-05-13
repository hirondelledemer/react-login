import { Page } from '@playwright/test';

export const getDriver = ({ page }: { page: Page }) => {
  const usernameInput = page.getByPlaceholder('username');
  const passwordInput = page.getByPlaceholder('password');
  const serversTitle = page.getByRole('heading', { name: 'Servers' });
  const error = page.getByText('Username or password is not valid');
  const loginButton = page
    .locator('form')
    .getByRole('button', { name: 'Login' });

  return {
    fillUsername: (username: string) => usernameInput.fill(username),
    fillPassword: (password: string) => passwordInput.fill(password),
    serversTitle,
    error,
    clickLogin: () => loginButton.click(),
    goto: (location: string) => page.goto(location),
    vals: {
      username: 'tesonet',
      password: 'partyanimal',
    },
    urls: {
      login: '/login',
      servers: '/servers',
      base: '/',
    },
  };
};
