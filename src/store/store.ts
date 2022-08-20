import {combineReducers, configureStore} from "@reduxjs/toolkit";
import chatReducer from "./reducers/ChatSlice";

const rootReducer = combineReducers({
    chatReducer
})

export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch