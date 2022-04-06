import { createContext, useContext, useReducer } from "react";
import { noteDetailsReducer } from "../../Reducers";

const NoteDetailsContext = createContext();

const NoteDetailsProvider = ({ children }) => {
  const initialState = {
    noteTitle: "",
    color: "",
    inTrash: false,
    priority: "",
    starred: false,
    tags: [],
  };

  const [noteDetailsState, noteDetailsDispatch] = useReducer(
    noteDetailsReducer,
    initialState
  );
  return (
    <NoteDetailsContext.Provider
      value={{ noteDetailsState, noteDetailsDispatch }}
    >
      {children}
    </NoteDetailsContext.Provider>
  );
};

const useNoteDetails = () => useContext(NoteDetailsContext);

export { NoteDetailsProvider, useNoteDetails };
