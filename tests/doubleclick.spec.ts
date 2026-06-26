import { test, expect, type Page } from '@playwright/test';

test('Double Click', async ({ page }: { page: Page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//button[normalize-space()='Copy Text']").dblclick()

    await expect(page.locator("#field2")).toHaveValue('Hello World!')
})