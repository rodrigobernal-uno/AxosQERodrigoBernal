import { test, expect } from '@playwright/test';

test('Validate login elements are loaded correctly in the page', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');


    const swagLabsTitle = page.locator(".login_logo");
    const usernameFiled = page.locator("#user-name");
    const loginButton = page.locator("#login-button");

    await expect(swagLabsTitle).toBeVisible();
    await expect(usernameFiled).toBeEditable();
    await expect(loginButton).toBeEnabled();

})