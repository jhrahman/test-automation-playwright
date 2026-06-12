const {test, expect} = require('@playwright/test');

test('Home Page',async({page})=>{
    //Go the testpage
    await page.goto('https://demoblaze.com/');
    
    //Print the page title
    const pageTitle = page.title();
    console.log('The page title is: ',pageTitle);

    //Validation page title
    await expect(page).toHaveTitle('STORE');
    //Validate the URL
    await expect(page).toHaveURL('https://demoblaze.com/');
    const pageURL = page.url();
    console.log('The page URL is: ',pageURL);

    await page.close();


})