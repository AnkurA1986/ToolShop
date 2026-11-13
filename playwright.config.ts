import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        baseURL : process.env.BASE_URL,
        headless: false,
        viewport: null,
        launchOptions: {args: ['--start-maximized'],
        },
      },
    },

    // {
    //   name: 'api-setup',
    //   testMatch: /API_UserRegistration\.spec\.ts/,
    // },

    // {
    //   name: 'api',
    //   testMatch: /tests\/api\/.*\.spec\.ts/,
    //   testIgnore: /API_UserRegistration\.spec\.ts/,
    //   dependencies: ['api-setup'],
    // },
    
],
});
