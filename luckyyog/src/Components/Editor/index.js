import React, { useRef } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./Toolbar";
import "react-quill/dist/quill.snow.css";

export const Editor = ({ id = "", className = "", value = "", changeHandler = () => { } }) => {
    const editorRef = useRef(null)
    console.log(value, "value of form post")
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <EditorToolbar editorRef={editorRef} />
            <ReactQuill
                ref={editorRef}
                id={id}
                className={className}
                theme="snow"
                value={value}
                onChange={changeHandler}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};

export default Editor;