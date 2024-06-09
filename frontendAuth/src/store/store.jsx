import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersSlice";
import customersReducer from "./reducers/customersSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        customers:customersReducer
    }
})