import {test, expect} from "@playwright/test";
import loginData from "../TestData/dataSet_01.json";

for (const data of loginData) {
  test(`Login with ${data.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(data.username);
    await page.locator('#password').fill(data.password);
    await page.locator('#login-button').click()

    if (data.result === 'success') {
      await expect(page).toHaveURL(/inventory/);
    } 
    else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }
  });
}
