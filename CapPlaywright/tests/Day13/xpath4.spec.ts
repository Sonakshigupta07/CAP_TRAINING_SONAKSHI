import {test} from '@playwright/test';

test("Xpath-login",async({page,browserName})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    // let price = await page.locator('(//span[@class="a-price-whole"])').first().innerText();
    let price = await page.locator('//h2[@aria-label="Sponsored Ad - iPhone 17 Pro Max 2 TB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Silver"] | //span[text()="2,29,900"]').allTextContents();
    // let price = await page.locator('(//span[@class="a-price-whole"])').last().innerText();
    console.log(price);
});