const {test, expect} = require('@playwright/test')

test('Drop Down Practice', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator("#country").selectOption({label:'Japan'}) //label dropdown
    // await page.locator("#country").selectOption('India') //visible text
    // await page.locator("#country").selectOption({value: 'uk'}) //value attribute 

    //assertions
    await expect(page.locator('#country option')).toHaveCount(10)

    const options = page.locator('#country option');

await expect(options).toHaveText([
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
    'Japan',
    'China',
    'Brazil',
    'India'
]);



})