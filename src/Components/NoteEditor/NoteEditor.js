import React, { useEffect } from "react";
import Quill from "../Quill/Quill";
import { useState } from "react";
import { useLocation, matchPath, useNavigate } from "react-router-dom";

import {
  RESET,
  SET_NOTES,
  SET_NOTE_TITLE,
  SET_PRIORITY,
} from "../../Constants";
import { useAuth, useNoteDetails, useNotes } from "../../Contexts";
import { noteEditService, noteSaveService } from "../../Services";

import LabelCreator from "../LabelCreator/LabelCreator";
import ColorSelector from "../ColorSelector/ColorSelector";

const NoteEditor = ({ setShowNoteEditor, editableNote }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [note, setNote] = useState(editableNote.note);

  const { noteDetailsState, noteDetailsDispatch: dispatch } = useNoteDetails();
  const {
    authState: { token },
  } = useAuth();

  const { noteDispatch } = useNotes();

  const { noteTitle, tags, priority } = noteDetailsState;

  const handleNoteSave = async () => {
    const entireNote = { note, ...noteDetailsState };
    try {
      const responce = await noteSaveService(entireNote, token);
      console.log(responce);
      if (responce !== undefined) {
        noteDispatch({ type: SET_NOTES, payload: responce.data.notes });
        dispatch({ type: RESET });
        setShowNoteEditor(false);
      } else {
        throw new Error("Unable to Save Note!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSave = async () => {
    const entireNote = { note, ...noteDetailsState };
    const { _id } = editableNote;
    console.log(entireNote);
    try {
      const responce = await noteEditService(entireNote, token, _id);

      if (responce !== undefined && responce.status === 201) {
        noteDispatch({ type: SET_NOTES, payload: responce.data.notes });
        navigate("/notes/all-notes");
      } else {
        throw new Error("Unable to Edit Note!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="note-editor">
        {editableNote ? (
          <div className="title title-md secondary-text">
            Edit Note with id: {editableNote._id}
          </div>
        ) : (
          <div className="title title-md secondary-text">Create New Note</div>
        )}
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
          <div className="flex-container color-priority">
            <span>Select Color:</span>
            <span>
              <ColorSelector />
            </span>
            <span>Set Priority:</span>
            <span>
              <select
                value={priority}
                className="filter-select"
                onChange={(e) =>
                  dispatch({ type: SET_PRIORITY, payload: e.target.value })
                }
              >
                <option className="select-option" value="">
                  Set Priority
                </option>
                <option className="select-option" value="HIGH">
                  HIGH
                </option>
                <option className="select-option" value="MEDIUM">
                  MEDIUM
                </option>
                <option className="select-option" value="LOW">
                  LOW
                </option>
              </select>
            </span>
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
