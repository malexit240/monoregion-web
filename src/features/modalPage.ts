import { createSlice } from "@reduxjs/toolkit";

export interface ModalPageState {
    isOpen: boolean,
    children: any,
}

const initialState: ModalPageState = {
    isOpen: false,
    children: null,
}

export const modalPageSlicer = createSlice({
    name: 'modalpage',
    initialState,
    reducers: {
        open: (state, action) => {
            state.isOpen = true;
            state.children = action.payload;
        },
        close: (state) => {
            state.isOpen = false;
            state.children = null;
        }
    }
});

export const modalPageReducer = modalPageSlicer.reducer;
export const modalPageActions = modalPageSlicer.actions;