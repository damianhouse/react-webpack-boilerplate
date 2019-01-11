import React, { Component } from "react";
import styles from './index.css';
import CKEditor from "ckeditor4-react";
const config = {
    toolbar: [
        {
            name: "clipboard",
            items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        },
        { name: "editing", items: ["Scayt"] },
        { name: "links", items: ["Link", "Unlink", "Anchor"] },
        {
            name: "insert",
            items: ["Image", "Table", "HorizontalRule", "SpecialChar"]
        },
        { name: "tools", items: ["Maximize"] },
        { name: "document", items: ["Source"] },
        {
            name: "basicstyles",
            items: ["Bold", "Italic", "Strike", "-", "RemoveFormat"]
        },
        {
            name: "paragraph",
            items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote"]
        },
        { name: "styles", items: ["Styles", "Format"] }
    ]
};

export default class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "<p>This is CKEditor 4 instance created by ️⚛️ React.</p>"
        };

        this.handleChange = this.handleChange.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this);
    }

    onEditorChange(evt) {
        this.setState({
            data: evt.editor.getData()
        });
    }

    handleChange(changeEvent) {
        this.setState({
            data: changeEvent.target.value
        });
    }

    render() {
        return (
            <div className={styles["editor-wrapper"]}>
                <SourceEditor data={this.state.data} handler={this.handleChange} styles={styles["editor-item"]} />
                <div className={styles["editor-item"]}>
                <CKEditor
                        data={this.state.data}
                        onChange={this.onEditorChange}
                        style={{
                            float: "left",
                            width: "50%"
                        }}
                        config={config}
                    />
                </div>

                <div className={styles["editor-item"]}>
                    <EditorPreview data={this.state.data} />
                </div>
            </div>
        );
    }
}

class EditorPreview extends Component {
    render() {
        return (
            <div className="editor-preview">
                <h2>Rendered content:</h2>
                <div dangerouslySetInnerHTML={{ __html: this.props.data }} />
            </div>
        );
    }
}

class SourceEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false
        };
    }

    render() {
        var textareaValue = {};

        if (!this.state.focused) {
            textareaValue = {
                value: this.props.data
            };
        }

        return (
            <div styles={this.props.styles}>
                <p>
                    <label htmlFor="editor-editor">Change value:</label>
                </p>
                <p>
                    <textarea
                        id="editor-editor"
                        className={styles.source}
                        {...textareaValue}
                        onChange={this.props.handler}
                        onFocus={() => {
                            this.setState({
                                focused: true
                            });
                        }}
                        onBlur={() => {
                            this.setState({
                                focused: false
                            });
                        }}
                    />
                </p>
            </div>
        );
    }
}
