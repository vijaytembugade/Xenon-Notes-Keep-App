import React, { useState } from "react";
import "./AllNotes.css";
import NoteEditor from "../NoteEditor/NoteEditor";
import { useFilter, useNotes } from "../../Contexts";
import NoteContainer from "../NoteContainer/NoteContainer";
import BookMarkedNotes from "../BookMarkedNotes/BookMarkedNotes";
import NotesFilter from "../NotesFilter/NotesFilter";
import { priorityFilter, sortByDateFilter } from "../../Utils";

const AllNotes = () => {
  const [showNoteEditor, setShowNoteEditor] = useState(false);
  const { bookMarkedNotes, mainNotes } = useNotes();
  const {
    filterState: { sortByDate, sortByPriority },
  } = useFilter();

  const sortbyDateFilterNotes = sortByDateFilter(mainNotes, sortByDate);

  const priorityByFilterNotes = priorityFilter(
    sortbyDateFilterNotes,
    sortByPriority
  );

  const notes = priorityByFilterNotes;

  return (
    <>
      <div className="allnotes-container">
        <div className="create-note-filter">
          {!showNoteEditor && (
            <button
              className="btn btn-ternary-outline mr-1"
              onClick={() => setShowNoteEditor(true)}
            >
              <span className="material-icons">add_circle</span>
              Create New Note
            </button>
          )}
          {!showNoteEditor && <NotesFilter />}
        </div>

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
          {notes.map((note) => {
            return <NoteContainer note={note} key={note._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AllNotes;
