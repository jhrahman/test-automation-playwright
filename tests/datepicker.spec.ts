import { test, expect, type Page } from '@playwright/test';

test.describe('Date Picker Handle', async () => {
    //direct approach in the input box
    test('Date Picker', async ({ page }: { page: Page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#datepicker").fill('06/01/2026') // direct approach with fill

    })

    // handle the calender from calender widget
    test('Date picker from calender Next Arrow', async ({ page }: { page: Page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        const targetYear: string = '2027';
        const targetMonth: string = 'January';
        const targetDate: string = '15';

        await page.locator("#datepicker").click()
        
        while(true)
        {
            const currentYear = await page.locator('.ui-datepicker-year').textContent()
            const currentMonth = await page.locator('.ui-datepicker-month').textContent()
            if( currentYear == targetYear && currentMonth == targetMonth)
            {
                break;
            }
            // await page.locator("//a[@title='Next']").click()
            const current = new Date (`${currentMonth} 1, ${currentYear}`)
            const target = new Date (`${targetMonth} 1, ${targetYear}`)
            if (target>current)
            {
                await page.locator("//a[@title='Next']").click()
            }
            else
            {
                await page.locator("//a[@title='Prev']").click()
            }
             
            
        }
        await page.locator(`//table[contains(@class,'ui-datepicker-calendar')]//td[@data-handler='selectDay']/a[@data-date='${targetDate}']`).click()
        
    })





})