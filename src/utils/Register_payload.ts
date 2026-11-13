import data from '../data/registrationForm.json';

export function UserRegistrationPayload(EmailId:string)
{
    return{first_name:data.firstName,
        last_name:data.lastName,
        dob:data.dob,
        phone:data.phone,
        email:EmailId,
        password:data.Password,
        address:{street:data.Street,
            city:data.City,
            state:data.State,
            country:"IN",
            postal_code:data.postalCode}}
}