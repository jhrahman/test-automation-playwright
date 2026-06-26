const {test, expect} = require ('@playwright/test')

test('AutoDropDown', async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator("#srcinput").fill('Kolkata')
    await page.waitForSelector("//div[@role='heading'and @style='text-decoration: none;']")
    const city = await page.$$("//div[@role='heading'and @style='text-decoration: none;']")

    for (const options of city)
    {
        const value: string | null = await options.textContent();
        if(value.includes('Pune'))
        {
            await options.click()
            
        }
    }

    await page.locator("#destinput").fill('Delhi')
    await page.waitForSelector("//div[@role='heading'and @style='text-decoration: none;']")
    const destination = await page.$$("//div[@role='heading'and @style='text-decoration: none;']")
    
    for (const dst: ElementHandle of destination)
    {
        const value2: string | null = await dst.textContent();
        if (value2.includes('Nagpur'))
        {
            await dst.click()
        }
    }
})