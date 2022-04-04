import React, { useState } from "react";
import { CLEAR_FILTER, SORT_BY_DATE, SORT_BY_PRIORITY } from "../../Constants";
import { useFilter } from "../../Contexts";
import "./NoteFilter.css";

const NotesFilter = () => {
  const [showFilterDiv, setShowFilterDiv] = useState(false);

  const {
    filterState: { sortByDate, sortByPriority },
    filterDispatch,
  } = useFilter();
  return (
    <div className="filter-container classic-bg-color">
      {!showFilterDiv && (
        <div className="filter-heading" onClick={() => setShowFilterDiv(true)}>
          <span className="flex-title  secondary-text">Filter By</span>
          <span class="material-icons md-36">expand_more</span>
        </div>
      )}
      {showFilterDiv && (
        <div className="filter-flex-container">
          <p className="flex-title title secondary-text">Filter By</p>

          <span
            className="close-and-clear"
            onClick={() => setShowFilterDiv(false)}
          >
            <span class="material-icons">cancel</span>
          </span>
          <span
            className="btn btn-small btn-primary-outline clear-filter"
            onClick={() => filterDispatch({ type: CLEAR_FILTER })}
          >
            Clear
          </span>
          <div className="flex-container-verticle">
            <p className="ternary-text title">Date</p>
            <label className="sort-by-date">
              <input
                type="radio"
                name="date"
                checked={sortByDate === "new-to-old"}
                value="new-to-old"
                onChange={() =>
                  filterDispatch({ type: SORT_BY_DATE, payload: "new-to-old" })
                }
              />
              <span>New to old</span>
            </label>
            <label className="sort-by-date">
              <input
                type="radio"
                name="date"
                checked={sortByDate === "old-to-new"}
                value="old-to-new"
                onChange={() =>
                  filterDispatch({ type: SORT_BY_DATE, payload: "old-to-new" })
                }
              />
              <span>Old to new</span>
            </label>
          </div>
          <div>
            <p className="ternary-text title">Priority</p>
            <select
              className="filter-select"
              value={sortByPriority}
              onChange={(e) =>
                filterDispatch({
                  type: SORT_BY_PRIORITY,
                  payload: e.target.value,
                })
              }
            >
              <option className="select-option" value="">
                Set Priority
              </option>
              <option className="select-option" value="HIGH">
                HIGH
              </option>
              <option className="select-option" value="MEDIUM">
                MEDIUM
              </option>
              <option className="select-option" value="LOW">
                LOW
              </option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesFilter;
