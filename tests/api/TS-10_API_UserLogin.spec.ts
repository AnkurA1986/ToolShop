import {test, expect} from '../../src/fixtures/fixture_LoginAPI';

test('API - Login',{tag:['@API']}, async({request, registeredUser})=>{
  const url = new URL('/users/login',process.env.API_URL).toString();
  const payload = {"email":registeredUser.email,"password":registeredUser.password};
  
  const response = await request.post(url,{data:payload});
  console.log("Login API status- "+response.status());
  console.log("Login API Email- "+registeredUser.email);
  await expect(response).toBeOK();
  const responseJson = await response.json();
  await expect(responseJson.token_type).toEqual('bearer');
  await expect(responseJson.access_token).toBeTruthy();
})