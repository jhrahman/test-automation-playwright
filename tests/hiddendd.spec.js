const {test, expect} = require('@playwright/test')

test('Hidden DropDown Test', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

    //login first
    const username = process.env.TEST_USERNAME
    const password = process.env.TEST_PASSWORD

    await page.getByPlaceholder('Username').fill(username)
    await page.getByPlaceholder('Password').fill(password)

    await page.locator("button[type='submit']").click()

    await expect(page.locator("//h6[normalize-space()='PIM']")).toBeVisible()

    //click on the Job Title dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()

    const options = await page.$$("//div[@role='listbox']//span")
    for(const option of options)
    {
        const jobTitle = await option.textContent()
        if (jobTitle.includes('QA Lead'))
        {
            await option.click()
            break
        }
            
    }

    // click on employee status dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()
    const employeeOptions = await page.$$("//div[@role='listbox']//span")

    for (const option of employeeOptions)
    {
        const employeeStatus = await option.textContent()
        if (employeeStatus.includes('Full-Time Permanent'))
        {
            await option.click()
            break
        }
    }

    //sub unit dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()
    const subUnit = await page.$$("//div[@role='listbox']//span")

    for(const option of subUnit)
    {
        const subUnitPosition = await option.textContent()
        if (subUnitPosition.includes('Technical Support'))
        {
            await option.click()
            break
        }
    }

    // include dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()
    const currentOrpast = await page.$$("//div[@role='listbox']//span")

    for (const option of currentOrpast)
    {
        const employmentStatus = await option.textContent()
        if(employmentStatus.includes('Current and Past Employees'))
        {
            await option.click()
            break
        }
    }

    // job title drop down again
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()
    const employeeTitle = await page.$$("//div[@role='listbox']//span")

    for(const option of employeeTitle)
    {
        const titleofemployee = await option.textContent()
        if(titleofemployee.includes('Support Specialist'))
        {
            await option.click()
            break
        }
    }
    
})