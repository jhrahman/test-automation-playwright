const {test, expect} = require('@playwright/test')

test.describe.serial('WebTests', ()=>{
    //Capture All ancors from the webpage
    test('CaptureWebElements', async({page})=>{
        await page.goto('https://demoblaze.com/index.html')
        const links = await page.$$('a')

        for(const link of links)
        {
            const allLinks = await link.textContent()
            // console.log(allLinks)
        }

    })

    test('CaptureAllProductTittles', async({page})=>{
        const products = await page.$$("//div[@id='tbodyid']//div//h4//a")
        for (const product of products)
        {
            const productTitle = await product.textContent()
            // console.log(productTitle)
        }
    })
})