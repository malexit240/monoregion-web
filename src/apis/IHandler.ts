export interface IHandler<T> {
    url: string;
    method: string;
    body: any;
    isPrivate: boolean;
}
