import React from "react";

import ShowAllNotes from "../ShowAllNotes/ShowAllNotes";
import "./BookMarkedNotes.css";

const BookMarkedNotes = ({ bookMarkedNotes }) => {
  return (
    <>
      <div className="bookmarkedNotes-conatiner">
        <div className="show-all-notes-container">
          {bookMarkedNotes?.map((note) => {
            return <ShowAllNotes note={note} key={note._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BookMarkedNotes;
