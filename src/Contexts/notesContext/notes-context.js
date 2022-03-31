import { useEffect, useReducer, useContext, createContext } from "react";
import { SET_NOTES } from "../../Constants";
import { useAuth } from "../../Contexts";
import { notesReducer } from "../../Reducers";
import { customAxios } from "../../Utils";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const {
    authState: { isLoggedIn },
  } = useAuth();

  const initialState = {
    notes: [],
  };

  const [noteState, noteDispatch] = useReducer(notesReducer, initialState);

  useEffect(() => {
    console.log(noteState);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await customAxios.get("/api/notes");
        noteDispatch({ type: SET_NOTES, payload: responce.data.notes });
        console.log(responce);
      } catch (error) {
        console.log(error);
      }
    };
    if (isLoggedIn) {
      fetchData();
    } else {
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