import { configureStore } from '@reduxjs/toolkit'
import filesReducer from "./filesReducer";
import thunk from "redux-thunk";
import tasksReducer from "./tasksReducer";

export const Store = configureStore({
    reducer: {filesReducer, tasksReducer},
    middleware: [thunk],
})