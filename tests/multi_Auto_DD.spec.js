import { test, expect } from '@playwright/test';

test("multipleDropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator('#colors').selectOption(['Red', 'Blue', 'Yellow']);

  // assertion (check num of options)

  const options =await page.locator('#colors option')
  await expect (options).toHaveCount(7);

//   check num of option using JS array

const menu=await page.$$("#colors option");
console.log("num of options ",menu.length);

for (let option of menu)
{
    let text = await option.textContent();
    console.log(text);
    
}
await expect(option).toHaveLength(7);

await page.waitForTimeout(5000);

})

// AUTO DROP_DOWN===============================================================
test("AutoDropdown", async ({ page }) => {
await page.goto("https://www.redbus.in/")

await page.locator('.inputWrapper___2beb80').fill('chennai');




})


// test ("keyandshortcut" , async({page})=>{

// await page.goto("https://www.facebook.com/");
// await page.locator("#email").fill("sasi242");

// await page.locator("#pass").pressSequentially("sasi@12345");

// .press("enter");
// .press("control+Arrowright");
// .press("textbox").press("$"); 
//  })