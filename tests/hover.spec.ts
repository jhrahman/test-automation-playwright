import { test, expect, type Page } from '@playwright/test';

test('Mouse Hover', async ({ page }: { page: Page }) => {
    await page.goto('https://cartup.com/')
    // await page.locator("//svg[contains(@viewBox,'0 0 24 24')]/ancestor::button").hover()
    await page.getByRole('button', { name: 'Categories' }).hover();
    
    await page.getByRole('paragraph').filter({ hasText: 'Groceries & Essentials' }).hover();

    // await page.waitForTimeout(5000)
})