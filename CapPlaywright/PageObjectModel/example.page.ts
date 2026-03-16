class Example{
    usernameTF:string;
    passwordTF:string;
    SubmitBtn:any

    constructor(page){
        this.usernameTF= page.locator('//input[@id="username"]')
        this.passwordTF= page.locator('//input[@id="password"]')
        this.SubmitBtn=page.locator('//button[@id="submit"]')

    }

    async login(username:string, password:string){

        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.SubmitBtn.click()
    }

}

export default Example