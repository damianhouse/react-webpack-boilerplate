import React from "react";
import css from "./Button.css";
const Button = props => (
    <button className={css.button} {...props}>
        {props.children}
    </button>
);

export default Button;
