import { test, expect } from '@playwright/test';
import { ToolShopApiClient } from '../../src/utils/ToolShopApiClient';

test.describe('API Login', () => {
  test('API - Login with valid credentials', async ({ request }) => {
    const email = process.env.USER_EMAIL;
    const password = process.env.USER_PASSWORD;
    if (!email || !password) {
      throw new Error('USER_EMAIL and USER_PASSWORD must be set in .env');
    }

    const tsapi = new ToolShopApiClient(request);
    const response = await tsapi.loginApi(email, password);
    const responseBody = await response.json();

    await expect(response).toBeOK();
    await expect(responseBody.token_type).toBe('bearer');
    expect(responseBody.access_token).toBeTruthy();
  });
});
