import { test, expect } from '@playwright/test'

test('tabs handling', async ({ context }) => {

    const page1 = await context.newPage()
    await page1.goto('https://testautomationpractice.blogspot.com/')


    const [page2] = await Promise.all([context.waitForEvent('page'), (await page1).getByRole('button', { name: 'New Tab' }).click()])
    const pages = context.pages()
    expect(pages).toHaveLength(2) //verify 2 pages/tabs are opened


    //switch pages with index
    expect(pages[0]).toHaveURL('https://testautomationpractice.blogspot.com/')
    expect(pages[0]).toHaveTitle('Automation Testing Practice')

    expect(pages[1]).toHaveURL('https://www.pavantestingtools.com/')
    expect(pages[1]).toHaveTitle('SDET-QA Blog')

})