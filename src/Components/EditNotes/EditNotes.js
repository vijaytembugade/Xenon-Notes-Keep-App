import React, { useEffect } from "react";
import { matchPath, useLocation, useParams } from "react-router-dom";
import { RESET } from "../../Constants";
import { useNoteDetails, useNotes } from "../../Contexts";
import NoteEditor from "../NoteEditor/NoteEditor";
import "./EditNotes.css";

const EditNotes = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const {
    noteState: { notes },
  } = useNotes();

  const { noteDetailsDispatch: dispatch } = useNoteDetails();

  useEffect(() => {
    if (!matchPath("/notes/edit/*", pathname)) {
      dispatch({ type: RESET });
    }

    return () => {
      dispatch({ type: RESET });
    };
  }, [pathname]);

  const editableNote = notes.find((_note) => _note._id === id);

  return (
    <div className="editNotes-container">
      <NoteEditor editableNote={editableNote} />
    </div>
  );
};

export default EditNotes;
