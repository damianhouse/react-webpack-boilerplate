import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
import Div from "./components/Div/Div";
import Button from "./components/Button/Button";
import CKEditor from "ckeditor4-react";
const toolbar = [
    {
        name: "clipboard",
        items: [
            "Cut",
            "Copy",
            "Paste",
            "PasteText",
            "PasteFromWord",
            "-",
            "Undo",
            "Redo"
        ]
    },
    { name: "editing", items: ["Scayt"] },
    { name: "links", items: ["Link", "Unlink", "Anchor"] },
    {
        name: "insert",
        items: ["Image", "Table", "HorizontalRule", "SpecialChar"]
    },
    { name: "tools", items: ["Maximize"] },
    { name: "document", items: ["Source"] },
    "/",
    {
        name: "basicstyles",
        items: ["Bold", "Italic", "Strike", "-", "RemoveFormat"]
    },
    {
        name: "paragraph",
        items: [
            "NumberedList",
            "BulletedList",
            "-",
            "Outdent",
            "Indent",
            "-",
            "Blockquote"
        ]
    },
    { name: "styles", items: ["Styles", "Format"] },
    { name: "about", items: ["About"] }
];
const Index = () => {
    return (
        <Div className={styles.wrapper}>
            <Div>Hello world!</Div>
            <CKEditor
                data="<p>This is an example CKEditor 4 instance.</p>"
                toolbar={toolbar}
            />
            <Button>Here is my button!</Button>
        </Div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));
