import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15 Pro'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('test');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#logout2')).toContainText('Log out');
});