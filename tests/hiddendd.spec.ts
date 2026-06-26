import { test, expect, type Page, type ElementHandle } from '@playwright/test';

test('Hidden DropDown Test', async ({ page }: { page: Page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

    //login first
    const username: string | undefined = process.env.TEST_USERNAME;
    const password: string | undefined = process.env.TEST_PASSWORD;

    await page.getByPlaceholder('Username').fill(username || '');
    await page.getByPlaceholder('Password').fill(password || '');

    await page.locator("button[type='submit']").click();

    await expect(page.locator("//h6[normalize-space()='PIM']")).toBeVisible();

    //click on the Job Title dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();

    const options: ElementHandle[] = await page.$$("//div[@role='listbox']//span");
    for (const option: ElementHandle of options) {
        const jobTitle: string | null = await option.textContent();
        if (jobTitle?.includes('QA Lead')) {
            await option.click();
            break;
        }
    }

    // click on employee status dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();
    const employeeOptions: ElementHandle[] = await page.$$("//div[@role='listbox']//span");

    for (const option: ElementHandle of employeeOptions) {
        const employeeStatus: string | null = await option.textContent();
        if (employeeStatus?.includes('Full-Time Permanent')) {
            await option.click()
            break
        }
    }

    //sub unit dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();
    const subUnit: ElementHandle[] = await page.$$("//div[@role='listbox']//span");

    for (const option: ElementHandle of subUnit) {
        const subUnitPosition: string | null = await option.textContent();
        if (subUnitPosition?.includes('Technical Support')) {
            await option.click();
            break;
        }
    }

    // include dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();
    const currentOrpast: ElementHandle[] = await page.$$("//div[@role='listbox']//span");

    for (const option: ElementHandle of currentOrpast) {
        const employmentStatus: string | null = await option.textContent();
        if (employmentStatus?.includes('Current and Past Employees')) {
            await option.click();
            break;
        }
    }

    // job title drop down again
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
    const employeeTitle: ElementHandle[] = await page.$$("//div[@role='listbox']//span");

    for (const option: ElementHandle of employeeTitle) {
        const titleofemployee: string | null = await option.textContent();
        if (titleofemployee?.includes('Support Specialist')) {
            await option.click();
            break;
        }
    }
    
})