// import { test, expect } from '@playwright/test'

// test("check screenshot", async ({ page }) => {

//   await page.goto("https://www.amazon.in/")
//   await expect(page).toHaveScreenshot()

// })

// import { test, expect } from '@playwright/test'

// test("contain assertion", async ({ page }) => {
//   let text = "Good morning";  
//   expect(text).toContain("Good")

// })

// import { test, expect } from '@playwright/test'

// test("containText assertion", async ({ page }) => {
//  await page.goto("https://www.amazon.in/")

// // let value = 5;
// // expect(value).not.toEqual(0);
// await expect(page.locator('//span[text()="Up to 60% off | Cookware, kitchen tool & more | Amazon Launchpad"]')).not.toContainText('cookware');

// })

import {test} from "@playwright/test"
// test.use({actionTimeout:20000})

test("",async({page})=>{
    await page.goto("https://www.amazon.in/")
    // await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes",{timeout:40000})  
    await page.waitForTimeout(10000);
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
})