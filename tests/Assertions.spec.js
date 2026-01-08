// expect is used for assertions to validate application behavior.

import{test, expect} from '@playwright/test';

test ("assertions", async({page})=>{

await page.goto ("https://letcode.in/radio");
await page.locator("#yes").click();

//to verify that radio button is selected
await expect(page.locator("#yes")).toBeChecked();

//to verify page title
await expect(page).toHaveTitle('/radio buttons/i');

// to verify url
await expect(page).toHaveURL('\radio\i');

// Assertion to verify header Text
await expect(page.locator('//h1[text()=Radio & Checkbox')).toHaveText('Radio & Checkbox');

// to verify visibility of Element
await expect(page.locator("#no").toBeVisible());
// to verify the element is enabled or disabled
await expect (page.getByText("Watch tutorial").toBeEnabled());

await expect (page.getByText("Watch tutorial").toBeDisabled());

// to verify table index attribute of element

await expect (page.getByText("Watch tutorial").toHaveAttribute());

//toHaveCount(6) ----- toBeGreaterThan(5) ----toContainText()  -----toHaveValue("secret123")((((input value))dropdown value))
// toBeHidden()

})