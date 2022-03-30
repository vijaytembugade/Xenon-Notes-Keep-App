import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input className="search-input" type="text" placeholder="Search" />
      <span className="material-icons search-button primary-text">search</span>
    </div>
  );
};

export default SearchBar;
