import axios from "axios";
import { useEffect, useReducer, useContext, createContext } from "react";
import { SET_NOTES } from "../../Constants";
import { useAuth } from "../../Contexts";
import { notesReducer } from "../../Reducers";
import { customAxios } from "../../Utils";

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
          const responce = await axios.get("/api/notes", {
            headers: { authorization: token },
          });
          console.log("from await");
          noteDispatch({ type: SET_NOTES, payload: responce.data.notes });
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      console.log("from else");
      noteDispatch({ type: SET_NOTES, payload: [] });
    }
  }, [isLoggedIn]);
  return (
    <NotesContext.Provider value={{ noteState, noteDispatch }}>
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
