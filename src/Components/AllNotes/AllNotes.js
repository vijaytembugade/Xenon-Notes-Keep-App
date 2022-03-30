import React from "react";
import { useState } from "react";
import Quill from "../Quill/Quill";
import "./AllNotes.css";

const AllNotes = () => {
  const [value, setValue] = useState("");
  return (
    <div className="allnotes-container">
      <div className="note-editor">
        <div className="title title-md secondary-text">Create New Note</div>
        <input className="note-title" type="text" placeholder="Title of Note" />
        <div className="new-note">
          <Quill value={value} setValue={setValue} />
          <input
            className="note-label"
            type="text"
            placeholder="Label of Note"
          />
          <div className="note-color-selector">
            <input type="radio" className="secondary-radio-text" name="color" />
            <input type="radio" className="ternary-radio-text" name="color" />
            <input type="radio" className="success-radio-text" name="color" />
            <input type="radio" className="warning-radio-text" name="color" />
          </div>
          <div className="flex-container">
            <button className="btn btn-primary-outline">Save</button>
            <button className="btn  btn-primary-outline">Cancle</button>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </div>
  );
};

export default AllNotes;
