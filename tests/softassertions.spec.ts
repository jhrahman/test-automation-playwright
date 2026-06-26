import { test, expect, type Page } from '@playwright/test';

test('Soft Asserton', async ({ page }: { page: Page }) => {
    await page.goto('https://www.demoblaze.com')

    //Hard Assertion
    await expect.soft(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com')
    await expect(page.locator('#nava')).toBeVisible()

     
})