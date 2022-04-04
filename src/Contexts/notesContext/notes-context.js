import axios from "axios";
import { useEffect, useReducer, useContext, createContext } from "react";
import { SET_NOTES } from "../../Constants";
import { useAuth } from "../../Contexts";
import { notesReducer } from "../../Reducers";
import {
  getBookMarkedNotes,
  getNoNBookMarkedNotes,
  removeTrashedNotes,
} from "../../Utils";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const {
    authState: { isLoggedIn, token },
  } = useAuth();

  const initialState = {
    notes: [],
  };

  const [noteState, noteDispatch] = useReducer(notesReducer, initialState);

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        try {
          const response = await axios.get("/api/notes", {
            headers: { authorization: token },
          });
          noteDispatch({ type: SET_NOTES, payload: response.data.notes });
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      noteDispatch({ type: SET_NOTES, payload: [] });
    }
  }, [isLoggedIn]);

  const notes = removeTrashedNotes(noteState.notes);
  const bookMarkedNotes = getBookMarkedNotes(notes);
  const mainNotes = getNoNBookMarkedNotes(notes);

  return (
    <NotesContext.Provider
      value={{ noteState, noteDispatch, bookMarkedNotes, mainNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes should be defined inside NoteProvider");
  }
  return context;
};

export { useNotes, NotesProvider };
