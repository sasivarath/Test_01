import{test,expect} from '@playwright/test' ;

test ("homepagesignup",async({page})=>{

await page.goto ("https://www.demoblaze.com/");
await expect(page).toHaveURL ("https://www.demoblaze.com/");
await expect(page).toHaveTitle("STORE");
//     await expect(title).toBe("STORE");

// --------Locators-------single element------------------------------------

let txtcon=await page.locator("//h2[text()='Facebook helps you connect and share with the people in your life.']")
let a =await txtcon.textContent();
console.log(a);

// property---click login button----------------------
await page.locator ("id=login2").click()
// await page.click("id=login2")

// css----username--& password------------ 
// #idvalue,,,  .class,,, htmltag,,, tag[att.name=att.value]----------
let username = await page.locator ('#loginusername');
await username.fill("sasi39@gmail.com");
// await page.locator ('#loginusername').fill('sasi39@gmail.com')
//  await page.fill('#loginusername')
// await page.type('#loginusername')
 await page.fill ("input[id=loginpassword]",'sasi@12345');

//  -------//xpath----click login button------
await page.click('//button[@onclick="logIn()"]');
//await page.click('//h2[text()='Facebook helps you connect and share with the people in your life.']')

let logout = await page.locator('//a[@onclick="logOut()"]');
await expect(logout).toBeVisible();

} )