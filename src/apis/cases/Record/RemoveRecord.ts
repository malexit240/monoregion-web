import { IHandler } from "../../IHandler";
import { ShortRecordModel } from "../../models/ShortRecordModel";


export function RemoveRecord(recordId: string): IHandler<ShortRecordModel> {
    return {
        url: `Record/${recordId}`,
        method: "delete",
        body: null,
        isPrivate: true,
    };
}
