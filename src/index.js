import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
import Div from "./components/Div";

const Index = () => {
    return <Div className={styles.wrapper}>Hello world!</Div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
