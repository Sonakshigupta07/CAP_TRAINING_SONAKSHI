import {test} from "@playwright/test"

// test("browser control",async({page})=>{
//     let size = await page.viewportSize()
//     console.log(size);
//     await page.setViewportSize({width:2000,height:2000})
//     console.log(await page.viewportSize());  

//     await page.goto("https://www.amazon.com/")
//     // let pTitle = await page.title(); 
//     // console.log(await page.title());
//     console.log(await page.url()); 
// })


test("browser control",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.flipkart.com/")
    // let time = new Date().getTime()
    // await page.screenshot({path : `screenshot/${time}ss.png`})
    console.log(await context.cookies());
    
    // await browser.close()
    //  console.log(await page.url()); 
})

