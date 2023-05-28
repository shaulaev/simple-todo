import './App.css'
import ToDo from "./components/todo/ToDo";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import { useState, useEffect } from "react";
import { todo } from "./types/types";
import { useAppDispatch, useAppSelector } from './store/store';
import { getTodo, addTodo } from './api/todoApi';

function App() {

    const todo = useAppSelector((todo) => todo.todo)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTodo())
    }, [dispatch])

    const [input, setInput] = useState<string>("");
    const [sort, setSort] = useState<string>("")

    // const deleteTodo = (id: number) => {
    //     setTodos(todos.filter(item => item.id !== id))
    // }

    const addTodoFunc = () => {
        dispatch(addTodo(input))
        setInput("")
    }

    console.log(sort)


  return (
    <>
      <div className="main">
          <div className="inputWrapper">
              <Input state={input} setState={setInput}/>
              <Button onClick={addTodoFunc} text={"Add"}/>
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} name="" id="">
            <option value="0">Все</option>
            <option value="0">Завершенные</option>
            <option value="0">Незавершенные</option>
          </select>
          {todo.data.length > 0 ? todo.data.map((todo) => {
              return (
                  <ToDo key={todo.id}  todo={todo}/>
              )
          }): <div className="lds-dual-ring"></div>}
      </div>
    </>
  )
}

export default App
