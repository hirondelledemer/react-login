import { test, expect, Page } from '@playwright/test';

test.describe('Login', () => {
  test.describe('happy path', () => {
    test('user logs in', async ({ page }) => {
      const { vals, urls, serversTitle, ...driver } = getDriver({ page });

      await driver.goto(urls.login);

      await expect(page).toHaveScreenshot('login-page.png');

      await driver.fillUsername(vals.username);
      await driver.fillPassword(vals.password);
      await driver.clickLogin();

      await expect(page).toHaveURL(urls.servers);
      await expect(serversTitle).toBeVisible();
    });
  });

  test.describe('errors', () => {
    test('password is incorrect', async ({ page }) => {
      const { vals, urls, error, ...driver } = getDriver({ page });
      await driver.goto(urls.login);

      await driver.fillUsername(vals.username);
      await driver.fillPassword('incorrect');
      await driver.clickLogin();

      await expect(error).toBeVisible();
      await expect(page).toHaveURL(urls.login);
      await expect(page).toHaveScreenshot('login-error-bad-password.png');
    });
  });
});

const getDriver = ({ page }: { page: Page }) => {
  const usernameInput = page.getByPlaceholder('username');
  const passwordInput = page.getByPlaceholder('password');
  const serversTitle = page.getByText('servers');
  const error = page.getByText('Username or password is not valid');
  const loginButton = page.getByRole('button', { name: 'Login' });

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
