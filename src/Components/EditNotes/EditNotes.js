import React from "react";
import { useParams } from "react-router-dom";
import { useNotes } from "../../Contexts";
import NoteEditor from "../NoteEditor/NoteEditor";
import "./EditNotes.css";

const EditNotes = () => {
  const { id } = useParams();
  const {
    noteState: { notes },
  } = useNotes();

  const editableNote = notes.find((_note) => _note._id === id);

  return (
    <div className="editNotes-container">
      <NoteEditor editableNote={editableNote} />
    </div>
  );
};

export default EditNotes;
