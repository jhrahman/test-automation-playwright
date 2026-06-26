import {test,expect} from '@playwright/test'

test('PopUps', async({context})=>{
    const page = await context.newPage()
    await page.goto('https://testautomationpractice.blogspot.com/')


    await Promise.all([page.waitForEvent('popup'), page.getByRole('button', { name: 'Popup Windows' }).click()])
    
    const allpops = context.pages()
    expect(allpops).toHaveLength(3)

    await expect(allpops[1]).toHaveURL('https://www.selenium.dev/')
    await expect(allpops[1]).toHaveTitle('Selenium')


    await expect(allpops[2]).toHaveURL('https://playwright.dev/')
    await expect(allpops[2]).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
    await allpops[2].locator("//a[normalize-space()='Get started']").click()
    await expect(allpops[2]).toHaveURL('https://playwright.dev/docs/intro')

    
})