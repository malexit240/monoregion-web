import axios, { AxiosError } from "axios";
import { IHandler } from "./IHandler";
import { IExecutionResult } from "./IExecutionResult";
import { Ping } from "./cases/Ping";

class PrivateDataProvider {
    private baseUrl = 'https://4212-46-119-239-150.ngrok-free.app';
    private auth = '';
    private isAuthorized: boolean = false;

    constructor() {
        const accessToken = localStorage.getItem('accessToken');
        this.isAuthorized = accessToken ? true : false;

        if (this.isAuthorized) {
            this.auth = `Bearer ${accessToken}`;
        }
    }

    public async HasConnection(): Promise<boolean> {
        const response = await this.Execute(Ping());
        return response.isSuccess;
    }

    public async Execute<T>(handler: IHandler<T>): Promise<IExecutionResult<T>> {

        const headers = {
            'Content-Type': 'application/json-patch+json',
            Accept: '*/*',
            Authorization: handler.isPrivate ? this.auth : undefined,
            'ngrok-skip-browser-warning': '69420',
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