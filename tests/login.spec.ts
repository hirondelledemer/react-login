import { test, expect } from '@playwright/test';
import { getDriver } from './driver';

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
