import React, { useEffect, useState } from "react";
import { useNotes } from "../../Contexts";
import { getLabels, removeTrashedNotes } from "../../Utils";
import ShowAllNotes from "../ShowAllNotes/ShowAllNotes";
import "./LabledNotes.css";

const LabledNotes = () => {
  const [showOnlyLabledNote, setShowOnlyLabledNotes] = useState(false);
  const [labedNotes, setlabledNotes] = useState([]);

  const {
    noteState: { notes },
  } = useNotes();

  const mainNotes = removeTrashedNotes(notes);
  const labels = getLabels(mainNotes);

  useEffect(() => {
    console.log(notes);
  });

  const handleShowNotesBylabel = (mainNotes, label) => {
    setShowOnlyLabledNotes(true);
    setlabledNotes(
      mainNotes.filter((note) => {
        return note.tags.includes(label);
      })
    );
  };

  return (
    <div className="all-labels-contailer">
      <p>Click on label to see notes</p>
      <div className="label-container">
        <span
          className="label primary-text"
          onClick={() => setShowOnlyLabledNotes(false)}
        >
          All Notes
        </span>
        {labels.map((label, index) => {
          return (
            <span
              className="label primary-text"
              key={index}
              onClick={() => handleShowNotesBylabel(mainNotes, label)}
            >
              {label}
            </span>
          );
        })}
      </div>
      <div className="show-all-notes-container">
        {!showOnlyLabledNote &&
          mainNotes.map((note) => {
            return <ShowAllNotes note={note} key={note._id} />;
          })}
        {showOnlyLabledNote &&
          labedNotes.map((note) => {
            return <ShowAllNotes note={note} key={note._id} />;
          })}
      </div>
    </div>
  );
};

export default LabledNotes;
