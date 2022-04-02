import React from "react";
import Quill from "../Quill/Quill";
import { useState } from "react";
import { RESET, SET_NOTES, SET_NOTE_TITLE } from "../../Constants";
import { useAuth, useNoteDetails, useNotes } from "../../Contexts";

import LabelCreator from "../LabelCreator/LabelCreator";
import { useLocation, matchPath, useNavigate } from "react-router-dom";
import ColorSelector from "../ColorSelector/ColorSelector";
import axios from "axios";

const NoteEditor = ({ setShowNoteEditor, editableNote }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [note, setNote] = useState(editableNote.note);

  const { noteDetailsState, noteDetailsDispatch: dispatch } = useNoteDetails();
  const {
    authState: { token },
  } = useAuth();

  const { noteDispatch } = useNotes();

  const { noteTitle, color, tags } = noteDetailsState;

  const handleNoteSave = async () => {
    const entireNote = { note, ...noteDetailsState };
    try {
      const responce = await axios.post(
        "/api/notes",
        {
          note: entireNote,
        },
        {
          headers: { authorization: token },
        }
      );

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
      const responce = await axios.post(
        `/api/notes/${editableNote._id}`,
        {
          note: entireNote,
        },
        {
          headers: { authorization: token },
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
          <ColorSelector />

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
