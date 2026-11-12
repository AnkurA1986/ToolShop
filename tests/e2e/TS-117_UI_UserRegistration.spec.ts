import {test, expect} from '@playwright/test';
import {Register_Navigation} from '../../src/pages/Register_Navigation';
import {Register_ErrorValidation} from '../../src/pages/Register_ErrorValidation';

test('User registration', async({page})=>{
    const navigation_register = new Register_Navigation(page);
    const error_register = new Register_ErrorValidation(page);

    await navigation_register.nav_Register();
    await error_register.ErorrValidation_Register();


    await page.pause();
})