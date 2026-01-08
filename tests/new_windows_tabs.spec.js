import {test, expect} from '@playwright/test'
test('tabs&windows', async({page})=>{

const context =  page.context();
const page1= await context.newPage();

await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.goto('https://www.saucedemo.com/')
// capture new tab
const [childTab] = await Promise.all([
    context.waitForEvent('page'),
    page1.getByText('OrangeHRM, Inc').click()
  ]);

await childTab.waitForLoadState();

  await page.bringToFront();


await page.pause()
})