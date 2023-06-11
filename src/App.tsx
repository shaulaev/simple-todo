//@ts-nocheck

import './App.css'
import ToDo from "./components/todo/ToDo";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from './store/store';
import { getTodo, addTodo } from './api/todoApi';
import {todo} from "./types/types";

function App() {

    const todo = useAppSelector((todo) => todo.todo)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTodo())
    }, [dispatch])

    const [input, setInput] = useState<string>("");
    const [sort, setSort] = useState<string>("0")

    const addTodoFunc = () => {
        if(input) {
            dispatch(addTodo(input))
        }
        setInput("")
    }

    const filteredArr = () => {
        if(sort === "0") {
            return todo.data
        } else if (sort === "1") {
            return  todo.data.filter((todo: todo) => todo.checkbox)
        } else if (sort === "2") {
            return  todo.data.filter((todo: todo) => !todo.checkbox)
        }
    }

  return (
    <>
      <div className="main">
          <div className="inputWrapper">
              <Input state={input} setState={setInput}/>
              <Button onClick={addTodoFunc} text={"+"} round={true}/>
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} name="" id="">
            <option value="0">Все</option>
            <option value="1">Завершенные</option>
            <option value="2">Незавершенные</option>
          </select>
          {
              todo.data.length > 0 ? filteredArr().map((todo: todo) => {
              return (
                  <ToDo key={todo.id} todo={todo}/>
              )
          }): <div className="lds-dual-ring" />}
      </div>
    </>
  )
}

export default App
