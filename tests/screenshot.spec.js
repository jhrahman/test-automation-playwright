import {test, expect} from '@playwright/test'
import fs from 'fs'
import path from 'path'

test.describe.serial('Screenshots', () =>{

    test('Single Screenshot', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.screenshot({path: './tests/screenshots/' + Date.now() + '_newImage.png'})
    })
    test('Full Page Screenshot', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.screenshot({path: './tests/screenshots/' + Date.now() + '_newImage.png',fullPage:true})
    })
    //element screenshot
    test('Element Screenshot', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.locator("#HTML3").screenshot({path: './tests/screenshots/' + Date.now() + '_mouseHover.png'})
    })
    test('Cleanup Screenshot', async () => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        const screenshotsDir = path.resolve('./tests/screenshots')

        const files = fs.readdirSync(screenshotsDir)
        const pngFiles = files.filter(file => file.endsWith('.png'))

        for (const file of pngFiles) {
            fs.unlinkSync(path.join(screenshotsDir, file))
        }

        const remaining = fs.readdirSync(screenshotsDir).filter(f => f.endsWith('.png'))
        expect(remaining.length).toBe(0)
    })

})