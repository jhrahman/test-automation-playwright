import {test, expect} from '@playwright/test'

test('Authenticated Popup',async({browser})=>{
    const context = await browser.newContext({httpCredentials:{
        username: 'admin',
        password: 'admin'
    }})
    const page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/basic_auth')

    expect(page.locator("//p[contains(text(),'Congratulations! You must have the proper credenti')]")).toHaveText('Congratulations! You must have the proper credentials.')



})