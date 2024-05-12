import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./apiSlice";
export const store = configureStore({
	reducer : dataReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;