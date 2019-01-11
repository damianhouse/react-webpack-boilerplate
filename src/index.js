import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
import Div from "./components/Div/Div";
import Button from "./components/Button/Button";
import Editor from "./CKEditor.jsx";


const Index = () => {
    return (
        <Div className={styles.wrapper}>
            <Editor />
        </Div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));
