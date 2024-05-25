import { IHandler } from "../../IHandler";
import { LoginUserResultModel } from "../../models/LoginUserResultModel";

export function LogInUser(username: string, password: string): IHandler<LoginUserResultModel> {
    return {
        url: "User/login",
        method: "post",
        body: {
            username: username,
            password: password,
        },
        isPrivate: false,
    }
}
