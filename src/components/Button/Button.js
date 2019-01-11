import React from "react";
import style from "./Button.scss";
const Button = props => (
    <button className={style.button} {...props}>
        {props.children}
    </button>
);

export default Button;
