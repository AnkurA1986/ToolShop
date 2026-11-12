import {test, expect, request} from '@playwright/test';
import data from '../../src/data/registrationForm.json';
import {buildUniqueEmail} from '../../src/utils/uniqueEmail';

test ('User Registration',{tag:['@API']}, async({request})=>{
    const url = new URL('/users/register', process.env.API_URL).toString();
    const EmailId = await buildUniqueEmail(data.firstName);
    const Data = {"first_name":data.firstName,"last_name":data.lastName,"dob":data.dob,"phone":data.phone,"email":EmailId,"password":data.Password,"address":{"street":data.Street,"city":data.City,"state":data.State,"country":"IN","postal_code":data.postalCode}};


    console.log(url);
    console.log(Data);
    const response = await request.post(url, {data:Data});
    console.log(response.status());
    await expect(response).toBeOK();
})
