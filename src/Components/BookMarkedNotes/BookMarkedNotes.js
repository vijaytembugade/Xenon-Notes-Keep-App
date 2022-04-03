import React from "react";

import NoteContainer from "../NoteContainer/NoteContainer";
import "./BookMarkedNotes.css";

const BookMarkedNotes = ({ bookMarkedNotes }) => {
  return (
    <>
      <div className="bookmarkedNotes-conatiner">
        <div className="show-all-notes-container">
          {bookMarkedNotes?.map((note) => {
            return <NoteContainer note={note} key={note._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BookMarkedNotes;
