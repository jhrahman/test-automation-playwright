import { test, expect, type Page } from '@playwright/test';

test('inputboxtest', async ({ page }: { page: Page }) => {
    await page.goto('https://demoqa.com/text-box')
    await page.locator("#userName").fill('Test Engineer')
    await page.locator("#userEmail").fill('test@example.com')
    await page.locator("#currentAddress").fill('this is my current address')
    await page.locator("#permanentAddress").fill('this is my permanent address')
    await page.locator("#submit").click()


    await page.goto('https://demoqa.com/radio-button')
    // check and verify the radio button
    await page.locator("#yesRadio").check()
    await expect(page.locator("#yesRadio")).toBeChecked()
    //verify other radio button isn't checked
    // await page.goto('https://practice.expandtesting.com/radio-buttons')
    await expect(await page.locator("#impressiveRadio").isChecked()).toBeFalsy()

    //multiple checkbox handle
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox')

    const checkboxLocators: string[] = [
        '#id_checkboxes_1',
        '#id_checkboxes_2',
    ];

    for (const checkboxes: string of checkboxLocators) {
        await page.locator(checkboxes).check();
    }

    // verify if these are checked and then uncheck
    for (const checkboxes: string of checkboxLocators) {
        if (await page.locator(checkboxes).isChecked()) {
            await page.locator(checkboxes).uncheck();
        }
    }
    // now verify the unchecks
    for (const checkboxes: string of checkboxLocators) {
        await expect(await page.locator(checkboxes).isChecked()).toBeFalsy();
    }
    

})