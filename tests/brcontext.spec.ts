import {test,expect} from '@playwright/test'

test('Browser Context', async({context})=>{
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto('https://playwright.dev/')
    await expect(page1).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')

    await page2.goto('https://www.selenium.dev/')
    await expect(page2).toHaveTitle('Selenium')
})