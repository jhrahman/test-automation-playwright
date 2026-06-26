import { test, expect, type Page } from '@playwright/test';

test('Home Page', async ({ page }: { page: Page }) => {
    //Go the testpage
    await page.goto('https://demoblaze.com/');
    
    //Print the page title
    const pageTitle: string = await page.title();
    console.log('The page title is: ', pageTitle);

    //Validation page title
    await expect(page).toHaveTitle('STORE');
    //Validate the URL
    await expect(page).toHaveURL('https://demoblaze.com/');
    const pageURL: string = page.url();
    console.log('The page URL is: ', pageURL);

    await page.close();


})