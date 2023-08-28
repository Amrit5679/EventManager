import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { indexReducer } from "./indexReducer";
import { reminderReducer } from "./reminderReducer";

export const store = configureStore({
    reducer:{
        reminderReducer: reminderReducer,
        userReducer: userReducer,
        indexReducer: indexReducer,
    },
})