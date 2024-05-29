import { createSlice } from "@reduxjs/toolkit";

export interface rootStateInterface {
    isAuthorized: boolean,
}

const initialState: rootStateInterface = {
    isAuthorized: localStorage.getItem('accessToken') ? true : false,
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        authorize: s => {
            s.isAuthorized = true;
        },
        logout: s => {
            s.isAuthorized = false;
        }
    }
});

export const rootReducer = rootSlice.reducer;
export const rootActions = {
    ...rootSlice.actions
}