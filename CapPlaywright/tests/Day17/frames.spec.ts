import {test} from "@playwright/test"

test("frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // let frame = await page.frames()
    // console.log(frame.length);

    // let PageTitle = await page.title()
    // console.log(PageTitle);
    

    // for(let i of frame){
    //     let text = await i.title()
    //     console.log(text);
        
    // }
    

     ////!----------a1------------------
    // let frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    // // await frame1?.locator('//input[@name="mytext1"]').fill("hello")   
    // // await frame1?.fill('//input[@name="mytext1"]',"Hello")

    // let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]')
    // await frame2.locator('//input[@name="mytext2"]').fill("enfioeo")
    // // await frame2.fill('//input[@name="mytext2"]') 


    // await page.locator('//frame[@src="frame_2.html"]').
    //    contentFrame()

    await page.frameLocator('//frame[@src="frame_3.html"]')
    .frameLocator('iframe')
    .getByLabel("I am a human")
    .check();
})




