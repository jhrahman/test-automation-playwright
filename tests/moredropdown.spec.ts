import { test, expect, type Page } from '@playwright/test';

test('DropwDown', async ({ page }: { page: Page }) => {
    await page.goto('https://demoqa.com/select-menu')
    // await page.locator("#react-select-4-input").click()
    // await page.locator("#react-select-4-input]").selectOption(['Blue','Red'])

await page.locator('#react-select-4-input').fill('Blue');
await page.keyboard.press('Enter');

await page.locator('#react-select-4-input').fill('Red');
await page.keyboard.press('Enter');
})