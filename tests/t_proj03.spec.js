import {test, expect} from '@playwright/test';
import HomePage from '../POM/trip';
import TestData from '../TestData/trip.json';

test("makemytrip", async({page})=> {
// create obj
const home=new HomePage(page);

await home.open(TestData.url);

await home.city(TestData.fromCity);

await home.city1(TestData.toCity);

await home.filters();

await home.searchflights();
  
await page.pause()
});
