import {
  SET_COLOR,
  SET_IN_TRASH,
  SET_NOTE_TITLE,
  SET_PRIORITY,
  SET_STARRED,
  SET_TAGS,
} from "../../Constants";

export const noteDetailsReducer = (state, action) => {
  switch (action.type) {
    case SET_NOTE_TITLE: {
      return { ...state, noteTitle: action.payload };
    }
    case SET_COLOR: {
      return { ...state, color: action.payload };
    }
    case SET_IN_TRASH: {
      return { ...state, inTrash: !state.inTrash };
    }
    case SET_PRIORITY: {
      return { ...state, priority: action.payload };
    }
    case SET_STARRED: {
      return { ...state, isBookmarked: !state.starred };
    }
    case SET_TAGS: {
      return { ...state, tags: action.payload };
    }
  }
};
