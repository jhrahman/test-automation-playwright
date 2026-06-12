const {test, expect} = require('@playwright/test')

test('Multiple Checkbox Test', async({page})=>{
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox')
    const multibox = [
        "#id_checkboxes_0",
        "#id_checkboxes_1",
        "#id_checkboxes_2"
    ]
    for (const boxes of multibox){
        await page.locator(boxes).check()
    }
    for (const boxes of multibox){
        await expect(page.locator(boxes)).toBeChecked()
    }
    for (const boxes of multibox){
        await page.locator(boxes).uncheck()
        await expect(await page.locator(boxes).isChecked()).toBeFalsy()
    }

})