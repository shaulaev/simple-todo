import * as React from "react";
import cl from "./Button.module.css"

type Button = {
    text: string,
    transparent?: boolean,
    onClick: Function
}

const Button: React.FC<Button> = ({text, transparent, onClick}) => {

    return (
        <button onClick={() => onClick()} className={transparent ? cl.button + " " + cl.transparent : cl.button}>{text}</button>
    )
}

export default Button