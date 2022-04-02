import React, { useEffect } from "react";
import Quill from "../Quill/Quill";
import { useState } from "react";
import { RESET, SET_COLOR, SET_NOTES, SET_NOTE_TITLE } from "../../Constants";
import { customAxios } from "../../Utils";
import { useNoteDetails, useNotes } from "../../Contexts";

import LabelCreator from "../LabelCreator/LabelCreator";
import { useLocation, matchPath, useNavigate } from "react-router-dom";

const NoteEditor = ({ setShowNoteEditor, editableNote }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [note, setNote] = useState(editableNote.note);

  const { noteDetailsState, noteDetailsDispatch: dispatch } = useNoteDetails();

  const { noteDispatch } = useNotes();

  const { noteTitle, color, inTrash, priority, starred, tags } =
    noteDetailsState;

  const handleNoteSave = async () => {
    const entireNote = { note, ...noteDetailsState };
    try {
      const responce = await customAxios.post("/api/notes", {
        note: entireNote,
      });

      noteDispatch({ type: SET_NOTES, payload: responce.data.notes });
      dispatch({ type: RESET });
      setShowNoteEditor(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSave = async () => {
    const entireNote = { note, ...noteDetailsState };
    try {
      const responce = await customAxios.post(
        `/api/notes/${editableNote._id}`,
        {
          note: entireNote,
        }
      );

      noteDispatch({ type: SET_NOTES, payload: responce.data.notes });
      navigate("/notes/all-notes");
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

          {matchPath("/notes/edit/*", pathname) ? (
            <div className="flex-container">
              <button
                className="btn btn-primary-outline"
                onClick={handleEditSave}
              >
                Edit
              </button>
              <button
                className="btn  btn-primary-outline"
                onClick={() => navigate("/notes/all-notes")}
              >
                Back
              </button>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

NoteEditor.defaultProps = {
  editableNote: "",
  setShowNoteEditor: () => {},
};
export default NoteEditor;
