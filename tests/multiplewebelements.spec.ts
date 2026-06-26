import { test, expect, type Page, type ElementHandle } from '@playwright/test';

test.describe.serial('WebTests', () => {
    //Capture All ancors from the webpage
    test('CaptureWebElements', async ({ page }: { page: Page }) => {
        await page.goto('https://demoblaze.com/index.html');
        const links: ElementHandle[] = await page.$$('a');

        for (const link: ElementHandle of links) {
            const allLinks: string | null = await link.textContent();
            // console.log(allLinks)
        }

    })

    test('CaptureAllProductTittles', async ({ page }: { page: Page }) => {
        const products: ElementHandle[] = await page.$$(
            "//div[@id='tbodyid']//div//h4//a"
        );
        for (const product: ElementHandle of products) {
            const productTitle: string | null = await product.textContent();
            // console.log(productTitle)
        }
    })
})