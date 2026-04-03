import {test,expect} from "@playwright/test"
import { ManagerPage } from "../../tests/Day26/PageObjectModel/managerLogin.page.ts"
import { AccountPage } from "../../tests/Day26/PageObjectModel/openAccount.page.ts"
import { AmountPage } from "../../tests/Day26/PageObjectModel/deposit&withdraw.page.ts"
import data from "../../tests/Day26/Utilities/bankingData.json"

test("Banking Scenario",async({page})=>{
    let manager = new ManagerPage(page)
    let account = new AccountPage(page)
    let amount = new AmountPage(page)

    let fullname = `${data.firstName} ${data.lastName}`

    await page.goto(data.url)
    await expect(page).toHaveURL(data.url);
    await manager.loginAsManager()
    await manager.addCustomerDetails(data.firstName, data.lastName, data.postcode)
    
    await account.openaccount(fullname, data.currency)
    await account.goToHome()
    await account.loginCustomer(fullname)

    await amount.deposit(data.depositAmount)
    await amount.withDraw(data.withdrawAmount)

    let Balance =  await amount.getBalance();
    expect(Balance).toBe(data.expectedAmount)
    
    await page.screenshot({path:"screeshot/Day26-task.png"});
    await amount.LogOut()
})

