import {test, expect} from '@playwright/test';
import {Navigation} from '../../src/pages/Navigation';
import {Register_Success} from '../../src/pages/Register_Success';
import {Register_ErrorValidation} from '../../src/pages/Register_ErrorValidation';

test('User Registration',{tag:['@UI', '@smoke']} , async({page})=>{
    const navigation_register = new Navigation(page);
    const register_success = new Register_Success(page);
    await navigation_register.nav_Register();
    await register_success.fill_registration_form();
    await register_success.click_register_button();
    await expect(page).toHaveURL('/auth/login');
    //await page.pause();

})

test('Validation errors displayed when fields are empty',{tag:['@UI']} , async({page})=>{
    const navigation_register = new Navigation(page);
    const register_success = new Register_Success(page);
    const error = new Register_ErrorValidation(page);
    await navigation_register.nav_Register();
    await register_success.click_register_button();
    await expect(error.error_LastName).toBeVisible();
    await expect(error.error_Dob).toBeVisible();
    await expect(error.error_Country).toBeVisible();
    await expect(error.error_PostalCode).toBeVisible();
    await expect(error.error_HouseNumber).toBeVisible();
    await expect(error.error_Street).toBeVisible();
    await expect(error.error_City).toBeVisible();
    await expect(error.error_State).toBeVisible();
    await expect(error.error_Phone).toBeVisible();
    await expect(error.error_Email).toBeVisible();
    await expect(error.error_Password).toBeVisible();
})