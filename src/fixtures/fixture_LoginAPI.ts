import {test as base, expect, request} from '@playwright/test';
import {buildUniqueEmail} from '../utils/uniqueEmail';
import data from '../data/registrationForm.json';
import {UserRegistrationPayload} from '../utils/Register_payload';

type User = {email:string, password:string};

export const test = base.extend <{registeredUser:User}> ({
    registeredUser : async ({request},use)=>{
        const url = new URL('/users/register',process.env.API_URL).toString();
        const Email = await buildUniqueEmail(data.firstName);
        const payload = await UserRegistrationPayload(Email);
        const user:User = {
            email:Email,
            password:data.Password
        }
        const response = await request.post(url, {data:payload});

        await use(user);
    }
})
export {expect};