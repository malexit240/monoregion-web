import { ShortRecordModel } from "./ShortRecordModel";

export interface DirectionModel {
    id: string,
    name: string,
    createdAtUtc: any,
    records: ShortRecordModel[],
}


