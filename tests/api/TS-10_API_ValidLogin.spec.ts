import {test, expect, request} from '@playwright/test';
import data from '../../src/data/loginData.json';
import { ToolShopApiClient } from '../../src/utils/ToolShopApiClient';

test.describe('API Login', ()=>{
  test('API - Login with valid credentials', async({request})=>{
  
    const tsapi = new ToolShopApiClient(request);
    const email = process.env.USER_EMAIL;
    const password = process.env.USER_PASSWORD;
    console.log(email, password);
    if (!email || !password) {
      throw new Error('Email or password is not set');
    }
    const response = await tsapi.loginApi(email, password);
    const responseBody = await response.json();
  
    await expect(response.status()).toBe(200);
    await expect(responseBody.token_type).toBe('bearer');
})
})
