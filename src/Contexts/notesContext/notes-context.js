import axios from "axios";
import { useEffect, useReducer, useContext, createContext } from "react";

import { SET_NOTES } from "../../Constants";
import { useAuth } from "../../Contexts";
import { customAxios } from "../../Utils";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  const initialState = {
    notes: [],
  };

  const notesReducer = (state, action) => {
    switch (action.type) {
      case SET_NOTES: {
        return { ...state, notes: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const [noteState, noteDispatch] = useReducer(notesReducer, initialState);

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
