import React from "react";
import { useArchives } from "../../Contexts";
import ShowAllNotes from "../ShowAllNotes/ShowAllNotes";
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
          return <ShowAllNotes note={note} key={note._id} />;
        })}
      </div>
    </div>
  );
};

export default ArchivedNotes;
