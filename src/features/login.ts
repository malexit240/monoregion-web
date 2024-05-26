import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
    username: string,
    password: string,
};

const initialState: LoginState = {
    username: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeUsername: (state, action) => {
            state.username = action.payload;
        },
        changePassword: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;