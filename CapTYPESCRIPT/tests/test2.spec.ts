import {test} from "@playwright/test"

test("title",async({browser,browserName})=>{
    let context = await browser.newContext()
    let page=await context.newPage()
    let page2= await context.newPage()
    
    // goto

   await page.goto("https://www.amazon.in/")
   await page.locator('input#twotabsearchtextbox').fill("shoes")
   console.log((browserName));
   page2.goto("https://www.flipkart.com/")
   
})

// test("title",async({browser})=>{
//     let context = browser.newContext()

// })


///// FIXTURES ----> It is a setup block of code which is resuable
/**
 * page
 * browser
 * browserName
 * context
 * request ---> API
 */

