import React from "react";
import { Route, Routes } from "react-router-dom";
import NoteSidebar from "../../Components/NotesSidebar/NoteSidebar";
import AllNotes from "../../Components/AllNotes/AllNotes";
import "./Notes.css";
import ArchivedNotes from "../../Components/ArchivedNotes/ArchivedNotes";
import TrashedNotes from "../../Components/TrashedNotes/TrashedNotes";
import LabledNotes from "../../Components/LabeledNotes/LabledNotes";

const Notes = () => {
  return (
    <div className="notes">
      <NoteSidebar />
      <Routes>
        <Route path="all-notes" element={<AllNotes />} />
        <Route path="label" element={<LabledNotes />} />
        <Route path="trashed" element={<TrashedNotes />} />
        <Route path="archived" element={<ArchivedNotes />} />
      </Routes>
    </div>
  );
};

export default Notes;
