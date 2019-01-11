import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
import Div from "./components/Div/Div";
import Button from "./components/Button/Button";

const Index = () => {
    return (
        <Div className={styles.wrapper}>
            <Div>Hello world!</Div>
            <Button>Here is my button!</Button>
        </Div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));
