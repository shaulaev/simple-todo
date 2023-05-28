import * as React from "react";
import cl from "./ToDo.module.css"
import { useState } from "react";
import x from "../../assets/svg/x.svg"
import {todo} from "../../types/types"
import { useAppDispatch } from "../../store/store";
import { completeTodo, deleteTodo } from "../../api/todoApi";

type Todo = {
    todo: todo
}

const ToDo: React.FC<Todo> = ({todo}) => {

    const dispatch = useAppDispatch()

    const [check, setCheck] = useState<boolean>(todo.checkbox)

    const complete = () => {
        setCheck(!check)
        dispatch(completeTodo(todo))
    }

    const deleteTodoFunc = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <div className={cl.todo}>
            <input type="checkbox" onChange={complete} checked={check !== undefined ? check : false}/>
            <p>{todo.text}</p>
            <span className={check ? cl.lineOn : cl.lineOff} />
            <img onClick={deleteTodoFunc} src={x} alt=""/>
        </div>
    )
}

export default ToDo