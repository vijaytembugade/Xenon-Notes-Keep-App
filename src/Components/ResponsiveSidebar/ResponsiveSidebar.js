import React from "react";
import { Link } from "react-router-dom";
import "./ResponsiveSidebar.css";

const ResponsiveSidebar = ({ setShowNavbar }) => {
  return (
    <div>
      <div className="responsive-sidebar">
        <div onClick={() => setShowNavbar((prevState) => !prevState)}>
          <Link to="/notes/all-notes">Notes</Link>
        </div>
        <div onClick={() => setShowNavbar((prevState) => !prevState)}>
          <Link to="/notes/label">Labels</Link>
        </div>
        <div onClick={() => setShowNavbar((prevState) => !prevState)}>
          <Link to="/notes/archived">Archived</Link>
        </div>
        <div onClick={() => setShowNavbar((prevState) => !prevState)}>
          <Link to="/notes/trashed">Trashed</Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
