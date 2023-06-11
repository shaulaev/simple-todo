import * as React from "react";
import cl from "./Button.module.css"

type Button = {
    text: string,
    transparent?: boolean,
    round?: boolean,
    onClick: Function
}

const Button: React.FC<Button> = ({text,onClick}) => {

    return (
        <button onClick={() => onClick()} className={cl.button + " " + cl.round}>{text}</button>
    )
}

export default Button