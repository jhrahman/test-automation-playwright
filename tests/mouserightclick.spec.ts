import { test, expect, type Page } from '@playwright/test';

test('Mouse Right CLick', async ({ page }: { page: Page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html')

    await page.locator("//span[@class='context-menu-one btn btn-neutral']").click({button: 'right'})
    await expect(page.locator("//span[normalize-space()='Copy']")).toBeVisible()
    // const text = await page.locator("//span[normalize-space()='Copy']").textContent()
    // console.log(text)
    
    // await page.waitForTimeout(3000)

})