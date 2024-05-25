import { IHandler } from "../../IHandler";
import { DirectionModel } from "../../models/DirectionModel";


export function RemoveDirection(directionId: string): IHandler<DirectionModel> {
    return {
        url: `Direction/${directionId}`,
        method: "delete",
        body: null,
        isPrivate: true,
    };
}
