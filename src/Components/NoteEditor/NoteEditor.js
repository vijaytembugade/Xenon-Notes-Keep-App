import React, { useEffect } from "react";
import Quill from "../Quill/Quill";
import { useState, useReducer } from "react";
import {
  SET_COLOR,
  SET_IN_TRASH,
  SET_NOTES,
  SET_NOTE_TITLE,
  SET_PRIORITY,
  SET_STARRED,
  SET_TAGS,
} from "../../Constants";
import { customAxios } from "../../Utils";
import { useNoteDetails, useNotes } from "../../Contexts";

import LabelCreator from "../LabelCreator/LabelCreator";

const NoteEditor = ({ setShowNoteEditor }) => {
  const [note, setNote] = useState("");

  const { noteDispatch } = useNotes();

  const { noteDetailsState, noteDetailsDispatch: dispatch } = useNoteDetails();

  const { noteTitle, color, inTrash, priority, starred, tags } =
    noteDetailsState;

  const handleNoteSave = async () => {
    const entireNote = { note, ...noteDetailsState };
    try {
      const responce = await customAxios.post("/api/notes", {
        note: entireNote,
      });

      noteDispatch({ type: SET_NOTES, payload: responce.data.notes });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="note-editor">
        <div className="title title-md secondary-text">Create New Note</div>
        <input
          className="note-title"
          type="text"
          placeholder="Title of Note"
          value={noteTitle}
          onChange={(e) =>
            dispatch({ type: SET_NOTE_TITLE, payload: e.target.value })
          }
        />
        <div className="new-note">
          <Quill value={note} setValue={setNote} />
          <LabelCreator tags={tags} />
          <div className="note-color-selector">
            <input
              type="radio"
              checked={color === "secondary"}
              className="secondary-radio-text"
              name="color"
              value="secondary"
              onChange={() =>
                dispatch({ type: SET_COLOR, payload: "secondary" })
              }
            />
            <input
              type="radio"
              checked={color === "ternary"}
              className="ternary-radio-text"
              name="color"
              value="ternary"
              onChange={() => dispatch({ type: SET_COLOR, payload: "ternary" })}
            />
            <input
              type="radio"
              checked={color === "success"}
              className="success-radio-text"
              name="color"
              value="success"
              onChange={() => dispatch({ type: SET_COLOR, payload: "success" })}
            />
            <input
              type="radio"
              checked={color === "warning"}
              className="warning-radio-text"
              name="color"
              value="warning"
              onChange={() => dispatch({ type: SET_COLOR, payload: "warning" })}
            />
          </div>
          <div className="flex-container">
            <button
              className="btn btn-primary-outline"
              onClick={handleNoteSave}
            >
              Save
            </button>
            <button
              className="btn  btn-primary-outline"
              onClick={() => setShowNoteEditor(false)}
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteEditor;
