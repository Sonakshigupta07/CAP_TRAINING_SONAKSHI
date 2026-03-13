import {test} from "@playwright/test"

test("dialogues",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // / Handle the alert popup
    page.on("dialog", async (d) => {
        // console.log(d.message());  // prints alert text
        // await d.accept();          // Click OK

        if(d.type()=="alert"){
            await d.accept()
        }
        else if(d.type()=="confirm"){
            await d.dismiss()
            console.log(d.message())
        }
        else if(d.type()=="prompt"){
            // await d.accept("")
            let value = await d.defaultValue()

            if(value != "Harry Potter"){
                await d.accept(value) 
            }
            else{
                await d.accept("Tom") 
            }
        }

    });

    await page.locator('//button[@id="alertBtn"]').click()  
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.getByRole("button",{name:"Prompt Alert"}).click()
})