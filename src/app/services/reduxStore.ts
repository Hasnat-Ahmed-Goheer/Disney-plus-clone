import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../containers/user/userSlice";

export const reduxStore = configureStore({
    reducer:{
        user : userSliceReducer,
    }
})


export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
