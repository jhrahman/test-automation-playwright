import { test, expect, type Page, type Browser, type Dialog } from '@playwright/test';

let page: Page | undefined;

test.beforeAll(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('test');
    await page.locator('#loginpassword').fill('test');
    await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterAll(async () => {
    if (page) {
        await page.locator('#logout2').click();
    }
});

test('Count Total Cards', async () => {
    if (page) {
        await expect(page.locator('.hrefch')).toHaveCount(9);
    }
});

test('Add Product to cart', async () => {
    if (page) {
        await page.locator("//a[normalize-space()='Nokia lumia 1520']").click();
        await page.locator(" //a[normalize-space()='Add to cart']").click();

        page.on('dialog', async (dialog: Dialog) => {
            await expect(dialog.message()).toContain('Product added.');
            await dialog.accept();
        });
    }
});