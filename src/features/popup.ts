import { createSlice } from "@reduxjs/toolkit";

export interface PopupInfo {
    id: number,
    title: string,
    content: string,
    type: string,
}

export interface PopupState {
    list: PopupInfo[],
    nextId: number,
}

const initialState: PopupState = {
    list: [],
    nextId: 1,
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        addInfo: (state, action) => {
            addPopup(state,
                action.payload.title,
                action.payload.content,
                'info',
            );
        },

        addWarning: (state, action) => {
            addPopup(state,
                action.payload.title,
                action.payload.content,
                'warning',
            );
        },

        addError: (state, action) => {
            addPopup(state,
                action.payload.title,
                action.payload.content,
                'error',
            );
        },

        addSuccess: (state, action) => {
            addPopup(state,
                action.payload.title,
                action.payload.content,
                'success',
            );
        },

        removeItem: (state, action) => {
            state.list = state.list.filter(i => i.id != action.payload);
        }
    }
});

export const popupReducer = popupSlice.reducer;
export const popupActions = popupSlice.actions;


function addPopup(state: PopupState, title: string, content: string, type: string) {
    const newItem = {
        id: state.nextId++,
        title: title,
        content: content,
        type: type,
    };

    state.list.push(newItem);
}