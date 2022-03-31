import React, { useState } from "react";
import { useNotes } from "../../Contexts";
import { getLabels, removeTrashedNotes } from "../../Utils";
import ShowAllNotes from "../ShowAllNotes/ShowAllNotes";
import "./LabledNotes.css";

const LabledNotes = () => {
  const [labedNotes, setlabledNotes] = useState([]);
  const {
    noteState: { notes },
  } = useNotes();

  const mainNotes = removeTrashedNotes(notes);
  const labels = getLabels(mainNotes);

  const handleShowNotesBylabel = (mainNotes, label) => {
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
        {labels.map((label, index) => {
          return (
            <div key={index}>
              <span
                className="label primary-text"
                onClick={() => handleShowNotesBylabel(mainNotes, label)}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="show-all-notes-container">
        {labedNotes.map((note) => {
          return <ShowAllNotes note={note} />;
        })}
      </div>
    </div>
  );
};

export default LabledNotes;
