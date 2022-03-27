import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../../Constants";
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
    case SIGNUP_REQUEST: {
      return { ...state, loading: true };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        user: localStorage.getItem("AUTH_USER") || undefined,
        token: localStorage.getItem("AUTH_TOKEN") || undefined,
        loading: false,
        isLoggedIn: true,
      };
    }
    case SIGNUP_FAIL: {
      return { ...state, erorr: action.payload, loading: false };
    }
    case LOGOUT: {
      return { ...state, isLoggedIn: false, user: undefined, token: null };
    }
    default:
      return { ...state };
  }
};

export { authReducer };
