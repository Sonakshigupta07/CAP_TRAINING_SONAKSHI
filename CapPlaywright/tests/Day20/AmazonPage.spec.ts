import {test} from '@playwright/test'
import {amazonPage} from "../../PageObjectModel/amazonPage.page.ts"
import data from "../../testdata/data2.json"

test("real world scenario",async({page})=>{
    // let examplepage = new example(page)
    const amazon = new amazonPage(page);

    await amazon.launchAmazon();

    await amazon.searchProduct(data.searchItem);

    await amazon.selectRating();

    const newPage = await amazon.selectFourthMobile();

    await amazon.selectquantity(newPage,data.quantity);
})