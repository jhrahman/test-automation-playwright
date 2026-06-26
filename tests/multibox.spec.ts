import { test, expect, type Page } from '@playwright/test';

test('Multiple Checkbox Test', async ({ page }: { page: Page }) => {
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox')
    const multibox: string[] = [
        '#id_checkboxes_0',
        '#id_checkboxes_1',
        '#id_checkboxes_2',
    ];
    for (const boxes: string of multibox) {
        await page.locator(boxes).check()
    }
    for (const boxes: string of multibox) {
        await expect(page.locator(boxes)).toBeChecked();
    }
    for (const boxes: string of multibox) {
        await page.locator(boxes).uncheck();
        await expect(await page.locator(boxes).isChecked()).toBeFalsy();
    }

})