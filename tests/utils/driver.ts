import { Page, Locator } from '@playwright/test';
import { mockData } from './server-mock-data';

export class AppDriver {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly serversTitle: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('username');
    this.passwordInput = page.getByPlaceholder('password');
    this.loginButton = page
      .locator('form')
      .getByRole('button', { name: 'Login' });
    this.serversTitle = page.getByRole('heading', { name: 'Servers' });
    this.error = page.getByText('Username or password is not valid');
  }

  async goto(value: string) {
    await this.page.goto(value);
  }

  fillUsername(value: string) {
    return this.usernameInput.fill(value);
  }

  fillPassword(value: string) {
    return this.passwordInput.fill(value);
  }

  clickLoginButton() {
    return this.loginButton.click();
  }

  async mockServersData() {
    await this.page.route('*/**/v1/servers', async (route) => {
      await route.fulfill({ json: mockData });
    });
  }
}
