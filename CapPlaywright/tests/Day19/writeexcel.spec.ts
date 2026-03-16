import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

// test("write excel data",async({page})=>{
//      let book=new excel.Workbook()
//         await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
//         let sheet=await book.getWorksheet("Sheet4")

//     if(!sheet){
//      sheet = await book.addWorksheet("Sheet4")
//     }

//     sheet.getRow(1).getCell(1).value="playwright";

//     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
// })

// test("Writing multiple data",async({page})=>{
//     let book = new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
//     let sheet = await book.getWorksheet("Sheet5")

//     if(!sheet){
//         sheet = await book.addWorksheet("Sheet5")
//     }

//     sheet.addRow(["Name","Email","Password"])

//     let data = [
//         ["Sonakshi","sona@gmail.com","12345"],
//         ["Riya","riya@gmail.com","56789"],
//         ["Aman","aman@gmail.com","98765"],
//         ["Rahul","rahul@gmail.com","45678"]
//     ]

//     for(let i=0; i<data.length;i++){
//         sheet.addRow(data[i])
//     }

//     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
// })

test("Writing multiple data",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
    let sheet = await book.getWorksheet("Sheet6")

    if(!sheet){
        sheet = await book.addWorksheet("Sheet6")
    }

    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await Promise.all([
    page.waitForNavigation(),
    page.keyboard.press("Enter")
])

    let items = await page.locator('//span[text()="Bacca Bucci"]').allTextContents()
    // console.log(items);


    for(let i=0;i<items.length;i++){
        sheet.getRow(i+1).getCell(1).value=items[i]
    }

     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
    
})