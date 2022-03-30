import React from "react";
import { useState } from "react";
import Quill from "../Quill/Quill";
import "./AllNotes.css";
import NoteEditor from "../NoteEditor/NoteEditor";

const AllNotes = () => {
  const [value, setValue] = useState("");
  const [showNoteEditor, setShowNoteEditor] = useState(false);

  return (
    <div className="allnotes-container">
      {!showNoteEditor && (
        <button
          className="btn btn-ternary-outline"
          onClick={() => setShowNoteEditor(true)}
        >
          <span class="material-icons">add_circle</span>
          Create New Note
        </button>
      )}
      {showNoteEditor && <NoteEditor setShowNoteEditor={setShowNoteEditor} />}

      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </div>
  );
};

export default AllNotes;
