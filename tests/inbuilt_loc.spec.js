// Built-in Locators====================

import{test,expect} from '@playwright/test';

test("homepage", async({page})=>{

        await page.goto ("https://www.facebook.com/");

// page.getByAltText (locate by text content)
    let logo= await page.getByAltText('Facebook').isVisible();
    console.log(logo);
// getByPlaceholder(locate an input by placeholder)
    let inputbox=await page.getByPlaceholder('Email address or phone number');
    await inputbox.fill("sasi@gmail.com");
    
    await page.getByPlaceholder('Password').fill("admin123");

    // ----to locate by implicit & explicit accessibility attributes
    // page.getByRole()---button, textbox, link, checkbox, heading
// page.getByRole(role, { name: 'Accessible Name' })

    await page.locator('#u_0_n_GT').click();

    await page.waitForTimeout(5000);

// Finds elements by visible text. 
// getByText();
    await expect(await page.getByText(' for a celebrity, brand or business.')).toBeVisible();

//getByTitle (((Finds elements using the title attribute.)))

await page.getByTitle('Tamil').click();

// getByLabel---Used for input fields linked with <label>.
// getByTestId ---Uses data-testid attribute.


})