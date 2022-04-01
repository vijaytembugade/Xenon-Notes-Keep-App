import React from "react";
import { useArchives } from "../../Contexts";
import ShowAllNotes from "../ShowAllNotes/ShowAllNotes";
import "./ArchivedNotes.css";

const ArchivedNotes = () => {
  const {
    archivesState: { archives },
    archivesDispatch,
  } = useArchives();

  console.log(archives);

  return (
    <div className="archives-container">
      <p className="title">Archived Notes</p>
      <div className="show-all-notes-container">
        {archives.map((note) => {
          return <ShowAllNotes note={note} />;
        })}
      </div>
    </div>
  );
};

export default ArchivedNotes;
