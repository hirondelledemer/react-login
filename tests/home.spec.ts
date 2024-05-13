import { test, expect } from '@playwright/test';
import { getDriver } from './driver';
import AxeBuilder from '@axe-core/playwright';

test.describe('Home', () => {
  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    const {
      goto,
      urls: { base },
    } = getDriver({ page });

    await goto(base);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
