import {test,expect} from "@playwright/test"
// import { Expect } from "@playwright/test"  

test("get by methods",async({page})=>{
    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("username",{exact:true}).type("student")
    // await page.getByLabel("username",{exact:true}).type("student1")
    // await page.getByLabel("password").fill("password123")
    // await page.getByLabel("password").fill("password1234")

    // await page.getByLabel("Username",{exact:true}).type("student")
    // await page.getByLabel("password").type("password123")
    // let value = await page.getByLabel("Username").inputValue()
    // console.log(value);
    
     await page.goto("https://www.amazon.in/")
     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
     await page.keyboard.press("Enter")
     await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').first().waitFor()
    let ele = await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').all()
    console.log(ele);
})
