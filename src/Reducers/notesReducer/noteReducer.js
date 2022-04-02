import { SET_NOTES } from "../../Constants";

export const notesReducer = (state, action) => {
  switch (action.type) {
    case SET_NOTES: {
      return { ...state, notes: action.payload };
    }
    default: {
      return state;
    }
  }
};
