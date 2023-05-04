import * as React from "react";
import cl from "./Button.module.css"

type Button = {
    text: string,
    transparent: boolean,
    click: Function
}

const Button: React.FC = ({text, transparent, click}) => {

    return (
        <button onClick={() => click()} className={transparent ? cl.button + " " + cl.transparent : cl.button}>{text}</button>
    )
}

export default Button