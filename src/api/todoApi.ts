import {createAsyncThunk} from "@reduxjs/toolkit"
import { todo } from "../types/types"

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
    const data = await fetch("http://localhost:3000/todo")

    return await data.json()
})

export const addTodo = createAsyncThunk("todo/addTodo", async (text: string) => {
    console.log(text)
    const data = await fetch(`http://localhost:3000/todo`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({text, checkbox: false})
    })

    const d = data.json()

    console.log(d)
    return d
})

export const completeTodo = createAsyncThunk("todo/completeTodo", async (todo: todo) => {
    const {id, checkbox} = todo

    await fetch(`http://localhost:3000/todo/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({checkbox: !checkbox})
    })
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id: number) => {
    await fetch(`http://localhost:3000/todo/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })

    return id
})