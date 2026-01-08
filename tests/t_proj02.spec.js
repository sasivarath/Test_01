import{test, expect} from "@playwright/test";

test("AmazonCart", async({page})=>{
await page.goto("https://www.amazon.in/");

await page.locator('[id="twotabsearchtextbox"]').fill('mobile');
await page.locator('#nav-search-submit-button').click();
//store Brand list and select
await page.locator('[aria-label="See more, Brands"]').click();
const brands = page.locator('[id^="p_123/"] span.a-list-item');
await brands.filter({ hasText: 'Samsung' }).click();
// slider price range
const lowerbound= page.locator('[id="p_36/range-slider_slider-item_lower-bound-slider"]');
const upperbound= page.locator('[id="p_36/range-slider_slider-item_upper-bound-slider"]');
const lowerlabel=page.locator('[class="a-form-label sf-range-slider-label sf-lower-bound-label"]');
const upperlabel=page.locator('[class="a-form-label sf-range-slider-label sf-upper-bound-label"]');
await upperbound.focus()
let uppertext=await upperlabel.innerText()
while(!uppertext.trim().includes('₹16,')) {
  await upperbound.press('ArrowLeft');
uppertext=await upperlabel.innerText()
  if(uppertext.includes('₹15,'))
    break;
}
await lowerbound.focus()
let lowertext=await lowerlabel.innerText();
while(!lowertext.trim().includes('₹10,')) {
  await lowerbound.press('ArrowRight');
lowertext=await lowerlabel.innerText()
  if(lowertext.includes('₹11,'))
    break;
}
// assertion for price between 10000-16000
await page.waitForTimeout(5000)

const prices = await page.locator('[data-component-type="s-search-result"] .a-price-whole').allTextContents();

for (const text of prices) {
  const amount = parseInt(text.replace(/,/g, ''));
  if (!isNaN(amount)) {
    expect(amount).toBeGreaterThanOrEqual(10999);
    expect(amount).toBeLessThanOrEqual(16999);
    
  }
}
console.log("1)Assertion completed for price check");
console.log("----------------------------------");

// to get product and price
// // store all list of items)
const list=await page.locator('[data-component-type="s-search-result"]');
   await page.waitForTimeout(5000);
 const results=await list.allTextContents();
 const count = await list.count();
   console.log(count);
// // to get name and price
for (let i = 0; i < count; i++) {
  let productname= await list.nth(i).locator('h2 span').innerText();
  let price=await list.nth(i).locator('.a-price-whole').first().innerText();
console.log(`ProductName: ${productname}`);
  console.log(`Price: ₹${price}`);
}
// capture the productname from list

const products = page.locator('h2[class="a-size-medium a-spacing-none a-color-base a-text-normal"]');

const secondProduct = products.nth(0).click()

// open new tab
// const [newTab] = await Promise.all([page.context()
//   .waitForEvent('page'),
//   secondProduct.locator('h2 a').first().click()]);
// await newTab.waitForSelector('#productTitle');
// ADD to Cart
// wait for product page
// await productPage.waitForSelector('#productTitle');

await productPage.locator('[data-action="a-dropdown-button"]').click();
await productPage .locator('.a-popover-inner').getByText('2', { exact: true }).click();
await productPage.locator('input[aria-labelledby="submit.add-to-cart-announce"]').nth(1).click();

// PRICE check
// single item price
const priceText = await productPage.locator('.a-price-whole').first().innerText();
const singlePrice = parseInt(priceText.replace(/,/g, ''));
// go to cart
await productPage.locator('#nav-cart').click();
// get subtotal
const subtotalText = await productPage.locator('#sc-subtotal-amount-activecart .a-price-whole').innerText();
const subtotal = parseInt(subtotalText.replace(/,/g, ''));
// assertion
expect(subtotal).toBe(singlePrice * 2);

await page.pause()

})