const {test, expect} = require('@playwright/test')

test('Double Click', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//button[normalize-space()='Copy Text']").dblclick()

    await expect(page.locator("#field2")).toHaveValue('Hello World!')
})