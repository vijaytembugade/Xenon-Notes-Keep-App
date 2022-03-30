import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../../Reducers";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    user: localStorage.getItem("AUTH_USER") || undefined,
    isLoggedIn: localStorage.getItem("AUTH_TOKEN") ? true : false,
    token: localStorage.getItem("AUTH_TOKEN") || undefined,
    loading: false,
    error: undefined,
  };

  const [authState, authDispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { useAuth, AuthProvider };
