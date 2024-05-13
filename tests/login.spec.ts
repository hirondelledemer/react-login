import { test, expect } from '@playwright/test';
import { AppDriver } from './utils/driver';
import AxeBuilder from '@axe-core/playwright';
import { urls, USER } from './utils/data';

test.describe('Login', () => {
  test('user should log in with right credentials', async ({ page }) => {
    const loginPage = new AppDriver(page);

    await loginPage.goto(urls.LOGIN);

    await expect(page).toHaveScreenshot('login-page.png');

    await loginPage.fillUsername(USER.USERNAME);
    await loginPage.fillPassword(USER.PASSWORD);
    await loginPage.clickLoginButton();

    await expect(page).toHaveURL(urls.SERVERS);
    await expect(loginPage.serversTitle).toBeVisible();
  });

  test.describe('password is incorrect', () => {
    test('should show error', async ({ page }) => {
      const loginPage = new AppDriver(page);

      await loginPage.goto(urls.LOGIN);
      await loginPage.fillUsername(USER.USERNAME);
      await loginPage.fillPassword('incorrect');
      await loginPage.clickLoginButton();

      await expect(loginPage.error).toBeVisible();
      await expect(page).toHaveURL(urls.LOGIN);
      await expect(page).toHaveScreenshot('login-error-bad-password.png');
    });
  });

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    const loginPage = new AppDriver(page);

    await loginPage.goto(urls.LOGIN);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
