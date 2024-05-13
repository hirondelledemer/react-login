import { test, expect } from '@playwright/test';
import { AppDriver } from './utils/driver';
import { urls, USER } from './utils/data';

test.describe('Servers', () => {
  test.describe('user logged in', () => {
    test('user should see servers when logged in', async ({ page }) => {
      const loginPage = new AppDriver(page);

      await loginPage.mockServersData();

      await loginPage.goto(urls.LOGIN);
      await loginPage.fillUsername(USER.USERNAME);
      await loginPage.fillPassword(USER.PASSWORD);
      await loginPage.clickLoginButton();

      await expect(page).toHaveURL(urls.SERVERS);
    });
  });

  test.describe('user is not logged in', () => {
    test('user should be redirected to login page', async ({ page }) => {
      const loginPage = new AppDriver(page);

      await loginPage.goto(urls.SERVERS);

      await expect(page).toHaveURL(urls.LOGIN);
    });
  });
});
