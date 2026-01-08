import{test,expext} from '@playwright/test'

test("play with tables", async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const rightTable = page.locator(".tableFixHead table");
const columns= await rightTable.locator('thead tr th')
const rows=await rightTable.locator('tbody tr')
console.log(await columns.count());
let count=await rows.count();
//to get all inner texts from rows
 for(let i=0;i<count;i++)
 {
    const rowtext=await rows.nth(i).innerText()
    // console.log(rowtext);
if (rowtext.includes('Bengaluru')){
    let Name=await rows.nth(i).locator('td').nth(0).innerText()
         console.log(Name);}
if (rowtext.includes('Kolkata')){
    let Name1=await rows.nth(i).locator('td').nth(0).innerText()
         console.log(Name1);}


}

})