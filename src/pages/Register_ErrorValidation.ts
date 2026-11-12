import {Page, Locator, expect} from '@playwright/test';

export class Register_ErrorValidation
{
    page:Page;
    error_FirstName:Locator;
    error_LastName:Locator;
    error_Dob:Locator;
    error_Country:Locator;
    error_PostalCode:Locator;
    error_HouseNumber:Locator;
    error_Street:Locator;
    error_City:Locator;
    error_State:Locator;
    error_Phone:Locator;
    error_Email:Locator;
    error_Password:Locator;
    button_Register:Locator;
    FirstName:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.button_Register=page.getByRole('button',{'name':'Register'});
        this.error_FirstName=page.locator('#first_name-error');
        this.error_LastName=page.locator('#last_name-error');
        this.error_Dob=page.locator('#dob-error');
        this.error_Country=page.locator('#country-error');
        this.error_PostalCode=page.locator('#postal_code-error');
        this.error_HouseNumber=page.locator('[data-test=house_number-error]');
        this.error_Street=page.locator('#street-error');
        this.error_City=page.locator('#city-error');
        this.error_State=page.locator('#state-error');
        this.error_Phone=page.locator('#phone-error');
        this.error_Email=page.locator('#email-error');
        this.error_Password=page.locator('#password-error');
        this.FirstName=page.locator('#first_name');
    }

    async ErorrValidation_Register()
    {
        this.button_Register.click();
        const name = await this.FirstName.textContent();
        await console.log(name);
        if (this.FirstName.textContent() === null)
        {
            await expect(this.error_FirstName).toBeVisible();
        }

    }
}