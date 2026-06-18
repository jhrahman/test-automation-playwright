const {test, expect} = require('@playwright/test')

test('Drag And Drop', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const drag = await page.locator("#draggable")
    const target = await page.locator("#droppable")

    await drag.dragTo(target)
    await expect(page.locator("//p[normalize-space()='Dropped!']")).toHaveText('Dropped!')
    
})