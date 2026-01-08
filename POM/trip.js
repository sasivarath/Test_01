class HomePage {
    constructor(page){
 this.page=page;

//  locators
          this.close=page.locator('span.commonModal__close');
          this.minimize=page.locator('[alt="minimize"]');
          this.coachmark=page.locator('.coachmark');

          this.fromcity=page.locator('#fromCity');
          this.frominput=page.getByPlaceholder('From');
          this.fromsugg=page.getByText('Chennai');


          this.tocity=page.locator('#toCity');
          this.toinput=page.getByPlaceholder('To');
          this.tosugg=page.getByText('New Delhi');

          this.date=page.getByLabel('Fri Jan 09 2026');

          this.travellers=page.getByText('Travellers & Class');
          this.t_count=page.locator('[data-cy="adults-3"]');
          this.apply=page.getByRole('button',{name: 'APPLY'});

          this.search=page.getByText('Search');
    }
    // functions
    async open(url){
        await this.page.goto(url);
        await this.close.click();
        await this.minimize.click();
        await this.coachmark.click();
    }
    async city(from){
        await this.fromcity.click();
        await this.frominput.fill(from);
        await this.fromsugg.first().click();
    }
    async city1(to){
        await this.tocity.click();
        await this.toinput.fill(to);
        await this.tosugg.first().click();
    }
    async filters(){
        await this.date.click();

        await this.travellers.click();
        await this.t_count.click();
        await this.apply.click();
    }
    async searchflights(){
        await this.search.click();
    }
}

export default HomePage;

// await page.locator('span.commonModal__close').click();
// await page.locator('[alt="minimize"]').click();
// await page.locator('.coachmark').click();

// await page.locator('#fromCity').click()
// await page.getByPlaceholder('From').fill('chennai');
// await page.getByText('Chennai').first().click();


// await page.locator('#toCity').click();
// await page.getByPlaceholder('To').fill('Newdelhi');
// await page.getByText('New Delhi').first().click();


// await page.getByLabel('Fri Jan 09 2026').click();

// await page.getByText('Travellers & Class').click();
// await page.locator('[data-cy="adults-3"]').click();
// await page.getByRole('button',{name: 'APPLY'}).click();

//   await page.getByText('Search').click();


