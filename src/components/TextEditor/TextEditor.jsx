import React, { lazy, Suspense, useState } from "react";
import "./TextEditor.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";


// This is the main text editor. It mirrors the functionality present on google docs. It uses react-draft-wysiwyg library.

const loadEditor = () =>
  import("react-draft-wysiwyg").then((module) => ({ default: module.Editor }));      
const Editor = lazy(loadEditor);
const TextEditor = ({ toggleOpen }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (state) => {
    setEditorState(state);
  };

  return (
    <div className="texteditor" aria-expanded={toggleOpen}>
      <Suspense fallback={<div>Loading</div>}>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </Suspense>
    </div>
  );
};

export default TextEditor;
