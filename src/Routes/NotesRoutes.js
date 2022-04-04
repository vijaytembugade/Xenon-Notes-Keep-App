import React from "react";
import { Route, Routes } from "react-router-dom";
import AllNotes from "../Components/AllNotes/AllNotes";
import ArchivedNotes from "../Components/ArchivedNotes/ArchivedNotes";
import EditNotes from "../Components/EditNotes/EditNotes";
import LabledNotes from "../Components/LabeledNotes/LabledNotes";
import TrashedNotes from "../Components/TrashedNotes/TrashedNotes";

const NotesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="all-notes" element={<AllNotes />} />
        <Route path="label" element={<LabledNotes />} />
        <Route path="trashed" element={<TrashedNotes />} />
        <Route path="archived" element={<ArchivedNotes />} />
        <Route path="edit/:id" element={<EditNotes />} />
      </Routes>
    </>
  );
};

export default NotesRoutes;
