import React from "react";
import { SET_COLOR } from "../../Constants";
import { useNoteDetails } from "../../Contexts";

const ColorSelector = () => {
  const {
    noteDetailsState: { color },
    noteDetailsDispatch: dispatch,
  } = useNoteDetails();
  return (
    <>
      <div className="note-color-selector">
        <input
          type="radio"
          checked={color === "secondary"}
          className="secondary-radio-text"
          name="color"
          value="secondary"
          onChange={() => dispatch({ type: SET_COLOR, payload: "secondary" })}
        />
        <input
          type="radio"
          checked={color === "ternary"}
          className="ternary-radio-text"
          name="color"
          value="ternary"
          onChange={() => dispatch({ type: SET_COLOR, payload: "ternary" })}
        />
        <input
          type="radio"
          checked={color === "success"}
          className="success-radio-text"
          name="color"
          value="success"
          onChange={() => dispatch({ type: SET_COLOR, payload: "success" })}
        />
        <input
          type="radio"
          checked={color === "warning"}
          className="warning-radio-text"
          name="color"
          value="warning"
          onChange={() => dispatch({ type: SET_COLOR, payload: "warning" })}
        />
      </div>
    </>
  );
};

export default ColorSelector;
