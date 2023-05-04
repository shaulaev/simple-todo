import './App.css'
import ToDo from "./components/todo/ToDo";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import { useState } from "react";
import {todo} from "./types/types";

function App() {

    const [todos, setTodos] = useState<todo[]>([
        {id: 1, text: "Hello World", checkbox: false},
        {id: 3, text: "Hello World", checkbox: false},
        {id: 4, text: "Hello World", checkbox: false},
        {id: 5, text: "Hello World", checkbox: false},
        {id: 6, text: "Hello World", checkbox: false}
    ]),
        [input, setInput] = useState<string>("")

    const deleteTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }

    const addTodo = () => {
        setTodos([...todos, {id: Math.round(Math.random()), text: input, checkbox: false}])
    }

  return (
    <>
      <div className="main">
          <div className="inputWrapper">
              <Input state={input} setState={setInput}/>
              <Button click={addTodo} text={"Add"}/>
          </div>
          {todos.map((todo) => {
              return (
                  <ToDo key={todo.id} deleteTodo={deleteTodo} todo={todo}/>
              )
          })}
      </div>
    </>
  )
}

export default App
