import {test, expect, request} from '@playwright/test';
import {buildUniqueEmail} from '../../src/utils/uniqueEmail';
import data from '../../src/data/registrationForm.json';
import {IncompleteRegisterPayload} from '../../src/utils/Register_payload';

test('API - Register new user', {tag:['@API']}, async({request})=>{
    const url = new URL('/users/register',process.env.API_URL).toString();
    const Email = await buildUniqueEmail(data.firstName);
    const payload = await IncompleteRegisterPayload(Email);
    const response = await request.post(url, {data:payload});
    console.log("Register API Status- "+response.status());
    await expect(response.status()).toBe(422);
})