import {Page} from "@playwright/test"

 export class amazonPage{
    page : Page;

    constructor(page : page){
        this.page = page;
    }

    async launchAmazon(){
        await this.page.goto("https://www.amazon.in/")
    }

    async searchProduct(product : string){
        await this.page.locator('#twotabsearchtextbox').fill(product);
        await this.page.locator('#nav-search-submit-button').click();
    }

    async selectRating(){
        await this.page.locator("//span[text()='10 GB & Above']").click()
    }

    async selectFourthMobile(){

    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.locator('(//img[@class="s-image"])').nth(3).click()
    ]);

    await newPage.waitForLoadState();
    return newPage;
}

   async selectquantity(newPage: Page, quantity: string){

    // await newPage.locator('#quantity').selectOption(quantity);

    // await newPage.locator('#add-to-cart-button').waitFor({ state: 'visible' });

    await newPage.locator('#add-to-cart-button').nth(1).click();
}
}
