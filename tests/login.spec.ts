import { test, expect } from '@playwright/test';
import { getDriver } from './driver';
import AxeBuilder from '@axe-core/playwright';

test.describe('Login', () => {
  test.describe('Login page', () => {
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

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    const {
      goto,
      urls: { login },
    } = getDriver({ page });

    await goto(login);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
