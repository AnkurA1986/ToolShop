import {test, expect} from '@playwright/test';
import {Navigation} from '../../src/pages/Navigation';
import {loginPage} from '../../src/pages/loginPage';
import {buildUniqueEmail} from '../../src/utils/uniqueEmail';
import data from '../../src/data/registrationForm.json';


test('User Login with valid credentials',{tag:['@UI', '@smoke']}, async({page})=>{
    const login = new Navigation(page);
    await login.nav_login();
    const signIn = new loginPage(page);
    const emailId = await buildUniqueEmail(data.firstName);
    const password = await data.Password;
    await signIn.login(emailId, password);
    

})