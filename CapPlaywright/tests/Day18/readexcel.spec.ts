import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

// test("reading test data",async({page})=>{
//     let book = new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
//     let sheet = await book.getWorksheet("Sheet1")
//     let data=await sheet?.getRow(1).getCell(1).value;
//     console.log(data);
    
// })

// test("reading test data",async({page})=>{
//     let book = new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
//     let sheet = await book.getWorksheet("Sheet2")
    // let data=await sheet?.getRow(1).getCell(1).value;
    // console.log(data);

    // for(let i=1; i<=sheet!.rowCount; i++){
    //     const data1 = sheet!.getRow(i).getCell(1).value
    //     const data2 = sheet!.getRow(i).getCell(2).value
    //     const data3 = sheet!.getRow(i).getCell(3).value

    //     console.log(data1,data2,data3);
    // }  

//     for(let r=1; r<=sheet?.actualColumnCount;r++){
//           for(let c=1; c<=sheet?.actualRowCount;c++){
//             let data = await sheet?.getRow(r).getCell(c).value
//             console.log(data);
            
//           }
//     }
// })

test('Sheet3', async ({ page }) => {
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
     const sheet=await book.getWorksheet("Sheet3")
     let url=sheet?.getRow(1).getCell(1).toString()
    await page.goto(url!);
    const name=await page.locator("#name")
    const email=await page.locator("#email")
    const passwd=await page.locator("#password")
    
    for(let i=1;i<=sheet?.rowCount!;i++){
        const nameValue=sheet?.getRow(i).getCell(2).toString()
        const emailValue=sheet?.getRow(i).getCell(3).toString()
        const passValue=sheet?.getRow(i).getCell(4).toString()
        await name.fill(nameValue!)
        await email.fill(emailValue!)
        await passwd.fill(passValue!)
        


    }
});