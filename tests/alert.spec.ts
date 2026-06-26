import { test, expect, type Page, type Dialog } from '@playwright/test';

test.describe.serial('Alerts Tests', async () => {
    // normal alert handler
    test('Alerts with OK', async ({ page }: { page: Page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        page.on('dialog', async (dialog: Dialog) => {
            expect(dialog.type()).toContain("alert");
            expect(dialog.message()).toContain("I am an alert box!");
            await dialog.accept();
        });
        await page.locator("#alertBtn").click();
    });
    // confimation alert handler
    test('Confirmation Alert with OK', async ({ page }: { page: Page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        page.on('dialog', async (dialog: Dialog) => {
            expect(dialog.type()).toContain("confirm");
            expect(dialog.message()).toContain("Press a button!");
            await dialog.accept();
        });
        await page.locator("#confirmBtn").click();
        await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    });

    // prompt alert handler
    test('Prompt Alert', async ({ page }: { page: Page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        const randomName: string = Array.from({ length: 6 }, () =>
            String.fromCharCode(97 + Math.floor(Math.random() * 26)),
        ).join('');
        page.on('dialog', async (dialog: Dialog) => {
            expect(dialog.type()).toContain("prompt");
            expect(dialog.message()).toContain("Please enter your name:");
            expect(dialog.defaultValue()).toContain("Harry Potter");
            await dialog.accept(randomName);
        });
        await page.locator("#promptBtn").click()
        await expect(page.locator("#demo")).toHaveText(`Hello ${randomName}! How are you today?`)
    });
});
