import { IHandler } from "../../IHandler";
import { LoginUserResultModel } from "../../models/LoginUserResultModel";

export function SignUpUser(username: string, password: string): IHandler<LoginUserResultModel> {
    return {
        url: "User/signup",
        method: "post",
        body: {
            username: username,
            password: password,
        },
        isPrivate: false,
    }
}