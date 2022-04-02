import { useReducer, useContext, createContext, useEffect } from "react";
import { SET_ARCHIVES } from "../../Constants";
import { archiveReducer } from "../../Reducers";
import { customAxios } from "../../Utils";
import { useAuth } from "../authContext/auth-context";

const ArchivesContext = createContext();

const ArchivesProvider = ({ children }) => {
  const {
    authState: { isLoggedIn },
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
          const responce = await customAxios.get("/api/archives");
          archivesDispatch({
            type: SET_ARCHIVES,
            payload: responce.data.archives,
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
