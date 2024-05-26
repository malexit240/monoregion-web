import axios, { AxiosError } from "axios";
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
            Authorization: handler.isPrivate ? this.auth : undefined,
        };

        try {
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
                isSuccess: response.status >= 200 && response.status < 300
            }
        } catch (error) {

            const err = error as AxiosError;

            return {
                statusCode: err.status ?? 400,
                errorMessage: err.response?.data as string,
                result: null as T,
                isSuccess: false,
            }
        }

    }

    public SetNewAccessToken(token: string) {
        localStorage.setItem('accessToken', token);
        this.auth = `Bearer ${token}`;
        this.isAuthorized = true;
    }
}

export const DataProvider = new PrivateDataProvider();