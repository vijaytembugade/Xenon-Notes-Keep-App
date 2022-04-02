import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SET_ARCHIVES,
  SET_COLOR,
  SET_NOTES,
  SET_NOTE_TITLE,
  SET_TAGS,
} from "../../Constants";
import { useArchives, useNoteDetails, useNotes } from "../../Contexts";
import { customAxios } from "../../Utils";
import PreviewNote from "../PreviewNote/PreviewNote";
import "./ShowAllNotes.css";

const ShowAllNotes = ({ note }) => {
  const location = useLocation();

  const { noteDispatch } = useNotes();
  const { archivesDispatch } = useArchives();
  const { noteDetailsDispatch: dispatch } = useNoteDetails();

  const [showButton, setShowButtons] = useState(false);
  const [noteShow, setNoteShow] = useState({ show: false, note: "" });

  async function handleMoveToTrashNote(note) {
    try {
      const responce = await customAxios.post(`/api/notes/${note._id}`, {
        note: { ...note, inTrash: true },
      });
      noteDispatch({ type: SET_NOTES, payload: [...responce.data.notes] });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteNote(note) {
    try {
      const responce = await customAxios.delete(`/api/notes/${note._id}`);
      noteDispatch({ type: SET_NOTES, payload: [...responce.data.notes] });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleArchivesNotes(note) {
    try {
      const responce = await customAxios.post(
        `/api/notes/archives/${note._id}`,
        {
          note,
        }
      );
      noteDispatch({ type: SET_NOTES, payload: [...responce.data.notes] });
      archivesDispatch({
        type: SET_ARCHIVES,
        payload: [...responce.data.archives],
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRestoreNotes(note) {
    try {
      const responce = await customAxios.post(
        `/api/archives/restore/${note._id}`,
        {}
      );
      noteDispatch({ type: SET_NOTES, payload: [...responce.data.notes] });
      archivesDispatch({
        type: SET_ARCHIVES,
        payload: [...responce.data.archives],
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelteArchive(note) {
    try {
      const responce = await customAxios.delete(
        `/api/archives/delete/${note._id}`
      );
      archivesDispatch({
        type: SET_ARCHIVES,
        payload: [...responce.data.archives],
      });
    } catch (error) {
      console.log(error);
    }
  }
  const navigate = useNavigate();

  const handleEditNote = (note) => {
    dispatch({ type: SET_NOTE_TITLE, payload: note.noteTitle });
    dispatch({ type: SET_COLOR, payload: note.color });
    dispatch({ type: SET_TAGS, payload: note.tags });
    navigate(`/notes/edit/${note._id}`);
  };

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
              className="material-icons md-24 success-text"
              title="priview Note"
              onClick={() => setNoteShow({ show: true, note: note })}
            >
              preview
            </span>

            <span
              className="material-icons md-24 "
              title="Edit Note"
              onClick={() => handleEditNote(note)}
            >
              edit
            </span>

            {location.pathname === "/notes/archived" ? (
              <span
                className="material-icons md-24 primary-text"
                title="Restore From Archives"
                onClick={() => handleRestoreNotes(note)}
              >
                unarchive
              </span>
            ) : (
              <span
                className="material-icons md-24 primary-text"
                title="Move to Archive"
                onClick={() => handleArchivesNotes(note)}
              >
                archive
              </span>
            )}
            <span className="material-icons md-24 " title="BookMark">
              {note.starred ? "bookmark" : "bookmark_border"}
            </span>
            <span
              className="material-icons md-24 danger-text"
              title="Delete Note"
              onClick={() =>
                note.inTrash && location.pathname === "/notes/trashed"
                  ? handleDeleteNote(note)
                  : location.pathname === "/notes/archived"
                  ? handleDelteArchive(note)
                  : handleMoveToTrashNote(note)
              }
            >
              delete
            </span>
          </div>
        )}
      </div>

      {noteShow.show && (
        <PreviewNote note={noteShow.note} setNoteShow={setNoteShow} />
      )}
    </>
  );
};

export default ShowAllNotes;
