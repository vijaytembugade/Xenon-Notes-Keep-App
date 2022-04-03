import React from "react";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import "./PreviewNote.css";

const PreviewNote = ({ note, setNoteShow }) => {
  useLockBodyScroll();
  return (
    <div className="modal">
      <dialog open>
        <h2>Title : {note.noteTitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: note.note }}></div>
        <span className="close-modal danger-bg-color ">
          <span
            className="material-icons md-24"
            onClick={() => setNoteShow({ show: false, note: "" })}
          >
            cancel
          </span>
        </span>
      </dialog>
    </div>
  );
};

export default PreviewNote;
