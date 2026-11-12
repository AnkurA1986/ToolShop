import {Page, Locator, expect} from '@playwright/test';
import registrationForm from '../../src/data/registrationForm.json';
import {buildUniqueEmail} from '../../src/utils/uniqueEmail';

export class Register_Success
{
    FirstName:Locator;
    LastName:Locator;
    DateOfBirth:Locator;
    Country:Locator;
    PostalCode:Locator;
    HouseNumber:Locator;
    street:Locator;
    city:Locator;
    state:Locator;
    phone:Locator;
    Email:Locator;
    password:Locator;
    button_Register:Locator;
    

    constructor(page:Page)
    {
        this.FirstName=page.locator('#first_name');
        this.LastName = page.locator('#last_name');
        this.DateOfBirth = page.locator('#dob');
        this.Country = page.locator('#country');
        this.PostalCode = page.getByLabel('Postal code');
        this.HouseNumber = page.getByLabel('House number');
        this.street = page.locator('#street')
        this.city = page.getByLabel('City');
        this.state = page.getByLabel('State');
        this.phone = page.getByLabel('Phone');
        this.Email = page.getByLabel('Email address');
        this.password = page.getByLabel('Password');
        this.button_Register = page.getByRole('button',{'name':'Register'});
    }

    async fill_registration_form ()
    {
        await this.FirstName.fill(registrationForm.firstName);
        await this.LastName.fill(registrationForm.lastName);
        await this.DateOfBirth.fill(registrationForm.dob);
        await this.Country.selectOption({label : registrationForm.country });
        await this.PostalCode.fill(registrationForm.postalCode);
        await this.HouseNumber.fill(registrationForm.houseNumber);
        await expect(this.street).not.toHaveValue('');
        await this.street.fill(registrationForm.Street);
        await this.city.fill(registrationForm.City);
        await this.state.fill(registrationForm.State);
        await this.phone.fill(registrationForm.phone);

        //const uniqueEmail= registrationForm.firstName.toLowerCase()+Date.now()+'@gmail.com'
                //Date.now() gives milliseconds since 1970

        const emailId = buildUniqueEmail(registrationForm.firstName);
        
        await this.Email.fill(emailId);
        await this.password.fill(registrationForm.Password);
        

    }

    async click_register_button()
    {
        await this.button_Register.click();
    }
}