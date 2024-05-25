import { IHandler } from "../../IHandler";
import { RecordModel } from "../../models/RecordModel";

export function GetRecord(recordId: string): IHandler<RecordModel> {
    return {
        url: `Record/${recordId}`,
        method: "get",
        body: null,
        isPrivate: true,
    }
}