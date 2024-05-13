import { test, expect } from '@playwright/test';
import { AppDriver } from './utils/driver';
import AxeBuilder from '@axe-core/playwright';
import { urls } from './utils/data';

test.describe('Home', () => {
  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    const loginPage = new AppDriver(page);

    await loginPage.goto(urls.BASE);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
