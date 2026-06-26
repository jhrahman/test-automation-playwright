import { test, expect, type Page } from '@playwright/test';

test('Multi-Select DropDown', async ({ page }: { page: Page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#colors").selectOption(['Blue', 'Green', 'Yellow'])

    //validation of count and colors in the dropdown
    await expect(page.locator('#colors option')).toHaveCount(7)

    const expectedColors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Red",
        "White",
        "Green"
    ]
    await expect(page.locator('#colors option')).toHaveText(expectedColors)
    
})