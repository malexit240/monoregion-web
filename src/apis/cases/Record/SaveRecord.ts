import { IHandler } from "../../IHandler";
import { ShortRecordModel } from "../../models/ShortRecordModel";


export function SaveRecord(recordId: string, title: string, content: string, directionId: string): IHandler<ShortRecordModel> {
    return {
        url: "Record/",
        method: "put",
        body: {
            title,
            content,
            recordId,
            directionId,
        },
        isPrivate: true,
    };
}
