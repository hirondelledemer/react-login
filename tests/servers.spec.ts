import { test, expect } from '@playwright/test';
import { mockData } from './login.mocks';
import { getDriver } from './driver';

test.describe('Servers', () => {
  test.describe('user logged in', () => {
    test('user should see servers when logged in', async ({ page }) => {
      await page.route('*/**/v1/servers', async (route) => {
        await route.fulfill({ json: mockData });
      });

      const { vals, urls, serversTitle, ...driver } = getDriver({ page });

      await driver.goto(urls.login);

      await driver.fillUsername(vals.username);
      await driver.fillPassword(vals.password);
      await driver.clickLogin();

      await expect(page).toHaveURL(urls.servers);
      await expect(serversTitle).toBeVisible();
      await expect(page).toHaveScreenshot('servers-page.png');
    });
  });

  test.describe('user is not logged in', () => {
    test('password is incorrect', async ({ page }) => {
      const { vals, urls, error, ...driver } = getDriver({ page });
      await driver.goto(urls.servers);

      await expect(page).toHaveURL(urls.login);
    });
  });
});
