import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

interface CsvLoginData {
  username: string;
  password: string;
  shouldLogin: string; // CSV values are strings
  errorMessage?: string;
}

//Reading data from CSV
const csvPath = path.join(__dirname, '../test-data/loginData.csv')
const fileContent = fs.readFileSync(csvPath, 'utf-8')

const records = parse<CsvLoginData>(fileContent,
    {
        columns: true,
        skip_empty_lines: true
    }
)
//-------------------------------------------------------------

for (const data of records) {
    test(`Login test for ${data.username} and ${data.password}`, async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/login')
        await page.locator("#Email").fill(data.username)
        await page.locator("#Password").fill(data.password)
        await page.locator("//input[@value='Log in']").click()

        if (data.shouldLogin === 'true') {
            await expect(page.locator("//a[normalize-space()='Log out']")).toBeVisible()
            await page.waitForTimeout(3000)
        }
        else {
            await expect(page.locator(".validation-summary-errors")).toContainText(data.errorMessage!)
        }
    })
}