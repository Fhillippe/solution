import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pageSlice from "../features/pages/pageSlice";
import modalSlice from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    page: pageSlice,
    modal: modalSlice,
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
