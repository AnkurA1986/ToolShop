import {test, expect} from '@playwright/test';
import {Navigation} from '../../src/pages/Navigation';
import {loginPage} from '../../src/pages/loginPage';
import {buildUniqueEmail} from '../../src/utils/uniqueEmail';
import data from '../../src/data/registrationForm.json';
import {Register_Success} from '../../src/pages/Register_Success';


test('User Login with valid credentials',{tag:['@UI', '@smoke']}, async({page})=>{

    const navigation_register = new Navigation(page);
    const register_success = new Register_Success(page);
    await navigation_register.nav_Register();
    const EmailId = await register_success.fill_registration_form();
    console.log("Email ID: "+EmailId);
    await register_success.click_register_button();
    await expect(page).toHaveURL('/auth/login');

    const signIn = new loginPage(page);
    const password = await data.Password;
    console.log("Password: "+password);
    await signIn.login(EmailId, password);
    await expect(page).toHaveURL('/account');

    

})