import { IHandler } from "../../IHandler";
import { DirectionModel } from "../../models/DirectionModel";


export function GetDirection(directionId: string): IHandler<DirectionModel> {
    return {
        url: `Direction/${directionId}`,
        method: "get",
        body: null,
        isPrivate: true,
    };
}
