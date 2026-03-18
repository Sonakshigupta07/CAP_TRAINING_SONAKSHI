import {test} from "@playwright/test"
test("pro-kabbadi",async({page})=>{
    await page.goto("https://www.prokabaddi.com/")
    await page.locator('//a[@data-parameter="homepage_recent_more_link"]').click()
    let info=await page.locator('(//p[@class="team-name"])[1]|(//p[@class="team-name"])[2]|(//p[@class="match-place"])[1]|(//p[@class="score"])[1]|(//p[@class="score"])[2]').allTextContents()
    console.log(info);
    
})