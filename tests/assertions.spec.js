const {test, expect} = require('@playwright/test')

test('AssertionPractice',async({page})=>{
     

    //open the app
    await page.goto('https://demoqa.com/text-box')
    

    //assert to have url
    await expect(page).toHaveURL('https://demoqa.com/text-box')

    //assert page title
    await expect(page).toHaveTitle('demosite')

    //assert the locator
    await expect(page.locator("//a[normalize-space()='']//img")).toBeVisible()

    //check full name element is enabled
    await expect(page.locator('#userName')).toBeEnabled()

    await page.goto('https://demoqa.com/radio-button')
    //check element is disabled
    await expect(page.locator("//label[normalize-space()='No']")).toBeDisabled()

    // check element is enabled
    await expect(page.locator("label[for='impressiveRadio']")).toBeEnabled()

    //clcik the element and check if its checked
    await page.locator("label[for='impressiveRadio']").click()
    await expect(page.locator("label[for='impressiveRadio']")).toBeChecked()

    await page.goto('https://demoqa.com/text-box')
    // check the attribute
    await expect(page.locator("#submit")).toHaveAttribute('type','button')
    

})