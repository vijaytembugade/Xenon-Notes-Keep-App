import { createContext, useContext, useReducer } from "react";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../../Constants/AuthConstants/auth-constants";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    user: localStorage.getItem("AUTH_USER") || undefined,
    isLoggedIn: localStorage.getItem("AUTH_TOKEN") ? true : false,
    token: localStorage.getItem("AUTH_TOKEN") || undefined,
    loading: false,
    error: undefined,
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case LOGIN_REQUEST: {
        return { ...state, loading: true };
      }
      case LOGIN_SUCCESS: {
        return {
          ...state,
          user: localStorage.getItem("AUTH_USER") || undefined,
          token: localStorage.getItem("AUTH_TOKEN") || undefined,
          loading: false,
          isLoggedIn: true,
        };
      }
      case LOGIN_FAIL: {
        return { ...state, erorr: action.payload, loading: false };
      }
      case LOGOUT: {
        return { ...state, isLoggedIn: false, user: undefined, token: null };
      }
      default:
        return { ...state };
    }
  };

  const loginService = async (email, password) => {
    try {
      if (email === "" || password === "") {
        throw new Error("Email or Password could not be empty");
      }
      authDispatch({ type: LOGIN_REQUEST });
      const responce = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("AUTH_TOKEN", responce.data.encodedToken);
      localStorage.setItem("AUTH_USER", responce.data.foundUser.email);
      authDispatch({
        type: LOGIN_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      authDispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
    }
  };

  const logoutService = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("AUTH_USER");
    authDispatch({ type: LOGOUT });
  };

  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider
      value={{ authState, authDispatch, loginService, logoutService }}
    >
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
