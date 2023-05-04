import * as React from "react";
import cl from "./Input.module.css"

type Input = {
   state: React.ComponentState,
   setState: React.SetStateAction<any>
}

const Input: React.FC<Input> = ({state, setState}) => {

    console.log(state)

    return (
        <input className={cl.input} onChange={(e) => setState(e.target.value)} value={state} type="text"/>
    )
}

export default Input