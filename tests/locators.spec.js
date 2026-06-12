const {test, expect} = require('@playwright/test');

test('Locators', async({page})=>{
    await page.goto('https://demoblaze.com')

    //click on login button
    // await page.locator('id=login2').click();

    await page.click('id=login2')
    //provide username
    await page.fill('#loginusername','test')
    //provide password
    await page.fill('#loginpassword','test')
    //login button
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presense
    const logOut = await page.locator("//a[@id='logout2']")
    await expect(logOut).toBeVisible();

    //close browser
    await page.close()
})