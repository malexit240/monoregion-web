import { IHandler } from "../../IHandler";
import { DirectionModel } from "../../models/DirectionModel";


export function AddDirection(name: string): IHandler<DirectionModel> {
    return {
        url: "Direction/",
        method: "post",
        body: {
            name,
        },
        isPrivate: true,
    };
}
