import{test, expect} from "@playwright/test";

test("Negative username test", async({page})=>{
    
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill('visual_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect (page.getByText('Products')).toBeVisible();
    await page.locator('.product_sort_container').selectOption("Price (low to high)");

    await page.locator('#add-to-cart-sauce-labs-bike-light').click()
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await page.locator('.shopping_cart_link').click()

    await expect (page.getByText('Your Cart')).toBeVisible();

    await page.locator('#checkout').click()

    await page.locator('#first-name').fill('Jake')
    await page.locator('#last-name').fill('sully')
    await page.locator('#postal-code').fill('626101')
    await page.locator('#continue').click();
    //to get prices from items
const itemprices=await page.locator('.inventory_item_price').allTextContents();
// to get total 
let sum=0;
for (let prices of itemprices){
    
    sum+=Number(prices.replace('$',''));
}
console.log(sum);
//to   get   displayed  item_total 
let a=await page.locator('.summary_subtotal_label').textContent()

const itemtotal=Number(a.replace('Item total: $',''));
console.log(itemtotal);

//assertion to check total
await expect(sum).toBe(itemtotal);

//finish 

await page.locator('//button[@data-test="finish"]').click();

 const process=await expect (page.locator("//h2[text()='Thank you for your order!']")).toBeVisible();
  
     console.log("Order Placed Successfully");
    

})