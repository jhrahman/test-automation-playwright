import { test, expect, type Page, type Frame } from '@playwright/test';

test('frames', async ({ page }: { page: Page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html');
    const allFrames: Frame[] = page.frames();
    console.log('Number of frames: ', allFrames.length);

    //switch to the frame
    // const frameName = await page.frame('SingleFrame') // switch with frame name
    const frameURL: Frame | null = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' }); //switch with fame url

    if (frameURL) {
        await frameURL.locator("input[type='text']").fill('Test');
    }
    
})