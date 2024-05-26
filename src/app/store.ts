import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login';
import { popupReducer } from '../features/popup';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    popup: popupReducer,
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
