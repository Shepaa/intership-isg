import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../main/store/reducer";

export const store = configureStore({
    reducer: {todos: todoReducer},
})