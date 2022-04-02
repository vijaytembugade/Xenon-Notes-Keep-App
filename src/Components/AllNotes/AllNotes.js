import React from "react";
import { useState } from "react";
import Quill from "../Quill/Quill";
import "./AllNotes.css";
import NoteEditor from "../NoteEditor/NoteEditor";
import { useNotes } from "../../Contexts";
import ShowAllNotes from "../ShowAllNotes/ShowAllNotes";

const AllNotes = () => {
  const [showNoteEditor, setShowNoteEditor] = useState(false);

  const {
    noteState: { notes },
  } = useNotes();

  return (
    <>
      <div className="allnotes-container">
        {!showNoteEditor && (
          <button
            className="btn btn-ternary-outline"
            onClick={() => setShowNoteEditor(true)}
          >
            <span className="material-icons">add_circle</span>
            Create New Note
          </button>
        )}
        {showNoteEditor && <NoteEditor setShowNoteEditor={setShowNoteEditor} />}

        <div className="show-all-notes-container">
          {notes
            .filter((note) => note.inTrash === false)
            .map((note) => {
              return <ShowAllNotes note={note} />;
            })}
        </div>
      </div>
    </>
  );
};

export default AllNotes;
