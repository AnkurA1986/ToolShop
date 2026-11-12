import {Page, Locator} from '@playwright/test';

export class loginPage
{
    page:Page;
    email:Locator;
    password:Locator;
    login_btn:Locator;

    constructor(page:Page)
    {
        this.page=page
        this.email = page.getByLabel('Email address *');
        this.password = page.getByLabel('Password *');
        this.login_btn = page.locator('.btnSubmit');

    }

    async login(email:string, password:string)
    {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.login_btn.click();
    }

}