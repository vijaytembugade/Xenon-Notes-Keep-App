import React, { useState } from "react";
import "./AllNotes.css";
import NoteEditor from "../NoteEditor/NoteEditor";
import { useNotes } from "../../Contexts";
import NoteContainer from "../NoteContainer/NoteContainer";
import BookMarkedNotes from "../BookMarkedNotes/BookMarkedNotes";

const AllNotes = () => {
  const [showNoteEditor, setShowNoteEditor] = useState(false);

  const { bookMarkedNotes, mainNotes } = useNotes();

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

        <div>
          {bookMarkedNotes.length > 0 && (
            <span className="title">Bookmarked</span>
          )}
          <BookMarkedNotes bookMarkedNotes={bookMarkedNotes} />
        </div>

        {bookMarkedNotes.length > 0 && mainNotes.length > 0 && (
          <span className="title">Others</span>
        )}
        <div className="show-all-notes-container">
          {mainNotes.map((note) => {
            return <NoteContainer note={note} key={note._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AllNotes;
