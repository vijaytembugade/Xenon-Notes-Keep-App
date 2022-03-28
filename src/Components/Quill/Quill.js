import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import "./Quill.css";

const Quill = ({ value, setValue }) => {
  //   const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  useEffect(() => {
    console.log(value);
  });
  return (
    <ReactQuill
      className="quill-editor"
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      onChange={setValue}
    >
      <div className="my-editing-area" />
    </ReactQuill>
  );
};

export default Quill;
