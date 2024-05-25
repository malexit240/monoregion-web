import { IHandler } from "../../IHandler";
import { DirectionModel } from "../../models/DirectionModel";

export function GetDirections(): IHandler<DirectionModel[]> {
    return {
        url: "Direction/",
        method: "get",
        body: null,
        isPrivate: true,
    }
}