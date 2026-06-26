import { test, expect, type Page, type Frame } from '@playwright/test';

test('Nested Frame', async ({ page }: { page: Page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    //frame object approach
    await page.locator("//a[normalize-space()='Iframe with in an Iframe']").click()
    const frameURL: Frame | null = await page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' });
    // await frameURL?.locator("input[type='text']").fill('testeng');

    //nested frame
    if (frameURL) {
        const nestedFrame: Frame[] = frameURL.childFrames();
        await nestedFrame[0].locator("input[type='text']").fill('Nested Frame');
    }

})