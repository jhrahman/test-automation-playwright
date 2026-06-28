import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is committed */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 3 : 0,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 2 : undefined,

  /* Reporter */
  reporter: [
    ['html'],
    ['allure-playwright'],
    ['list']
  ],

  /* Global timeout */
  timeout: 120000,

  /* Assertion timeout */
  expect: {
    timeout: 20000,
  },

  /* Shared settings */
  use: {
    trace: 'on',

    launchOptions: {
      slowMo: process.env.CI ? 0 : 1000,
    },

    browserName: 'chromium',
    channel: 'chrome',

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 8'],
      },
    },

    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 15 Pro'],
      },
    },
  ],

  /* Local dev server */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});