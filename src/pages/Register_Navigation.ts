import {Page, Locator} from '@playwright/test';

export class Register_Navigation
{
    page:Page;
    button_signIn:Locator;
    link_register:Locator;
    
    
    constructor(page:Page)
    {
        this.page=page;
        this.button_signIn=page.locator('[routerlink="/auth/login"]');
        this.link_register=page.locator('[routerlink="/auth/register"]');
        
    }

    async nav_Register()
    {
        await this.page.goto('/');
        await this.button_signIn.click();
        await this.link_register.click();
    }

    
}