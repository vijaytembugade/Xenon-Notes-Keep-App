import React from "react";
import NoteSidebar from "../../Components/NotesSidebar/NoteSidebar";
import "./Notes.css";
import NotesRoutes from "../../Routes/NotesRoutes";

const Notes = () => {
  return (
    <div className="notes">
      <NoteSidebar />
      <NotesRoutes />
    </div>
  );
};

export default Notes;
