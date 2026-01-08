import{test, expect} from '@playwright/test';

test("@smoke FacebookSignup" , async({page})=>{

await page.goto("https://www.facebook.com/");

await page.getByTestId("open-registration-form-button").click();


await page.locator('input[name=firstname]').fill("Jake");


await page.locator('input[name=lastname]').fill("sully")

 await page.locator('#day').selectOption("6");
 await page.locator('#month').selectOption({index:9});
 await page.locator('#year').selectOption({value:"2003"});

 await page.locator("input[value='2']").click();

 await page.locator('input[name="reg_email__"]').fill('76589685068');
  

 await page.locator("//button[@class='_6j mvm _6wk _6wl _58mi _3ma _6o _6v']").click();
  
 await expect (page.locator("//div[@class='_5633 _5634 _53ij']")).toHaveText("Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &).");


await page.waitForTimeout(5000);

})