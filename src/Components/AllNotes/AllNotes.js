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
        <div>
          <input
            className="note-title"
            type="text"
            placeholder="Title of note"
          />
        </div>
        <div className="new-note">
          <Quill value={value} setValue={setValue} />
        </div>
      </div>

      <div className="note-editor-buttons">
        <span>Select Color</span>
        <div className="note-color-selector">
          <input
            type="radio"
            className="secondary-radio-text note-color-representator"
            name="color"
          />
          <input
            type="radio"
            className="ternary-radio-text note-color-representator"
            name="color"
          />
          <input
            type="radio"
            className="success-radio-text note-color-representator"
            name="color"
          />
          <input
            type="radio"
            className="warning-radio-text note-color-representator"
            name="color"
          />
        </div>

        <button className="btn btn-block btn-primary-outline">
          <span class="material-icons">save</span>
          Save
        </button>
      </div>

      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </div>
  );
};

export default AllNotes;
