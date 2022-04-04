import { CLEAR_FILTER, SORT_BY_DATE, SORT_BY_PRIORITY } from "../../Constants";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case SORT_BY_DATE: {
      return { ...state, sortByDate: action.payload };
    }
    case SORT_BY_PRIORITY: {
      return { ...state, sortByPriority: action.payload };
    }
    case CLEAR_FILTER: {
      return { ...state, sortByDate: undefined, sortByPriority: undefined };
    }
  }
};
