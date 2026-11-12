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
        
    constructor(page:Page)
    {
        this.page=page;
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
        
    }
}