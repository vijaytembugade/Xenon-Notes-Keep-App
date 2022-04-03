import React from "react";
import { useArchives } from "../../Contexts";
import NoteContainer from "../NoteContainer/NoteContainer";
import "./ArchivedNotes.css";

const ArchivedNotes = () => {
  const {
    archivesState: { archives },
  } = useArchives();

  return (
    <div className="archives-container">
      <p className="title">Archived Notes</p>
      <div className="show-all-notes-container">
        {archives.map((note) => {
          return <NoteContainer note={note} key={note._id} />;
        })}
      </div>
    </div>
  );
};

export default ArchivedNotes;
