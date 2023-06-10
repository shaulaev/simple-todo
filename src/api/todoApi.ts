import {createAsyncThunk} from "@reduxjs/toolkit"
import { todo } from "../types/types"

const http = "https://638375f91ada9475c8006ade.mockapi.io/"

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
    const data = await fetch(http + "todo")

    return await data.json()
})

export const addTodo = createAsyncThunk("todo/addTodo", async (text: string) => {
    console.log(text)
    const data = await fetch(http + `todo`, {
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

export const completeTodo = createAsyncThunk("todo/completeTodo", async (todo) => {
    const {id, checkbox} = todo;

    const data = await fetch(http + `todo/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({checkbox: !checkbox})
    })

    console.log(data, "checkbox")

    return todo
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
    await fetch(http + `todo/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })

    return id
})