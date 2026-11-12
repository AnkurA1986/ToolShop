// src/utils/uniqueEmail.ts
import registrationForm from '../../src/data/registrationForm.json';

export function buildUniqueEmail(firstName: string)
{
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth()+1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');
    const uniqueEmail= registrationForm.firstName.toLowerCase()+yyyy+mm+dd+hh+min+sec+'@gmail.com';
    return uniqueEmail;
}