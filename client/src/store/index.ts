import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./user";

const reducers = combineReducers({ user: authReducer });

export const store = configureStore({
        reducer: { reducers },
});

export type RootState = ReturnType<typeof reducers>;
