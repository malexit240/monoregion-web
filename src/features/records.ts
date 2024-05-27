import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ShortRecordModel } from "../apis/models/ShortRecordModel";
import { RecordModel } from "../apis/models/RecordModel";
import { DataProvider } from "../apis/apis";
import { GetDirection } from "../apis/cases/Direction/GetDirection";
import { GetRecord } from "../apis/cases/Record/GetRecord";

export interface RecordsStateInterface {
    directionId: string,
    directionName: string,
    records: ShortRecordModel[],
    selectedRecord?: RecordModel,
}

const initialState: RecordsStateInterface = {
    directionId: '',
    directionName: '',
    records: [],
}

const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        setContent: (s, a) => {
            if (s.selectedRecord) {
                s.selectedRecord.content = a.payload;
            }
        },
        setTitle: (s, a) => {
            if (s.selectedRecord) {
                s.selectedRecord.title = a.payload;
            }
        }
    },
    extraReducers: b => {
        b.addCase(loadRecords.fulfilled, (s, a) => {
            if (a.payload.isSuccess) {
                s.directionId = a.payload.result.id;
                s.directionName = a.payload.result.name;
                s.records = a.payload.result.records;
            }
        });

        b.addCase(loadRecord.fulfilled, (s, a) => {
            if (a.payload.isSuccess) {
                s.selectedRecord = a.payload.result;
            }
        })
    }
});

const loadRecords = createAsyncThunk(
    'records/loadRecords',
    async (direcitonId: string) => await DataProvider.Execute(GetDirection(direcitonId))
);

const loadRecord = createAsyncThunk(
    'records/loadRecord',
    async (recordId: string) => await DataProvider.Execute(GetRecord(recordId))
);

export const recordsReducer = recordsSlice.reducer;
export const recordsActions = {
    loadRecords,
    loadRecord,
    ...recordsSlice.actions,
}