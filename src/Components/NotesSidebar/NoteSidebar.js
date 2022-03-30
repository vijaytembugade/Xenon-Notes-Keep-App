import React from "react";
import { NavLink } from "react-router-dom";
import "./NotesSidebar.css";

const NoteSidebar = () => {
  return (
    <div className="notesidebar">
      <ul className="notesidebar-list">
        <NavLink
          to="/notes/all-notes"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>
            <span class="material-icons">text_snippet</span>
            <span> Notes</span>
          </li>
        </NavLink>
        <NavLink
          to="/notes/label"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>
            <span class="material-icons">label</span>
            <span> Label</span>
          </li>
        </NavLink>
        <NavLink
          to="/notes/archived"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>
            <span class="material-icons">archive</span>
            <span>Archied</span>
          </li>
        </NavLink>

        <NavLink
          to="/notes/trashed"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
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
