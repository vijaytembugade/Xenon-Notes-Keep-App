import React from "react";
import { useState } from "react";
import "./AllNotes.css";
import NoteEditor from "../NoteEditor/NoteEditor";
import { useNotes } from "../../Contexts";
import ShowAllNotes from "../ShowAllNotes/ShowAllNotes";
import {
  getBookMarkedNotes,
  getNoNBookMarkedNotes,
  removeTrashedNotes,
} from "../../Utils";
import BookMarkedNotes from "../BookMarkedNotes/BookMarkedNotes";

const AllNotes = () => {
  const [showNoteEditor, setShowNoteEditor] = useState(false);

  const { noteState } = useNotes();

  const notes = removeTrashedNotes(noteState.notes);
  const bookMarkedNotes = getBookMarkedNotes(notes);
  const mainNotes = getNoNBookMarkedNotes(notes);

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
            return <ShowAllNotes note={note} key={note._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AllNotes;
