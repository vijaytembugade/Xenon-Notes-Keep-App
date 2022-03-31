import React, { useEffect, useState } from "react";
import Creatable from "react-select/creatable";
import { SET_TAGS } from "../../Constants";
import { useNoteDetails } from "../../Contexts";
import { customStyles } from "../../Utils";
import "./LabelCreator.css";

const options = [
  { value: "Label 1", label: "Label 1" },
  { value: "Label 2", label: "Label-2" },
];
const LabelCreator = ({ tags }) => {
  const [selectedOption, setSelectedOption] = useState(tags);

  const { noteDetailsDispatch } = useNoteDetails();

  useEffect(() => {
    const tags = selectedOption.map((value) => {
      return value.value;
    });

    noteDetailsDispatch({ type: SET_TAGS, payload: tags });
  }, [selectedOption, noteDetailsDispatch]);

  return (
    <>
      <div className="labelCreator">
        <Creatable
          styles={customStyles}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isMulti={true}
          placeholder="Labels..."
        />
      </div>
    </>
  );
};

export default LabelCreator;
