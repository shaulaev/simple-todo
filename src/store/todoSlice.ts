// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit"
import { SerializedError } from "@reduxjs/toolkit"
import { addTodo, completeTodo, deleteTodo, getTodo } from "../api/todoApi"
import {todo} from "../types/types";

interface state {
    pending: boolean,
    data: Array<unknown>,
    error: null | SerializedError
}


const todo = createSlice({
    name: 'todo',
    initialState: {
        pending: false,
        data: [],
        error: null
    } as state,
    reducers: {},
    extraReducers: (builder) => {
        //Получение задач
        builder.addCase(getTodo.pending, (state) => {
            state.pending = true;
            state.error = null;
        })
        builder.addCase(getTodo.fulfilled, (state, action) => {
            state.pending = false;
            state.error = null;
            state.data = action.payload
        })
        builder.addCase(getTodo.rejected, (state, action) => {
            state.pending = false;
            state.error = action.error
        })
        //Добавление задачи
        builder.addCase(addTodo.pending, (state) => {
            state.pending = true;
            state.error = null;
        })
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.pending = false;
            state.error = null;
            state.data.push(action.payload)
        })
        builder.addCase(addTodo.rejected, (state, action) => {
            state.pending = false;
            state.error = action.error
        })
        //Завершение задачи
        builder.addCase(completeTodo.pending, (state) => {
            state.pending = true;
            state.error = null;
        })
        builder.addCase(completeTodo.fulfilled, (state, action) => {
            state.pending = false;
            const t:unknown = state.data.find((todo: todo) => todo.id === action.payload.id);
            t.checkbox = !action.payload.checkbox
            state.data[state.data.indexOf(t)] = t
            state.error = null;
        })
        builder.addCase(completeTodo.rejected, (state, action) => {
            state.pending = false;
            state.error = action.error
        })
        //Удаление задач
        builder.addCase(deleteTodo.pending, (state) => {
            state.pending = true;
            state.error = null;
        })
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.pending = false;
            state.error = null;
            state.data = state.data.filter((todo: todo) => todo.id !== action.payload)
        })
        builder.addCase(deleteTodo.rejected, (state, action) => {
            state.pending = false;
            state.error = action.error
        })
    }
})

export default todo