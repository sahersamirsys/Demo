import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';


test('test', async ({ page }) => {

    const userName = "standard_user"
    const password = "secret_sauce"
    const url = "https://www.saucedemo.com/"

await page.goto(url);
const loginPage = new LoginPage(page);
await loginPage.login(userName,password);


});