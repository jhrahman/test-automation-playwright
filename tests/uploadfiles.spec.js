const {test, expect} = require('@playwright/test')

test.describe.serial('Upload Files', async()=>{
    
    test.skip('Single File Upload', async({page})=>{
        await page.goto('https://practice.expandtesting.com/upload')
        await page.locator("#fileInput").setInputFiles('./tests/uploadFiles/cat.jpeg')
        await page.locator("#fileSubmit").click()

        await expect(page.locator("//h1[normalize-space()='File Uploaded!']")).toHaveText('File Uploaded!')

        await page.waitForTimeout(2000)
    })

    test('Multiple File Upload', async({page})=>{
        await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
        await page.locator("#filesToUpload").setInputFiles(['./tests/uploadFiles/cat.jpeg', './tests/uploadFiles/test.jpg'])
        
        await expect(page.locator("#fileList")).toContainText('cat.jpeg', 'test.jpg')
        await page.waitForTimeout(2000)
        //remove input files
        await page.locator("#filesToUpload").setInputFiles([])
        await page.waitForTimeout(2000)
        await expect(page.locator("//li[normalize-space()='No Files Selected']")).toHaveText('No Files Selected')
    })
    

})