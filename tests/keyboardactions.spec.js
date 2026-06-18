const {test, expect} = require('@playwright/test')

test('Keyboard Actions', async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('[name="text1"]').fill('Welcome to the team')
    //select all with Conrol+A
    await page.keyboard.press('Control+A')
    //copy all
    await page.keyboard.press('Control+C')
    // press TAB
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    //paste the copied text Control+V
    await page.keyboard.press('Control+V')

    // await page.waitForTimeout(3000)
})