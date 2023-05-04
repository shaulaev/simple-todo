import * as React from "react";
import cl from "./ToDo.module.css"
import { useState } from "react";
import x from "../../assets/svg/x.svg"
import {todo} from "../../types/types"

const ToDo: React.FC = ({deleteTodo, todo: todo}) => {

    const [check, setCheck] = useState<boolean>(todo.checkbox)

    const checkInput = () => {
        setCheck(!check)
    }

    return (
        <div className={cl.todo}>
            <input type="checkbox" onChange={checkInput} checked={check !== undefined ? check : false}/>
            <p>{todo.text}</p>
            <span className={check ? cl.lineOn : cl.lineOff} />
            <img onClick={() => deleteTodo(todo.id)} src={x} alt=""/>
        </div>
    )
}

export default ToDo