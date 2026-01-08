import {test, expect} from '@playwright/test';
test("@smoke actions", async({page})=>{

await page.goto("https://www.facebook.com/");
await page.getByPlaceholder("Email address or phone number").fill('sasi242');

await page.getByLabel("Email address or phone number").dbclick();

})

test("@regression rightClick" , async({page})=>{

  await page.goto("https://www.google.com/?zx=1766116682114&no_sw_cr=1");
  await page.getByLabel("Gmail ").click({button: "right"});


})

test ("Hover" ,async({page})=>{
await page.goto("https://www.flipkart.com/");
await page.locator("#toast-ctn").hover();

})

test("drag&drop", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator ('#draggable').dragTo(page.locator('#droppable'));

})