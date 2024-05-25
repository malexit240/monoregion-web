import axios from "axios";
import { IHandler } from "./IHandler";
import { IExecutionResult } from "./IExecutionResult";

class PrivateDataProvider {
    private baseUrl = 'http://localhost:5005';
    private auth = '';
    private isAuthorized: boolean = false;

    constructor() {
        const accessToken = localStorage.getItem('accessToken');
        this.isAuthorized = accessToken ? true : false;

        if (this.isAuthorized) {
            this.auth = `Bearer ${accessToken}`;
        }
    }

    public async Execute<T>(handler: IHandler<T>): Promise<IExecutionResult<T>> {

        const headers = {
            'Content-Type': 'application/json-patch+json',
            Accept: '*/*',
            Authorization: handler.isPrivate ? this.auth : undefined
        };

        const response = await axios.request({
            url: handler.url,
            method: handler.method,
            baseURL: this.baseUrl,
            data: handler.body,
            headers: headers,
        });

        return {
            statusCode: response.status,
            errorMessage: response.statusText,
            result: response.data,
        }
    }

    public SetNewAccessToken(token: string) {
        this.auth = `Bearer ${token}`;
        this.isAuthorized = true;
    }
}

export const DataProvider = new PrivateDataProvider();