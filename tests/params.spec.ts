import { test, expect } from '@playwright/test'


const searchItems: string[] = ["laptop", "gift card", "smartphone"] //search data


test.describe.serial('Searching Items', async () => {

    //first approach
    for (const item of searchItems) {
        test(`search items ${item}`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/')
            await page.locator('#small-searchterms').fill(item)
            await page.getByRole('button', { name: 'Search' }).click()
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(new RegExp(item, 'i'))
        })
    }

    //second approach
    searchItems.forEach((item) => {
        test(`searching items ${item}`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/')
            await page.locator('#small-searchterms').fill(item)
            await page.getByRole('button', { name: 'Search' }).click()
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(new RegExp(item, 'i'))
        })
    })


})