const {test, expect} = require('@playwright/test')

test('frames', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const allFrames = await page.frames()
    console.log("Number of frames: ",allFrames.length)

    //switch to the frame
    // const frameName = await page.frame('SingleFrame') // switch with frame name
    const frameURL = await page.frame({url: 'https://demo.automationtesting.in/SingleFrame.html'}) //switch with fame url

    await frameURL.locator("input[type='text']").fill('Test')
    
})