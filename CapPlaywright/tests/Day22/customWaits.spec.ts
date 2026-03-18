import {test} from "@playwright/test"

test("custom waits",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForFunction(()=>{
        // return document.readyState==='complete'
        let ele = document.querySelectorAll("ds da")
        return ele.length>1
    })

    await page.title()
})