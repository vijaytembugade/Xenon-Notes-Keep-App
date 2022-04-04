import axios from "axios";
import { useReducer, useContext, createContext, useEffect } from "react";
import { SET_ARCHIVES } from "../../Constants";
import { archiveReducer } from "../../Reducers";
import { useAuth } from "../authContext/auth-context";

const ArchivesContext = createContext();

const ArchivesProvider = ({ children }) => {
  const {
    authState: { isLoggedIn, token },
  } = useAuth();
  const initialState = {
    archives: [],
  };
  const [archivesState, archivesDispatch] = useReducer(
    archiveReducer,
    initialState
  );

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        try {
          const response = await axios.get("/api/archives", {
            headers: { authorization: token },
          });
          archivesDispatch({
            type: SET_ARCHIVES,
            payload: response.data.archives,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      archivesDispatch({ type: SET_ARCHIVES, payload: [] });
    }
  }, [isLoggedIn]);

  return (
    <ArchivesContext.Provider value={{ archivesState, archivesDispatch }}>
      {children}
    </ArchivesContext.Provider>
  );
};

const useArchives = () => {
  const context = useContext(ArchivesContext);
  if (!context) {
    throw new Error("useArchives must be used within a ArchivesProvider");
  }

  return context;
};

export { useArchives, ArchivesProvider };
