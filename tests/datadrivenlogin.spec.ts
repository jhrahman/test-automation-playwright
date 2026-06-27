import { test, expect } from '@playwright/test'
import { loginData } from '../test-data/loginData'

for (const user of loginData) {
    test(`Login test for ${user.username} and ${user.password}`, async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/login')
        await page.locator("#Email").fill(user.username)
        await page.locator("#Password").fill(user.password)
        await page.locator("//input[@value='Log in']").click()

        if (user.shouldLogin === true) {
            await expect(page.locator("//a[normalize-space()='Log out']")).toBeVisible()
            await page.waitForTimeout(3000)
        }
        else {
            await expect(page.locator(".validation-summary-errors")).toContainText(user.errorMessage!)
        }
    })
}