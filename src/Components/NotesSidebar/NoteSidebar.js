import React from "react";
import { NavLink } from "react-router-dom";
import "./NotesSidebar.css";

const NoteSidebar = () => {
  return (
    <div className="notesidebar">
      <ul className="notesidebar-list">
        <NavLink to="/notes/all-notes">
          <li>
            <span class="material-icons">text_snippet</span>
            <span> Notes</span>
          </li>
        </NavLink>
        <NavLink to="/notes/archived">
          <li>
            <span class="material-icons">archive</span>
            <span>Archied</span>
          </li>
        </NavLink>

        <NavLink to="/notes/trashed">
          <li>
            <span class="material-icons">delete</span>
            <span>Trash</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NoteSidebar;
