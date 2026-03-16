import {test} from "@playwright/test"
import fs from "fs"
import path from "path"
let datafile = fs.readFileSync(path.join(__dirname,"../../testdata/data.json"))
let data= JSON.parse(datafile)



// test("json data",async({page})=>{
//     // console.log(data.greet);    for single value

//     data.forEach(d=>{
//         console.log(d.greet);
//     })
    
// })

test("for application",async({page})=>{
    // await page.goto(data.url)
    // await page.locator('//input[@id="username"]').fill(data.username)
    // await page.locator('//input[@id="password"]').fill(data.password)

    for(let d of data){
        let url = d.url
        let username = d.username
        let password = d.password

        await page.goto(url)
        await page.locator('//input[@id="username"]').fill(username)
        await page.locator('//input[@id="password"]').fill(password)
        await page.locator('//button[@id="submit"]').click()
    }
})