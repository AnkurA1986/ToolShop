import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ToolShopApiClient {
  constructor(private readonly request: APIRequestContext) {}

  loginApi(email: string, password: string): Promise<APIResponse> {
    const baseUrl = process.env.API_URL;
    if (!baseUrl) {
      throw new Error('API_URL is not set');
    }
    const url = new URL('users/login', baseUrl).toString();
    return this.request.post(url, {
      data: { email, password },
    });
  }
}
