export interface IExecutionResult<T> {
    statusCode: number;
    errorMessage: string;
    result: T;
}
