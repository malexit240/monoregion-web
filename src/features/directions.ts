import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { DirectionModel } from "../apis/models/DirectionModel";
import { DataProvider } from "../apis/apis";
import { GetDirections } from "../apis/cases/Direction/GetDirections";

export interface DirectionsState {
    directions: DirectionModel[],
}

const initialState: DirectionsState = {
    directions: [],
}

export const directionsSlice = createSlice({
    name: 'directions',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(loadDirectionsAsync.fulfilled, (s, a) => {
            if (a.payload.isSuccess) {
                s.directions = a.payload.result ?? [];
            }
        });
    }
});

const loadDirectionsAsync = createAsyncThunk(
    'directions/loadDirectionsAsync',
    async () => await DataProvider.Execute(GetDirections())
)

export const directionsReducer = directionsSlice.reducer;
export const directionsActions = {
    loadDirectionsAsync,
    ...directionsSlice.actions,
} 