const {test, expect } = require('@playwright/test')

test('Tables', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator("#productTable")
    // number of columns
    const columns = await table.locator('thead tr th')
    console.log('Number of columns: ',await columns.count())
    //number of rows
    const rows = await table.locator('tbody tr')
    console.log('Number of rows: ', await rows.count())
    //verify the count with front end
    await expect(await columns.count()).toBe(4)
    await expect(await rows.count()).toBe(5)

    // to select specific products
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    }) 
    await matchedRow.locator('input').check()

})