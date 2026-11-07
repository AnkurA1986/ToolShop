
export class ToolShopApiClient
{

    request:any;
    constructor (request:any)
    {
        this.request = request;
    }

    async loginApi(email: string, password: string)
    {
        const url = process.env.API_URL + 'users/login';
        const response = await this.request.post(url, {
            data: { email: email, password: password }
        });
        return response;
    }
}