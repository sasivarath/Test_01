import{test,expect } from '@playwright/test';

test ( "launch Browser" , async({page})=>{
    await page.goto ("https://www.facebook.com/");

    const title = await page.title();
    console.log(title);
    
    const url = await page.url();
    console.log(url);
    // ----------

    await page.getByTestId('royal-email').fill('sasi@gmail.com');
    await page.getByTestId("royal-pass").fill('sasi@12345')
})

