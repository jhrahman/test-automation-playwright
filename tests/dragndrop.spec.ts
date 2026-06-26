import { test, expect, type Page, type Locator } from '@playwright/test';

test('Drag And Drop', async ({ page }: { page: Page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const drag: Locator = page.locator('#draggable');
    const target: Locator = page.locator('#droppable');

    await drag.dragTo(target)
    await expect(page.locator("//p[normalize-space()='Dropped!']")).toHaveText('Dropped!')
    
})