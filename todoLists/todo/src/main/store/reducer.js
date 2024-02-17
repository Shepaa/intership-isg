import {createSlice} from "@reduxjs/toolkit";

const DEFAULT_TODO = {
    title: '',
    completed: false
}

const initialState = {
    todoItem: DEFAULT_TODO,
    todosList: [],
    listError: ''
};
export const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        getListSuccessfully(state, {payload}) {
            state.todosList = payload;
        },
        getListError(state, {payload}) {
            state.listError = payload
        },
        editItem(state, {payload}) {
            state.todoItem = payload
        },
        createItem: (state, {payload}) => {
            state.todosList = [...state.todosList, payload]
        },
        removeItem: (state, {payload}) => {
            state.todosList = state.todosList.filter((todo) => todo.id !== payload)
        },
        updateItem: (state, {payload}) => {
            state.editingTodo = DEFAULT_TODO
            state.todosList = state.todosList.map((todo) => todo.id === payload.id ? payload : todo)
        }
    }
});

export const {
    editItem,
    createItem,
    getListError,
    getListSuccessfully,
    removeItem,
    updateItem
} = todoReducer.actions

export default todoReducer.reducer