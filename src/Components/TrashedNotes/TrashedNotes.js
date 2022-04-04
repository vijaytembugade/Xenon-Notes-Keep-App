import React from "react";
import { useNotes } from "../../Contexts";
import "./TrashedNotes.css";
import NoteContainer from "../NoteContainer/NoteContainer";

const TrashedNotes = () => {
  const {
    noteState: { notes },
  } = useNotes();

  const trashedNotes = notes.filter((note) => note.inTrash === true);

  return (
    <div className="trashed-note-container">
      {trashedNotes.map((note) => {
        return (
          <div className="">
            <NoteContainer note={note} />
          </div>
        );
      })}
    </div>
  );
};

export default TrashedNotes;
