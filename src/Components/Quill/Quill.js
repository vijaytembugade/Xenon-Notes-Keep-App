import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Quill.css";

const Quill = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["code-block", "code"],
    ],
  };

  return (
    <ReactQuill
      className="quill-editor"
      theme="snow"
      modules={modules}
      // formats={formats}
      value={value}
      onChange={setValue}
    >
      <div className="my-editing-area"></div>
    </ReactQuill>
  );
};

export default Quill;
