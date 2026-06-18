const {test, expect} = require('@playwright/test')

test('Mouse Hover', async({page})=>{
    await page.goto('https://cartup.com/')
    // await page.locator("//svg[contains(@viewBox,'0 0 24 24')]/ancestor::button").hover()
    await page.getByRole('button', { name: 'Categories' }).hover();
    
    await page.getByRole('paragraph').filter({ hasText: 'Groceries & Essentials' }).hover();

    // await page.waitForTimeout(5000)
})