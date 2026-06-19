const {test, expect} = require('@playwright/test')

test('built-inLocators', async({page})=>{
    test.fixme()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //get by altext
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    //get by placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //get by role
    await page.getByRole('button').click()

    //verify dashboard presense after login
    await expect(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible()

    //verify the username
    const userName = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(page.getByText(userName)).toBeVisible()

    

})