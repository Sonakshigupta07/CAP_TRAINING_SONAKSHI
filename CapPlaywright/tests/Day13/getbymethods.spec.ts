/////// GetByMethods
/**
 * GetByText()
 * GetBy AltText
 * GetByLabel
 * GetByTitle
 * GetByPlaceholder
 * GetByRole
 * GetByTestId
 */
import {test} from "@playwright/test"

test("get by methods",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username",{exact:true}).fill("student")
    // await page.getByLabel("Password").fill("Password123")
    // await page.getByText("Submit").first().click()

    // await page.getByRole("textbox",{name:"username",exact:true}).fill("student")
    // await page.getByRole("textbox",{name:"password",exact:true}).fill("Password123")
    // await page.getByRole("button").click()

    // await page.getByPlaceholder("Enter your name")

})
