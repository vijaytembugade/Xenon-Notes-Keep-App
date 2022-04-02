import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SET_ARCHIVES,
  SET_COLOR,
  SET_NOTES,
  SET_NOTE_TITLE,
  SET_TAGS,
} from "../../Constants";
import { useArchives, useAuth, useNoteDetails, useNotes } from "../../Contexts";
import PreviewNote from "../PreviewNote/PreviewNote";
import "./ShowAllNotes.css";

const ShowAllNotes = ({ note }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { noteDispatch } = useNotes();
  const { archivesDispatch } = useArchives();
  const { noteDetailsDispatch: dispatch } = useNoteDetails();
  const {
    authState: { token },
  } = useAuth();

  const [showButton, setShowButtons] = useState(false);
  const [noteShow, setNoteShow] = useState({ show: false, note: "" });

  async function handleMoveToTrashNote(note) {
    try {
      const responce = await axios.post(
        `/api/notes/${note._id}`,
        {
          note: { ...note, inTrash: true },
        },
        {
          headers: { authorization: token },
        }
      );
      noteDispatch({ type: SET_NOTES, payload: [...responce.data.notes] });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteNote(note) {
    try {
      const responce = await axios.delete(`/api/notes/${note._id}`, {
        headers: { authorization: token },
      });
      noteDispatch({ type: SET_NOTES, payload: [...responce.data.notes] });
    } catch (error) {
      console.log(error);
    }
  }

  async function hadleNoteBookMark(note) {
    try {
      const responce = await axios.post(
        `/api/notes/${note._id}`,
        {
          note: { ...note, starred: !note.starred },
        },
        {
          headers: { authorization: token },
        }
      );
      noteDispatch({ type: SET_NOTES, payload: [...responce.data.notes] });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleArchivesNotes(note) {
    try {
      const responce = await axios.post(
        `/api/notes/archives/${note._id}`,
        {
          note,
        },
        {
          headers: { authorization: token },
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
      const responce = await axios.post(
        `/api/archives/restore/${note._id}`,
        {},
        {
          headers: { authorization: token },
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

  async function handleDeleteArchive(note) {
    try {
      const responce = await axios.delete(`/api/archives/delete/${note._id}`, {
        headers: { authorization: token },
      });
      archivesDispatch({
        type: SET_ARCHIVES,
        payload: [...responce.data.archives],
      });
    } catch (error) {
      console.log(error);
    }
  }

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

            {pathname === "/notes/all-notes" && (
              <span
                className="material-icons md-24 "
                title="Edit Note"
                onClick={() => handleEditNote(note)}
              >
                edit
              </span>
            )}

            {pathname !== "/notes/trashed" &&
              (pathname === "/notes/archived" ? (
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
              ))}

            {pathname === "/notes/all-notes" && (
              <span
                className="material-icons md-24 "
                title="BookMark"
                onClick={() => hadleNoteBookMark(note)}
              >
                {note.starred ? "bookmark" : "bookmark_border"}
              </span>
            )}
            <span
              className="material-icons md-24 danger-text"
              title="Delete Note"
              onClick={() =>
                note.inTrash && location.pathname === "/notes/trashed"
                  ? handleDeleteNote(note)
                  : location.pathname === "/notes/archived"
                  ? handleDeleteArchive(note)
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
