import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login';
import { popupReducer } from '../features/popup';
import { directionsReducer } from '../features/directions';
import { modalPageReducer } from '../features/modalPage';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    popup: popupReducer,
    directions: directionsReducer,
    modalPage: modalPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
