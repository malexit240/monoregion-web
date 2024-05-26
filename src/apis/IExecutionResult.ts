export interface IExecutionResult<T> {
    statusCode: number,
    isSuccess: boolean,
    errorMessage: string,
    result: T
}
