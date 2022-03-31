import React, { useState } from "react";
import "./ShowAllNotes.css";

const ShowAllNotes = ({ note }) => {
  const [showButton, setShowButtons] = useState(false);
  console.log(note.color);
  const textColor =
    (note.color === "success" || note.color === "warning") && "gray-text";
  return (
    <>
      <div
        className={`note-container ${note.color}-bg-color ${textColor}`}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <strong>Title : {note.noteTitle}</strong>
        <div
          className={textColor + " show-note"}
          dangerouslySetInnerHTML={{ __html: note.note }}
        ></div>
        {showButton && (
          <div className="note-buttons">
            <span
              class="material-icons md-24 success-text"
              title="priview Note"
            >
              preview
            </span>

            <span class="material-icons md-24 " title="Edit Note">
              edit
            </span>

            <span
              class="material-icons md-24 primary-text"
              title="Move to Archive"
            >
              archive
            </span>
            <span class="material-icons md-24 danger-text" title="Delete Note">
              delete
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowAllNotes;
